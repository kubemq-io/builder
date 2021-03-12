import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterStoreConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "default";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Store"];
    }
    return [];
  }

  constructor() {
    super()
      .setName("Store")
      .setSchema(clusterStoreSchema)
      .setModel(clusterStoreModel);
  }
}

const clusterStoreModel = {
  mode: "default",
  maxChannels: 0,
  maxSubscribers: 0,
  maxMessages: 0,
  maxChannelSize: 0,
  messagesRetentionMinutes: 1440,
  purgeInactiveMinutes: 1440
};
const clusterStoreSchema = {
  title: "Store Settings",
  type: "object",
  "x-class": "vjsf",
  oneOf: [
    {
      title: "Default",
      properties: {
        mode: {
          type: "string",
          const: "default"
        }
      }
    },
    {
      title: "Set Store Settings",
      properties: {
        mode: {
          type: "string",
          const: "storeSettings"
        },
        maxChannels: {
          type: "integer",
          title: "Max Allowed Channels",
          default: 0,
          description: "Maximum number of channels allowed, 0 - unlimited",
          minimum: 0,
          "x-cols": 6
        },
        maxSubscribers: {
          type: "integer",
          title: "Max Allowed Subscribers",
          default: 0,
          description: "Maximum number of subscribers allowed, 0 - unlimited",
          "x-cols": 6,
          minimum: 0
        },
        maxMessages: {
          type: "integer",
          title: "Max Allowed Messages",
          default: 0,
          description:
            "Maximum number of message allowed in one channel, 0 - unlimited",
          minimum: 0,
          "x-cols": 6
        },
        maxChannelSize: {
          type: "integer",
          title: "Max Channel size (Bytes)",
          default: 0,
          description:
            "Maximum size in bytes allowed for each channel, 0 - unlimited",
          "x-cols": 6,
          minimum: 0
        },
        messagesRetentionMinutes: {
          type: "integer",
          title: "Messages Retention (Minutes)",
          default: 1440,
          description: "MSet message retention time in minutes, 0 - unlimited",
          minimum: 0,
          "x-cols": 6
        },
        purgeInactiveMinutes: {
          type: "integer",
          title: "Delete Inactive (Minutes)",
          default: 1440,
          description: "Set time in minutes of channel inactivity to delete",
          "x-cols": 6,

          minimum: 0
        }
      }
    }
  ]
};
export { ClusterStoreConfig };
