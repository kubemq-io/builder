<template>
  <v-form ref="form-cluster-tls" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterTlsForm",
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
    this.model = this.$store.state.cluster.clusterConfig.tlsModel;
  }
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  title: "Select TLS mode",
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,
      properties: {
        tlsSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "TLS",
      "x-cols": 12,
      required: ["cert", "key"],
      properties: {
        tlsSchemaKey: {
          type: "string",
          const: "tls"
        },
        cert: {
          type: "string",
          title: "Certificate",
          description: "TLS certification data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        key: {
          type: "string",
          title: "Key",
          description: "TLS key data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        }
      }
    },
    {
      title: "Mutual TLS",
      "x-cols": 12,
      required: ["cert", "key", "ca"],
      properties: {
        tlsSchemaKey: {
          type: "string",
          const: "mtls"
        },
        cert: {
          type: "string",
          title: "Certificate",
          description: "mTLS certification data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        key: {
          type: "string",
          title: "Key",
          description: "mTLS key data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        ca: {
          type: "string",
          title: "Certificate Authority",
          description: "mTLS certification authority (CA) data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        }
      }
    }
  ]
};
</script>

<style scoped></style>
