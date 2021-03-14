<template>
  <v-card>
    <v-card-title>
      <span class="primary--text text-h5 font-weight-bold">
        KubeMQ Clusters
      </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col class="py-2">
          <v-card flat tile>
            <v-card-title class="pa-0">
              <v-btn text color="secondary" @click="add">
                <span class="secondary--text text-h6 font-weight-bold">
                  Clusters
                </span>
                <v-icon right big>
                  fa-plus
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-divider v-show="hasClusters" inset></v-divider>
              <ClustersList />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-show="!hasClusters" class="py-1">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end" align-content="center" align="center">
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
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";
import ClusterConfigDlg from "@/components/cluster/dialog/ClusterConfigDlg";
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
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
</style>
