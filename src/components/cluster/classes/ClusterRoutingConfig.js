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
      .setModel(clusterRoutingModel)
      .setOptions(clusterRoutingOptions);
  }
}
const clusterRoutingOptions = {
  initialValidation: "all",
  idPrefix: "routing",
  dialogProps: { maxWidth: 500 },
  rules: {
    validateRulesArray: function(array) {
      if (array.length === 0) {
        return "At least one routing rule must be defined";
      } else {
        return true;
      }
    }
  }
};
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
              "x-rules": ["validateRulesArray"],
              items: {
                type: "object",
                required: ["key"],
                properties: {
                  key: {
                    type: "string",
                    title: "Key",
                    description: "Route key name",
                    default: "",
                    "x-cols": 8
                  },
                  events: {
                    type: "string",
                    title: "Events Channels",
                    description: "Events channels destinations separated by ; ",
                    default: "",
                    "x-cols": 12
                  },
                  events_store: {
                    type: "string",
                    title: "Events Store Channels",
                    description:
                      "Events Store channels destinations separated by ; ",
                    default: "",
                    "x-cols": 12
                  },
                  queues: {
                    type: "string",
                    title: "Queues Channels",
                    description: "Queues channels destinations separated by ; ",
                    default: "",
                    "x-cols": 12
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
          description: "Routing API fetch address",
          default: "https://{your-routing-api-address}"
        },
        fetchInterval: {
          type: "integer",
          title: "Fetch Interval (Seconds)",
          description: "Refresh Rules intervals in seconds",

          default: 3600
        }
      }
    }
  ]
};
export { ClusterRoutingConfig };
