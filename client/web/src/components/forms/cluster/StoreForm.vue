<template>
  <v-form ref="form-cluster-store" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterStore",
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
    this.model = this.$store.state.cluster.clusterConfig.storeModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  title: "Store Settings",
  type: "object",
  oneOf: [
    {
      title: "Default",
      "x-cols": 6,
      properties: {
        storeSchemaKey: {
          type: "string",
          const: "default"
        }
      }
    },
    {
      title: "Set Store Settings",
      "x-cols": 12,
      properties: {
        storeSchemaKey: {
          type: "string",
          const: "storeSettings"
        },
        maxChannels: {
          type: "integer",
          title: "Max Allowed Channels",
          default: 0,
          description: "Maximum number of channels allowed, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 0
        },
        maxSubscribers: {
          type: "integer",
          title: "Max Allowed Subscribers",
          default: 0,
          description: "Maximum number of subscribers allowed, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 0
        },
        maxMessages: {
          type: "integer",
          title: "Max Allowed Messages",
          default: 0,
          description:
            "Maximum number of message allowed in one channel, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 0
        },
        maxChannelSize: {
          type: "integer",
          title: "Max Channel size (Bytes)",
          default: 0,
          description:
            "Maximum size in bytes allowed for each channel, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 0
        },
        messagesRetentionMinutes: {
          type: "integer",
          title: "Messages Retention Time (Minutes)",
          default: 1440,
          description: "MSet message retention time in minutes, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 0
        },
        purgeInactiveMinutes: {
          type: "integer",
          title: "Delete Inactive Channel (Minutes)",
          default: 1440,
          description: "Set time in minutes of channel inactivity to delete",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 0
        }
      }
    }
  ]
};
</script>

<style scoped></style>
