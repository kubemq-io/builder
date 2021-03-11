<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar :color="getColor" size="25">
          <span class="white--text">AR</span>
        </v-list-item-avatar>
        <h5 :class="`${getColor}--text`">
          Access Control & Routing
        </h5>
      </v-card-title>
      <template v-slot:actions>
        <div class="d-flex justify-center align-center align-content-center">
          <div class="pr-1">
            <v-icon small v-if="!isValid" color="error">
              fa-exclamation-circle
            </v-icon>
          </div>
          <div>
            <v-icon small v-if="hasContent" :color="getColor">
              fa-edit
            </v-icon>
          </div>
          <v-icon :color="getColor">
            $expand
          </v-icon>
        </div>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row no-gutters>
        <v-col cols="6" class="pr-1">
          <ClusterConfigItemCard
            :config="cluster.authorization"
            title="Authorization"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
        <v-col cols="6" class="pr-1">
          <ClusterConfigItemCard
            :config="cluster.routing"
            title="Routing"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
      </v-row>

      <v-row no-gutters class="mt-2">
        <v-col cols="6" class="pl-1">
          <ClusterConfigItemCard
            :config="cluster.authentication"
            title="Authentication"
            :show="show"
          ></ClusterConfigItemCard>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import ClusterConfigItemCard from "@/components/cluster/ClusterConfigItemCard";

export default {
  name: "ClusterAccessControlRoutingPanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  computed: {
    isValid: function() {
      return (
        this.cluster.authentication.isValid &&
        this.cluster.authorization.isValid &&
        this.cluster.routing.isValid
      );
    },
    hasContent: function() {
      return (
        this.cluster.authentication.getHasConfigured() ||
        this.cluster.authorization.getHasConfigured() ||
        this.cluster.routing.getHasConfigured()
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
