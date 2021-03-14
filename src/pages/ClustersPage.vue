<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title title="clusters" @add="add" show-add></builder-title>
    </div>
    <div class="col-12 pt-0">
      <ClustersList />
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasClusters" class="col-12">
      <v-divider class="secondary lighten-5"></v-divider>
    </div>
    <div class="col-12 d-flex pt-2">
      <v-spacer />
      <div>
        <v-btn
          :disabled="!hasClusters"
          rounded
          text
          color="secondary"
          @click.stop="clearAll()"
        >
          <v-icon left small>
            fa-trash-alt
          </v-icon>
          Clear All</v-btn
        >
      </div>
      <div>
        <v-btn
          :disabled="!hasClusters"
          rounded
          outlined
          color="primary"
          @click="deploy"
        >
          <v-icon left small>
            fa-download
          </v-icon>
          Deploy</v-btn
        >
      </div>
      <ClusterConfigDlg ref="clusterDlg"></ClusterConfigDlg>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
    </div>
  </div>
</template>

<script>
import BuilderTitle from "@/components/layout/BuilderTitle";
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import ClusterConfigDlg from "@/components/cluster/dialog/ClusterConfigDlg";
import ClustersList from "@/components/cluster/ClustersList";
export default {
  name: "ClustersPage",
  components: { BuilderTitle, ClustersList, ClusterConfigDlg, ConfirmDlg },
  data: function() {
    return {};
  },
  computed: {
    clusters: function() {
      return this.$store.state.clusters.clusters;
    },

    hasClusters: function() {
      return this.clusters.length > 0;
    }
  },
  methods: {
    ...mapGetters(["getClustersNames"]),
    ...mapMutations(["clearClustersList", "addCluster"]),
    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all clusters?"
        )
      ) {
        this.clearClustersList();
      }
    },
    async add() {
      let newCluster = new ClusterConfig();
      await this.$refs.clusterDlg
        .open(newCluster, this.getClustersNames(), "add")
        .then(result => this.addCluster(result));
    },

    deploy: function() {
      this.clusters.forEach(value => console.log(value));
    }
  }
};
</script>

<style scoped></style>
