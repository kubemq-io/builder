<template>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import ClusterConfigDlg from "@/archive/cluster/old/dialog/ClusterConfigDlg";
import ClustersList from "@/pages/clusters/ClustersList";

export default {
  name: "ClustersPageOld",
  components: { ClustersList, ClusterConfigDlg, ConfirmDlg },
  data() {
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

<style scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
</style>
