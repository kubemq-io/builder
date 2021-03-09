<template>
  <v-card flat>
    <v-card-text class="pl-2 pr-2 pb-0 pt-0">
      <v-form ref="form-cluster-image" v-model="valid">
        <v-jsf v-model="model" :schema="schema" :options="options" />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterImage",
  components: { VJsf },
  data: function() {
    return {
      valid: false,
      model: null,
      schema: defaultSchema,
      options: loadedOptions
    };
  },
  created() {
    this.model = this.$store.state.cluster.clusterConfig.imageModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  description: "Image Settings",

  required: ["image", "pullPolicy"],
  properties: {
    image: {
      type: "string",
      title: "Image Repository",
      default: "docker.io/kubemq/kubemq:latest"
    },
    pullPolicy: {
      type: "string",
      title: "Image Pull Policy",
      default: "Always",
      enum: ["Always", "IfNotPresent", "Never"]
    }
  }
};
</script>

<style scoped></style>
