<template>
  <v-main app>
    <ClusterPage />
    <BridgesPage />
    <IntegrationsPage />
  </v-main>
</template>

<script>
import BridgesPage from "@/components/bridges/BridgesPage";
import ClusterPage from "@/components/cluster/ClusterPage";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
export default {
  name: "Home",
  components: { IntegrationsPage, ClusterPage, BridgesPage },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
