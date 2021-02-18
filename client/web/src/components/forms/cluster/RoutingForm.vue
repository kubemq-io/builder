<template>
  <v-form ref="form-cluster-routing" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterRouting",
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
    this.model = this.$store.state.cluster.clusterConfig.routingModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  title: "Routing Rules Settings",
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,
      properties: {
        routingSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Routes Rules",
      required: ["rules"],
      properties: {
        routingSchemaKey: {
          type: "string",
          const: "withRoutes"
        },
        routes: {
          type: "object",
          properties: {
            keyRoutes: {
              type: "array",
              title: "Add Routes",
              items: {
                type: "object",
                required: ["key", "route"],
                properties: {
                  key: {
                    type: "string",
                    title: "Key",
                    default: "",
                    "x-cols": 4,
                    "x-class": "pr-2"
                  },
                  route: {
                    type: "string",
                    title: "Routes",
                    default: "",
                    "x-cols": 8,
                    "x-class": "pl-2"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      title: "Fetch Routes Rules",
      "x-cols": 10,
      required: ["url", "fetchInterval"],
      properties: {
        routingSchemaKey: {
          type: "string",
          const: "withUrl"
        },
        url: {
          type: "string",
          title: "Routes Server URL",
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
