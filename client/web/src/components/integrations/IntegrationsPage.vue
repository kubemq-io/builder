<template>
  <div class="container ma-10">
    <v-card flat tile class="d-flex flex-column">
      <IntegrationSearch />
      <IntegrationTable></IntegrationTable>
      <v-card class="d-flex justify-end ma-3">
        <v-btn color="secondary">Deploy</v-btn>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import IntegrationSearch from "@/components/integrations/IntegrationSearch";
import IntegrationTable from "@/components/integrations/IntgerationTable";

export default {
  name: "IntegrationsPage",
  components: { IntegrationTable, IntegrationSearch },
  data() {
    return {};
  },
  created() {
    this.loadIntegrations();
  },
  methods: {
    ...mapActions(["loadIntegrations"])
  }
};
</script>

<style scoped>
.container {
  border: 1px solid green;
}
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
