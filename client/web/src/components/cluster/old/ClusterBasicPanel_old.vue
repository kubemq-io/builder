<template>
  <v-card tile flat class="pt-2">
    <v-row>
      <v-col cols="6">
        <ClusterConfigItemCard
          :config="cluster.basicMetadata"
          title="Metadata"
          :show="show"
        ></ClusterConfigItemCard>
      </v-col>
      <v-col cols="6">
        <ClusterConfigItemCard
          :config="cluster.basicSpec"
          title="Spec"
          :show="show"
        ></ClusterConfigItemCard>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import ClusterConfigItemCard from "@/components/cluster/ClusterConfigItemCard";

export default {
  name: "ClusterBasicPanel",
  components: { ClusterConfigItemCard },
  props: {
    cluster: {},
    show: {}
  },
  data: function() {
    return {};
  },
  computed: {
    isValid: function() {
      return this.cluster.basicMetadata.isValid;
    },
    hasContent: function() {
      return this.cluster.basicMetadata.getHasConfigured();
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
