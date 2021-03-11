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
      .setModel(clusterApiInterfaceModel);
  }
}
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
