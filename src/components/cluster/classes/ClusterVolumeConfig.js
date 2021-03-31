import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterVolumeConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Volume"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Volumes")
      .setSchema(clusterVolumeSchema)
      .setModel(clusterVolumeModel)
      .setOptions(clusterVolumeOptions);
  }
}
const clusterVolumeOptions = {
  initialValidation: "all",
  idPrefix: "volume"
};
const clusterVolumeModel = {
  mode: "disabled",
  size: 1,
  storageClass: "default"
};
const clusterVolumeSchema = {
  type: "object",
  title: "External Persistent Volume Settings",
  "x-class": "vjsf",
  oneOf: [
    {
      title: "No Persistent Volume",
      properties: {
        mode: {
          type: "string",
          const: "disabled"
        }
      }
    },
    {
      title: "Set Persistent Volume Claims",
      required: ["size", "storageClass"],
      properties: {
        mode: {
          type: "string",
          const: "enabled"
        },
        size: {
          type: "integer",
          title: "Volume Size (Gi)",
          description: "volume size in Gi units",
          default: 1,
          minimum: 1,
          "x-cols": 6
        },
        storageClass: {
          type: "string",
          title: "Storage Class",
          description: "Set storage class type",
          default: "default",
          "x-cols": 6
        }
      }
    }
  ]
};
export { ClusterVolumeConfig };
