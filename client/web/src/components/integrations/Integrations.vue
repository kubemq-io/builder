<template>
  <div class="container">
    <v-dialog v-model="dialog" persistent max-width="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <TransformForm></TransformForm>
      </v-card>
    </v-dialog>

    <div>
      <v-sheet>
        <v-toolbar color="light-green" dark>
          <v-toolbar-title>Configure KubeMQ Bridges</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
    </div>
    <div class="pa-2">
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
        <v-col>
          <v-container
            id="scroll-target"
            style="max-height: 400px"
            class="overflow-y-auto"
          >
            <v-row
              v-scroll:#scroll-target="onScroll"
              align="center"
              justify="center"
              style="height: 1000px"
            >
              <IntegrationBinding v-for="n in 10" :key="n"></IntegrationBinding>
            </v-row>
          </v-container>
        </v-col>
      </v-card>
    </div>
    <div class="pa-2">
      <v-card>
        <v-col>
          <IntegrationBinding v-for="n in 10" :key="n"></IntegrationBinding>
        </v-col>
      </v-card>
    </div>
  </div>
</template>

<script>
import IntegrationBinding from "@/components/integrations/binding/IntegrationBinding";
import TransformForm from "@/components/bridges/TransformForm";
export default {
  name: "Integrations",
  components: { TransformForm, IntegrationBinding },
  data() {
    return {
      isLoading: false,
      searchQuery: "",
      dialog: false
    };
  },
  watch: {},
  methods: {
    open(item) {
      console.log(item);
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
