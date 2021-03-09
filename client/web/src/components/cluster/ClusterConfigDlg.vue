<template>
  <v-dialog v-model="show" scrollable persistent width="960px">
    <v-card rounded>
      <DialogTitle title="KubeMQ Cluster" :mode="mode" />
      <v-card-text>
        {{ clusterModel.name }}
        <v-row justify="end" align-content="center" align="center" class="pa-2">
          <div class="pa-2">
            <v-btn color="primary" text rounded @click.native="cancel"
              >cancel</v-btn
            >
          </div>
          <div class="pa-2">
            <v-btn
              color="primary"
              v-if="mode === 'add'"
              outlined
              rounded
              @click="submit"
            >
              Add</v-btn
            >
            <v-btn
              color="primary"
              class=""
              v-if="mode === 'edit'"
              outlined
              rounded
              @click="submit"
              >Edit</v-btn
            >
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapMutations, mapGetters } from "vuex";
import lodashArray from "lodash/array";
import lodashLang from "lodash/lang";
import DialogTitle from "@/components/common/DialogTitle";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";

export default {
  name: "ClusterConfigDlg",
  components: { DialogTitle },
  data: function() {
    return {
      clusterModel: new ClusterConfig(),
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
    errorState: function() {
      return !this.isValidName;
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["addCluster", "replaceCluster"]),
    ...mapGetters(["getClustersNames"]),
    open(item, forbiddenNames, mode) {
      this.show = true;
      this.clusterModel = lodashLang.cloneDeep(item);
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
      const checkName = this.clusterModel.name;
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
            cluster: this.clusterModel
          });
        } else {
          this.resolve({
            index: this.editedItem.index,
            cluster: this.clusterModel
          });
        }
        this.show = false;
      }
    },
    cancel: function() {
      if (this.mode === "edit") {
        this.resolve(this.editedItem);
      } else {
        this.resolve(null);
      }
      this.show = false;
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
