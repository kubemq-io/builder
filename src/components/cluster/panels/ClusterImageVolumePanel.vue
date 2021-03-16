<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="pa-0 pr-2">
      <v-card-title class="pa-0">
        <v-list-item-avatar>
          <v-avatar :color="getColor" size="35">
            <span class="white--text body-1">IV</span>
          </v-avatar>
        </v-list-item-avatar>
        <h4 :class="`${getColor}--text`">
          Image & Volumes
        </h4>
      </v-card-title>
      <template v-slot:actions>
        <div class="d-flex justify-center align-center align-content-center">
          <div class="pr-1">
            <v-icon v-if="!isValid" color="error">
              fa-exclamation-circle
            </v-icon>
          </div>
          <div class="pr-1">
            <v-icon v-if="hasContent" :color="getColor">
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
            :config="cluster.image"
            title="Image"
            :show="show"
          ></ClusterConfigItemCard>
        </v-col>
        <v-col class="pl-1">
          <ClusterConfigItemCard
            :config="cluster.volume"
            title="Volumes"
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
  name: "ClusterImageVolumePanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  computed: {
    isValid: function() {
      return this.cluster.image.isValid && this.cluster.volume.isValid;
    },
    hasContent: function() {
      return (
        this.cluster.image.getHasConfigured() ||
        this.cluster.volume.getHasConfigured()
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
