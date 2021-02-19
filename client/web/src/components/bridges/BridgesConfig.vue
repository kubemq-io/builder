<template>
  <v-card class="my-auto">
    <v-toolbar color="light-green mb-7" dark>
      <v-toolbar-title>Configure KubeMQ Bridges</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row justify="center">
      Bridges configuration here
    </v-row>
    <v-row justify="space-between">
      <div class="mb-4 ml-4">
        <v-btn color="gray" outlined @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
      <div class="mb-4 mr-4">
        <v-btn color="gray" outlined @click="next">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BridgesConfig",
  data: function() {
    return {
      valid: false
    };
  },
  methods: {
    ...mapGetters(["configToShowBridges"]),
    ...mapMutations(["setCodeFromBridges", "setStage"]),
    next: function() {
      const current = this.configToShowBridges();
      this.setCodeFromBridges(current);
      this.setStage(3);
    },
    back: function() {
      this.setStage(1);
    }
  }
};
</script>

<style scoped></style>
