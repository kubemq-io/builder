<template>
  <v-card class="d-flex ma-3">
    <v-card-text>
      <v-autocomplete
        v-model="selectedItem"
        :items="connectors"
        :filter="customFilter"
        label="Integration"
        clearable
        solo
        rounded
        @change="add"
      >
        <template v-slot:selection="data">
          <v-list-item-avatar>
            <img
              v-if="data.item.type === 'sources'"
              src="@/assets/source.svg"
              alt="source"
            />
            <img
              v-if="data.item.type === 'targets'"
              src="@/assets/target.svg"
              alt="target"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ data.item.name }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ data.item.category }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </template>
        <template v-slot:item="data">
          <v-list-item-avatar>
            <img
              v-if="data.item.type === 'sources'"
              src="@/assets/source.svg"
              alt="source"
            />
            <img
              v-if="data.item.type === 'targets'"
              src="@/assets/target.svg"
              alt="target"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.name"></v-list-item-title>
            <v-list-item-subtitle
              v-html="data.item.category"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <BindingDlg ref="bindingDlg"></BindingDlg>
    </v-card-actions>
  </v-card>
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
