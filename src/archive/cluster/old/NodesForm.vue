<template>
  <v-form ref="form-cluster-node" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterNode",
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
    this.model = this.$store.state.cluster.clusterConfig.nodeSelectorsModel;
  },
  methods: {
    print: function() {
      console.log(this.model);
    }
  }
};

const loadedOptions = {};
const defaultSchema = {
  title: "Node Selectors",
  type: "object",
  "x-cols": 6,
  oneOf: [
    {
      title: "Disabled",

      properties: {
        nodeSelectorsSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Node Selectors",
      properties: {
        nodeSelectorsSchemaKey: {
          type: "string",
          const: "enabled"
        },
        items: {
          type: "object",
          properties: {
            kv: {
              type: "array",
              title: "Add Node Selectors Key Value",
              items: {
                type: "object",
                required: ["key", "value"],
                properties: {
                  key: {
                    type: "string",
                    title: "Key",
                    default: "",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  value: {
                    type: "string",
                    title: "Value",
                    default: "",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
};
</script>

<style scoped></style>
