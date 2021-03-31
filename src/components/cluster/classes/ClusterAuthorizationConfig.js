import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterAuthorizationConfig extends ClusterConfigItem {
  get mode() {
    return this.model.mode;
  }
  get policy() {
    return this.model.policy;
  }
  get url() {
    return this.model.url;
  }
  get fetchInterval() {
    return this.model.fetchInterval;
  }

  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.mode !== "disabled") {
      return ["Authorization"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Authorization")
      .setSchema(clusterAuthorizationSchema)
      .setModel(clusterAuthorizationModel)
      .setOptions(clusterAuthorizationOptions);
  }
}

const clusterAuthorizationOptions = {
  initialValidation: "all",
  idPrefix: "authorization",
  dialogProps: { minWidth: 500, maxWidth: 960 },
  rules: {
    validateRulesArray: function(array) {
      if (array.length === 0) {
        return "At least one policy rule must be defined";
      } else {
        return true;
      }
    }
  }
};
const clusterAuthorizationModel = {
  mode: "disabled",
  policy: {
    rules: []
  },
  url: "",
  fetchInterval: 0
};
const clusterAuthorizationSchema = {
  type: "object",
  "x-class": "vjsf",
  oneOf: [
    {
      title: "Disabled",
      properties: {
        mode: {
          type: "string",
          title: "Mode",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Authorization Policy",
      required: ["rules"],

      properties: {
        mode: {
          type: "string",
          const: "withPolicy"
        },
        policy: {
          type: "object",
          properties: {
            rules: {
              type: "array",
              title: "Add Policy Rules",
              "x-rules": ["validateRulesArray"],
              items: {
                type: "object",
                required: ["ClientID", "Channel"],
                properties: {
                  ClientID: {
                    type: "string",
                    title: "Client ID (Regular Expression)",
                    description: "Set access for clients - regular expression",
                    "x-cols": 6
                  },
                  Channel: {
                    type: "string",
                    title: "Channel (Regular Expression)",
                    description: "Set access for channels - regular expression",
                    "x-cols": 6
                  },
                  Queues: {
                    type: "boolean",
                    title: "Queues",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 3
                  },
                  Events: {
                    type: "boolean",
                    title: "Events",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 3
                  },
                  EventsStore: {
                    type: "boolean",
                    title: "Events Store",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 2
                  },

                  Queries: {
                    type: "boolean",
                    title: "Queries",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 2
                  },
                  Commands: {
                    type: "boolean",
                    title: "Commands",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 2
                  },
                  Read: {
                    type: "boolean",
                    title: "Read (Subscribe)",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 3
                  },
                  Write: {
                    type: "boolean",
                    title: "Write (Send)",
                    "x-display": "checkbox",
                    default: false,
                    "x-cols": 3
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      title: "Fetch Authorization Policy",

      required: ["url", "fetchInterval"],
      properties: {
        mode: {
          type: "string",
          const: "withUrl"
        },
        url: {
          type: "string",
          title: "Authorization Policy Server URL",
          description: "Authorization API fetch address",
          default: "https://{your-authorization-api-address}"
        },
        fetchInterval: {
          type: "integer",
          title: "Fetch Interval (Seconds)",
          description: "Refresh Policy intervals in seconds",

          default: 3600
        }
      }
    }
  ]
};
export { ClusterAuthorizationConfig };
