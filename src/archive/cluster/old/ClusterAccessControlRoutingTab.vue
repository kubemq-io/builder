<template>
  <v-card flat>
    <div class="d-flex   ">
      <div class="col-6">
        <ClusterConfigItemCard
          :config="cluster.authorization"
          title="Authorization"
          :show="show"
        >
        </ClusterConfigItemCard>
      </div>
    </div>
    <div class="col-6">
      <ClusterConfigItemCard
        :config="cluster.authentication"
        title="Authentication"
        :show="show"
      ></ClusterConfigItemCard>
    </div>
  </v-card>
</template>
<script>
import ClusterConfigItemCard from "@/components/cluster/panels/ClusterConfigItemCard";

export default {
  name: "ClusterAccessControlRoutingTab",
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
        return "primary";
      }
      return "secondary";
    }
  }
};
</script>
