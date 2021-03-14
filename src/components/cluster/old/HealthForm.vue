<template>
  <v-form ref="form-cluster-health" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterHealth",
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
    this.model = this.$store.state.cluster.clusterConfig.healthModel;
  }
};
const loadedOptions = {};
const defaultSchema = {
  title: "Health Probe",
  type: "object",
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,
      properties: {
        healthSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Enabled",
      properties: {
        healthSchemaKey: {
          type: "string",
          const: "enabled"
        },
        initialDelaySeconds: {
          type: "integer",
          title: "Initial Delay Seconds",
          default: 10,
          description: "Set Initial Delay Seconds",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        periodSeconds: {
          type: "integer",
          title: "Period Interval Seconds",
          default: 10,
          description: "Set Period Seconds Interval",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        timeoutSeconds: {
          type: "integer",
          title: "Timeout Seconds",
          default: 5,
          description: "Set Timeout Seconds",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        successThreshold: {
          type: "integer",
          title: "Success Threshold",
          default: 1,
          description: "Set Success Threshold",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        failureThreshold: {
          type: "integer",
          title: "Failure Threshold",
          default: 12,
          description: "Set Failure Threshold",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        }
      }
    }
  ]
};
</script>

<style scoped></style>
