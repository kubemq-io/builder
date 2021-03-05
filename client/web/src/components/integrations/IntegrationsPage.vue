<template>
  <div class="container ma-10">
    <v-card class="d-flex flex-column">
      <v-card flat>
        <div class="">
          <v-toolbar-title class="secondary--text">
            Title
          </v-toolbar-title>
        </div>
        <div class="d-flex flex-column">
          <IntegrationSearch />
          <IntegrationList></IntegrationList>
        </div>
      </v-card>
      <v-card flat tile class="d-flex justify-end ma-3">
        <v-btn
          :disabled="currentBindingList.length === 0"
          rounded
          text
          color="primary"
          @click.stop="clearAll()"
          >Clear All</v-btn
        >
        <v-btn
          :disabled="currentBindingList.length === 0"
          rounded
          outlined
          color="primary"
          >Deploy</v-btn
        >
      </v-card>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
    </v-card>
  </div>
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
    currentBindingList: function() {
      return this.$store.state.integrations.currentBindingList;
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
