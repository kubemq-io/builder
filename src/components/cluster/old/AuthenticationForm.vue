<template>
  <v-container>
    <v-form ref="form-cluster-authentication" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
    {{ valid }}
  </v-container>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

export default {
  name: "ClusterAuthentication",
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
    this.model = this.$store.state.cluster.clusterConfig.authenticationModel;
  },
  methods: {}
};

const loadedOptions = {};
const defaultSchema = {
  type: "object",
  title: "Authentication Mode",
  "x-props": {
    dense: true
  },
  oneOf: [
    {
      title: "Disabled",
      "x-cols": 6,
      properties: {
        authenticationSchemaKey: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Enabled",
      required: ["publicKeyType", "publicKey"],
      properties: {
        authenticationSchemaKey: {
          type: "string",
          const: "enabled"
        },
        publicKeyType: {
          type: "string",
          title: "Public Key Type",
          default: "HS256",
          enum: [
            "HS256",
            "HS384",
            "HS512",
            "RS256",
            "RS384",
            "RS512",
            "ES256",
            "ES384",
            "ES512"
          ],
          description: "JWT public key signing method"
        },
        publicKey: {
          type: "string",
          title: "Public Key",
          description: "JWT public key data",
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
