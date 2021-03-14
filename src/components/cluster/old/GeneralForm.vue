<template>
  <v-card flat>
    <v-toolbar-title dense class="secondary white--text body-2 pa-2">
      General
    </v-toolbar-title>
    <v-card-text>
      <v-form ref="form-cluster-general" v-model="valid">
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
  name: "ClusterGeneral",
  components: { VJsf },
  data: function() {
    return {
      valid: false,
      model: null,
      schema: defaultSchema,
      options: defaultOptions
    };
  },
  created() {
    this.model = this.$store.state.cluster.clusterConfig.generalModel;
  },
  computed: {}
};

const defaultOptions = {};
const defaultSchema = {
  title: "General",
  type: "object",
  required: ["clusterReplicas", "clusterMode", "licenseKey"],
  properties: {
    licenseKey: {
      type: "string",
      title: "Key",
      default: "",
      "x-cols": 8,
      "x-class": "pl-2"
    },
    clusterReplicas: {
      type: "integer",
      title: "Replicas",
      default: 3,
      minimum: 1,
      "x-cols": 2,
      "x-class": "pl-2 pr-2"
    },
    clusterMode: {
      type: "string",
      title: "Mode",
      default: "Grouped",
      enum: ["Grouped", "Standalone"],
      "x-cols": 2,
      "x-class": "pl-2"
    }
  }
};
// {
//   "type":"object",
//   "properties": {
//     "grpc":  {
//       "title":"GRPC",
//       "type":"object",
//       "properties": {
//         "grpcExposed": {
//           "type": "object",
//           "title": "Select Expose",
//           "default": "ClusterIP",
//           "oneOf": [
//             {
//               "title": "Cluster IP",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "ClusterIP"
//                 },
//               }
//             },
//             {
//               "title": "Node Port",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "NodePort"
//                 },
//                 "grpcNodePort": {
//                   "type": "integer",
//                   "title": "Node Port",
//                   "default": 30000,
//                   "description": "Node Port",
//                 },
//               }
//             },
//             {
//               "title": "Load Balancer",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "LoadBalancer"
//                 },
//               }
//             },
//           ]
//         },
//       },
//       "x-cols": 12
//     },
//     "rest":   {
//       "title":"REST",
//       "type":"object",
//       "properties": {
//         "restExposed": {
//           "type": "object",
//           "title": "Select Expose",
//           "default": "ClusterIP",
//           "oneOf": [
//             {
//               "title": "Cluster IP",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "ClusterIP"
//                 },
//               }
//             },
//             {
//               "title": "Node Port",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "NodePort"
//                 },
//                 "grpcNodePort": {
//                   "type": "integer",
//                   "title": "Node Port",
//                   "default": 30000,
//                   "description": "Node Port",
//                 },
//               }
//             },
//             {
//               "title": "Load Balancer",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "LoadBalancer"
//                 },
//               }
//             },
//           ]
//         },
//       },
//       "x-cols": 12
//     },
//     "api":   {
//       "title":"API",
//       "type":"object",
//       "properties": {
//         "apiExposed": {
//           "type": "object",
//           "title": "Select Expose",
//           "oneOf": [
//             {
//               "title": "Cluster IP",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "ClusterIP"
//                 },
//               }
//             },
//             {
//               "title": "Node Port",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "NodePort"
//                 },
//                 "grpcNodePort": {
//                   "type": "integer",
//                   "title": "Node Port",
//                   "default": 30000,
//                   "description": "Node Port",
//                 },
//               }
//             },
//             {
//               "title": "Load Balancer",
//               "properties": {
//                 "schemaKey": {
//                   "type": "string",
//                   "const": "LoadBalancer"
//                 },
//               }
//             },
//           ]
//         },
//       },
//       "x-cols": 12
//     }
//   },
// }
//
</script>

<style scoped></style>
