<template>
  <v-form ref="form-cluster-store-queue" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterQueue",
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
    this.model = this.$store.state.cluster.clusterConfig.queueModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  title: "Queue Settings",
  type: "object",
  oneOf: [
    {
      title: "Default",
      "x-cols": 6,
      properties: {
        queueSchemaKey: {
          type: "string",
          const: "default"
        }
      }
    },
    {
      title: "Set Queue Settings",
      "x-cols": 12,
      properties: {
        queueSchemaKey: {
          type: "string",
          const: "queueSettings"
        },
        maxReceiveMessagesRequest: {
          type: "integer",
          title: "Max Receive Messages Request",
          default: 1024,
          description: "Set max of sending / receiving batch of queue message",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxReQueues: {
          type: "integer",
          title: "Max ReQueues",
          default: 1024,
          description: "Set max retires to receive message before discard",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        maxExpirationSeconds: {
          type: "integer",
          title: "Max Expiration Seconds",
          default: 43200,
          description: "Set max expiration allowed for message",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxDelaySeconds: {
          type: "integer",
          title: "Max Delay Seconds",
          default: 43200,
          description: "Set max delay seconds allowed for message",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },

        defaultWaitTimeoutSeconds: {
          type: "integer",
          title: "Default Wait Timeout Seconds",
          default: 1,
          description: "Maximum number of subscribers allowed, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxWaitTimeoutSeconds: {
          type: "integer",
          title: "Max Wait Timeout Seconds",
          default: 3600,
          description: "Set max wait timeout allowed for message",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        defaultVisibilitySeconds: {
          type: "integer",
          title: "Default Visibility Seconds",
          default: 60,
          description:
            "Set default time of hold received message before returning to queue",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxVisibilitySeconds: {
          type: "integer",
          title: "Max Visibility Seconds",
          default: 43200,
          description:
            "Set max time of hold received message before returning to queue",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        }
      }
    }
  ]
};
</script>

<style scoped></style>
