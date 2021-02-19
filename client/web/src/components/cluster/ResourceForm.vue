<template>
  <v-form ref="form-cluster-resource" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterResource",
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
    this.model = this.$store.state.cluster.clusterConfig.resourceModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  title: "Resources Settings",
  type: "object",
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,
      properties: {
        resourceSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Resource Limitation",
      properties: {
        resourceSchemaKey: {
          type: "string",
          const: "enabled"
        },
        limitsCpu: {
          type: "number",
          title: "CPU Limits (Cores)",
          default: 0,
          description: "Set CPU Limits in cores",
          "x-cols": 6,
          "x-class": "pr-2"
        },
        requestCpu: {
          type: "number",
          title: "CPU Request (Cores)",
          default: 0,
          description: "Set CPU Requests in cores",
          "x-cols": 6,
          "x-class": "pl-2"
        },
        limitsMemory: {
          type: "number",
          title: "Memory Limits (Gi)",
          default: 0,
          description: "Set Memory Limits size in Gi",
          "x-cols": 6,
          "x-class": "pr-2"
        },
        requestMemory: {
          type: "number",
          title: "Memory Request (Gi)",
          default: 0,
          description: "Set Memory Requests in Gi",
          "x-cols": 6,
          "x-class": "pl-2"
        },
        limitsEphemeralStorage: {
          type: "number",
          title: "Ephemeral Storage Limits (Gi)",
          default: 0,
          description: "Set Ephemeral Storage Limits size in Gi",
          "x-cols": 6,
          "x-class": "pr-2"
        },
        requestsEphemeralStorage: {
          type: "number",
          title: "Ephemeral Storage Request (Gi)",
          default: 0,
          description: "Set Ephemeral storage in Gi",
          "x-cols": 6,
          "x-class": "pl-2"
        }
      }
    }
  ]
};
</script>

<style scoped></style>
