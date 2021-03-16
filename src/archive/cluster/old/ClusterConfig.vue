<template>
  <v-card class="my-auto">
    <v-row justify="center">
      <ClusterGeneralSection />
    </v-row>
    <v-row justify="center">
      <v-expansion-panels multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>Advanced Settings</v-expansion-panel-header>
          <v-expansion-panel-content>
            <ClusterAdvancedSection />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterGeneralSection from "@/archive/cluster/old/GeneralSection";
import ClusterAdvancedSection from "@/archive/cluster/old/AdvancedSection";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ClusterConfig",
  components: {
    ClusterAdvancedSection,
    ClusterGeneralSection
  },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {
    ...mapGetters(["configToShowCluster"]),
    ...mapMutations(["setCodeFromCluster", "setStage"]),
    next: function() {
      const current = this.configToShowCluster();
      this.setCodeFromCluster(current);
      this.setStage(3);
    },
    back: function() {
      this.setStage(1);
    }
  }
};
</script>
