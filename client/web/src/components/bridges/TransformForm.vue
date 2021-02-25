<template>
  <div>
    <div
      class="container d-flex justify-center align-center align-content-center"
    >
      <div class="card">
        <v-card elevation="1">
          <v-list-item>
            <v-list-item-avatar color="secondary" size="36">
              <span class="white--text headline">S</span></v-list-item-avatar
            >
            <v-list-item-title class="title">KubeMQ Sources</v-list-item-title>
          </v-list-item>
          <v-card-text>
            <v-form ref="formBridgeSource" v-model="sourceValid">
              <v-jsf
                v-model="sourceModel.properties"
                :schema="sourceSchema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div id="icon" class="icon">
        <img src="@/assets/transform.svg" alt="transform" />
      </div>
      <div class="card">
        <v-card>
          <v-list-item>
            <v-list-item-avatar color="accent" size="36">
              <span class="white--text headline">T</span></v-list-item-avatar
            >
            <v-list-item-title class="title">KubeMQ Targets</v-list-item-title>
          </v-list-item>
          <v-card-text>
            <v-form ref="formBridgeTarget" v-model="targetValid">
              <v-jsf
                v-model="targetModel.properties"
                :schema="targetSchema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="container d-flex justify-space-between">
      <div>
        <v-btn color="primary" @click="back">Back</v-btn>
      </div>
      <div>
        <v-btn color="primary" @click="deploy">Deploy</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import VJsf from "@koumoul/vjsf/lib/VJsf";
import { mapMutations } from "vuex";
import {
  BridgesBindingsConfig,
  BridgesBinding,
  BridgesBindingData
} from "@/components/bridges/bridges";

export default {
  name: "TransformForm",
  components: { VJsf },
  data: function() {
    return {
      sourceValid: false,
      targetValid: false,
      sourceModel: {
        properties: {
          kind: ""
        }
      },
      sourceSchema: sourceSchema,
      targetModel: {
        properties: {
          kind: ""
        }
      },
      targetSchema: targetSchema,
      options: {
        rules: {
          validateConnections: function(array) {
            if (array.length === 0) {
              return "At least one connection must be defined";
            } else {
              return true;
            }
          }
        }
      }
    };
  },
  computed: {
    selectedConfig: function() {
      return this.$store.state.stages.selectedConfig;
    }
  },

  methods: {
    ...mapMutations(["setStage", "setConfigModel"]),
    deploy: function() {
      if (
        this.$refs.formBridgeSource.validate() &&
        this.$refs.formBridgeTarget.validate()
      ) {
        let binding = new BridgesBinding("transform-1");
        binding.Sources = new BridgesBindingData(
          this.sourceModel.properties.kind
        );
        binding.Sources.addConnections(this.sourceModel.properties.connections);
        binding.Targets = new BridgesBindingData(
          this.targetModel.properties.kind
        );
        binding.Targets.addConnections(this.targetModel.properties.connections);
        let bridgeConfig = new BridgesBindingsConfig();
        bridgeConfig.addBinding(binding);
        this.setConfigModel(bridgeConfig);
        this.setStage(4);
      }
    },
    back: function() {
      this.setStage(2);
    }
  }
};

const sourceSchema = {
  title: "Source Type",
  type: "object",
  oneOf: [
    {
      title: "Queue",
      required: ["address", "channel"],
      properties: {
        kind: {
          type: "string",
          const: "source.queue"
        },
        connections: {
          type: "array",
          title: "Add Queue Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Queue Source Connection",
            properties: {
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
                max_requeue: {
                  type: "integer",
                  title: "Max ReQueues",
                  default: 0,
                  description:
                    "How many times to re-queue a message on target error",
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
        connections: {
          type: "array",
          title: "Add Queue Stream Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Queue Stream Source Connection",
            properties: {
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
        connections: {
          type: "array",
          title: "Add Query Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Query Source Connection",
            properties: {
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
        connections: {
          type: "array",
          title: "Add Command Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Command Source Connection",
            properties: {
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
        connections: {
          type: "array",
          title: "Add Events Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Events Source Connection",
            properties: {
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
        connections: {
          type: "array",
          title: "Add Events Store Source Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Events Store Source Connection",
            properties: {
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
        }
      }
    }
  ]
};
const targetSchema = {
  title: "Target Type",
  type: "object",
  oneOf: [
    {
      title: "Queue",
      required: ["connections"],
      properties: {
        kind: {
          type: "string",
          const: "target.queue"
        },
        connections: {
          type: "array",
          title: "Add Target Queue Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Queue Target Connection",
            properties: {
              address: {
                type: "string",
                title: "Target Address",
                default: "kubemq-cluster-grpc:50000"
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
                  description:
                    "How long the message will be queue before expiration",
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
          }
        }
      }
    },
    {
      title: "Query",
      properties: {
        kind: {
          type: "string",
          const: "target.query"
        },
        connections: {
          type: "array",
          title: "Add Target Query Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Query Target Connection",
            properties: {
              address: {
                type: "string",
                title: "Target Address",
                default: "kubemq-cluster-grpc:50000"
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
          }
        }
      }
    },
    {
      title: "Command",
      properties: {
        kind: {
          type: "string",
          const: "target.command"
        },
        connections: {
          type: "array",
          title: "Add Target Command Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Command Target Connection",
            properties: {
              address: {
                type: "string",
                title: "Target Address",
                default: "kubemq-cluster-grpc:50000"
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
          }
        }
      }
    },
    {
      title: "Events",
      properties: {
        kind: {
          type: "string",
          const: "target.events"
        },
        connections: {
          type: "array",
          title: "Add Target Events Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Events Target Connection",
            properties: {
              address: {
                type: "string",
                title: "Target Address",
                default: "kubemq-cluster-grpc:50000"
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
          }
        }
      }
    },
    {
      title: "Events Store",
      properties: {
        kind: {
          type: "string",
          const: "target.events-store"
        },
        connections: {
          type: "array",
          title: "Add Target Events Store Connection",
          "x-rules": ["validateConnections"],
          items: {
            type: "object",
            required: ["address", "channel"],
            description: "Events Store Target Connection",
            properties: {
              address: {
                type: "string",
                title: "Target Address",
                default: "kubemq-cluster-grpc:50000"
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
        }
      }
    }
  ]
};
</script>

<style scoped>
.card {
  flex-basis: 95%;
}
.icon {
  flex-basis: 10%;
  margin: 10px;
}
</style>
