import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";

class ClusterQueuesConfig extends ClusterConfigItem {
  getHasConfigured() {
    return this.model.mode !== "default";
  }
  get tags() {
    if (this.getHasConfigured()) {
      return ["Queues"];
    }
    return [];
  }
  constructor() {
    super()
      .setName("Queues")
      .setSchema(clusterQueuesSchema)
      .setModel(clusterQueuesModel)
      .setOptions(clusterQueueOptions);
  }
}
const clusterQueueOptions = {
  initialValidation: "all",
  idPrefix: "queue"
};
const clusterQueuesModel = {
  mode: "default",
  maxReceiveMessagesRequest: 1024,
  maxReQueues: 1024,
  maxExpirationSeconds: 43200,
  maxDelaySeconds: 43200,
  defaultWaitTimeoutSeconds: 1,
  maxWaitTimeoutSeconds: 3600,
  defaultVisibilitySeconds: 60,
  maxVisibilitySeconds: 43200
};
const clusterQueuesSchema = {
  title: "Queue Settings",
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
      title: "Set Queue Settings",
      properties: {
        mode: {
          type: "string",
          const: "queueSettings"
        },
        maxReceiveMessagesRequest: {
          type: "integer",
          title: "Max Receive Messages Request",
          default: 1024,
          description: "Set max of sending / receiving batch of queue message",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxReQueues: {
          type: "integer",
          title: "Max ReQueues",
          default: 1024,
          description: "Set max retires to receive message before discard",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        maxExpirationSeconds: {
          type: "integer",
          title: "Max Expiration Seconds",
          default: 43200,
          description: "Set max expiration allowed for message",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxDelaySeconds: {
          type: "integer",
          title: "Max Delay Seconds",
          default: 43200,
          description: "Set max delay seconds allowed for message",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },

        defaultWaitTimeoutSeconds: {
          type: "integer",
          title: "Default Wait Timeout Seconds",
          default: 1,
          description: "Maximum number of subscribers allowed, 0 - unlimited",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxWaitTimeoutSeconds: {
          type: "integer",
          title: "Max Wait Timeout Seconds",
          default: 3600,
          description: "Set max wait timeout allowed for message",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        },
        defaultVisibilitySeconds: {
          type: "integer",
          title: "Default Visibility Seconds",
          default: 60,
          description:
            "Set default time of hold received message before returning to queue",
          "x-cols": 6,
          "x-class": "pr-2",
          minimum: 1
        },
        maxVisibilitySeconds: {
          type: "integer",
          title: "Max Visibility Seconds",
          default: 43200,
          description:
            "Set max time of hold received message before returning to queue",
          "x-cols": 6,
          "x-class": "pl-2",
          minimum: 1
        }
      }
    }
  ]
};
export { ClusterQueuesConfig };
