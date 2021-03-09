<template>
  <v-card class="ma-10">
    <v-toolbar
      flat
      color="primary"
      extended
      extension-height="15px"
      elevation-1
    >
      <v-toolbar-title class="white--text text-h4 pa-2 ">
        Build KubeMQ Clusters
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat style="margin-top: -20px;">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="">
            <v-toolbar flat color="primary" dense>
              <v-btn rounded class="secondary--text" color="white" @click="add">
                <v-icon left small>
                  fa-plus
                </v-icon>
                Cluster</v-btn
              >
            </v-toolbar>
          </div>
          <div>
            <ClustersList />
          </div>
        </div>
        <div class="d-flex justify-end ma-3">
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
          <ClusterConfigDlg ref="clusterDlg"></ClusterConfigDlg>
          <ConfirmDlg ref="confirm"></ConfirmDlg>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import ClusterConfigDlg from "@/components/cluster/ClusterConfigDlg";
import ClustersList from "@/components/cluster/ClustersList";

export default {
  name: "ClustersPage",
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
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
