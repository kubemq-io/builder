<template>
  <v-main app>
    <IntegrationsPage></IntegrationsPage>
  </v-main>
</template>

<script>
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
export default {
  name: "Home",
  components: { IntegrationsPage },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
