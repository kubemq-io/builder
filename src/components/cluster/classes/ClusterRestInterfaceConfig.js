import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterRestInterfaceConfig extends ClusterConfigItem {
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
        return ["REST Load Balancer"];
      case "NodePort":
        return ["REST Node Port"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("RestInterface")
      .setSchema(clusterRestInterfaceSchema)
      .setModel(clusterRestInterfaceModel);
  }
}
const clusterRestInterfaceModel = {
  mode: "ClusterIP",
  nodePort: 0
};
const clusterRestInterfaceSchema = {
  type: "object",
  title: "Interfaces Settings",
  "x-class": "vjsf",

  oneOf: [
    {
      title: "ClusterIP",
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
          "x-cols": 6,
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
export { ClusterRestInterfaceConfig };