<template>
  <v-card class="my-auto">
    <v-toolbar color="light-green mb-7" dark>
      <v-toolbar-title>Deploy</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row justify="center">
      {{ config }}
    </v-row>
    <v-row justify="space-between">
      <div class="mb-4 ml-4">
        <v-btn color="gray" outlined @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
      <div class="mb-4 mr-4">
        <v-btn color="gray" outlined @click="next">
          Start Again
        </v-btn>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Deploy",
  data: function() {
    return {
      valid: false
    };
  },
  computed: {
    config() {
      return this.$store.state.stages.configModel;
    }
  },
  methods: {
    ...mapMutations(["setStage"]),

    next: function() {
      this.setStage(1);
    },
    back: function() {
      this.setStage(3);
    }
  }
};
</script>

<style scoped></style>
