import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterApiInterfaceConfig extends ClusterConfigItem {
  get mode() {
    return this.model.mode;
  }
  getHasConfigured() {
    return this.model.mode !== "ClusterIP";
  }
  get tags() {
    switch (this.mode) {
      case "ClusterIP":
        return [];
      case "LoadBalancer":
        return ["API Load Balancer"];
      case "NodePort":
        return ["API Node Port"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("ApiInterface")
      .setSchema(clusterApiInterfaceSchema)
      .setModel(clusterApiInterfaceModel)
      .setOptions(clusterApiInterfaceOptions);
  }
}
const clusterApiInterfaceOptions = {
  initialValidation: "all",
  idPrefix: "api",
  rules: {
    validateNodePort: function(val) {
      if (val === 0) {
        return true;
      }
      if (val < 30000 || val > 32000) {
        return "Node port must be in range of 30000-32000";
      }
      return true;
    }
  }
};
const clusterApiInterfaceModel = {
  mode: "ClusterIP",
  nodePort: 0
};
const clusterApiInterfaceSchema = {
  type: "object",
  title: "Interfaces Settings",
  "x-class": "vjsf",

  oneOf: [
    {
      title: "Cluster IP",
      properties: {
        mode: {
          type: "string",
          title: "Expose Mode",
          const: "ClusterIP"
        }
      }
    },
    {
      title: "Node Port",
      properties: {
        mode: {
          type: "string",
          title: "Expose Mode",
          const: "NodePort"
        },
        nodePort: {
          type: "integer",
          title: "Node Port",
          "x-rules": ["validateNodePort"],
          default: 0,
          minimum: 0,
          maximum: 65355
        }
      }
    },
    {
      title: "Load Balancer",
      properties: {
        mode: {
          type: "string",
          title: "Expose Mode",
          const: "LoadBalancer"
        }
      }
    }
  ]
};
export { ClusterApiInterfaceConfig };
