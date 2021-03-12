import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterSecurityConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    switch (this.model.mode) {
      case "tls":
        return ["TLS"];
      case "mtls":
        return ["mTLS"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Security")
      .setSchema(clusterSecuritySchema)
      .setModel(clusterSecurityModel);
  }
}

const clusterSecurityModel = {
  mode: "disabled",
  cert: "",
  key: "",
  ca: ""
};
const clusterSecuritySchema = {
  type: "object",
  title: "Select TLS mode",
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
      title: "TLS",
      required: ["cert", "key"],
      properties: {
        mode: {
          type: "string",
          const: "tls"
        },
        cert: {
          type: "string",
          title: "Certificate",
          description: "TLS certification data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        key: {
          type: "string",
          title: "Key",
          description: "TLS key data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        }
      }
    },
    {
      title: "Mutual TLS",
      required: ["cert", "key", "ca"],
      properties: {
        mode: {
          type: "string",
          const: "mtls"
        },
        cert: {
          type: "string",
          title: "Certificate",
          description: "mTLS certification data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        key: {
          type: "string",
          title: "Key",
          description: "mTLS key data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        },
        ca: {
          type: "string",
          title: "Certificate Authority",
          description: "mTLS certification authority (CA) data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true,
            clearable: true
          }
        }
      }
    }
  ]
};
export { ClusterSecurityConfig };
