<template>
  <v-form ref="form-cluster-interfaces" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterInterfaces",
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
    this.model = this.$store.state.cluster.clusterConfig.interfacesModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  title: "Interfaces Settings",
  oneOf: [
    {
      title: "Default",
      "x-cols": 6,

      properties: {
        interfaceSchemaKey: {
          type: "string",
          const: "default"
        }
      }
    },
    {
      title: "Set Interfaces Settings",
      "x-cols": 12,
      required: ["grpc", "rest", "api"],
      properties: {
        interfaceSchemaKey: {
          type: "string",
          const: "interfaceSettings"
        },
        grpc: {
          type: "string",
          title: "GRPC",
          default: "ClusterIP",
          enum: ["ClusterIP", "NodePort", "LoadBalancer"],
          "x-cols": 4,
          "x-class": "pr-2"
        },
        rest: {
          type: "string",
          title: "REST",
          default: "ClusterIP",
          enum: ["ClusterIP", "NodePort", "LoadBalancer"],
          "x-cols": 4,
          "x-class": "pl-2 pr-2"
        },
        api: {
          type: "string",
          title: "API",
          default: "ClusterIP",
          enum: ["ClusterIP", "NodePort", "LoadBalancer"],
          "x-cols": 4,
          "x-class": "pl-2"
        }
      }
    }
  ]
};
</script>

<style scoped></style>
