<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        :title="getTitle"
        @save="save"
        show-back
        @back="back"
        show-save
        :disable-save="!isValid"
      ></builder-title>
    </div>
    <div class="col-12 pb-0">
      <v-card flat tile>
        <v-card-text>
          <v-row class="flex-column">
            <v-col cols="12" class="pa-1 pt-2">
              <ClusterDeploymentPanel :cluster="cluster" :show="show" />
            </v-col>
            <v-col cols="12" class="pa-1">
              <ClusterAdvancedPanel
                :cluster="cluster"
                :show="show"
                @clear="clearSettings"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
    </div>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapGetters, mapMutations, mapActions } from "vuex";
import lodashArray from "lodash/array";

import ClusterDeploymentPanel from "@/components/cluster/panels/ClusterDeploymentPanel";
import ClusterAdvancedPanel from "@/components/cluster/panels/ClusterAdvancedPanel";
import BuilderTitle from "@/components/layout/BuilderTitle";
import ConfirmDlg from "@/components/common/ConfirmDlg";

export default {
  name: "ClustersConfigView",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.show = true;
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  components: {
    ConfirmDlg,
    BuilderTitle,
    ClusterAdvancedPanel,
    ClusterDeploymentPanel
  },
  data: function() {
    return {
      enableAdvance: false,
      show: false
    };
  },

  computed: {
    cluster: function() {
      return this.$store.state.clusters.configCluster.cluster;
    },
    mode: function() {
      return this.$store.state.clusters.configCluster.mode;
    },
    name: function() {
      return this.$store.state.clusters.configCluster.name;
    },
    forbiddenNames: function() {
      return this.$store.state.clusters.configCluster.existedClusterNames;
    },
    clusterConfig: function() {
      return this.$store.state.clusters.configCluster;
    },
    isValid: function() {
      return this.cluster.configIsValid();
    },
    getTitle: function() {
      if (this.mode === "add") {
        return "clusters > add";
      } else {
        return "clusters > edit";
      }
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["updateClusters", "resetSettings"]),
    ...mapGetters(["getClustersNames"]),
    ...mapActions(["showSuccess", "showError", "showToast"]),
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
      if (this.mode === "edit" && found >= 0 && checkName !== this.name) {
        return "Cluster name must be unique";
      } else {
        this.isValidName = true;
        return true;
      }
    },
    save: function() {
      const configIsValid = this.validateClusterName();
      if (configIsValid) {
        this.updateClusters(this.clusterConfig);
        this.show = false;
        this.$router.push("/clusters");
      }
    },
    back: function() {
      this.show = false;
      this.$router.push("/clusters");
    },
    async clearSettings() {
      console.log("clear");
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to clear all settings?"
        )
      ) {
        this.show = false;
        this.$nextTick(() => {
          this.resetSettings();
          this.show = true;
        });
      }
    }
  }
};
</script>

<style scoped></style>
