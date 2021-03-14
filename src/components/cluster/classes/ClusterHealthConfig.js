import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterHealthConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Health"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Health")
      .setSchema(clusterHealthSchema)
      .setModel(clusterHealthModel);
  }
}

const clusterHealthModel = {
  mode: "disabled",
  initialDelaySeconds: 10,
  periodSeconds: 10,
  timeoutSeconds: 5,
  successThreshold: 1,
  failureThreshold: 12
};
const clusterHealthSchema = {
  title: "Health Probe",
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
      title: "Enabled",
      properties: {
        mode: {
          type: "string",
          const: "enabled"
        },
        initialDelaySeconds: {
          type: "integer",
          title: "Initial Delay Seconds",
          default: 10,
          description: "Set Initial Delay Seconds",
          minimum: 1
        },
        periodSeconds: {
          type: "integer",
          title: "Period Interval Seconds",
          default: 10,
          description: "Set Period Seconds Interval",
          minimum: 1
        },
        timeoutSeconds: {
          type: "integer",
          title: "Timeout Seconds",
          default: 5,
          description: "Set Timeout Seconds",
          minimum: 1
        },
        successThreshold: {
          type: "integer",
          title: "Success Threshold",
          default: 1,
          description: "Set Success Threshold",
          minimum: 1
        },
        failureThreshold: {
          type: "integer",
          title: "Failure Threshold",
          default: 12,
          description: "Set Failure Threshold",
          minimum: 1
        }
      }
    }
  ]
};
export { ClusterHealthConfig };
