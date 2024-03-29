import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterDeploymentConfig extends ClusterConfigItem {
  get clusterName() {
    return this.model.base.clusterName;
  }

  set clusterName(value) {
    this.model.base.clusterName = value;
  }

  get clusterNamespace() {
    return this.model.base.clusterNamespace;
  }

  set clusterNamespace(value) {
    this.model.base.clusterNamespace = value;
  }

  get licenseKey() {
    return this.model.base.licenseKey;
  }

  set licenseKey(value) {
    this.model.base.licenseKey = value;
  }

  get replicas() {
    return this.model.spec.replicas;
  }

  set replicas(value) {
    this.model.spec.replicas = value;
  }

  get mode() {
    return this.model.spec.mode;
  }
  getHasConfigured() {
    return false;
  }
  set mode(value) {
    this.model.spec.mode = value;
  }
  get tags() {
    if (this.model.spec.mode === "Standalone") {
      return [this.model.spec.replicas, this.model.spec.mode];
    } else {
      return [this.model.spec.replicas];
    }
  }

  constructor() {
    super()
      .setName("Deployment")
      .setSchema(clusterDeploymentSchema)
      .setModel(clusterDeploymentModel)
      .setOptions({
        initialValidation: "all",
        rules: {
          validateClusterInput: function(val) {
            if (val) {
              if (val !== val.toLowerCase()) {
                return "Value must be lowercase only";
              }
              if (/\s/.test(val)) {
                return "Value cannot contain white spaces";
              }
            }

            return true;
          },
          isUUID(uuid) {
            let s = "" + uuid;
            s = s.match(
              "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
            );
            if (s === null) {
              return "The provided key is not valid";
            }
            return true;
          }
        }
      });
  }
}

const clusterDeploymentModel = {
  base: {
    clusterName: "kubemq-cluster",
    clusterNamespace: "kubemq",
    licenseKey: ""
  },
  spec: {
    replicas: "3 Nodes",
    mode: "Grouped"
  }
};
const clusterDeploymentSchema = {
  title: "General",
  type: "object",
  required: ["clusterReplicas", "clusterMode", "licenseKey"],
  "x-class": "vjsf pa-0",
  properties: {
    base: {
      type: "object",
      required: ["clusterReplicas", "clusterMode", "licenseKey"],
      "x-class": "vjsf pr-2",
      "x-cols": 6,
      properties: {
        clusterName: {
          type: "string",
          title: "Cluster Name",
          default: "kubemq-cluster",
          "x-cols": 6,
          "x-class": "pl-2",
          "x-rules": ["validateClusterInput"]
        },
        clusterNamespace: {
          type: "string",
          title: "Cluster Namespace",
          default: "kubemq",
          "x-cols": 6,
          "x-class": "pl-2",
          "x-rules": ["validateClusterInput"]
        },
        licenseKey: {
          type: "string",
          title: "Key",
          default: "",
          "x-cols": 12,
          "x-class": "pl-2",
          "x-rules": ["isUUID"]
        }
      }
    },
    spec: {
      type: "object",
      required: ["clusterReplicas", "clusterMode", "licenseKey"],
      "x-class": "vjsf pl-2",
      "x-cols": 6,
      properties: {
        mode: {
          type: "string",
          title: "Mode",
          default: "Grouped",
          "x-display": "radio",
          "x-cols": 6,
          enum: ["Grouped", "Standalone"]
        },
        replicas: {
          type: "string",
          title: "Replicas",
          enum: ["1 Node","3 Nodes", "5 Nodes", "7 Nodes"],
          "x-display": "radio",
          "x-cols": 6,
          default: "3 Nodes"
        }
      }
    }
  }
};
export { ClusterDeploymentConfig };
