<template>
  <v-form ref="form-cluster-volume" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterVolume",
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
    this.model = this.$store.state.cluster.clusterConfig.volumeModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  title: "External Persistent Volume Settings",
  oneOf: [
    {
      title: "No Persistent Volume",
      "x-cols": 6,
      properties: {
        volumeSchemaKey: {
          type: "string",
          const: "noVolume"
        }
      }
    },
    {
      title: "Set Persistent Volume Claims",
      required: ["size", "storageClass"],
      properties: {
        "x-cols": 6,
        volumeSchemaKey: {
          type: "string",
          const: "withVolume"
        },
        size: {
          type: "integer",
          title: "Volume Size (Gi)",
          description: "volume size in Gi units",
          default: 1,
          minimum: 1,
          "x-cols": 6,
          "x-class": "pr-2"
        },
        storageClass: {
          type: "string",
          title: "Storage Class",
          description: "Set storage class type",
          default: "default",
          "x-cols": 6,
          "x-class": "pl-2"
        }
      }
    }
  ]
};
</script>

<style scoped></style>
