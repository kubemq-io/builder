<template>
  <div>
    <v-autocomplete
      dense
      ref="autocomplete"
      v-model="selectedItem"
      :items="connectors"
      :filter="customFilter"
      @change="add"
      flat
      rounded
      cache-items
      no-data-text="No integrations were found for this query"
      hide-details
      placeholder="Add an Integration"
      prepend-inner-icon="fa-search"
      filled
    >
      <template v-slot:selection="data">
        <v-list-item dense class="pa-0 col-12">
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
        <v-list class="col-12">
          <v-list-item dense class="pa-0">
            <v-list-item-avatar>
              <v-avatar color="secondary" size="40">
                <span class="white--text headline">{{
                  data.item.getInitial()
                }}</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content class="pa-0">
              <v-list-item-title>
                <h2 class="secondary--text">
                  {{ data.item.title }}
                </h2>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="secondary--text body-1">{{
                  data.item.category
                }}</span>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-chip-group column>
                  <v-chip
                    v-for="(tag, index) in data.item.tags"
                    :key="'b' + tag + index"
                    small
                    color="primary"
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
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
import { IntegrationsBinding } from "@/components/integrations/Integrations";

export default {
  name: "IntegrationSearch",
  components: {},
  props: {
    type: String
  },

  data: function() {
    return {
      selectedItem: null,
      showAutoComplete: false,
      currentConnectorList: null
    };
  },
  computed: {
    connectors: function() {
      return this.$store.state.integrations.integrationsMetadata.connectors.filter(
        connector => connector.type === this.type
      );
    },
    forbiddenNames: function() {
      return this.$store.getters.getIntegrationsBindingNames(this.type);
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapMutations(["setConfigIntegrationBinding"]),
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
    add() {
      if (this.selectedItem !== null) {
        this.setConfigIntegrationBinding({
          type: this.type,
          mode: "add",
          binding: this.getNewBinding()
        });

        this.$nextTick(() => {
          this.$emit("add");
          this.selectedItem = null;
        });
      }
    },
    getColor() {
      return "secondary";
    },
    getColorText(more) {
      return "secondary--text" + more;
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
            this.$store.state.integrations.integrationsMetadata.getKubeMQSide(
              "sources"
            )
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
            this.$store.state.integrations.integrationsMetadata.getKubeMQSide(
              "targets"
            )
          );
      }
      return newBinding;
    },
    onFocus() {
      this.showAutoComplete = true;
      this.$nextTick(() => {
        this.$refs.autocomplete.focus();
        this.$refs.autocomplete.isMenuActive = true;
      });
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
/*.v-input__control {*/
/*  padding: 0 0 0 0;*/
/*}*/
</style>
