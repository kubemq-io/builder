<template>
  <v-form ref="form-cluster-image" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
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
  title: "Image Settings",
  oneOf: [
    {
      title: "Default",
      "x-cols": 6,
      properties: {
        imageSchemaKey: {
          type: "string",
          const: "default"
        }
      }
    },
    {
      title: "Set Image Settings",
      "x-cols": 12,
      required: ["image", "pullPolicy"],
      properties: {
        imageSchemaKey: {
          type: "string",
          const: "imageSettings"
        },
        image: {
          type: "string",
          title: "Image Repository",
          default: "docker.io/kubemq/kubemq:latest",
          "x-cols": 6,
          "x-class": "pr-2"
        },
        pullPolicy: {
          type: "string",
          title: "Image Pull Policy",
          default: "Always",
          enum: ["Always", "IfNotPresent", "Never"],
          "x-cols": 6,
          "x-class": "pl-2"
        }
      }
    }
  ]
};
</script>

<style scoped></style>
