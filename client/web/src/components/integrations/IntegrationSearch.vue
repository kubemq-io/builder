<template>
  <div class="pb-0">
    <v-toolbar flat color="primary" dense>
      <v-autocomplete
        dense
        v-model="selectedItem"
        :items="connectors"
        :filter="customFilter"
        label="Add an integration"
        clearable
        solo
        @change="add"
        flat
        filled
        cache-items
        hide-no-data
        hide-details
        prepend-inner-icon="fa-search-plus"
      >
        <template v-slot:selection="data">
          <div class="d-flex justify-center align-center align-content-center">
            <v-list-item-avatar color="primary" size="25">
              <span class="white--text">{{ data.item.getInitial() }}</span>
            </v-list-item-avatar>
            <h3 class="secondary--text font-weight-bold pr-2">
              {{ data.item.name }}
            </h3>

            <div class="pl-1">
              <v-chip
                v-if="data.item.provider"
                x-small
                color="primary font-weight-bold"
                outlined
              >
                {{ data.item.provider }}
              </v-chip>
            </div>
            <div class="pl-1">
              <v-chip x-small color="accent font-weight-bold" outlined>
                {{ data.item.category }}
              </v-chip>
            </div>
          </div>
        </template>
        <template v-slot:item="data">
          <div class="d-flex justify-center align-center align-content-center">
            <v-list-item-avatar color="primary" size="25">
              <span class="white--text">{{ data.item.getInitial() }}</span>
            </v-list-item-avatar>
            <h3 class="secondary--text font-weight-bold pr-2">
              {{ data.item.name }}
            </h3>

            <div class="pl-1">
              <v-chip
                v-if="data.item.provider"
                x-small
                color="primary font-weight-bold"
                outlined
              >
                {{ data.item.provider }}
              </v-chip>
            </div>
            <div class="pl-1">
              <v-chip x-small color="accent font-weight-bold" outlined>
                {{ data.item.category }}
              </v-chip>
            </div>
          </div>
        </template>
      </v-autocomplete>
    </v-toolbar>
    <BindingDlg ref="bindingDlg"></BindingDlg>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { BindingConfig } from "@/components/binding/bindingConfig";
import BindingDlg from "@/components/binding/BindingDlg";

export default {
  name: "IntegrationSearch",
  components: { BindingDlg },
  data: function() {
    return {
      selectedItem: null
    };
  },
  computed: {
    connectors: function() {
      return this.$store.state.integrationsMetadata.connectors;
    },
    forbiddenNames: function() {
      return this.getCurrentBindingNames();
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapGetters(["getCurrentBindingNames"]),
    ...mapMutations(["addBinding"]),
    customFilter(item, queryText) {
      const param1 = item.name.toLowerCase();
      const param2 = item.category.toLowerCase();
      const param3 = item.type.toLowerCase();
      const searchText = queryText.toLowerCase();
      return (
        param1.indexOf(searchText) > -1 ||
        param2.indexOf(searchText) > -1 ||
        param3.indexOf(searchText) > -1
      );
    },
    async add() {
      if (this.selectedItem !== null) {
        let newBinding = this.getNewBinding();
        await this.$refs.bindingDlg
          .open(newBinding, this.getCurrentBindingNames(), "add")
          .then(result => this.addBinding(result));
        this.$nextTick(() => (this.selectedItem = null));
      }
    },
    getNewBinding: function() {
      let newBinding = new BindingConfig()
        .SetType(this.selectedItem.type)
        .SetBindingType("integrations");
      if (this.selectedItem.type === "sources") {
        newBinding = newBinding
          .SetSourceSide(this.selectedItem.name, this.selectedItem.schema)
          .SetTargetSide(
            "KubeMQ",
            this.$store.state.integrationsMetadata.getKubeMQSide("sources")
          );
      } else {
        newBinding = newBinding
          .SetTargetSide(this.selectedItem.name, this.selectedItem.schema)
          .SetSourceSide(
            "KubeMQ",
            this.$store.state.integrationsMetadata.getKubeMQSide("targets")
          );
      }
      return newBinding;
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
