<template>
  <div class="pt-0">
    <v-list two-line>
      <v-subheader>
        <h3 class="primary--text">CLUSTERS</h3>
      </v-subheader>
      <v-card-text v-if="clusters.length === 0" class="text-center">
        <h5 class="primary--text body-2">No Clusters</h5>
      </v-card-text>
      <template v-for="(cluster, index) in clusters">
        <v-list-item :key="'c' + index">
          <v-list-item-avatar>
            <v-avatar class="primary" size="35">
              <span class="white--text headline">{{ index + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <v-list-item-title>
              <h3 class="primary--text">
                {{ cluster.clusterName }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle class="pb-1">
              <h3>
                {{ cluster.clusterNamespace }}
              </h3>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="pb-1">
              <v-chip
                v-for="(tag, index) in cluster.tags()"
                :key="'a' + tag + index"
                x-small
                outlined
                class="mr-1"
              >
                {{ tag }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="ma-0">
            <div class="d-flex justify-start align-center align-content-center">
              <v-btn icon>
                <v-icon
                  size="15"
                  color="secondary"
                  @click.stop="editCluster(cluster)"
                >
                  fa-edit
                </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  size="15"
                  color="secondary"
                  @click.stop="cloneCluster(cluster)"
                >
                  fa-clone
                </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  size="15"
                  color="secondary"
                  @click.stop="delCluster(cluster)"
                >
                  fa-trash-alt
                </v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'d' + index" inset></v-divider>
      </template>
    </v-list>
    <v-divider v-if="clusters.length === 0" inset></v-divider>
    <ClusterConfigDlg ref="clusterDlg"></ClusterConfigDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";

import ClusterConfigDlg from "@/components/cluster/dialog/ClusterConfigDlg";

export default {
  name: "ClustersList",
  components: { ClusterConfigDlg, ConfirmDlg },
  data() {
    return {};
  },
  computed: {
    clusters: function() {
      return this.$store.state.clusters.clusters;
    }
  },
  methods: {
    ...mapGetters(["getClustersNames"]),
    ...mapMutations(["deleteCluster", "replaceCluster", "addCluster"]),
    async delCluster(item) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this cluster?"
        )
      ) {
        this.deleteCluster(item);
      }
    },
    async editCluster(item) {
      await this.$refs.clusterDlg
        .open(item, this.getClustersNames(), "edit")
        .then(result => this.replaceCluster(result));
    },
    cloneCluster(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.clusterName = `${clonedItem.clusterName}-${makeid(5)}`;
      this.addCluster({ cluster: clonedItem });
    },
    getColor(type, more) {
      return "primary" + more;
    },
    getColorText(type, more) {
      return "primary--text" + more;
    }
  }
};
const makeid = function(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
</script>

<style scoped>
.side {
  display: flex;
  flex-direction: column;
  width: auto;
}
</style>
