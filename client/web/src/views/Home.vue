<template>
  <v-main app>
    <BridgesPage />
    <IntegrationsPage />
  </v-main>
</template>

<script>
import BridgesPage from "@/components/bridges/BridgesPage";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
export default {
  name: "Home",
  components: { IntegrationsPage, BridgesPage },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
