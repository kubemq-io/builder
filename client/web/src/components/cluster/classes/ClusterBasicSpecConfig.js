import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterBasicSpecConfig extends ClusterConfigItem {
  constructor() {
    super()
      .setName("BasicSpec")
      .setSchema(clusterBaseSchema)
      .setModel(clusterBaseModel)
      .setOptions({
        radioGroupProps: {
          row: true
        }
      });
  }
}
const clusterBaseModel = {
  replicas: "3 Nodes",
  mode: "Grouped"
};
const clusterBaseSchema = {
  title: "General",
  type: "object",
  required: ["replicas", "mode"],
  "x-class": "vjsf pb-9",
  properties: {
    mode: {
      type: "string",
      title: "Mode:",
      default: "Grouped",
      "x-display": "radio",
      enum: ["Grouped", "Standalone"]
    },
    replicas: {
      type: "string",
      title: "Nodes:",
      enum: ["3 Nodes", "5 Nodes", "7 Nodes"],
      "x-display": "radio",
      default: "3 Nodes"
    }
  }
};
export { ClusterBasicSpecConfig };
