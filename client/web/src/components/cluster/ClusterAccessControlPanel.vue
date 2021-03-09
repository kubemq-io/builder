<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar :color="getColor" size="30">
          <span class="white--text">A</span>
        </v-list-item-avatar>
        <h5 :class="`${getColor}--text`">
          Access Control
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
      <v-row>
        <v-col>
          <ClusterConfigItemCard
            :config="cluster.authentication"
            title="Authentication"
            :show="show"
          ></ClusterConfigItemCard>
        </v-col>
        <v-col>
          <ClusterConfigItemCard
            :config="cluster.authorization"
            title="Authorization"
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
  name: "ClusterAccessControlPanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  computed: {
    isValid: function() {
      return (
        this.cluster.authentication.isValid &&
        this.cluster.authorization.isValid
      );
    },
    hasContent: function() {
      return (
        this.cluster.authentication.getHasConfigured() ||
        this.cluster.authorization.getHasConfigured()
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
