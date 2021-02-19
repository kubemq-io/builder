<template>
  <v-card class="my-auto" elevation="0" outlined>
    <v-toolbar color="light-green mb-3" dark>
      <v-toolbar-title>View Configuration</v-toolbar-title>
    </v-toolbar>
    <v-row justify="center">
      <CodeMirror />
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
import CodeMirror from "@/components/code/CodeMirror";
import { mapMutations } from "vuex";
export default {
  name: "ViewStage",
  components: { CodeMirror },
  methods: {
    ...mapMutations(["setStage"]),
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
