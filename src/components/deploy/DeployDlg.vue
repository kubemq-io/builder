<template>
  <v-dialog v-model="dialog" width="860px" persistent>
    <v-card>
      <v-toolbar color="primary" dense flat>
        <v-toolbar-title
          class="text-body-3 font-weight-bold white--text text-uppercase"
        >
          DEPLOY KubeMQ {{ options.title }}
        </v-toolbar-title>
      </v-toolbar>
      <v-progress-linear
        v-show="isLoading"
        rounded
        indeterminate
        color="secondary"
        class="mb-0"
      ></v-progress-linear>
      <v-card-text class="pb-0">
        <v-card flat :disabled="isLoading">
          <v-card-title>
            <h4 class="secondary--text">DEPLOYMENT SETTINGS</h4>
          </v-card-title>
          <v-card-text class="col-8 pb-0">
            <v-form ref="form" v-model="options.settings.isValid">
              <v-jsf
                v-model="options.settings.model"
                :schema="options.settings.schema"
              />
            </v-form>
            <v-btn
              :disabled="!generateBtnEnabled"
              color="secondary"
              outlined
              rounded
              @click.native="generate"
            >
              GENERATE DEPLOY MANIFEST
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-col class="pa-0 pl-2 pt-1" v-if="generateError">
              <v-alert outlined color="accent" type="error">
                {{ generateError }}
              </v-alert>
            </v-col>
            <v-col class="pa-0" v-else-if="manifests.length > 0">
              <v-card flat :disabled="isLoading">
                <v-card-title class="pb-1">
                  <h4 class="secondary--text">DEPLOYMENT STEPS</h4>
                </v-card-title>
                <v-card-text class="col-12 pb-0">
                  <v-list-item
                    class="pa-0"
                    v-for="(item, index) in manifests"
                    :key="index"
                  >
                    <div>
                      <v-avatar color="secondary" size="25">
                        <span class="white--text body-2">{{ index + 1 }}</span>
                      </v-avatar>
                    </div>
                    <v-list-item-title class="pl-2">
                      <div>
                        <copy-label :text="item.link"></copy-label>
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                </v-card-text>
              </v-card>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-card-text>
      <v-card-actions class="pb-3">
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined rounded @click.native="close"
          >CLOSE</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import lodashLang from "lodash/lang";
import CopyLabel from "@/components/common/CopyLabel";
export default {
  name: "DeployDlg",
  components: { CopyLabel, VJsf },
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      generateError: "",
      isLoading: false,
      manifests: [],
      options: {
        title: "",
        type: "",
        configuration: {},
        settings: {
          schema: {},
          model: {},
          isValid: false
        }
      }
    };
  },
  computed: {
    generateBtnEnabled: function() {
      return !this.isLoading && this.options.settings.isValid;
    }
  },
  methods: {
    open(options) {
      this.dialog = true;
      this.options = Object.assign(this.options, options);
      this.options.settings = getSettings(options.type);
      console.log(JSON.stringify(this.options.configuration));
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    setLoading(val) {
      this.isLoading = val;
    },
    async generate() {
      this.manifests = [];
      this.generateError = "";
      const settings = {
        type: "ads"
      };
      this.isLoading = true;
      await fetchDeploymentManifest(settings)
        .then(result => (this.manifests = result))
        .catch(e => {
          this.generateError = e;
        });
      this.isLoading = false;
    },
    close() {
      this.resolve(true);
      this.dialog = false;
    }
  }
};

async function fetchDeploymentManifest(settings) {
  return new Promise((resolve, reject) => {
    if (settings.type !== "") {
      setTimeout(
        () =>
          resolve([
            {
              label: "Operator Manifest",
              link: "kubectl apply -f https://builder.kubemq.io/init"
            },
            {
              label: "Connector Manifest",
              link:
                "kubectl apply -f https://builder.kubemq.io/connectors/544203234234234"
            }
          ]),
        3000
      );
    } else {
      setTimeout(() => reject("some error"), 1000);
    }
  });
}

const getSettings = function(type) {
  switch (type) {
    case "clusters":
      return clusterForm;
    default: {
      const connector = lodashLang.cloneDeep(connectorForm);
      connector.model.name = `kubemq-${type}`;
      return connector;
    }
  }
};
const connectorForm = {
  schema: {
    required: ["name", "namespace"],
    properties: {
      name: {
        type: "string",
        title: "Connector Name",
        description: "Set connector deployment name"
      },
      namespace: {
        type: "string",
        title: "Connector Namespace",
        description: "Set connector deployment namespace"
      },
      setOperator: {
        type: "boolean",
        title: "Add KubeMQ Operator Manifest",
        default: true,
        "x-display": "checkbox"
      }
    }
  },
  model: {
    name: "kubemq-bridges",
    namespace: "kubemq",
    setOperator: true
  },
  isValid: false
};

const clusterForm = {
  schema: {
    properties: {
      setOperator: {
        type: "boolean",
        title: "Add KubeMQ Operator Manifest",
        default: true,
        "x-display": "checkbox"
      }
    }
  },
  model: {
    setOperator: true
  },
  isValid: false
};
</script>

<style scoped></style>