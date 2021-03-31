import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterResourcesConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Resources"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Resources")
      .setSchema(clusterResourcesSchema)
      .setModel(clusterResourcesModel)
      .setOptions(clusterResourcesOptions);
  }
}
const clusterResourcesOptions = {
  initialValidation: "all",
  idPrefix: "resources"
};
const clusterResourcesModel = {
  mode: "disabled",
  limitsCpu: 0,
  requestCpu: 0,
  limitsMemory: 0,
  requestMemory: 0,
  limitsEphemeralStorage: 0,
  requestsEphemeralStorage: 0
};
const clusterResourcesSchema = {
  title: "Resources Settings",
  type: "object",
  "x-class": "vjsf",
  oneOf: [
    {
      title: "Disabled",
      properties: {
        mode: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Resource Limitation",
      properties: {
        mode: {
          type: "string",
          const: "enabled"
        },
        limitsCpu: {
          type: "number",
          title: "CPU Limits (Cores)",
          default: 1,
          minimum: 1,
          description: "Set CPU Limits in cores"
        },
        requestCpu: {
          type: "number",
          title: "CPU Request (Cores)",
          default: 1,
          minimum: 1,
          description: "Set CPU Requests in cores"
        },
        limitsMemory: {
          type: "number",
          title: "Memory Limits (Gi)",
          default: 1,
          minimum: 1,
          description: "Set Memory Limits size in Gi"
        },
        requestMemory: {
          type: "number",
          title: "Memory Request (Gi)",
          default: 1,
          minimum: 1,
          description: "Set Memory Requests in Gi"
        },
        limitsEphemeralStorage: {
          type: "number",
          title: "Storage Limits (Gi)",
          default: 1,
          minimum: 1,
          description: "Set Ephemeral Storage Limits size in Gi"
        },
        requestsEphemeralStorage: {
          type: "number",
          title: "Storage Request (Gi)",
          default: 1,
          minimum: 1,
          description: "Set Ephemeral storage in Gi"
        }
      }
    }
  ]
};
export { ClusterResourcesConfig };
