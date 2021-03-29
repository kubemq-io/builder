<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar>
          <v-avatar :color="getColor" size="35">
            <span class="white--text body-1">HR</span>
          </v-avatar>
        </v-list-item-avatar>
        <h4 :class="`${getColor}--text`">
          Health, Resources & Nodes Selectors
        </h4>
      </v-card-title>
      <template v-slot:actions>
        <div class="pr-1">
          <v-icon small v-if="!isValid" color="error">
            fa-exclamation-circle
          </v-icon>
        </div>
        <div class="pr-1">
          <v-icon small v-if="hasContent" :color="getColor">
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
import ClusterConfigItemCard from "@/components/cluster/panels/ClusterConfigItemCard";

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
        return "primary";
      }
      return "secondary";
    }
  }
};
</script>
