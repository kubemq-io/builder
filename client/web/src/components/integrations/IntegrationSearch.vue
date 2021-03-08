<template>
  <div class="pb-0">
    <v-toolbar flat color="primary" dense>
      <v-autocomplete
        dense
        v-model="selectedItem"
        :items="connectors"
        :filter="customFilter"
        label="Add an integration..."
        solo
        @change="add"
        flat
        rounded
        cache-items
        hide-details
        color="primary"
        prepend-inner-icon="fa-search-plus"
      >
        <template v-slot:selection="data">
          <v-list-item dense class="pa-0">
            <v-list-item-avatar color="primary" size="25">
              <span class="white--text">{{ data.item.getInitial() }}</span>
            </v-list-item-avatar>
            <v-list-item-content class="pa-0">
              <v-list-item-title>
                <h4 class="secondary--text font-weight-bold pr-2">
                  {{ data.item.name }}
                </h4>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-slot:item="data">
          <v-list>
            <v-list-item dense class="pa-0">
              <v-list-item-avatar>
                <v-avatar :color="getColor(data.item.type)" size="35">
                  <span class="white--text text-h6">{{
                    data.item.getInitial()
                  }}</span>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content class="pa-0">
                <v-list-item-title>
                  <h3 :class="getColorText(data.item.type, '')">
                    {{ data.item.title }}
                  </h3>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span
                    :class="getColorText(data.item.type, ' text-capitalize')"
                    >{{ data.item.type }}</span
                  >
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-chip-group>
                    <v-chip
                      v-for="(tag, index) in data.item.tags"
                      :key="'b' + tag + index"
                      x-small
                      :color="getColor(data.item.type)"
                      outlined
                    >
                      {{ tag }}
                    </v-chip>
                  </v-chip-group>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>
      </v-autocomplete>
    </v-toolbar>
    <IntegrationsBindingDlg ref="bindingDlg"></IntegrationsBindingDlg>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import IntegrationsBindingDlg from "@/components/integrations/IntegrationBindingDlg";
import { IntegrationsBinding } from "@/components/integrations/Integrations";

export default {
  name: "IntegrationSearch",
  components: { IntegrationsBindingDlg },
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
    ...mapMutations(["addIntegrationsBinding"]),
    customFilter(item, queryText) {
      if (item.divider) {
        return false;
      }
      let foundInTags = false;
      item.tags.forEach(value => {
        const param = value.toLowerCase();
        if (param.indexOf(queryText) > -1) {
          foundInTags = true;
        }
      });
      if (foundInTags) {
        return true;
      }
      const param1 = item.name.toLowerCase();
      const param2 = item.category.toLowerCase();
      const param3 = item.type.toLowerCase();
      const param4 = item.provider.toLowerCase();
      const searchText = queryText.toLowerCase();
      return (
        param1.indexOf(searchText) > -1 ||
        param2.indexOf(searchText) > -1 ||
        param3.indexOf(searchText) > -1 ||
        param4.indexOf(searchText) > -1
      );
    },
    async add() {
      if (this.selectedItem !== null) {
        let newBinding = this.getNewBinding();
        await this.$refs.bindingDlg
          .open(newBinding, this.getCurrentBindingNames(), "add")
          .then(result => this.addIntegrationsBinding(result));
        this.$nextTick(() => (this.selectedItem = null));
      }
    },
    getColor(type) {
      return type === "targets" ? "primary" : "secondary";
    },
    getColorText(type, more) {
      return type === "targets"
        ? "primary--text" + more
        : "secondary--text" + more;
    },
    getNewBinding: function() {
      let newBinding = new IntegrationsBinding()
        .SetType(this.selectedItem.type)
        .SetBindingType("integrations");
      if (this.selectedItem.type === "sources") {
        newBinding = newBinding
          .SetSourceSide(
            this.selectedItem.name,
            this.selectedItem.category,
            this.selectedItem.schema
          )
          .SetTargetSide(
            "KubeMQ",
            "something",
            this.$store.state.integrationsMetadata.getKubeMQSide("sources")
          );
      } else {
        newBinding = newBinding
          .SetTargetSide(
            this.selectedItem.name,
            this.selectedItem.category,
            this.selectedItem.schema
          )
          .SetSourceSide(
            "KubeMQ",
            "something",
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
