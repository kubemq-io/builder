import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterAuthenticationConfig extends ClusterConfigItem {
  get mode() {
    return this.model.mode;
  }
  get publicKeyType() {
    return this.model.publicKeyType;
  }
  get publicKey() {
    return this.model.publicKey;
  }

  getHasConfigured() {
    return this.model.mode !== "disabled";
  }
  get tags() {
    if (this.mode === "enabled") {
      return ["Authentication"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Authentication")
      .setSchema(clusterAuthenticationSchema)
      .setModel(clusterAuthenticationModel)
      .setOptions(clusterAuthenticationOptions);
  }
}
const clusterAuthenticationOptions = {};
const clusterAuthenticationModel = {
  publicKeyType: "HS256",
  publicKey: null,
  mode: "disabled"
};
const clusterAuthenticationSchema = {
  type: "object",
  title: "Mode",
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
      title: "Enabled",
      required: ["publicKeyType", "publicKey"],
      properties: {
        mode: {
          type: "string",
          const: "enabled"
        },
        publicKeyType: {
          type: "string",
          title: "Public Key Type",
          default: "HS256",
          "x-cols": "6",
          enum: [
            "HS256",
            "HS384",
            "HS512",
            "RS256",
            "RS384",
            "RS512",
            "ES256",
            "ES384",
            "ES512"
          ],
          description: "JWT public key signing method"
        },
        publicKey: {
          type: "string",
          title: "Public Key Data",
          description: "JWT public key data",
          "x-display": "textarea",
          "x-props": {
            "auto-grow": true,
            dense: true
          }
        }
      }
    }
  ]
};
export { ClusterAuthenticationConfig };
