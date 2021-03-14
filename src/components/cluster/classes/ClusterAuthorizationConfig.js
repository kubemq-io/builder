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
      .setModel(clusterAuthorizationModel);
  }
}
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
              items: {
                type: "object",
                required: ["clientId", "channel"],
                properties: {
                  clientId: {
                    type: "string",
                    title: "Client ID",
                    default: "",
                    description: "Set access for clients - regular expression",
                    "x-cols": 6
                  },
                  channel: {
                    type: "string",
                    title: "Channel",
                    default: "",
                    description: "Set access for channels - regular expression",
                    "x-cols": 6
                  },
                  events: {
                    type: "string",
                    title: "Events",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  events_store: {
                    type: "string",
                    title: "Events Store",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  },

                  query: {
                    type: "string",
                    title: "Queries",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  commands: {
                    type: "string",
                    title: "Commands",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  },

                  queue: {
                    type: "string",
                    title: "Queues",
                    enum: [
                      "No Access",
                      "Send Only",
                      "Receive Only",
                      "Send and Receive"
                    ],
                    default: "No Access",
                    "x-cols": 6,
                    "x-class": "pr-2"
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
      "x-cols": 10,
      required: ["url", "fetchInterval"],
      properties: {
        mode: {
          type: "string",
          const: "withUrl"
        },
        url: {
          type: "string",
          title: "Authorization Policy Server URL",
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
export { ClusterAuthorizationConfig };
