<template>
  <v-form ref="form-cluster-general" v-model="valid">
    <v-jsf v-model="model" :schema="schema" :options="options" />
  </v-form>
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
  computed: {
    stateModel() {
      this.rendering = this.$store.state.cluster.clusterConfig;
      this.$nextTick(() => {
        //   this.model = this.rendering;
      });
      console.log(this.rendering);
      return this.rendering;
    }
  }
};

const defaultOptions = {};
const defaultSchema = {
  title: "General",
  type: "object",
  required: [
    "clusterName",
    "clusterNamespace",
    "clusterReplicas",
    "clusterMode",
    "licenseKey"
  ],
  properties: {
    clusterName: {
      type: "string",
      title: "Cluster Name",
      default: "kubemq-cluster",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    clusterNamespace: {
      type: "string",
      title: "Cluster Namespace",
      default: "kubemq",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clusterReplicas: {
      type: "integer",
      title: "Cluster Replicas",
      default: 3,
      minimum: 1,
      "x-cols": 6,
      "x-class": "pr-2"
    },
    clusterMode: {
      type: "string",
      title: "Cluster Mode",
      default: "Grouped",
      enum: ["Grouped", "Standalone"],
      "x-cols": 6,
      "x-class": "pl-2"
    },
    licenseKey: {
      type: "string",
      title: "License Key",
      default: "key"
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
