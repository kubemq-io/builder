<template>
  <v-card class="my-auto">
    <v-toolbar color="light-green mb-7" dark>
      <v-toolbar-title>Config</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-row>
      <v-col>
        <BridgeConfig v-if="selectedConfig.type === 'bridges'"></BridgeConfig>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <div class="mb-4 ml-4">
        <v-btn color="gray" outlined @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import BridgeConfig from "@/components/bridges/BridgeConfig";

export default {
  name: "Config",
  components: { BridgeConfig },
  data: function() {
    return {
      valid: false
    };
  },
  computed: {
    selectedConfig: function() {
      return this.$store.state.stages.selectedConfig;
    }
  },
  methods: {
    ...mapMutations(["setStage"]),
    ...mapGetters(["currentSelectedConfig"]),
    next: function() {
      this.setStage(4);
    },
    back: function() {
      this.setStage(2);
    }
  }
};
</script>

<style scoped></style>
