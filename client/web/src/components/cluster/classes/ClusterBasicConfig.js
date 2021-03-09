import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterBasicConfig extends ClusterConfigItem {
  get clusterName() {
    return this.model.clusterName;
  }

  set clusterName(value) {
    this.model.clusterName = value;
  }

  get clusterNamespace() {
    return this.model.clusterNamespace;
  }

  set clusterNamespace(value) {
    this.model.clusterNamespace = value;
  }

  get licenseKey() {
    return this.model.licenseKey;
  }

  set licenseKey(value) {
    console.log("asd");
    this.model.licenseKey = value;
  }

  get replicas() {
    return this.model.replicas;
  }

  set replicas(value) {
    this.model.replicas = value;
  }

  get mode() {
    return this.model.mode;
  }

  set mode(value) {
    this.model.mode = value;
  }

  constructor() {
    super()
      .setName("Basic")
      .setSchema(clusterBaseSchema)
      .setModel(clusterBaseModel);
  }
}
const clusterBaseModel = {
  clusterName: "kubemq-cluster",
  clusterNamespace: "kubemq",
  licenseKey: "",
  replicas: 3,
  mode: "Grouped"
};
const clusterBaseSchema = {
  title: "General",
  type: "object",
  required: ["clusterReplicas", "clusterMode", "licenseKey"],
  "x-class": "vjsf",
  properties: {
    clusterName: {
      type: "string",
      title: "Cluster Name",
      default: "kubemq-cluster",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clusterNamespace: {
      type: "string",
      title: "Cluster Name",
      default: "kubemq",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    licenseKey: {
      type: "string",
      title: "Key",
      default: "",
      "x-cols": 8,
      "x-class": "pl-2"
    },
    replicas: {
      type: "integer",
      title: "Replicas",
      default: 3,
      minimum: 1,
      "x-cols": 2,
      "x-class": "pl-2 pr-2"
    },
    mode: {
      type: "string",
      title: "Mode",
      default: "Grouped",
      enum: ["Grouped", "Standalone"],
      "x-cols": 2,
      "x-class": "pl-2"
    }
  }
};
export { ClusterBasicConfig };
