import lodashObject from "lodash/object";
import lodashString from "lodash/string";

class Bridges {}

class BridgesBinding {
  get Middlewares() {
    return this._middlewares;
  }
  set Middlewares(value) {
    this._middlewares = value;
  }

  get BindingType() {
    return this._bindingType;
  }

  get Type() {
    return this._type;
  }

  get Title() {
    return `${this.SourceSide.Name} - ${this.TargetSide.Name} Bridge`;
  }

  get Name() {
    if (this._name !== "") {
      return this._name;
    }
    const sourceName = lodashString.upperFirst(this.SourceSide.Name);
    const targetName = lodashString.upperFirst(this.TargetSide.Name);
    this._name = `${sourceName}-${targetName}`;
    return this._name;
  }

  set Name(value) {
    this._name = value;
  }

  get SourceSide() {
    return this._sourceSide;
  }

  get TargetSide() {
    return this._targetSide;
  }

  constructor() {
    this._type = "";
    this._bindingType = "";
    this._name = `bridge-${makeid(5)}`;
    this._sourceSide = new BridgesBindingSide("Source", "Bridge", {});
    this._targetSide = new BridgesBindingSide("Target", "Bridge", {});
    this._middlewares = new BridgesBindingMiddlewares();
  }

  SetType(value) {
    this._type = value;
    return this;
  }

  SetBindingType(value) {
    this._bindingType = value;
    return this;
  }

  GetConfiguration() {
    return {
      name: this._name,
      properties: this._middlewares.getConfiguration(),
      sources: this.SourceSide.GetSideConfiguration(),
      targets: this.TargetSide.GetSideConfiguration()
    };
  }
}
class BridgesBindingSideConnection {
  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  get channel() {
    return this._channel;
  }

  set channel(value) {
    this._channel = value;
  }
  constructor(connection, channel) {
    this._address = connection;
    this._channel = channel;
  }
}
class BridgesBindingSide {
  get Type() {
    if (this._model.kind) {
      switch (this._model.kind) {
        case "target.command":
        case "source.command":
          return "Command";
        case "target.query":
        case "source.query":
          return "Query";
        case "target.events":
        case "source.events":
          return "Events";
        case "target.events-store":
        case "source.events-store":
          return "Events Store";
        case "target.queue":
        case "source.queue":
          return "Queues";
        case "source.queue-stream":
          return "Queue Stream";
      }
    }
    return this._category;
  }

  get Model() {
    return this._model;
  }

  set Model(value) {
    this._model = value;
  }

  get IsModelValid() {
    return this._isModelValid;
  }

  set IsModelValid(value) {
    this._isModelValid = value;
  }

  get Schema() {
    return this._schema;
  }

  getConnections() {
    const list = [];
    this.GetSideConfiguration().connections.forEach(value => {
      list.push(new BridgesBindingSideConnection(value.address, value.channel));
    });
    return list;
  }
  GetSideConfiguration() {
    const sideKind = this._model.kind;
    const sideProperties = lodashObject.omit(this._model, [
      "kind",
      "setDefaults"
    ]);

    return {
      kind: sideKind,
      connections: sideProperties.connections
    };
  }

  constructor(side, name) {
    this._name = name;
    this._title = `${name} ${side}`;
    this._initial = name.charAt(0).toUpperCase();
    if (side === "Source") {
      this._schema = sourceSchema;
    } else {
      this._schema = targetSchema;
    }
    this._type = "";
    this._model = {};
    this._isModelValid = false;
    this._category = "";
  }
}
class BridgesBindingMiddlewares {
  hasData() {
    return (
      (this._logging.Model.logLevel !== "No Logging" &&
        this._logging.Model.logLevel !== undefined) ||
      this._retries.Model.mode === "enabled" ||
      this._rate.Model.mode === "enabled"
    );
  }

  get Logging() {
    return this._logging;
  }

  set Logging(value) {
    this._logging = value;
  }

  get Retries() {
    return this._retries;
  }

  set Retries(value) {
    this._retries = value;
  }

  get Rate() {
    return this._rate;
  }

  set Rate(value) {
    this._rate = value;
  }

  getConfiguration() {
    let config = {
      log_level: undefined,
      retry_attempts: undefined,
      retry_delay_milliseconds: undefined,
      retry_max_jitter_milliseconds: undefined,
      retry_delay_type: undefined,
      rate_per_second: undefined
    };
    switch (this._logging.Model.logLevel) {
      case "Debug Level":
        config.log_level = "debug";
        break;
      case "Info Level":
        config.log_level = "info";
        break;
      case "Error Level":
        config.log_level = "error";
        break;
    }

    if (this._retries.Model.mode === "enabled") {
      config.retry_attempts = this._retries.Model.attempts;
      config.retry_delay_milliseconds = this._retries.Model.delay;
      config.retry_delay_type = this._retries.Model.type;
      config.retry_max_jitter_milliseconds = this._retries.Model.jitter;
    }

    if (this._rate.Model.mode === "enabled") {
      config.rate_per_second = this._rate.Model.perSeconds;
    }

    return config;
  }

  constructor() {
    this._logging = bridgesLoggingModel;
    this._retries = bridgesRetriesModel;
    this._rate = bridgesRateLimiterModel;
  }
}
let bridgesLoggingModel = {
  Schema: {
    "x-class": "vjsf",
    properties: {
      required: ["logLevel"],
      logLevel: {
        type: "string",
        title: "Log Level",
        default: "No Logging",
        enum: ["No Logging", "Debug Level", "Info Level", "Error Level"]
      }
    }
  },
  Model: {},
  IsValid: false
};
let bridgesRetriesModel = {
  Schema: {
    type: "object",
    title: "Select Retries Mode",
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
        properties: {
          mode: {
            type: "string",
            const: "enabled"
          },
          type: {
            type: "string",
            title: "Type",
            default: "Fixed",
            enum: ["Fixed", "Back-Off", "Random"],
            "x-cols": "6",
            "x-class": "pr-2"
          },
          attempts: {
            type: "integer",
            title: "Max Attempts",
            default: 1,
            minimum: 1,
            "x-class": "pl-2",
            "x-cols": "6"
          },
          delay: {
            type: "integer",
            title: "Delay (Milliseconds)",
            default: 100,
            minimum: 100,
            "x-class": "pr-2",
            "x-cols": "6"
          },
          jitter: {
            type: "integer",
            title: "Jitter (Milliseconds)",
            default: 100,
            minimum: 100,
            "x-class": "pl-2",
            "x-cols": "6"
          }
        }
      }
    ]
  },
  Model: {
    mode: "disabled"
  },
  IsValid: false
};
let bridgesRateLimiterModel = {
  Schema: {
    type: "object",
    title: "Select Rate Limiter Mode",
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
        properties: {
          mode: {
            type: "string",
            const: "enabled"
          },
          perSeconds: {
            type: "integer",
            title: "Rate Per Seconds",
            description: "Limit requests, 0 - unlimited",
            default: 0,
            minimum: 0,
            "x-cols": "6"
          }
        }
      }
    ]
  },
  Model: {
    mode: "disabled"
  },
  IsValid: false
};

const sourceSchema = {
  title: "Source Type",
  type: "object",
  "x-class": "vjsf",
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
  "x-class": "vjsf",
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

const makeid = function(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
export { Bridges };
export { BridgesBinding };
export { BridgesBindingSideConnection };

export { BridgesBindingMiddlewares };
