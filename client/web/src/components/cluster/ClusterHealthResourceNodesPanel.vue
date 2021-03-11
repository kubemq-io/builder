<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar :color="getColor" size="25">
          <span class="white--text">HR</span>
        </v-list-item-avatar>
        <h5 :class="`${getColor}--text`">
          Health, Resources & Nodes
        </h5>
      </v-card-title>
      <template v-slot:actions>
        <div class="pr-2">
          <v-icon v-if="!isValid" color="error">
            fa-exclamation-circle
          </v-icon>
        </div>
        <div class="pr-2">
          <v-icon v-if="hasContent" :color="getColor">
            fa-edit
          </v-icon>
        </div>
        <v-icon :color="getColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row no-gutters>
        <v-col class="pr-1">
          <ClusterConfigItemCard
            :config="cluster.health"
            title="Health"
            :show="show"
          ></ClusterConfigItemCard>
        </v-col>
        <v-col class="pr-1 pl-1">
          <ClusterConfigItemCard
            :config="cluster.resources"
            title="Resources"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
        <v-col class="pr-1 pl-1">
          <ClusterConfigItemCard
            :config="cluster.nodes"
            title="Nodes Selectors"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import ClusterConfigItemCard from "@/components/cluster/ClusterConfigItemCard";

export default {
  name: "ClusterHealthResourcesNodesPanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  computed: {
    isValid: function() {
      return (
        this.cluster.health.isValid &&
        this.cluster.resources.isValid &&
        this.cluster.nodes.isValid
      );
    },
    hasContent: function() {
      return (
        this.cluster.health.getHasConfigured() ||
        this.cluster.resources.getHasConfigured() ||
        this.cluster.nodes.getHasConfigured()
      );
    },
    getColor: function() {
      if (!this.isValid) {
        return "error";
      }
      if (this.hasContent) {
        return "secondary";
      }
      return "primary";
    }
  }
};
</script>
