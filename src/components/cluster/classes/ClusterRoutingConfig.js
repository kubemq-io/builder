import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterRoutingConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Routing"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Routing")
      .setSchema(clusterRoutingSchema)
      .setModel(clusterRoutingModel);
  }
}
const clusterRoutingModel = {
  mode: "disabled",
  routes: {
    keyRoutes: []
  },
  url: "",
  fetchInterval: 0
};
const clusterRoutingSchema = {
  type: "object",
  title: "Routing Rules Settings",
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
      title: "Set Routes Rules",
      required: ["rules"],
      properties: {
        mode: {
          type: "string",
          const: "withRoutes"
        },
        routes: {
          type: "object",
          properties: {
            keyRoutes: {
              type: "array",
              title: "Add Routes",
              items: {
                type: "object",
                required: ["key", "route"],
                properties: {
                  key: {
                    type: "string",
                    title: "Key",
                    default: "",
                    "x-cols": 4,
                    "x-class": "pr-2"
                  },
                  route: {
                    type: "string",
                    title: "Routes",
                    default: "",
                    "x-cols": 8,
                    "x-class": "pl-2"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      title: "Fetch Routes Rules",

      required: ["url", "fetchInterval"],
      properties: {
        mode: {
          type: "string",
          const: "withUrl"
        },
        url: {
          type: "string",
          title: "Routes Server URL",
          default: ""
        },
        fetchInterval: {
          type: "integer",
          title: "Fetch Interval Seconds",
          default: 3600
        }
      }
    }
  ]
};
export { ClusterRoutingConfig };
