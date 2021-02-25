<template>
  <div class="container d-flex flex-column flex-grow-1">
    <v-card>
      <v-col cols="6" class="d-flex text-right align-center">
        <v-text-field
          v-model="searchQuery"
          append-icon="mdi-magnify"
          class="flex-grow-1 mr-md-2"
          solo
          hide-details
          clearable
          placeholder="search for integration, i.e. redis, cache, aws"
          @keyup.enter="searchUser(searchQuery)"
        ></v-text-field>
      </v-col>
      <v-data-table
        v-model="selectedIntegrations"
        :headers="headers"
        solo
        :items="users"
        :search="searchQuery"
        class="flex-grow-1"
      >
        <template v-slot:item.type="{ item }">
          <Type :type="item.type"></Type>
        </template>
        <template v-slot:item.name="{ item }">
          <Name :name="item.name"></Name>
        </template>

        <template v-slot:item.action="{}">
          <div class="actions">
            <v-btn icon to="/users/edit">
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import users from "./users";
import Type from "@/components/integrations/table/Type";
import Name from "@/components/integrations/table/Name";

export default {
  name: "Integrations",
  components: { Type, Name },
  data() {
    return {
      isLoading: false,
      searchQuery: "",
      selectedIntegrations: [],
      headers: [
        { text: "Type", value: "type" },
        { text: "Name", value: "name" },
        { text: "Category", value: "category" },
        { text: "Provider", value: "provider" }
      ],
      users
    };
  },
  watch: {
    selectedIntegrations() {}
  },
  methods: {
    searchUser() {},
    open(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
