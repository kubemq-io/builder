<template>
  <v-card flat>
    <v-toolbar color="primary" extended plat>
      <v-toolbar-title class="white--text text-capitalize">
        Configure KubeMQ {{ type }}
      </v-toolbar-title>
    </v-toolbar>

    <v-card flat style="margin-top: -64px;">
      <div class="d-flex flex-column ">
        <div>
          <IntegrationSearch :type="type" />
        </div>
        <div class="flex-grow-1 ">
          <IntegrationList :type="type"></IntegrationList>
        </div>
        <div class="d-flex justify-end ma-3">
          <v-btn
            :disabled="!hasIntegration"
            rounded
            text
            color="secondary"
            @click.stop="clearAll()"
          >
            <v-icon left small>
              fa-trash-alt
            </v-icon>
            Clear All</v-btn
          >
          <v-btn
            :disabled="!hasIntegration"
            rounded
            outlined
            color="primary"
            @click="deploy"
          >
            <v-icon left small>
              fa-download
            </v-icon>
            Deploy</v-btn
          >
          <ConfirmDlg ref="confirm"></ConfirmDlg>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import IntegrationSearch from "@/components/integrations/IntegrationSearch";
import IntegrationList from "@/components/integrations/IntgerationsList";

export default {
  name: "IntegrationsPage",
  components: { IntegrationList, IntegrationSearch, ConfirmDlg },
  props: {
    type: String
  },
  data() {
    return {};
  },
  created() {
    this.loadIntegrations();
  },
  computed: {
    sources: function() {
      return this.$store.state.integrations.sources;
    },
    targets: function() {
      return this.$store.state.integrations.targets;
    },
    hasIntegration: function() {
      return this.sources.length > 0 || this.targets.length > 0;
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapMutations(["clearIntegrationsList"]),
    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all integration?"
        )
      ) {
        this.clearIntegrationsList();
      }
    },
    deploy: function() {
      this.sources.forEach(value => console.log(value.GetConfiguration()));
      this.targets.forEach(value => console.log(value.GetConfiguration()));
    }
  }
};
</script>

<style scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
</style>
