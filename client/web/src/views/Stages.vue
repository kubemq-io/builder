<template>
  <v-stepper :value="currentStage" alt-labels>
    <v-stepper-header>
      <v-stepper-step :complete="currentStage > 1" step="1">
        Select
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="currentStage > 2" step="2">
        Config
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="currentStage > 3" step="3">
        View
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">
        Deploy
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <SelectStage></SelectStage>
      </v-stepper-content>
      <v-stepper-content step="2">
        <Config />
      </v-stepper-content>
      <v-stepper-content step="3">
        <div class="mb-7">
          <ViewStage></ViewStage>
        </div>
      </v-stepper-content>

      <v-stepper-content step="4">
        <div class="mb-7">
          <Deploy />
        </div>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import SelectStage from "@/views/Select";
import { mapMutations } from "vuex";
import ViewStage from "@/views/View";
import Deploy from "@/views/Deploy";
import Config from "@/views/Config";
export default {
  name: "Stages",
  components: {
    Config,
    Deploy,
    ViewStage,
    SelectStage
  },
  data() {
    return {};
  },
  computed: {
    currentStage: function() {
      return this.$store.state.stages.stageStep;
    },
    currentSelectedConfig: function() {
      return this.$store.state.stages.selectedConfig;
    }
  },
  methods: {
    ...mapMutations(["setStage"]),
    setStageValue: function(value) {
      this.setStage(value);
    }
  }
};
</script>

<style scoped></style>
