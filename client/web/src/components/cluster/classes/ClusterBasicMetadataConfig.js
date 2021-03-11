import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterBasicMetadataConfig extends ClusterConfigItem {
  get clusterName() {
    return this._model.clusterName;
  }
  set clusterName(value) {
    this._model.clusterName = value;
  }
  get clusterNamespace() {
    return this._model.clusterNamespace;
  }
  set clusterNamespace(value) {
    this._model.clusterNamespace = value;
  }
  constructor() {
    super()
      .setName("BasicMetadata")
      .setSchema(clusterBaseSchema)
      .setModel(clusterBaseModel);
  }
}
const clusterBaseModel = {
  clusterName: "kubemq-cluster",
  clusterNamespace: "kubemq",
  licenseKey: ""
};
const clusterBaseSchema = {
  title: "General",
  type: "object",
  required: ["clusterName", "clusterNamespace", "licenseKey"],
  "x-class": "vjsf",
  properties: {
    clusterName: {
      type: "string",
      title: "Cluster Name",
      default: "kubemq-cluster",
      "x-class": ""
    },
    clusterNamespace: {
      type: "string",
      title: "Cluster Name",
      default: "kubemq"
    },
    licenseKey: {
      type: "string",
      title: "Key",
      default: ""
    }
  }
};
export { ClusterBasicMetadataConfig };
