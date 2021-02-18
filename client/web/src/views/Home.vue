<template>
  <v-card class="container">
    <v-row justify="center">
      <ClusterGeneralSection />
    </v-row>
    <v-row justify="center">
      <v-expansion-panels inset multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>Advanced Settings</v-expansion-panel-header>
          <v-expansion-panel-content>
            <ClusterAdvancedSection />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row>
      <v-btn @click="updateCodeMirror">Do</v-btn>
    </v-row>
    <v-row>
      <CodeMirror />
    </v-row>
  </v-card>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterGeneralSection from "@/components/forms/cluster/GeneralSection";
import ClusterAdvancedSection from "@/components/forms/cluster/AdvancedSection";
import CodeMirror from "@/components/codemirror/CodeMirror";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    CodeMirror,
    ClusterAdvancedSection,
    ClusterGeneralSection
  },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {
    ...mapMutations(["setCodeFromCluster"]),
    updateCodeMirror: function() {
      const current = this.$store.getters.configToShow;

      this.setCodeFromCluster(current);
    }
  }
};
</script>
