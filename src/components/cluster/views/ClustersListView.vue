<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        title="clusters"
        @add="add"
        show-add
        show-back
        @back="back"
      ></builder-title>
    </div>
    <div class="col-12 pt-0">
      <v-card flat tile>
        <template v-for="(cluster, index) in clusters">
          <v-list-item :key="'c' + index">
            <v-list-item-avatar>
              <v-avatar class="secondary" size="35">
                <span class="white--text headline">{{ index + 1 }}</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content class="pb-0">
              <v-list-item-title>
                <h3 class="secondary--text">
                  {{ cluster.clusterName }}
                </h3>
              </v-list-item-title>
              <v-list-item-subtitle class="pb-1">
                <h3>
                  {{ cluster.clusterNamespace }}
                </h3>
              </v-list-item-subtitle>
              <v-list-item-subtitle class="pb-1">
                <v-chip-group active-class="primary--text" column>
                  <v-chip
                    v-for="(tag, index) in cluster.tags()"
                    :key="'a' + tag + index"
                    x-small
                    outlined
                    class="my-0 px-1"
                    color="primary"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="ma-0">
              <div
                class="d-flex justify-start align-center align-content-center"
              >
                <v-btn icon class="pr-1">
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="edit(cluster, index)"
                  >
                    fa-edit
                  </v-icon>
                </v-btn>
                <v-btn icon class="pr-1 pl-1">
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="cloneCluster(cluster)"
                  >
                    fa-clone
                  </v-icon>
                </v-btn>
                <v-btn icon class="pl-1">
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="delCluster(index)"
                  >
                    fa-trash-alt
                  </v-icon>
                </v-btn>
              </div>
            </v-list-item-action>
          </v-list-item>
          <v-divider
            :key="'d' + index"
            inset
            class="secondary lighten-5"
          ></v-divider>
        </template>
      </v-card>
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasClusters" class="col-12">
      <h4 class="gray--text text-center">NO CLUSTERS</h4>
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
          CLEAR ALL</v-btn
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
          DEPLOY</v-btn
        >
      </div>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
    </div>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BuilderTitle from "@/components/layout/BuilderTitle";
import { ClusterConfig } from "@/components/cluster/classes/ClusterConfig";

export default {
  name: "ClustersListView",
  components: { BuilderTitle, ConfirmDlg },
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
    ...mapMutations([
      "updateClusters",
      "clearClustersList",
      "setConfigCluster"
    ]),
    async delCluster(index) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this cluster?"
        )
      ) {
        this.deleteCluster(index);
      }
    },

    cloneCluster(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.clusterName = `${clonedItem.clusterName}-${makeid(5)}`;
      this.updateClusters({ mode: "clone", cluster: clonedItem });
    },
    deleteCluster(index) {
      this.updateClusters({ mode: "delete", index: index });
    },
    getColor(type, more) {
      return "primary" + more;
    },
    getColorText(type, more) {
      return "primary--text" + more;
    },
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
    add() {
      this.setConfigCluster({ mode: "add", cluster: new ClusterConfig() });
      this.$router.push({
        name: "configCluster"
      });
    },
    edit(item, index) {
      this.setConfigCluster({ mode: "edit", cluster: item, index: index });
      this.$router.push({
        name: "configCluster"
      });
    },
    back: function() {
      this.$router.push("/");
    },
    deploy: function() {
      this.clusters.forEach(value => console.log(value));
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

<style scoped></style>