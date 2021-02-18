<template>
  <v-form ref="form-cluster-authorization" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterAuthorization",
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
    this.model = this.$store.state.cluster.clusterConfig.authorizationModel;
  },
  methods: {}
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  description: "Authorization Mode",
  "x-props": {
    outlined: true,
    solo: true
  },
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,

      properties: {
        authorizationSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Authorization Policy",
      "x-props": {
        outlined: true
      },
      required: ["rules"],
      properties: {
        authorizationSchemaKey: {
          type: "string",
          const: "withPolicy"
        },
        policy: {
          type: "object",
          properties: {
            rules: {
              type: "array",
              title: "Add Policy Rules",
              items: {
                type: "object",
                required: ["clientId", "channel"],
                properties: {
                  clientId: {
                    type: "string",
                    title: "Client ID",
                    default: "",
                    description: "Set access for clients - regular expression",
                    "x-cols": 6
                  },
                  channel: {
                    type: "string",
                    title: "Channel",
                    default: "",
                    description: "Set access for channels - regular expression",
                    "x-cols": 6
                  },
                  events: {
                    type: "string",
                    title: "Events",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  events_store: {
                    type: "string",
                    title: "Events Store",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  },

                  query: {
                    type: "string",
                    title: "Queries",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  commands: {
                    type: "string",
                    title: "Commands",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  },

                  queue: {
                    type: "string",
                    title: "Queues",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      title: "Fetch Authorization Policy",
      "x-cols": 10,
      required: ["url", "fetchInterval"],
      properties: {
        authorizationSchemaKey: {
          type: "string",
          const: "withUrl"
        },
        url: {
          type: "string",
          title: "Authorization Policy Server URL",
          default: "",
          "x-cols": 10
        },
        fetchInterval: {
          type: "integer",
          title: "Fetch Interval Seconds",
          default: 3600,
          "x-cols": 3
        }
      }
    }
  ]
};
</script>

<style scoped></style>
