<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        :title="getTitle"
        @save="save"
        show-back
        @back="cancel"
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
              <ClusterAdvancedPanel :cluster="cluster" :show="show" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapGetters, mapMutations, mapActions } from "vuex";
import lodashArray from "lodash/array";

import ClusterDeploymentPanel from "@/components/cluster/dialog/ClusterDeploymentPanel";
import ClusterAdvancedPanel from "@/components/cluster/dialog/ClusterAdvancedPanel";
import BuilderTitle from "@/components/layout/BuilderTitle";

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
    BuilderTitle,
    ClusterAdvancedPanel,
    ClusterDeploymentPanel
  },
  data: function() {
    return {
      enableAdvance: false,
      show: false,
      items: [
        {
          text: "Clusters",
          disabled: false,
          href: "/clusters"
        },
        {
          text: "Add",
          disabled: false,
          href: "/clusters/config"
        }
      ]
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
    ...mapMutations(["updateClusters"]),
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
      this.showToast("asdadsasdassda");
      const configIsValid = this.validateClusterName();
      if (configIsValid) {
        this.updateClusters(this.clusterConfig);
        this.show = false;
        this.$router.push("/clusters");
      }
    },
    cancel: function() {
      this.show = false;
      this.$router.push("/clusters");
    },
    showAdvance: function(value) {
      this.enableAdvance = value;
    }
  }
};
</script>

<style scoped></style>
