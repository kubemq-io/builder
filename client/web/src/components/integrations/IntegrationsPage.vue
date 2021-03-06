<template>
  <v-card class="ma-10">
    <v-toolbar flat color="primary" extended extension-height="10px">
      <v-toolbar-title class="white--text text-h4">
        Build KubeMQ Integrations
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat style="margin-top: -0px;">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="">
            <IntegrationSearch />
          </div>
          <div>
            <IntegrationList></IntegrationList>
          </div>
        </div>
        <div class="d-flex justify-end ma-3">
          <v-btn
            :disabled="!hasIntegration"
            rounded
            text
            color="primary"
            @click.stop="clearAll()"
            >Clear All</v-btn
          >
          <v-btn :disabled="!hasIntegration" rounded outlined color="primary"
            >Deploy</v-btn
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
import IntegrationList from "@/components/integrations/IntgerationList";

export default {
  name: "IntegrationsPage",
  components: { ConfirmDlg, IntegrationList, IntegrationSearch },
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
      console.log(this.sources.length);
      return this.sources.length > 0 || this.targets.length > 0;
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapMutations(["clearIntegrationList"]),
    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all integration?"
        )
      ) {
        this.clearIntegrationList();
      }
    }
  }
};
</script>

<style scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
