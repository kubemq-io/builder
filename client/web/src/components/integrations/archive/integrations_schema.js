class IntegrationsSchema {
  get loadedSchema() {
    return this._loadedSchema;
  }
  constructor(loadedSchema) {
    this._schema = loadedSchema;
    this._loadedSchema = loadedSchema;
  }
}
const LoadedSchema = {
  integrations: [
    {
      kind: "http",
      type: "sources",
      name: "Http",
      category: "General",
      provider: "Local",
      schema: {
        required: ["methods", "path", "dynamic_mapping"],
        properties: {
          methods: {
            type: "string",
            title: "Methods",
            default: "post",
            description: "List Of Supported Methods Separated By A Comma"
          },
          path: {
            type: "string",
            title: "Path",
            default: "/*",
            description: "Http Endpoint Path"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Path/Channel Dynamic Mapping"
          }
        }
      }
    },
    {
      kind: "storage.filesystem",
      type: "sources",
      name: "Filesystem",
      category: "Storage",
      provider: "Local",
      schema: {
        required: ["folders", "bucket_type", "bucket_name"],
        properties: {
          folders: {
            type: "string",
            title: "Folders",
            description: "Set Local Folders Directory To Scan"
          },
          bucket_type: {
            type: "string",
            title: "Bucket Type",
            default: "aws",
            description: "Set Remote Target Bucket Type",
            enum: ["aws", "gcp", "minio", "filesystem"]
          },
          bucket_name: {
            type: "string",
            title: "Bucket Name",
            description: "Set Remote Target Bucket/Dir Name"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            concurrency: {
              type: "integer",
              title: "Concurrency",
              default: 1,
              description: "Set Execution Concurrency",
              minimum: 0
            }
          }
        }
      }
    },
    {
      kind: "messaging.rabbitmq",
      type: "sources",
      name: "Rabbitmq",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["url", "dynamic_mapping", "queue"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Rabbitmq Connection String"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Queue/Channel Dynamic Mapping"
          },
          queue: {
            type: "string",
            title: "Queue",
            description: "Set Queue Name"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            consumer: {
              type: "string",
              title: "Consumer",
              description: "Set Consumer Tag Value"
            },
            requeue_on_error: {
              type: "boolean",
              title: "Requeue On Error",
              default: false,
              description: "Set Requeue Message On Error"
            },
            auto_ack: {
              type: "boolean",
              title: "Auto Ack",
              default: false,
              description: "Set Auto Ack Upon Receive Message"
            },
            exclusive: {
              type: "boolean",
              title: "Exclusive",
              default: false,
              description: "Set Exclusive Subscription"
            }
          }
        }
      }
    },
    {
      kind: "messaging.mqtt",
      type: "sources",
      name: "Mqtt",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["host", "topic", "dynamic_mapping"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Mqtt Host:Port Connection"
          },
          topic: {
            type: "string",
            title: "Topic",
            description: "Set Subscribed Topic Name"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Topic/Channel Dynamic Mapping"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Password"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Client Id"
            },
            qos: {
              type: "integer",
              title: "Qos",
              default: 0,
              description: "Set Qos Level",
              minimum: 0,
              maximum: 2
            }
          }
        }
      }
    },
    {
      kind: "messaging.kafka",
      type: "sources",
      name: "Kafka",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["brokers", "topics", "consumer_group", "dynamic_mapping"],
        properties: {
          brokers: {
            type: "string",
            title: "Brokers",
            description: "Set Brokers List"
          },
          topics: {
            type: "string",
            title: "Topics",
            description: "Set Topics List"
          },
          consumer_group: {
            type: "string",
            title: "Consumer Group",
            description: "Set Consumer Group"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Topic/Channel Dynamic Mapping"
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
            sasl_username: {
              type: "string",
              title: "Sasl Username",
              description: "Set Saal Username"
            },
            sasl_password: {
              type: "string",
              title: "Sasl Password",
              description: "Set Saal Password"
            }
          }
        }
      }
    },
    {
      kind: "messaging.activemq",
      type: "sources",
      name: "Activemq",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["host", "destination"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Activemq Host Connection"
          },
          destination: {
            type: "string",
            title: "Destination",
            description: "Set Destination"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Password"
            }
          }
        }
      }
    },
    {
      kind: "messaging.ibmmq",
      type: "sources",
      name: "Ibmmq",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: [
          "queue_manager_name",
          "host_name",
          "channel_name",
          "username",
          "queue_name"
        ],
        properties: {
          queue_manager_name: {
            type: "string",
            title: "Queue Manager Name",
            description: "Set Ibm-Mq Queue Manager Name"
          },
          host_name: {
            type: "string",
            title: "Host Name",
            description: "Set Ibm-Mq Host Name"
          },
          channel_name: {
            type: "string",
            title: "Channel Name",
            description: "Set Ibm-Mq Channel Name The Queue Is Under"
          },
          username: {
            type: "string",
            title: "Username",
            description: "Set Ibm-Mq Username"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          queue_name: {
            type: "string",
            title: "Queue Name",
            description: "Sets Ibm-Mq Queue Name"
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
            certificate_label: {
              type: "string",
              title: "Certificate Label",
              description: "Set Ibm-Mq Certificate Label For Requests"
            },
            tls_client_auth: {
              type: "string",
              title: "Tls Client Auth",
              default: "NONE",
              description: "Set Ibm-Mq Tls Client Auth"
            },
            port_number: {
              type: "integer",
              title: "Port Number",
              default: 1414,
              description: "Set Ibm-Mq Server Port Number",
              minimum: 0,
              maximum: 10000
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Ibm-Mq Password"
            },
            key_repository: {
              type: "string",
              title: "Key Repository",
              description: "Set Ibm-Mq Key Repository A Certificate Store"
            },
            wait_pull_time: {
              type: "integer",
              title: "Wait Pull Time",
              default: 100,
              description: "Set Default Wait Time For Messages (Milliseconds)",
              minimum: 0,
              maximum: 10000000
            }
          }
        }
      }
    },
    {
      kind: "messaging.nats",
      type: "sources",
      name: "Nats",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["url", "subject", "dynamic_mapping", "tls"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Nats Url Connection"
          },
          subject: {
            type: "string",
            title: "Subject",
            description: "Set Subject"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: false,
            description: "Set Subject/Channel Dynamic Mapping"
          },
          tls: {
            type: "object",
            title: "Tls",
            oneOf: [
              {
                title: "True",
                properties: {
                  key: {
                    type: "string",
                    const: "true"
                  },
                  cert_key: {
                    type: "string",
                    title: "Cert Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Cert File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Password"
            },
            token: {
              type: "string",
              title: "Token",
              description: "Set Token"
            },
            tls: {
              type: "boolean",
              title: "Tls",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "aws.sqs",
      type: "sources",
      name: "Sqs",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region", "queue"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          queue: {
            type: "string",
            title: "Queue",
            description: "Set Sqs Queue Name"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Aws Token"
            },
            pull_delay: {
              type: "integer",
              title: "Pull Delay",
              default: 5,
              description: "Set Pull Delay In Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            visibility_timeout: {
              type: "integer",
              title: "Visibility Timeout",
              default: 0,
              description: "Set Visibility Timout",
              minimum: 0,
              maximum: 2147483647
            },
            max_number_of_messages: {
              type: "integer",
              title: "Max Number Of Messages",
              default: 1,
              description: "Set Max Number Of Messages",
              minimum: 0,
              maximum: 2147483647
            },
            wait_time_seconds: {
              type: "integer",
              title: "Wait Time Seconds",
              default: 0,
              description: "Set Wait Time Second",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.amazonmq",
      type: "sources",
      name: "Amazonmq",
      category: "Aws",
      provider: "Local",
      schema: {
        required: [
          "host",
          "username",
          "password",
          "destination",
          "dynamic_mapping"
        ],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Amazonmq Host"
          },
          username: {
            type: "string",
            title: "Username",
            description: "Set Username"
          },
          password: {
            type: "string",
            title: "Password",
            description: "Set Password"
          },
          destination: {
            type: "string",
            title: "Destination",
            description: "Set Destination"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Topic/Channel Dynamic Mapping"
          }
        }
      }
    },
    {
      kind: "aws.msk",
      type: "sources",
      name: "Msk",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["brokers", "topics", "consumer_group", "dynamic_mapping"],
        properties: {
          brokers: {
            type: "string",
            title: "Brokers",
            description: "Set Brokers List"
          },
          topics: {
            type: "string",
            title: "Topics",
            description: "Set Topics List"
          },
          consumer_group: {
            type: "string",
            title: "Consumer Group",
            description: "Set Consumer Group"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          dynamic_mapping: {
            type: "boolean",
            title: "Dynamic Mapping",
            default: true,
            description: "Set Topic/Channel Dynamic Mapping"
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
            sasl_username: {
              type: "string",
              title: "Sasl Username",
              description: "Set Saal Username"
            },
            sasl_password: {
              type: "string",
              title: "Sasl Password",
              description: "Set Saal Password"
            }
          }
        }
      }
    },
    {
      kind: "gcp.pubsub",
      type: "sources",
      name: "Pubsub",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "subscriber_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Project Id"
          },
          subscriber_id: {
            type: "string",
            title: "Subscriber Id",
            description: "Set Subscriber Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        }
      }
    },
    {
      kind: "azure.eventhubs",
      type: "sources",
      name: "Eventhubs",
      category: "Azure",
      provider: "Local",
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "entity_path",
          "partition_id",
          "receive_type",
          "receive_type"
        ],
        properties: {
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Eventhubs End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Shared Access Key Name",
            description: "Set Eventhubs Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Shared Access Key",
            description: "Set Eventhubs Shared Access Key"
          },
          entity_path: {
            type: "string",
            title: "Entity Path",
            description: "Set Eventhubs Entity Path"
          },
          partition_id: {
            type: "string",
            title: "Partition Id",
            description: "Set Eventhubs Partition Id"
          },
          receive_type: {
            type: "object",
            title: "Receive Type",
            oneOf: [
              {
                title: "From Timestamp",
                properties: {
                  key: {
                    type: "string",
                    const: "from_timestamp"
                  },
                  time_stamp: {
                    type: "integer",
                    title: "Time Stamp",
                    default: 0,
                    description:
                      "Set Timestamp To Collect Events From (Rfc3339)",
                    minimum: 0,
                    maximum: 2147483647
                  }
                }
              },
              {
                title: "With Consumer Group",
                properties: {
                  key: {
                    type: "string",
                    const: "with_consumer_group"
                  },
                  consumer_group: {
                    type: "string",
                    title: "Consumer Group",
                    description: "Set The Consumer Group To Collect Events From"
                  }
                }
              },
              {
                title: "With Epoch",
                properties: {
                  key: {
                    type: "string",
                    const: "with_epoch"
                  },
                  epoch: {
                    type: "integer",
                    title: "Epoch",
                    default: 0,
                    description: "Set Timestamp To Collect Events From (Epoch)",
                    minimum: 0,
                    maximum: 2147483647
                  }
                }
              },
              {
                title: "With Prefetch Count",
                properties: {
                  key: {
                    type: "string",
                    const: "with_prefetch_count"
                  },
                  prefetch_count: {
                    type: "integer",
                    title: "Prefetch Count",
                    default: 0,
                    description: "Set Prefetch Count To Collect Events From",
                    minimum: 0,
                    maximum: 2147483647
                  }
                }
              },
              {
                title: "With Starting Offset",
                properties: {
                  key: {
                    type: "string",
                    const: "with_starting_offset"
                  },
                  starting_offset: {
                    type: "string",
                    title: "Starting Offset",
                    description: "Set Starting Offset"
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      kind: "azure.servicebus",
      type: "sources",
      name: "Servicebus",
      category: "Azure",
      provider: "Local",
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        properties: {
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Servicebus End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Shared Access Key Name",
            description: "Set Servicebus Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Shared Access Key",
            description: "Set Servicebus Shared Access Key"
          },
          queue_name: {
            type: "string",
            title: "Queue Name",
            description: "Set Servicebus Queue Name"
          }
        }
      }
    },
    {
      kind: "echo",
      type: "targets",
      name: "Echo",
      category: "General",
      provider: "Local",
      schema: {
        properties: {}
      }
    },
    {
      kind: "cache.redis",
      type: "targets",
      name: "Redis",
      category: "Cache",
      provider: "Local",
      schema: {
        required: ["url"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Redis Url"
          }
        }
      }
    },
    {
      kind: "cache.memcached",
      type: "targets",
      name: "Memcached",
      category: "Cache",
      provider: "Local",
      schema: {
        required: ["hosts"],
        properties: {
          hosts: {
            type: "string",
            title: "Hosts",
            description: "Set Memcached Hosts"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 2,
              description: "Set Memcached Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            default_timeout_seconds: {
              type: "integer",
              title: "Default Timeout Seconds",
              default: 30,
              description: "Set Memcached Default Timeout Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Postgres Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Postgres Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Postgres Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Postgres Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.mysql",
      type: "targets",
      name: "Mysql",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Mysql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mysql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mysql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mysql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.mssql",
      type: "targets",
      name: "Mssql",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Mssql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mssql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mssql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mssql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.mongodb",
      type: "targets",
      name: "Mongodb",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["host", "database", "collection"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Mongodb Host Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          database: {
            type: "string",
            title: "Database",
            description: "Set Mongodb Database"
          },
          collection: {
            type: "string",
            title: "Collection",
            description: "Set Mongodb Collection"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Mongodb Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Mongodb Password"
            },
            params: {
              type: "string",
              title: "Params",
              description: "Set Mongodb Params"
            },
            read_concurrency: {
              type: "string",
              title: "Read Concurrency",
              default: "local",
              description: "Set Mongodb Read Concurrency",
              enum: [
                "local",
                "majority",
                "available",
                "linearizable",
                "snapshot"
              ]
            },
            write_concurrency: {
              type: "string",
              title: "Write Concurrency",
              default: "majority",
              description: "Set Mongodb Write Concurrency",
              enum: ["majority", "Other"]
            },
            operation_timeout_seconds: {
              type: "integer",
              title: "Operation Timeout Seconds",
              default: 30,
              description: "Set Mongodb Operation Timeout Seconds",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.elasticsearch",
      type: "targets",
      name: "Elasticsearch",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["urls"],
        properties: {
          urls: {
            type: "string",
            title: "Urls",
            description: "Set Elastic Search Urls"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Elastic Search Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Elastic Search Password"
            },
            sniff: {
              type: "boolean",
              title: "Sniff",
              default: false,
              description: "Set Elastic Search Sniff Mode"
            }
          }
        }
      }
    },
    {
      kind: "stores.cassandra",
      type: "targets",
      name: "Cassandra",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["hosts", "port"],
        properties: {
          hosts: {
            type: "string",
            title: "Hosts",
            description: "Set Cassandra Hosts Addresses"
          },
          port: {
            type: "integer",
            title: "Port",
            default: 9042,
            description: "Set Cassandra Port",
            minimum: 0,
            maximum: 65535
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Cassandra Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Cassandra Password"
            },
            replication_factor: {
              type: "integer",
              title: "Replication Factor",
              default: 1,
              description: "Set Cassandra Replication Factor",
              minimum: 1,
              maximum: 2147483647
            },
            consistency: {
              type: "string",
              title: "Consistency",
              default: "All",
              description: "Set Cassandra Consistency",
              enum: [
                "All",
                "One",
                "Two",
                "Three",
                "Quorum",
                "LocalQuorum",
                "EachQuorum",
                "LocalOne",
                "Any"
              ]
            },
            default_table: {
              type: "string",
              title: "Default Table",
              description: "Set Cassandra Default Table"
            },
            default_keyspace: {
              type: "string",
              title: "Default Keyspace",
              description: "Set Cassandra Default Keyspace"
            },
            connect_timeout_seconds: {
              type: "integer",
              title: "Connect Timeout Seconds",
              default: 60,
              description: "Set Cassandra Connection Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout Seconds",
              default: 60,
              description: "Set Cassandra Operation Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.couchbase",
      type: "targets",
      name: "Couchbase",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["url", "bucket"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Couchbase Url"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          bucket: {
            type: "string",
            title: "Bucket",
            description: "Set Couchbase Bucket"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Couchbase Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Couchbase Password"
            },
            collection: {
              type: "string",
              title: "Collection",
              description: "Set Couchbase Collection"
            },
            num_to_replicate: {
              type: "integer",
              title: "Num To Replicate",
              default: 1,
              description: "Set Couchbase Number Of Nodes To Replicate",
              minimum: 1,
              maximum: 2147483647
            },
            num_to_persist: {
              type: "integer",
              title: "Num To Persist",
              default: 1,
              description: "Set Couchbase Number Of Node To Persist",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.cockroachdb",
      type: "targets",
      name: "Cockroachdb",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Cockroach Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Cockroach Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Cockroach Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Cockroach Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.percona",
      type: "targets",
      name: "Percona",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Percona Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Percona Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Percona Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Percona Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.aerospike",
      type: "targets",
      name: "Aerospike",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["host", "port"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Aerospike Host Address"
          },
          port: {
            type: "integer",
            title: "Port",
            default: 3000,
            description: "Set Aerospike Port Address",
            minimum: 0,
            maximum: 2147483647
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Aerospike Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Aerospike Password"
            },
            timeout: {
              type: "integer",
              title: "Timeout",
              default: 5,
              description: "Set Aerospike Timeout Seconds",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.rethinkdb",
      type: "targets",
      name: "Rethinkdb",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["host", "tls"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Rethinkdb Host Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          tls: {
            type: "object",
            title: "Tls",
            oneOf: [
              {
                title: "True",
                properties: {
                  key: {
                    type: "string",
                    const: "true"
                  },
                  cert_key: {
                    type: "string",
                    title: "Cert Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Cert File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Rethinkdb Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Rethinkdb Password"
            },
            timeout: {
              type: "integer",
              title: "Timeout",
              default: 5,
              description: "Set Rethinkdb Operation Timeout Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            keep_alive_period: {
              type: "integer",
              title: "Keep Alive Period",
              default: 5,
              description: "Set Rethinkdb Operation Keep Alive Period Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            auth_key: {
              type: "string",
              title: "Auth Key",
              description: "Set Rethinkdb Auth Key"
            },
            hand_shake_version: {
              type: "integer",
              title: "Hand Shake Version",
              default: 0,
              description: "Set Rethinkdb Hand Shake Version",
              minimum: 0,
              maximum: 2147483647
            },
            number_of_retries: {
              type: "integer",
              title: "Number Of Retries",
              default: 0,
              description: "Set Rethinkdb Number Of Retries",
              minimum: 0,
              maximum: 2147483647
            },
            initial_cap: {
              type: "integer",
              title: "Initial Cap",
              default: 0,
              description: "Set Rethinkdb Initial Cap",
              minimum: 0,
              maximum: 2147483647
            },
            max_open: {
              type: "integer",
              title: "Max Open",
              default: 0,
              description: "Set Rethinkdb Max Open Connections",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.singlestore",
      type: "targets",
      name: "Singlestore",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Memsql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Memsql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Memsql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Memsql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.consulkv",
      type: "targets",
      name: "Consulkv",
      category: "Stores",
      provider: "Local",
      schema: {
        required: ["address", "tls"],
        properties: {
          address: {
            type: "string",
            title: "Address",
            description: "Set Consulkv Address Connection"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          tls: {
            type: "object",
            title: "Tls",
            oneOf: [
              {
                title: "True",
                properties: {
                  key: {
                    type: "string",
                    const: "true"
                  },
                  cert_key: {
                    type: "string",
                    title: "Cert Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Cert File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
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
            wait_time: {
              type: "integer",
              title: "Wait Time",
              default: 36000,
              description: "Set Wait Time Milliseconds ",
              minimum: 1,
              maximum: 2147483647
            },
            scheme: {
              type: "string",
              title: "Scheme",
              description: "Set Consulkv Scheme"
            },
            data_center: {
              type: "string",
              title: "Data Center",
              description: "Set Consulkv Data Center"
            },
            token: {
              type: "string",
              title: "Token",
              description: "Set Consulkv Token"
            },
            token_file: {
              type: "string",
              title: "Token File",
              description: "Set Consulkv Token File"
            },
            insecure_skip_verify: {
              type: "boolean",
              title: "Insecure Skip Verify",
              default: false,
              description: "Set If Insecure Skip Verify"
            },
            tls: {
              type: "boolean",
              title: "Tls",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "http",
      type: "targets",
      name: "Http",
      category: "General",
      provider: "Local",
      schema: {
        required: ["auth_type"],
        properties: {
          auth_type: {
            type: "object",
            title: "Auth Type",
            oneOf: [
              {
                title: "Token",
                properties: {
                  key: {
                    type: "string",
                    const: "Token"
                  },
                  "": null,
                  token: {
                    type: "string",
                    title: "Token",
                    description: "Set Auth Token",
                    "x-display": "textarea"
                  }
                }
              },
              {
                title: "Basic",
                properties: {
                  key: {
                    type: "string",
                    const: "Basic"
                  },
                  "": null,
                  username: {
                    type: "string",
                    title: "Username",
                    description: "Set Basic Auth Username"
                  },
                  password: {
                    type: "string",
                    title: "Password",
                    description: "Set Basic Auth Password"
                  }
                }
              },
              {
                title: "No Auth",
                properties: {
                  key: {
                    type: "string",
                    const: "No Auth"
                  },
                  "": null
                }
              }
            ]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            proxy: {
              type: "string",
              title: "Proxy",
              description: "Set Proxy Address"
            },
            root_certificate: {
              type: "string",
              title: "Root Certificate",
              description: "Set Root Certificate",
              "x-display": "textarea"
            },
            client_private_key: {
              type: "string",
              title: "Client Private Key",
              description: "Set Client Private Key",
              "x-display": "textarea"
            },
            client_public_key: {
              type: "string",
              title: "Client Public Key",
              description: "Set Client Public Key",
              "x-display": "textarea"
            },
            default_headers: {
              type: "array",
              title: "Add Default Headers Key Value Pairs",
              items: {
                type: "object",
                required: ["key", "value"],
                properties: {
                  key: {
                    type: "string",
                    title: "Set Key"
                  },
                  value: {
                    type: "string",
                    title: "Set Value"
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      kind: "messaging.mqtt",
      type: "targets",
      name: "Mqtt",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["host"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Mqtt Broker Host"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Mqtt Broker Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Mqtt Broker Password"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Mqtt Broker Client Id"
            }
          }
        }
      }
    },
    {
      kind: "messaging.rabbitmq",
      type: "targets",
      name: "Rabbitmq",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["url"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Rabbitmq Url Connection String"
          }
        }
      }
    },
    {
      kind: "messaging.kafka",
      type: "targets",
      name: "Kafka",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["brokers", "topic"],
        properties: {
          brokers: {
            type: "string",
            title: "Brokers",
            default: "localhost:9092",
            description: "Set Kafka Brokers List"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          topic: {
            type: "string",
            title: "Topic",
            description: "Set Kafka Topic"
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
            sasl_username: {
              type: "string",
              title: "Sasl Username",
              description: "Set Kafka Username"
            },
            sasl_password: {
              type: "string",
              title: "Sasl Password",
              description: "Set Kafka Password"
            }
          }
        }
      }
    },
    {
      kind: "messaging.activemq",
      type: "targets",
      name: "Activemq",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["host"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Activemq Host Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Activemq Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Activemq Password"
            }
          }
        }
      }
    },
    {
      kind: "messaging.nats",
      type: "targets",
      name: "Nats",
      category: "Messaging",
      provider: "Local",
      schema: {
        required: ["url", "tls"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            description: "Set Nats Url Connection"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          tls: {
            type: "object",
            title: "Tls",
            oneOf: [
              {
                title: "True",
                properties: {
                  key: {
                    type: "string",
                    const: "true"
                  },
                  cert_key: {
                    type: "string",
                    title: "Cert Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Cert File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Password"
            },
            token: {
              type: "string",
              title: "Token",
              description: "Set Token"
            },
            tls: {
              type: "boolean",
              title: "Tls",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "cache.hazelcast",
      type: "targets",
      name: "Hazelcast",
      category: "Cache",
      provider: "Local",
      schema: {
        required: ["address", "server_name", "ssl"],
        properties: {
          address: {
            type: "string",
            title: "Address",
            description: "Set Hazelcast Address Connection"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          server_name: {
            type: "string",
            title: "Server Name",
            description: "Set Hazelcast Server Name"
          },
          ssl: {
            type: "object",
            title: "Ssl",
            oneOf: [
              {
                title: "True",
                properties: {
                  key: {
                    type: "string",
                    const: "true"
                  },
                  cert_key: {
                    type: "string",
                    title: "Cert Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Cert File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
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
            username: {
              type: "string",
              title: "Username",
              description: "Set Username"
            },
            password: {
              type: "string",
              title: "Password",
              description: "Set Password"
            },
            connection_attempt_limit: {
              type: "integer",
              title: "Connection Attempt Limit",
              default: 1,
              description: "Set Connections Attempt Limit",
              minimum: 1,
              maximum: 2147483647
            },
            connection_attempt_period: {
              type: "integer",
              title: "Connection Attempt Period",
              default: 5,
              description: "Set Connections Attempt Period In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            connection_timeout: {
              type: "integer",
              title: "Connection Timeout",
              default: 5,
              description: "Set Connections Attempt Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            ssl: {
              type: "boolean",
              title: "Ssl",
              default: false,
              description: "Set If Use Ssl"
            }
          }
        }
      }
    },
    {
      kind: "storage.minio",
      type: "targets",
      name: "Minio",
      category: "Storage",
      provider: "Local",
      schema: {
        required: ["endpoint"],
        properties: {
          endpoint: {
            type: "string",
            title: "Endpoint",
            description: "Set Minio Endpoint Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            use_ssl: {
              type: "boolean",
              title: "Use Ssl",
              default: true,
              description: "Set Minio Ssl Connection"
            },
            access_key_id: {
              type: "string",
              title: "Access Key Id",
              description: "Set Minio Access Key Id"
            },
            secret_access_key: {
              type: "string",
              title: "Secret Access Key",
              description: "Set Minio Secret Access Key",
              "x-display": "textarea"
            }
          }
        }
      }
    },
    {
      kind: "storage.hdfs",
      type: "targets",
      name: "Hdfs",
      category: "Storage",
      provider: "Local",
      schema: {
        required: ["address"],
        properties: {
          address: {
            type: "string",
            title: "Address",
            description: "Set Hadoop Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            user: {
              type: "string",
              title: "User",
              description: "Set Hadoop User"
            }
          }
        }
      }
    },
    {
      kind: "storage.filesystem",
      type: "targets",
      name: "Filesystem",
      category: "Storage",
      provider: "Local",
      schema: {
        required: ["base_path"],
        properties: {
          base_path: {
            type: "string",
            title: "Base Path",
            default: "./",
            description: "Set Local File System Base Path"
          }
        }
      }
    },
    {
      kind: "serverless.openfaas",
      type: "targets",
      name: "Openfaas",
      category: "Serverless",
      provider: "Local",
      schema: {
        required: ["gateway", "username", "password"],
        properties: {
          gateway: {
            type: "string",
            title: "Gateway",
            default: "localhost:27017",
            description: "Set Openfaas Gateway Address"
          },
          username: {
            type: "string",
            title: "Username",
            description: "Set Openfaas Username"
          },
          password: {
            type: "string",
            title: "Password",
            description: "Set Openfaas Password"
          }
        }
      }
    },
    {
      kind: "aws.sqs",
      type: "targets",
      name: "Sqs",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Sqs Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Sqs Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Sqs Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Sqs Token"
            },
            max_receive: {
              type: "integer",
              title: "Max Receive",
              default: 0,
              description: "Set Sqs Max Receive",
              minimum: 0,
              maximum: 2147483647
            },
            retries: {
              type: "integer",
              title: "Retries",
              default: 0,
              description: "Set Sqs Number Of Retries On Failed Send Request",
              minimum: 0,
              maximum: 2147483647
            },
            default_delay: {
              type: "integer",
              title: "Default Delay",
              default: 10,
              description: "Set Sqs Default Delay In Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            dead_letter: {
              type: "string",
              title: "Dead Letter",
              description: "Set Sqs Dead Letter Queue"
            }
          }
        }
      }
    },
    {
      kind: "aws.sns",
      type: "targets",
      name: "Sns",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Sns Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Sns Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Sns Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Sns Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.s3",
      type: "targets",
      name: "S3",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set S3 Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set S3 Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set S3 Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set S3 Token"
            },
            downloader: {
              type: "boolean",
              title: "Downloader",
              default: false,
              description: "Create S3 Downloader Instance"
            },
            uploader: {
              type: "boolean",
              title: "Uploader",
              default: false,
              description: "Create S3 Uploader Instance"
            }
          }
        }
      }
    },
    {
      kind: "aws.amazonmq",
      type: "targets",
      name: "Amazonmq",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["host", "username", "password"],
        properties: {
          host: {
            type: "string",
            title: "Host",
            description: "Set Amazonmq Host"
          },
          username: {
            type: "string",
            title: "Username",
            description: "Set Amazonmq Username"
          },
          password: {
            type: "string",
            title: "Password",
            description: "Set Amazonmq Password"
          }
        }
      }
    },
    {
      kind: "aws.rds.postgres",
      type: "targets",
      name: "Postgres",
      category: "Rds",
      provider: "Aws",
      schema: {
        required: [
          "aws_key",
          "aws_secret_key",
          "region",
          "end_point",
          "db_port",
          "db_user",
          "db_name"
        ],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Postgres Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Postgres Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Postgres Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Postgres End Point Address"
          },
          db_port: {
            type: "integer",
            title: "Db Port",
            default: 5432,
            description: "Set Postgres End Point Port",
            minimum: 0,
            maximum: 65535
          },
          db_user: {
            type: "string",
            title: "Db User",
            description:
              "Set Postgres Db User(Should Match User Created For Iam Access)"
          },
          db_name: {
            type: "string",
            title: "Db Name",
            description: "Set Postgres Db Name"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Postgres Aws Token"
            },
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Postgres Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Postgres Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Postgres Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.rds.mysql",
      type: "targets",
      name: "Mysql",
      category: "Rds",
      provider: "Aws",
      schema: {
        required: [
          "aws_key",
          "aws_secret_key",
          "region",
          "end_point",
          "db_port",
          "db_user",
          "db_name"
        ],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Mysql Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Mysql Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Mysql Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Mysql End Point Address"
          },
          db_port: {
            type: "integer",
            title: "Db Port",
            default: 3306,
            description: "Set Mysql End Point Port",
            minimum: 0,
            maximum: 65535
          },
          db_user: {
            type: "string",
            title: "Db User",
            description: "Set Mysql Db User"
          },
          db_name: {
            type: "string",
            title: "Db Name",
            description: "Set Mysql Db Name"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Mysql Aws Token"
            },
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mysql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mysql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mysql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.rds.mariadb",
      type: "targets",
      name: "Mariadb",
      category: "Rds",
      provider: "Aws",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            default:
              "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
            description: "Set Mariadb Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mariadb Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mariadb Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mariadb Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.rds.mssql",
      type: "targets",
      name: "Mssql",
      category: "Rds",
      provider: "Aws",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            default: "sqlserver://sa:n8x2Nz!f@localhost:1433?database=master",
            description: "Set Mssql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mssql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mssql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mssql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.dynamodb",
      type: "targets",
      name: "Dynamodb",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Dynamodb Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Dynamodb Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Dynamodb Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Dynamodb Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.rds.redshift",
      type: "targets",
      name: "Redshift",
      category: "Rds",
      provider: "Aws",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            description: "Set Redshift Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Redshift Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Redshift Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Redshift Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.redshift.service",
      type: "targets",
      name: "Service",
      category: "Redshift",
      provider: "Aws",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Redshift Service Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Redshift Service Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Redshift Service Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Redshift Service Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.athena",
      type: "targets",
      name: "Athena",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Athena Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Athena Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Athena Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Athena Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.msk",
      type: "targets",
      name: "Msk",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["brokers", "topic"],
        properties: {
          brokers: {
            type: "string",
            title: "Brokers",
            default: "localhost:9092",
            description: "Set Msk Brokers List"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          topic: {
            type: "string",
            title: "Topic",
            description: "Set Msk Topic"
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
            sasl_username: {
              type: "string",
              title: "Sasl Username",
              description: "Set Msk Username"
            },
            sasl_password: {
              type: "string",
              title: "Sasl Password",
              description: "Set Msk Password"
            }
          }
        }
      }
    },
    {
      kind: "aws.lambda",
      type: "targets",
      name: "Lambda",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Lambda Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Lambda Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Lambda Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Lambda Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.kinesis",
      type: "targets",
      name: "Kinesis",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Kinesis Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Kinesis Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Kinesis Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Kinesis Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.keyspaces",
      type: "targets",
      name: "Keyspaces",
      category: "Aws",
      provider: "Local",
      schema: {
        required: [
          "hosts",
          "port",
          "username",
          "password",
          "tls",
          "consistency"
        ],
        properties: {
          hosts: {
            type: "string",
            title: "Hosts",
            description: "Set Keyspaces Hosts Addresses"
          },
          port: {
            type: "integer",
            title: "Port",
            default: 9142,
            description: "Set Keyspaces Port",
            minimum: 0,
            maximum: 65535
          },
          username: {
            type: "string",
            title: "Username",
            description: "Set Keyspaces Username"
          },
          password: {
            type: "string",
            title: "Password",
            description: "Set Keyspaces Password"
          },
          tls: {
            type: "string",
            title: "Tls",
            description: "Set Keyspaces Tls Download Url"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          consistency: {
            type: "string",
            title: "Consistency",
            default: "LocalQuorum",
            description: "Set Keyspaces Consistency",
            enum: ["One", "LocalQuorum", "local_one"]
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
            replication_factor: {
              type: "integer",
              title: "Replication Factor",
              default: 1,
              description: "Set Keyspaces Replication Factor",
              minimum: 1,
              maximum: 2147483647
            },
            proto_version: {
              type: "integer",
              title: "Proto Version",
              default: 4,
              description: "Set Keyspaces Protoversion",
              minimum: 1,
              maximum: 2147483647
            },
            default_table: {
              type: "string",
              title: "Default Table",
              description: "Set Keyspaces Default Table"
            },
            default_keyspace: {
              type: "string",
              title: "Default Keyspace",
              description: "Set Keyspaces Default Keyspace"
            },
            connect_timeout_seconds: {
              type: "integer",
              title: "Connect Timeout Seconds",
              default: 60,
              description: "Set Keyspaces Connection Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout Seconds",
              default: 60,
              description: "Set Keyspaces Operation Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "aws.elasticsearch",
      type: "targets",
      name: "Elasticsearch",
      category: "Aws",
      provider: "Local",
      schema: {
        required: ["aws_key", "aws_secret_key"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Elastic Search Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Elastic Search Aws Secret Key"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Elastic Search Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.cloudwatch.events",
      type: "targets",
      name: "Events",
      category: "Cloudwatch",
      provider: "Aws",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Cloudwatch-Events Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Cloudwatch-Events Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Cloudwatch-Events Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Cloudwatch-Events Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.cloudwatch.logs",
      type: "targets",
      name: "Logs",
      category: "Cloudwatch",
      provider: "Aws",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Cloudwatch-Logs Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Cloudwatch-Logs Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Cloudwatch-Logs Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Cloudwatch-Logs Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "aws.cloudwatch.metrics",
      type: "targets",
      name: "Metrics",
      category: "Cloudwatch",
      provider: "Aws",
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          aws_key: {
            type: "string",
            title: "Aws Key",
            description: "Set Cloudwatch-Metrics Aws Key"
          },
          aws_secret_key: {
            type: "string",
            title: "Aws Secret Key",
            description: "Set Cloudwatch-Metrics Aws Secret Key"
          },
          region: {
            type: "string",
            title: "Region",
            description: "Set Cloudwatch-Metrics Aws Region"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            token: {
              type: "string",
              title: "Token",
              description: "Set Cloudwatch-Metrics Aws Token"
            }
          }
        }
      }
    },
    {
      kind: "gcp.pubsub",
      type: "targets",
      name: "Pubsub",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            retries: {
              type: "integer",
              title: "Retries",
              default: 0,
              description: "Set Pubsub Sending Message Retries",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "gcp.cache.redis",
      type: "targets",
      name: "Redis",
      category: "Cache",
      provider: "Gcp",
      schema: {
        required: ["url"],
        properties: {
          url: {
            type: "string",
            title: "Url",
            default: "redis://localhost:6379",
            description: "Set Redis Url"
          }
        }
      }
    },
    {
      kind: "gcp.cache.memcached",
      type: "targets",
      name: "Memcached",
      category: "Cache",
      provider: "Gcp",
      schema: {
        required: ["hosts"],
        properties: {
          hosts: {
            type: "string",
            title: "Hosts",
            default: "localhost:11211",
            description: "Set Memcached Hosts"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 2,
              description: "Set Memcached Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            default_timeout_seconds: {
              type: "integer",
              title: "Default Timeout Seconds",
              default: 30,
              description: "Set Memcached Default Timeout Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "gcp.stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Stores",
      provider: "Gcp",
      schema: {
        required: ["connection-type"],
        properties: {
          "connection-type": {
            type: "object",
            title: "Connection-Type",
            oneOf: [
              {
                title: "Direct",
                properties: {
                  key: {
                    type: "string",
                    const: "Direct"
                  },
                  "": null,
                  connection: {
                    type: "string",
                    title: "Connection",
                    default:
                      "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable",
                    description: "Set Postgres Connection String"
                  }
                }
              },
              {
                title: "Proxy",
                properties: {
                  key: {
                    type: "string",
                    const: "Proxy"
                  },
                  "": null,
                  instance_connection_name: {
                    type: "string",
                    title: "Instance Connection Name",
                    description: "Set Postgres Instance Connection Name"
                  },
                  db_user: {
                    type: "string",
                    title: "Db User",
                    description: "Set Postgres Db User"
                  },
                  db_password: {
                    type: "string",
                    title: "Db Password",
                    description: "Set Postgres Db Password"
                  },
                  credentials: {
                    type: "string",
                    title: "Credentials",
                    description: "Set Postgres Credentials",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Postgres Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Postgres Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Postgres Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "gcp.stores.mysql",
      type: "targets",
      name: "Mysql",
      category: "Stores",
      provider: "Gcp",
      schema: {
        required: ["connection-type"],
        properties: {
          "connection-type": {
            type: "object",
            title: "Connection-Type",
            oneOf: [
              {
                title: "Direct",
                properties: {
                  key: {
                    type: "string",
                    const: "Direct"
                  },
                  "": null,
                  connection: {
                    type: "string",
                    title: "Connection",
                    default:
                      "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
                    description: "Set Mysql Connection String"
                  }
                }
              },
              {
                title: "Proxy",
                properties: {
                  key: {
                    type: "string",
                    const: "Proxy"
                  },
                  "": null,
                  instance_connection_name: {
                    type: "string",
                    title: "Instance Connection Name",
                    description: "Set Mysql Instance Connection Name"
                  },
                  db_user: {
                    type: "string",
                    title: "Db User",
                    description: "Set Mysql Db User"
                  },
                  db_password: {
                    type: "string",
                    title: "Db Password",
                    description: "Set Mysql Db Password"
                  },
                  db_name: {
                    type: "string",
                    title: "Db Name",
                    description: "Sets Mysql Db Name"
                  },
                  credentials: {
                    type: "string",
                    title: "Credentials",
                    description: "Set Mysql Credentials",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mysql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mysql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mysql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "gcp.spanner",
      type: "targets",
      name: "Spanner",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["db", "credentials"],
        properties: {
          db: {
            type: "string",
            title: "Db",
            description: "Set Gcp Spanner Db"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        }
      }
    },
    {
      kind: "gcp.bigtable",
      type: "targets",
      name: "Bigtable",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials", "instance"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          },
          instance: {
            type: "string",
            title: "Instance",
            description: "Set Bigtable Instance"
          }
        }
      }
    },
    {
      kind: "gcp.bigquery",
      type: "targets",
      name: "Bigquery",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        }
      }
    },
    {
      kind: "gcp.cloudfunctions",
      type: "targets",
      name: "Cloudfunctions",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            location_match: {
              type: "boolean",
              title: "Location Match",
              default: true,
              description: "Set Cloud Functions Location Match"
            }
          }
        }
      }
    },
    {
      kind: "gcp.firebase",
      type: "targets",
      name: "Firebase",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            auth_client: {
              type: "boolean",
              title: "Auth Client",
              default: false,
              description: "Set Firebase Target Is A Auth Client"
            },
            db_client: {
              type: "boolean",
              title: "Db Client",
              default: false,
              description: "Set Firebase Target Is A Db Client"
            },
            db_url: {
              type: "string",
              title: "Db Url",
              description: "Set Firebase Db Url"
            },
            messaging_client: {
              type: "boolean",
              title: "Messaging Client",
              default: false,
              description: "Set Firebase Target Is A Messaging Client"
            }
          }
        }
      }
    },
    {
      kind: "gcp.firestore",
      type: "targets",
      name: "Firestore",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          project_id: {
            type: "string",
            title: "Project Id",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        }
      }
    },
    {
      kind: "gcp.storage",
      type: "targets",
      name: "Storage",
      category: "Gcp",
      provider: "Local",
      schema: {
        required: ["credentials"],
        properties: {
          credentials: {
            type: "string",
            title: "Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        }
      }
    },
    {
      kind: "azure.stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Stores",
      provider: "Azure",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            default:
              "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable",
            description: "Set Postgres Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Postgres Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Postgres Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Postgres Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.stores.mysql",
      type: "targets",
      name: "Mysql",
      category: "Stores",
      provider: "Azure",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            default:
              "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
            description: "Set Mysql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Mysql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Mysql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Mysql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.stores.azuresql",
      type: "targets",
      name: "Azuresql",
      category: "Stores",
      provider: "Azure",
      schema: {
        required: ["connection"],
        properties: {
          connection: {
            type: "string",
            title: "Connection",
            default:
              "server=server.net;user id=test;password=test;port=1433;database=initial_db;",
            description: "Set Azuresql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_idle_connections: {
              type: "integer",
              title: "Max Idle Connections",
              default: 10,
              description: "Set Azuresql Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Azuresql Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Max Lifetime Seconds",
              default: 3600,
              description: "Set Azuresql Connection Max Lifetime Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.storage.queue",
      type: "targets",
      name: "Queue",
      category: "Storage",
      provider: "Azure",
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          storage_access_key: {
            type: "string",
            title: "Storage Access Key",
            description: "Set Queue Storage Storage Access Key"
          },
          storage_account: {
            type: "string",
            title: "Storage Account",
            description: "Set Queue Storage Storage Account"
          },
          policy: {
            type: "string",
            title: "Policy",
            default: "retry_policy_exponential",
            description: "Set Queue Storage Retry Policy",
            enum: ["retry_policy_exponential", "retry_policy_fixed"]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_tries: {
              type: "integer",
              title: "Max Tries",
              default: 1,
              description: "Set Queue Storage Max Tries",
              minimum: 1,
              maximum: 2147483647
            },
            try_timeout: {
              type: "integer",
              title: "Try Timeout",
              default: 1000,
              description: "Set Queue Storage Try Timeout In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            retry_delay: {
              type: "integer",
              title: "Retry Delay",
              default: 60000,
              description: "Set Queue Storage Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            max_retry_delay: {
              type: "integer",
              title: "Max Retry Delay",
              default: 180000,
              description: "Set Queue Storage Max Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.storage.files",
      type: "targets",
      name: "Files",
      category: "Storage",
      provider: "Azure",
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          storage_access_key: {
            type: "string",
            title: "Storage Access Key",
            description: "Set Files Storage Storage Access Key"
          },
          storage_account: {
            type: "string",
            title: "Storage Account",
            description: "Set Files Storage Storage Account"
          },
          policy: {
            type: "string",
            title: "Policy",
            default: "exponential",
            description: "Set Files Storage Retry Policy",
            enum: ["exponential", "fixed"]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_tries: {
              type: "integer",
              title: "Max Tries",
              default: 1,
              description: "Set Files Storage Max Tries",
              minimum: 1,
              maximum: 2147483647
            },
            try_timeout: {
              type: "integer",
              title: "Try Timeout",
              default: 1000,
              description: "Set Files Storage Try Timeout In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            retry_delay: {
              type: "integer",
              title: "Retry Delay",
              default: 60000,
              description: "Set Files Storage Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            max_retry_delay: {
              type: "integer",
              title: "Max Retry Delay",
              default: 180000,
              description: "Set Files Storage Max Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.storage.blob",
      type: "targets",
      name: "Blob",
      category: "Storage",
      provider: "Azure",
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          storage_access_key: {
            type: "string",
            title: "Storage Access Key",
            description: "Set Blob Storage Storage Access Key"
          },
          storage_account: {
            type: "string",
            title: "Storage Account",
            description: "Set Blob Storage Storage Account"
          },
          policy: {
            type: "string",
            title: "Policy",
            default: "exponential",
            description: "Set Blob Storage Retry Policy",
            enum: ["exponential", "fixed"]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            max_tries: {
              type: "integer",
              title: "Max Tries",
              default: 1,
              description: "Set Blob Storage Max Tries",
              minimum: 1,
              maximum: 2147483647
            },
            try_timeout: {
              type: "integer",
              title: "Try Timeout",
              default: 1000,
              description: "Set Blob Storage Try Timeout In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            retry_delay: {
              type: "integer",
              title: "Retry Delay",
              default: 60000,
              description: "Set Blob Storage Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            },
            max_retry_delay: {
              type: "integer",
              title: "Max Retry Delay",
              default: 180000,
              description: "Set Blob Storage Max Retry Delay In Milliseconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "azure.servicebus",
      type: "targets",
      name: "Servicebus",
      category: "Azure",
      provider: "Local",
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        properties: {
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Service Bus End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Shared Access Key Name",
            description: "Set Service Bus Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Shared Access Key",
            description: "Set Service Bus Shared Access Key"
          },
          queue_name: {
            type: "string",
            title: "Queue Name",
            description: "Set Service Bus Queue Name"
          }
        }
      }
    },
    {
      kind: "azure.eventhubs",
      type: "targets",
      name: "Eventhubs",
      category: "Azure",
      provider: "Local",
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "entity_path"
        ],
        properties: {
          end_point: {
            type: "string",
            title: "End Point",
            description: "Set Eventhubs End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Shared Access Key Name",
            description: "Set Eventhubs Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Shared Access Key",
            description: "Set Eventhubs Shared Access Key"
          },
          entity_path: {
            type: "string",
            title: "Entity Path",
            description: "Set Eventhubs Entity Path"
          }
        }
      }
    }
  ],
  kubemq_sources: {
    title: "schema",
    type: "object",
    oneOf: [
      {
        type: "object",
        title: "Kubemq Queue",
        required: ["address", "channel", "max_requeue"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.queue"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Queue Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          },
          max_requeue: {
            type: "integer",
            title: "Max Requeue",
            default: 0,
            description:
              "Set How Many Time To Requeue A Requests Do To Target Error",
            minimum: 0
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
            sources: {
              type: "string",
              title: "Sources",
              default: "1",
              description: "Set How Many Concurrent Queue Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Queue Connection Clients Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            response_channel: {
              type: "string",
              title: "Response Channel",
              description: "Set Queue Response Channel"
            },
            batch_size: {
              type: "integer",
              title: "Batch Size",
              default: 1,
              description: "Set How Many Messages Will Pull In One Request",
              minimum: 0
            },
            wait_timeout: {
              type: "integer",
              title: "Wait Timeout",
              default: 60,
              description:
                "Set How Long To Wait In Seconds For Messages During Pull Of Requests",
              minimum: 0
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Queue-Stream",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.queue-stream"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Queue Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            response_channel: {
              type: "string",
              title: "Response Channel",
              description: "Set Queue Response Channel"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Queue Connection Clients Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            visibility_timeout_seconds: {
              type: "integer",
              title: "Visibility Timeout Seconds",
              default: 3600,
              description:
                "Set Long To Set Visibility In Seconds To Keep The Message During Processing",
              minimum: 0
            },
            wait_timeout: {
              type: "integer",
              title: "Wait Timeout",
              default: 3600,
              description:
                "Set How Long To Wait In Seconds For Messages During Pull Of Requests",
              minimum: 0
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Query",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.query"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Query Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            group: {
              type: "string",
              title: "Group",
              description: "Set Query Channel Group"
            },
            sources: {
              type: "string",
              title: "Sources",
              default: "1",
              description: "Set How Many Concurrent Query Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Query Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Query Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Auto Reconnect",
              default: true,
              description: "Set Query Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnect Interval Seconds",
              default: 0,
              description: "Set Query Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnects",
              default: 0,
              description: "Set Query Auto Reconnection Max Reconnects",
              minimum: 0
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Events",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.events"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Events Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            group: {
              type: "string",
              title: "Group",
              description: "Set Events Channel Group"
            },
            sources: {
              type: "string",
              title: "Sources",
              default: "1",
              description: "Set How Many Concurrent Events Sources To Run"
            },
            response_channel: {
              type: "string",
              title: "Response Channel",
              description: "Set Events Response Channel"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Events Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Events Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Auto Reconnect",
              default: true,
              description: "Set Query Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnect Interval Seconds",
              default: 0,
              description: "Set Query Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnects",
              default: 0,
              description: "Set Query Auto Reconnection Max Reconnects",
              minimum: 0
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Events-Store",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.events-store"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Events-Store Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            group: {
              type: "string",
              title: "Group",
              description: "Set Events-Store Channel Group"
            },
            sources: {
              type: "string",
              title: "Sources",
              default: "1",
              description: "Set How Many Concurrent Events Sources To Run"
            },
            response_channel: {
              type: "string",
              title: "Response Channel",
              description: "Set Events-Store Response Channel"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Events-Store Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Events-Store Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Auto Reconnect",
              default: true,
              description: "Set Query Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnect Interval Seconds",
              default: 0,
              description: "Set Query Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnects",
              default: 0,
              description: "Set Query Auto Reconnection Max Reconnects",
              minimum: 0
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Command",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.command"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Command Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
            group: {
              type: "string",
              title: "Group",
              description: "Set Command Channel Group"
            },
            sources: {
              type: "string",
              title: "Sources",
              default: "1",
              description: "Set How Many Concurrent Commands Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client Id",
              description: "Set Command Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Command Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Auto Reconnect",
              default: true,
              description: "Set Query Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnect Interval Seconds",
              default: 0,
              description: "Set Query Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnects",
              default: 0,
              description: "Set Query Auto Reconnection Max Reconnects",
              minimum: 0
            }
          }
        }
      }
    ]
  },
  kubemq_targets: {
    title: "schema",
    type: "object",
    oneOf: [
      {
        type: "object",
        title: "Kubemq Queue",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.queue"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Queue Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
              title: "Client Id",
              description: "Set Queue Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            expiration_seconds: {
              type: "integer",
              title: "Expiration Seconds",
              default: 0,
              description: "Set Queue Message Expiration In Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            delay_seconds: {
              type: "integer",
              title: "Delay Seconds",
              default: 0,
              description: "Set Queue Message Delay In Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            dead_letter_queue: {
              type: "string",
              title: "Dead Letter Queue",
              description: "Set Queue Message Dead-Letter Queue Name"
            },
            max_receive_count: {
              type: "integer",
              title: "Max Receive Count",
              default: 0,
              description:
                "Set Queue Message Max Fails Retries Route To Dead-Letter",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Query",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.query"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Query Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
              title: "Client Id",
              description: "Set Query Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Query Connection Authentication Token",
              "x-display": "textarea"
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout Seconds",
              default: 60,
              description: "Set Query Request Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Events",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.events"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Events Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
              title: "Client Id",
              description: "Set Events Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Events Connection Authentication Token",
              "x-display": "textarea"
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Events-Store",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.events-store"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Events Store Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
              title: "Client Id",
              description: "Set Events-Store Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Events-Store Connection Authentication Token",
              "x-display": "textarea"
            }
          }
        }
      },
      {
        type: "object",
        title: "Kubemq Command",
        required: ["address", "channel"],
        properties: {
          kind: {
            type: "string",
            const: "kubemq.command"
          },
          address: {
            type: "string",
            title: "Address",
            description: "Set Kubemq Grpc Endpoint Address"
          },
          channel: {
            type: "string",
            title: "Channel",
            description: "Set Events Channel"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
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
              title: "Client Id",
              description: "Set Command Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Auth Token",
              description: "Set Command Connection Authentication Token",
              "x-display": "textarea"
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout Seconds",
              default: 60,
              description: "Set Command Request Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    ]
  }
};

export { IntegrationsSchema, LoadedSchema };
