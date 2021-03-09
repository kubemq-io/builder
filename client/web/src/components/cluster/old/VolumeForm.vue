<template>
  <v-card>
    <v-toolbar-title dense class="secondary white--text body-2 pa-2">
      External Persistent Volume
    </v-toolbar-title>
    <v-card-text>
      <v-form ref="form-cluster-volume" v-model="valid">
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
        volumeSchemaKey: {
          type: "string",
          const: "withVolume"
        },
        size: {
          type: "integer",
          title: "Volume Size (Gi)",
          description: "volume size in Gi units",
          default: 1,
          minimum: 1
        },
        storageClass: {
          type: "string",
          title: "Storage Class",
          description: "Set storage class type",
          default: "default"
        }
      }
    }
  ]
};
</script>

<style scoped></style>
