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
            <v-form ref="deployForm" v-model="options.settings.isValid">
              <v-jsf
                v-model="options.settings.model"
                :schema="options.settings.schema"
              />
            </v-form>
            <div>
              <v-btn
                :disabled="!generateBtnEnabled"
                color="secondary"
                outlined
                rounded
                @click.native="generate"
              >
                GET DEPLOY MANIFESTS
              </v-btn>
            </div>
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
                        <copy-label :text="item"></copy-label>
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                  <p class="error--text pt-1 pl-4">
                    (Manifests will be expire in 10 minutes)
                  </p>
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
import axios from "axios";
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
      this.manifests = [];
      this.generateError = "";
      this.options = Object.assign(this.options, options);
      this.options.settings = getSettings(options.type);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    setLoading(val) {
      this.isLoading = val;
    },
    async generate() {
      try {
        this.manifests = [];
        this.generateError = "";
        let request = {
          id: 0,
          type: this.options.type,
          model: this.options.settings.model,
          configuration: this.options.configuration
        };

        request.id = getHash(JSON.stringify(request));
        this.isLoading = true;

        await axios
          //.post("http://localhost:10100/build", request)
          .post("https://deploy.kubemq.io/build", request)
          .then(response => {
            this.manifests = response.data.data.links;
          })
          .catch(error => {
            if (error.response) {
              this.generateError = error.response.data;
            } else {
              this.generateError = error;
            }
          });
      } catch (error) {
        this.generateError = error;
      } finally {
        this.isLoading = false;
      }
    },
    close() {
      this.resolve(true);
      this.dialog = false;
    }
  }
};

const getHash = function(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

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
      expose: {
        type: "object",
        oneOf: [
          {
            title: "Cluster IP",
            properties: {
              mode: {
                type: "string",
                description: "Set connector deployment namespace",
                title: "Expose Mode",
                const: "ClusterIP"
              }
            }
          },
          {
            title: "Node Port",
            properties: {
              mode: {
                type: "string",
                title: "Expose Mode",
                const: "NodePort"
              },
              nodePort: {
                type: "integer",
                title: "Node Port",
                default: 0,
                minimum: 0,
                maximum: 65355
              }
            }
          },
          {
            title: "Load Balancer",
            properties: {
              mode: {
                type: "string",
                title: "Expose Mode",
                const: "LoadBalancer"
              }
            }
          }
        ]
      },
      setInit: {
        type: "boolean",
        title: "Add KubeMQ Init Manifest",
        default: false,
        "x-display": "checkbox"
      },
      setOperator: {
        type: "boolean",
        title: "Add KubeMQ Operator Manifest",
        default: false,
        "x-display": "checkbox"
      }
    }
  },
  model: {
    name: "kubemq-bridges",
    namespace: "kubemq",
    expose: {
      mode: "ClusterIP",
      nodePort: 0
    },
    setInit: false,
    setOperator: false
  },
  isValid: true
};

const clusterForm = {
  schema: {
    properties: {
      setInit: {
        type: "boolean",
        title: "Add KubeMQ Init Manifest",
        default: true,
        "x-display": "checkbox"
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
    setInit: true,
    setOperator: true
  },
  isValid: true
};
</script>

<style scoped></style>
