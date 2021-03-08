const sourceQueueSchema = {
  type: "object",
  required: ["address", "channel"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 12,
      "x-class": "pr-2"
    },
    channel: {
      type: "string",
      title: "Channel",
      default: "",
      description: "Connection Channel",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clientId: {
      type: "string",
      title: "Client ID",
      default: "",
      description: "Connection Client ID",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    authToken: {
      type: "string",
      title: "Client Authentication Token",
      default: "",
      description: "Connection Authentication Token",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    sources: {
      type: "integer",
      title: "Concurrent Connections",
      default: 1,
      description: "How many concurrent channel connections",
      "x-cols": 6,
      "x-class": "pr-2",
      minimum: 1
    },
    maxReQueues: {
      type: "integer",
      title: "Max ReQueues",
      default: 0,
      description: "How many times to re-queue a message on target error",
      "x-cols": 6,
      "x-class": "pl-2",
      minimum: 0
    },
    batchSize: {
      type: "integer",
      title: "Pull Messages Batch Size",
      default: 1,
      description: "How many messages to pull in one request",
      "x-cols": 6,
      "x-class": "pr-2",
      minimum: 1
    },
    waitTimeout: {
      type: "integer",
      title: "Pull Messages Timeout",
      default: 60,
      description: "How long to wait for messages batch size on each request",
      "x-cols": 6,
      "x-class": "pl-2",
      minimum: 1
    }
  }
};
const sourceQueueStreamSchema = {
  type: "object",
  required: ["address", "channel"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    channel: {
      type: "string",
      title: "Channel",
      default: "",
      description: "Connection Channel",
      "x-cols": 6,
      "x-class": "pl-2"
    }
  }
};
const sourceGeneralSchema = {
  type: "object",
  required: ["address", "channel"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    channel: {
      type: "string",
      title: "Channel",
      default: "",
      description: "Connection Channel",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    sources: {
      type: "integer",
      title: "Concurrent Connections",
      default: 1,
      description: "How many concurrent channel connections",
      "x-cols": 6,
      "x-class": "pr-2",
      minimum: 1
    },
    group: {
      type: "string",
      title: "Channel Group",
      default: "",
      description: "Subscribers Group",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clientId: {
      type: "string",
      title: "Client ID",
      default: "",
      description: "Connection Client ID",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    authToken: {
      type: "string",
      title: "Client Authentication Token",
      default: "",
      description: "Connection Authentication Token",
      "x-cols": 6,
      "x-class": "pl-2"
    }
  }
};
const targetPubSubSchema = {
  type: "object",
  required: ["address", "channels"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    channels: {
      type: "string",
      title: "Publish Channels",
      default: "",
      description: "list of publish channels",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clientId: {
      type: "string",
      title: "Client ID",
      default: "",
      description: "Connection Client ID",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    authToken: {
      type: "string",
      title: "Client Authentication Token",
      default: "",
      description: "Connection Authentication Token",
      "x-cols": 6,
      "x-class": "pl-2"
    }
  }
};
const targetRPCSchema = {
  type: "object",
  required: ["address", "channel"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    channel: {
      type: "string",
      title: "Sending Channel",
      default: "",
      description: "Target channel",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clientId: {
      type: "string",
      title: "Client ID",
      default: "",
      description: "Connection Client ID",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    authToken: {
      type: "string",
      title: "Client Authentication Token",
      default: "",
      description: "Connection Authentication Token",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    timeoutSeconds: {
      type: "integer",
      title: "Sending Timout Seconds",
      default: 600,
      description: "How long to wait for a response",
      minimum: 1,
      "x-cols": 6,
      "x-class": "pr-2"
    }
  }
};
const targetQueueSchema = {
  type: "object",
  required: ["address", "channels"],
  properties: {
    address: {
      type: "string",
      title: "KubeMQ Server Address",
      default: "kubemq-cluster-grpc:50000",
      description: "KubeMQ Server Address (gRPC interface)",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    channels: {
      type: "string",
      title: "Sending Channels",
      default: "",
      description: "list of sending channels",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    clientId: {
      type: "string",
      title: "Client ID",
      default: "",
      description: "Connection Client ID",
      "x-cols": 6,
      "x-class": "pr-2"
    },
    authToken: {
      type: "string",
      title: "Client Authentication Token",
      default: "",
      description: "Connection Authentication Token",
      "x-cols": 6,
      "x-class": "pl-2"
    },
    expirationSeconds: {
      type: "integer",
      title: "Message Expiration Seconds",
      default: 0,
      description: "How long the message will be queue before expiration",
      minimum: 0,
      "x-cols": 6,
      "x-class": "pr-2"
    },
    delaySeconds: {
      type: "integer",
      title: "Message Delay Seconds",
      default: 0,
      description: "How long the message will wait before entering the queue",
      minimum: 0,
      "x-cols": 6,
      "x-class": "pl-2"
    },
    maxReceiveCount: {
      type: "integer",
      title: "Max Rejects",
      default: 0,
      description:
        "How many times the message can be rejected before moving to dead-letter queue",
      minimum: 0,
      "x-cols": 6,
      "x-class": "pr-2"
    },
    deadLetterQueue: {
      type: "string",
      title: "Dead-Letter Queue channel",
      default: "",
      description: "Channel name foe dead-letter queue",
      "x-cols": 6,
      "x-class": "pl-2"
    }
  }
};

// export function singleSourceSchema(type) {
//   switch (type) {
//     case "Queue":
//       return sourceQueueSchema;
//     case "Queue Stream":
//       return sourceQueueStreamSchema;
//     default:
//       console.log("here", type);
//       return sourceGeneralSchema;
//   }
// }

export function multiSourceSchema(type) {
  let connections = {
    type: "object",
    properties: {
      connections: {
        type: "array",
        title: "Add Connection",
        items: {}
      }
    }
  };
  switch (type) {
    case "Queue":
      connections.properties.connections.items = sourceQueueSchema;
      break;
    case "Queue Stream":
      connections.properties.connections.items = sourceQueueStreamSchema;
      break;
    default:
      connections.properties.connections.items = sourceGeneralSchema;
      break;
  }
  return connections;
}

export function singleTargetSchema(type) {
  switch (type) {
    case "Queue":
      return targetQueueSchema;
    case "Query":
    case "Command":
      return targetRPCSchema;
    default:
      return targetPubSubSchema;
  }
}

export function multiTargetSchema(type) {
  let connections = {
    type: "object",
    properties: {
      connections: {
        type: "array",
        title: "Add Connection",
        items: {}
      }
    }
  };

  switch (type) {
    case "Queue":
      connections.properties.connections.items = targetQueueSchema;
      break;
    case "Query":
    case "Command":
      connections.properties.connections.items = targetRPCSchema;
      break;
    default:
      connections.properties.connections.items = targetPubSubSchema;
      break;
  }
  return connections;
}

// export function bridgeSchemas() {
//   return {
//     sourceSchema: {
//       type: "object",
//       title: "Select Source Kind",
//       default: "queue",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...singleSourceSchema("queue")
//           }
//         },
//         {
//           title: "Queue Stream",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue-stream"
//             },
//             ...singleSourceSchema("queueStream")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...singleSourceSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...singleSourceSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...singleSourceSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...singleSourceSchema("events-store")
//           }
//         }
//       ]
//     },
//     targetSchema: {
//       type: "object",
//       title: "Select Target Kind",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...singleTargetSchema("queue")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...singleTargetSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...singleTargetSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...singleTargetSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...singleTargetSchema("events-store")
//           }
//         }
//       ]
//     }
//   };
// }
//
// export function replicateSchemas() {
//   return {
//     sourceSchema: {
//       type: "object",
//       title: "Select Source Kind",
//       default: "queue",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...singleSourceSchema("queue")
//           }
//         },
//         {
//           title: "Queue Stream",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue-stream"
//             },
//             ...singleSourceSchema("queueStream")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...singleSourceSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...singleSourceSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...singleSourceSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...singleSourceSchema("events-store")
//           }
//         }
//       ]
//     },
//     targetSchema: {
//       type: "object",
//       title: "Select Target Kind",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...multiTargetSchema("queue")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...multiTargetSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...multiTargetSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...multiTargetSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...multiTargetSchema("events-store")
//           }
//         }
//       ]
//     }
//   };
// }
//
// export function aggregateSchemas() {
//   return {
//     sourceSchema: {
//       type: "object",
//       title: "Select Source Kind",
//       default: "queue",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...multiSourceSchema("queue")
//           }
//         },
//         {
//           title: "Queue Stream",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue-stream"
//             },
//             ...multiSourceSchema("queueStream")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...multiSourceSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...multiSourceSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...multiSourceSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...multiSourceSchema("events-store")
//           }
//         }
//       ]
//     },
//     targetSchema: {
//       type: "object",
//       title: "Select Target Kind",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...singleTargetSchema("queue")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...singleTargetSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...singleTargetSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...singleTargetSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...singleTargetSchema("events-store")
//           }
//         }
//       ]
//     }
//   };
// }
//
// export function transformSchemas() {
//   return {
//     sourceSchema: {
//       type: "object",
//       title: "Select Source Kind",
//       default: "queue",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...multiSourceSchema("queue")
//           }
//         },
//         {
//           title: "Queue Stream",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue-stream"
//             },
//             ...multiSourceSchema("queueStream")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...multiSourceSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...multiSourceSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...multiSourceSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...multiSourceSchema("events-store")
//           }
//         }
//       ]
//     },
//     targetSchema: {
//       type: "object",
//       title: "Select Target Kind",
//       oneOf: [
//         {
//           title: "Queue",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "queue"
//             },
//             ...multiTargetSchema("queue")
//           }
//         },
//         {
//           title: "Query",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "query"
//             },
//             ...multiTargetSchema("query")
//           }
//         },
//         {
//           title: "Command",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "command"
//             },
//             ...multiTargetSchema("command")
//           }
//         },
//         {
//           title: "Events",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events"
//             },
//             ...multiTargetSchema("events")
//           }
//         },
//         {
//           title: "Events Store",
//           properties: {
//             schemaKey: {
//               type: "string",
//               const: "events-store"
//             },
//             ...multiTargetSchema("events-store")
//           }
//         }
//       ]
//     }
//   };
// }
