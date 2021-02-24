<template>
  <div>
    <v-row>
      <v-col cols="5" class="flex-grow-0 flex-shrink-0">
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
      </v-col>
      <v-col cols="2">
        <v-list-item-avatar>
          <img src="@/assets/aggregate.svg" alt="aggregate" />
        </v-list-item-avatar>
      </v-col>
      <v-col cols="5">
        <v-card elevation="1">
          <v-list-item>
            <v-list-item-avatar color="accent" size="36">
              <span class="white--text headline">T</span></v-list-item-avatar
            >
            <v-list-item-title class="title">KubeMQ Target</v-list-item-title>
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
      </v-col>
    </v-row>
    <v-row>
      <v-container row class="mt-2">
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="deploy">Deploy</v-btn>
      </v-container>
    </v-row>
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
  name: "AggregateForm",
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
        let binding = new BridgesBinding("aggregate-1");
        binding.Sources = new BridgesBindingData(
          this.sourceModel.properties.kind
        );
        binding.Sources.addConnections(this.sourceModel.properties.connections);
        binding.Targets = new BridgesBindingData(
          this.targetModel.properties.kind
        );
        binding.Targets.addConnection(this.targetModel.properties);
        let bridgeConfig = new BridgesBindingsConfig();
        bridgeConfig.addBinding(binding);
        this.setConfigModel(bridgeConfig);
        this.setStage(4);
      }
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

<style scoped></style>
