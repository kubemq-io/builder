<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar :color="getColor" size="25">
          <span class="white--text">IS</span>
        </v-list-item-avatar>
        <h5 :class="`${getColor}--text`">
          Interfaces & Security
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
        <v-col class="pr-1">
          <ClusterConfigItemCard
            :config="cluster.grpcInterface"
            title="GRPC"
            :show="show"
          ></ClusterConfigItemCard>
        </v-col>
        <v-col class="pr-1 pl-1">
          <ClusterConfigItemCard
            :config="cluster.restInterface"
            title="REST"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
        <v-col class="pr-1 pl-1">
          <ClusterConfigItemCard
            :config="cluster.apiInterface"
            title="API"
            :show="show"
          >
          </ClusterConfigItemCard>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2">
        <v-col cols="8" class="pr-1">
          <ClusterConfigItemCard
            :config="cluster.security"
            title="Security"
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
  name: "ClusterInterfacesSecurityPanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  computed: {
    isValid: function() {
      return (
        this.cluster.grpcInterface.isValid &&
        this.cluster.restInterface.isValid &&
        this.cluster.apiInterface.isValid &&
        this.cluster.security.isValid
      );
    },
    hasContent: function() {
      return (
        this.cluster.grpcInterface.getHasConfigured() ||
        this.cluster.restInterface.getHasConfigured() ||
        this.cluster.apiInterface.getHasConfigured() ||
        this.cluster.security.getHasConfigured()
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
