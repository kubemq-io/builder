<template>
  <v-dialog v-model="show" scrollable persistent>
    <v-card tile>
      <DialogTitle title="KubeMQ Cluster" :mode="mode" />
      <v-card-text>
        <v-card flat tile>
          <v-card-text>
            <v-row class="flex-column">
              <v-col cols="12" class="pa-1 pt-2">
                <ClusterDeploymentPanel :cluster="cluster" :show="show" />
              </v-col>
              <v-col cols="12" class="pa-1">
                <ClusterAdvancedPanel :cluster="cluster" :show="show" />
              </v-col>
              <v-col cols="12">
                <v-row justify="end" align-content="center" align="center">
                  <div class="pr-1">
                    <v-btn color="secondary" text rounded @click.native="cancel"
                      >CANCEL</v-btn
                    >
                  </div>
                  <div class="pr-2">
                    <v-btn
                      color="primary"
                      v-if="mode === 'add'"
                      outlined
                      rounded
                      :disabled="!isValid"
                      @click="submit"
                      >ADD</v-btn
                    >
                    <v-btn
                      color="primary"
                      v-if="mode === 'edit'"
                      outlined
                      rounded
                      :disabled="!isValid"
                      @click="submit"
                      >EDIT</v-btn
                    >
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapGetters, mapMutations } from "vuex";
import lodashArray from "lodash/array";
import lodashLang from "lodash/lang";
import DialogTitle from "@/components/common/DialogTitle";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import ClusterDeploymentPanel from "@/components/cluster/dialog/ClusterDeploymentPanel";
import ClusterAdvancedPanel from "@/components/cluster/dialog/ClusterAdvancedPanel";

export default {
  name: "ClusterConfigDlg",
  components: {
    ClusterAdvancedPanel,
    ClusterDeploymentPanel,
    DialogTitle
  },
  data: function() {
    return {
      enableAdvance: false,
      panel: null,
      cluster: new ClusterConfig(),
      show: false,
      forbiddenNames: [],
      mode: "",
      resolve: null,
      reject: null,
      isValidName: true,
      editedItem: {
        cluster: {},
        index: {},
        originateName: ""
      }
    };
  },
  computed: {
    isValid: function() {
      return this.cluster.configIsValid();
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["addCluster", "replaceCluster"]),
    ...mapGetters(["getClustersNames"]),
    open(item, forbiddenNames, mode) {
      this.panel = null;
      this.show = true;
      this.cluster = lodashLang.cloneDeep(item);
      this.mode = mode;
      this.forbiddenNames = forbiddenNames;
      if (this.mode === "edit") {
        this.editedItem.cluster = lodashLang.cloneDeep(item);
        const currentName = this.editedItem.cluster.Name;
        this.editedItem.originateName = currentName;
        this.editedItem.index = lodashArray.findIndex(
          this.forbiddenNames,
          function(b) {
            return b.name === currentName;
          }
        );
      }
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    validateClusterName: function() {
      const checkName = this.cluster.name;
      const found = lodashArray.findIndex(this.forbiddenNames, function(b) {
        return b.name === checkName;
      });
      if (this.mode === "add") {
        if (found >= 0) {
          return "Cluster name must be unique";
        } else {
          this.isValidName = true;
          return true;
        }
      }
      if (
        this.mode === "edit" &&
        found >= 0 &&
        checkName !== this.editedItem.originateName
      ) {
        return "Cluster name must be unique";
      } else {
        this.isValidName = true;
        return true;
      }
    },
    submit: function() {
      // add validations to all configs
      const configIsValid = true;
      if (configIsValid) {
        if (this.mode === "add") {
          this.resolve({
            cluster: this.cluster
          });
        } else {
          this.resolve({
            index: this.editedItem.index,
            cluster: this.cluster
          });
        }
        this.show = false;
        this.panel = null;
      }
    },
    cancel: function() {
      if (this.mode === "edit") {
        this.resolve(this.editedItem);
      } else {
        this.resolve(null);
      }
      this.show = false;
      this.panel = null;
    },
    actionValue: function(action) {
      if (action === "cancel") {
        this.cancel();
      } else if (action === "submit") {
        this.submit();
      }
    },
    showAdvance: function(value) {
      this.enableAdvance = value;
    }
  }
};
</script>

<style scoped>
.v-dialog__content {
  align-items: flex-start;
  justify-content: center;
}
</style>
