import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterNodesConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    return [];
  }

  constructor() {
    super()
      .setName("Nodes")
      .setSchema(clusterNodesSchema)
      .setModel(clusterNodesModel);
  }
}

const clusterNodesModel = {
  mode: "disabled",
  item: {
    kv: []
  }
};
const clusterNodesSchema = {
  title: "Node Selectors",
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
      title: "Set Node Selectors",
      properties: {
        mode: {
          type: "string",
          const: "enabled"
        },
        items: {
          type: "object",
          properties: {
            kv: {
              type: "array",
              title: "Add Node Selectors Key Value",
              items: {
                type: "object",
                required: ["key", "value"],
                properties: {
                  key: {
                    type: "string",
                    title: "Key",
                    default: "",
                    "x-cols": 6,
                    "x-class": "pr-2"
                  },
                  value: {
                    type: "string",
                    title: "Value",
                    default: "",
                    "x-cols": 6,
                    "x-class": "pl-2"
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
};
export { ClusterNodesConfig };
