<template>
  <v-dialog v-model="show" scrollable persistent>
    <v-card tile>
      <v-card-title class="pa-0">
        <DialogTitle
          @action="actionValue"
          title="KubeMQ Cluster"
          :enable="cluster.configIsValid()"
          :mode="mode"
        />
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ClusterBasicPanel :cluster="cluster" :show="show" />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ClusterConfigAdvancedPanle
                :cluster="cluster"
                :items="items"
                :show="show"
                :tab="tab"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="d-flex justify-end">
          <v-btn
            class="text-body-1  font-weight-bold secondary-text"
            color="primary"
            v-if="mode === 'add'"
            outlined
            rounded
            @click="setAction('submit')"
          >
            ADD</v-btn
          >
          <v-btn
            c
            class="text-body-1  font-weight-bold secondary-text"
            color="white"
            v-if="mode === 'edit'"
            rounded
            small
            @click="setAction('submit')"
            >EDIT</v-btn
          >
        </div>
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
// import ClusterInterfacesSecurityPanel from "@/components/cluster/ClusterInterfacesSecurityPanel";
// import ClusterAccessControlRoutingPanel from "@/components/cluster/ClusterAccessControlRoutingPanel";
// import ClusterImageVolumePanel from "@/components/cluster/ClusterImageVolumePanel";
// import ClusterHealthResourcesNodesPanel from "@/components/cluster/ClusterHealthResourceNodesPanel";
// import ClusterStoreQueuesPanel from "@/components/cluster/ClusterStoreQueuesPanel";
import ClusterBasicPanel from "@/components/cluster/ClusterBasicPanel";
import ClusterConfigAdvancedPanle from "@/archive/cluster/old/ClusterConfigAdvancedPanle";
// import ClusterAccessControlRoutingTab from "@/components/cluster/ClusterAccessControlRoutingTab";

export default {
  name: "ClusterConfigDlg",
  components: {
    ClusterConfigAdvancedPanle,
    // ClusterAccessControlRoutingTab,
    //ClusterAccessControlRoutingTab,
    ClusterBasicPanel,
    // ClusterStoreQueuesPanel,
    // ClusterHealthResourcesNodesPanel,
    // ClusterImageVolumePanel,
    // ClusterAccessControlRoutingPanel,
    // ClusterInterfacesSecurityPanel,
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
      },
      tab: null,
      items: [
        "Interfaces & Security",
        "Access & Routing",
        "Image & Volumes",
        "Health & Resources",
        "Store & Queues"
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  computed: {
    errorState: function() {
      return !this.isValidName;
    },
    showPanels: function() {
      return this.enableAdvance;
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
      // showAdd validations to all configs
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
/*.v-dialog__content {*/
/*  align-items: flex-start;*/
/*  justify-content: center;*/
/*}*/
</style>
