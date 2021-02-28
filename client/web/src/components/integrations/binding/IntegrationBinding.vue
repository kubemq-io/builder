<template>
  <v-card rounded dense elevation="1" class="container">
    <div class="header" @click="toggle">
      <div class="header content">
        <IntegrationBindingHeader :binding="binding" />
      </div>
      <div class="header action">
        <v-list-item-action>
          <v-icon v-if="isOpen">mdi-arrow-down</v-icon>
          <v-icon v-if="!isOpen">mdi-arrow-right</v-icon>
        </v-list-item-action>
      </div>
    </div>
    <div v-if="isOpen" class="content">
      <IntegrationBindingContent :binding="binding"></IntegrationBindingContent>
    </div>
  </v-card>
</template>

<script>
import { IntegrationBinding } from "@/components/integrations/binding/binding";
import IntegrationBindingHeader from "@/components/integrations/binding/IntegrationBindingHeader";
import IntegrationBindingContent from "@/components/integrations/binding/IntegrationBindingContent";

export default {
  name: "IntegrationBinding",
  components: { IntegrationBindingContent, IntegrationBindingHeader },

  data: function() {
    return {
      isOpen: false,
      dialog: false,
      binding: {}
    };
  },
  created() {
    this.binding = initBinding();
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
const initBinding = function() {
  let b = new IntegrationBinding();
  b.header.type = "source";
  b.header.name = "Redis Source";
  b.header.category = "cache";
  b.header.provider = "Local";

  b.content.iconType = "source";
  b.content.binding = "source-redis-1";
  b.content.sourceTitle = "KubeMQ Source";
  b.content.sourceSchema = sourceSchema;

  b.content.targetTitle = "Redis Target";
  b.content.targetSchema = targetSchema;

  return b;
};

const sourceSchema = {
  title: "Source Type",
  type: "object",

  oneOf: [
    {
      title: "Queue",
      required: ["address", "channel"],
      properties: {
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "source.queue"
        },
        channel: {
          type: "string",
          title: "Source Channel",
          default: "queues"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          max_requeue: {
            type: "integer",
            title: "Max ReQueues",
            default: 0,
            description: "How many times to re-queue a message on target error",
            minimum: 0
          },
          batch_size: {
            type: "integer",
            title: "Pull Messages Batch Size",
            default: 1,
            description: "How many messages to pull in one request",
            minimum: 1
          },
          wait_timeout: {
            type: "integer",
            title: "Pull Messages Timeout",
            default: 60,
            description:
              "How long to wait for messages batch size on each request",
            minimum: 1
          }
        }
      }
    },
    {
      title: "Queue Stream",
      required: ["address", "channel"],
      properties: {
        kind: {
          type: "string",
          const: "source.queue-stream"
        },
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },

        channel: {
          type: "string",
          title: "Source Channel",
          default: "queues"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          visibilityTimeoutSeconds: {
            type: "integer",
            title: "Message Visibility Timeout (Seconds)",
            default: 3600,
            description:
              "How low to hold processing message before sending back to queue",
            minimum: 1
          },
          wait_timeout: {
            type: "integer",
            title: "Push Messages Timeout",
            default: 60,
            description: "How long to wait for a message",
            minimum: 1
          }
        }
      }
    },
    {
      title: "Query",
      required: ["address", "channel"],
      properties: {
        kind: {
          type: "string",
          const: "source.query"
        },
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },

        channel: {
          type: "string",
          title: "Source Channel",
          default: "queries"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          group: {
            type: "string",
            title: "Channel Group",
            default: "",
            description: "Subscribers Group"
          }
        }
      }
    },
    {
      title: "Command",
      required: ["address", "channel"],
      properties: {
        kind: {
          type: "string",
          const: "source.command"
        },
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },

        channel: {
          type: "string",
          title: "Source Channel",
          default: "commands"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          group: {
            type: "string",
            title: "Channel Group",
            default: "",
            description: "Subscribers Group"
          }
        }
      }
    },
    {
      title: "Events",
      required: ["address", "channel"],
      properties: {
        kind: {
          type: "string",
          const: "source.events"
        },
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },

        channel: {
          type: "string",
          title: "Source Channel",
          default: "events"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          group: {
            type: "string",
            title: "Channel Group",
            default: "",
            description: "Subscribers Group"
          }
        }
      }
    },
    {
      title: "Events Store",
      properties: {
        kind: {
          type: "string",
          const: "source.events-store"
        },
        address: {
          type: "string",
          title: "Source Address",
          default: "kubemq-cluster-grpc:50000"
        },

        channel: {
          type: "string",
          title: "Source Channel",
          default: "events-store"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          sources: {
            type: "integer",
            title: "Concurrent Connections",
            default: 1,
            description: "How many concurrent channel connections",
            minimum: 1
          },
          group: {
            type: "string",
            title: "Channel Group",
            default: "",
            description: "Subscribers Group"
          }
        }
      }
    }
  ]
};
const targetSchema = {
  title: "Target Type",
  type: "object",
  required: ["address", "channel", "kind"],
  oneOf: [
    {
      title: "Queue",
      properties: {
        address: {
          type: "string",
          title: "Target Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "target.queue"
        },
        channel: {
          type: "string",
          title: "Target Channel",
          default: "queues"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          expirationSeconds: {
            type: "integer",
            title: "Message Expiration (Seconds)",
            default: 0,
            description: "How long the message will be queue before expiration",
            minimum: 0
          },
          delaySeconds: {
            type: "integer",
            title: "Message Delay (Seconds)",
            default: 0,
            description:
              "How long the message will wait before entering the queue",
            minimum: 0
          },
          maxReceiveCount: {
            type: "integer",
            title: "Max Rejects",
            default: 0,
            description:
              "How many times the message can be rejected before moving to dead-letter queue",
            minimum: 0
          },
          deadLetterQueue: {
            type: "string",
            title: "Dead-Letter Queue Channel",
            default: "",
            description: "Channel name for dead-letter queue"
          }
        }
      }
    },
    {
      title: "Query",
      properties: {
        address: {
          type: "string",
          title: "Target Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "target.query"
        },
        channel: {
          type: "string",
          title: "Target Channel",
          default: "queries"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },
      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          timeoutSeconds: {
            type: "integer",
            title: "Sending Timout (Seconds)",
            default: 600,
            description: "How long to wait for a response",
            minimum: 1
          }
        }
      }
    },
    {
      title: "Command",
      properties: {
        address: {
          type: "string",
          title: "Target Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "target.command"
        },
        channel: {
          type: "string",
          title: "Target Channel",
          default: "commands"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          },
          timeoutSeconds: {
            type: "integer",
            title: "Sending Timout (Seconds)",
            default: 600,
            description: "How long to wait for a response",
            minimum: 1
          }
        }
      }
    },
    {
      title: "Events",
      properties: {
        address: {
          type: "string",
          title: "Target Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "target.events"
        },
        channel: {
          type: "string",
          title: "Target Channel",
          default: "events"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          }
        }
      }
    },
    {
      title: "Events Store",
      properties: {
        address: {
          type: "string",
          title: "Target Address",
          default: "kubemq-cluster-grpc:50000"
        },
        kind: {
          type: "string",
          const: "target.events-store"
        },
        channel: {
          type: "string",
          title: "Target Channel",
          default: "events-store"
        },
        setDefaults: {
          type: "boolean",
          "x-display": "checkbox",
          title: "Set Default Properties",
          default: true
        }
      },

      if: {
        required: ["setDefaults"],
        properties: {
          setDefaults: {
            const: false
          }
        }
      },
      then: {
        properties: {
          client_id: {
            type: "string",
            title: "Client ID",
            default: "",
            description: "Connection Client ID"
          },
          auth_token: {
            type: "string",
            title: "Client Authentication Token",
            default: "",
            description: "Connection Authentication Token"
          }
        }
      }
    }
  ]
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 0 0 0 0;
  margin-top: 2px;
}

.header {
  flex-basis: 20%;
  display: flex;
  background: white;
  align-content: space-between;
  cursor: pointer;
}
.header .content {
  flex-basis: 95%;
}
.header.action {
  flex-basis: 5%;
}
.content {
  flex-basis: 80%;
  background: white;
}
</style>
