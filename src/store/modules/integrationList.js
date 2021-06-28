export default {
  integrations: [
    {
      kind: "messaging.activemq",
      type: "sources",
      name: "ActiveMQ",
      category: "Messaging",
      provider: "",
      tags: ["queue", "streaming"],
      schema: {
        required: ["host", "destination"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.activemq"
          },
          host: {
            type: "string",
            title: "Host Address",
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
        "x-class": "vjsf",
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
      kind: "messaging.activemq",
      type: "targets",
      name: "ActiveMQ",
      category: "Messaging",
      provider: "",
      tags: ["queue", "pub/sub"],
      schema: {
        required: ["host"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.activemq"
          },
          host: {
            type: "string",
            title: "Host Address",
            description: "Set Activemq Host Address"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            },
            default_destination: {
              type: "string",
              title: "Default Destination",
              description: "Set Activemq Default Destination"
            }
          }
        }
      }
    },
    {
      kind: "stores.aerospike",
      type: "targets",
      name: "Aerospike",
      category: "Store",
      provider: "",
      tags: ["db"],
      schema: {
        required: ["host", "port"],
        properties: {
          kind: {
            type: "string",
            const: "stores.aerospike"
          },
          host: {
            type: "string",
            title: "Host Address",
            description: "Set Aerospike Host Address"
          },
          port: {
            type: "integer",
            title: "Port",
            default: 3000,
            description: "Set Aerospike Port Address",
            minimum: 0,
            maximum: 65355
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
      kind: "aws.amazonmq",
      type: "sources",
      name: "AmazonMQ",
      category: "Messaging",
      provider: "AWS",
      tags: ["queue", "pub/sub", "cloud", "managed"],
      schema: {
        required: [
          "host",
          "username",
          "password",
          "destination",
          "dynamic_mapping"
        ],
        properties: {
          kind: {
            type: "string",
            const: "aws.amazonmq"
          },
          host: {
            type: "string",
            title: "Host Address",
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
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "aws.amazonmq",
      type: "targets",
      name: "AmazonMQ",
      category: "Messaging",
      provider: "AWS",
      tags: ["queue", "cloud", "mq"],
      schema: {
        required: ["host", "username", "password"],
        properties: {
          kind: {
            type: "string",
            const: "aws.amazonmq"
          },
          host: {
            type: "string",
            title: "Host Address",
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
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            default_destination: {
              type: "string",
              title: "Default Destination",
              description: "Set Amazonmq Default Destination"
            }
          }
        }
      }
    },
    {
      kind: "aws.athena",
      type: "targets",
      name: "Athena",
      category: "Analytics",
      provider: "AWS",
      tags: ["query", "s3", "SQL"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.athena"
          },
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
        "x-class": "vjsf",
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
      kind: "gcp.bigquery",
      type: "targets",
      name: "Big Query",
      category: "Store",
      provider: "GCP",
      tags: ["db", "sql", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.bigquery"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "gcp.bigtable",
      type: "targets",
      name: "Big Table",
      category: "Store",
      provider: "GCP",
      tags: ["db", "sql", "distributed", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials", "instance"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.bigtable"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          },
          instance: {
            type: "string",
            title: "Instance",
            description: "Set Bigtable Instance"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "azure.storage.blob",
      type: "targets",
      name: "Blob",
      category: "Storage",
      provider: "Azure",
      tags: ["object", "db", "cloud", "managed"],
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          kind: {
            type: "string",
            const: "azure.storage.blob"
          },
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
        "x-class": "vjsf",
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
              title: "Try Timout (milliseconds)",
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
      kind: "stores.cassandra",
      type: "targets",
      name: "Cassandra",
      category: "Store",
      provider: "",
      tags: ["db", "sql", "no-sql"],
      schema: {
        required: ["hosts", "port"],
        properties: {
          kind: {
            type: "string",
            const: "stores.cassandra"
          },
          hosts: {
            type: "string",
            title: "Hosts Addresses",
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
        "x-class": "vjsf",
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
              title: "Connect Timeout (Seconds)",
              default: 60,
              description: "Set Cassandra Connection Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            timeout_seconds: {
              type: "integer",
              title: "Operation Timeout (Seconds)",
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
      kind: "gcp.cloudfunctions",
      type: "targets",
      name: "Cloud Functions",
      category: "Serverless",
      provider: "GCP",
      tags: ["faas", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.cloudfunctions"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
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
        "x-class": "vjsf",
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
      kind: "aws.cloudwatch.events",
      type: "targets",
      name: "Cloudwatch Events",
      category: "Observability",
      provider: "AWS",
      tags: ["events", "cloud"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.cloudwatch.events"
          },
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
        "x-class": "vjsf",
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
      name: "Cloudwatch Logs",
      category: "Observability",
      provider: "AWS",
      tags: ["logs", "cloud"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.cloudwatch.logs"
          },
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
        "x-class": "vjsf",
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
      name: "Cloudwatch Metrics",
      category: "Observability",
      provider: "AWS",
      tags: ["metrics", "cloud"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.cloudwatch.metrics"
          },
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
        "x-class": "vjsf",
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
      kind: "stores.cockroachdb",
      type: "targets",
      name: "CockroachDB",
      category: "Store",
      provider: "",
      tags: ["db", "sql", "postgres"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.cockroachdb"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Cockroach Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "stores.consulkv",
      type: "targets",
      name: "Consul",
      category: "Store",
      provider: "",
      tags: ["db", "key-value store", "cache"],
      schema: {
        required: ["address", "tls"],
        properties: {
          kind: {
            type: "string",
            const: "stores.consulkv"
          },
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
            title: "Use TLS",
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
                    title: "Certification Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Certification File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "Wait Time (Milliseconds)",
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
              title: "Use TLS",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "stores.couchbase",
      type: "targets",
      name: "Couchbase",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["url", "bucket"],
        properties: {
          kind: {
            type: "string",
            const: "stores.couchbase"
          },
          url: {
            type: "string",
            title: "Connection URL",
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
        "x-class": "vjsf",
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
              title: "Replication Nodes",
              default: 1,
              description: "Set Couchbase Number Of Nodes To Replicate",
              minimum: 1,
              maximum: 2147483647
            },
            num_to_persist: {
              type: "integer",
              title: "Persistence Nodes",
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
      kind: "stores.crate",
      type: "targets",
      name: "Crate",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.crate"
          },
          connection: {
            type: "string",
            title: "Connection String",
            default: "postgresql://crate@localhost:5432/doc?sslmode=disable",
            description: "Set Crate Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              description: "Set Crate Max Idle Connections",
              minimum: 1,
              maximum: 2147483647
            },
            max_open_connections: {
              type: "integer",
              title: "Max Open Connections",
              default: 100,
              description: "Set Crate Max Open Connections",
              minimum: 1,
              maximum: 2147483647
            },
            connection_max_lifetime_seconds: {
              type: "integer",
              title: "Connection Lifetime (Seconds)",
              default: 3600,
              description: "Set Crate Connection Max Lifetime Seconds",
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
      name: "DynamoDB",
      category: "Store",
      provider: "AWS",
      tags: ["db", "no-sql", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.dynamodb"
          },
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
        "x-class": "vjsf",
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
      kind: "echo",
      type: "targets",
      name: "Echo",
      category: "Testing",
      provider: "",
      tags: [],
      schema: {
        properties: {
          kind: {
            type: "string",
            const: "echo"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "aws.elasticsearch",
      type: "targets",
      name: "Elasticsearch",
      category: "Store",
      provider: "AWS",
      tags: ["db", "log", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key"],
        properties: {
          kind: {
            type: "string",
            const: "aws.elasticsearch"
          },
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
        "x-class": "vjsf",
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
      kind: "stores.elasticsearch",
      type: "targets",
      name: "Elasticsearch",
      category: "Store",
      provider: "",
      tags: ["db", "logs"],
      schema: {
        required: ["urls"],
        properties: {
          kind: {
            type: "string",
            const: "stores.elasticsearch"
          },
          urls: {
            type: "string",
            title: "Connection URLs",
            description: "Set Elastic Search Urls"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Use Sniff",
              default: false,
              description: "Set Elastic Search Sniff Mode"
            }
          }
        }
      }
    },
    {
      kind: "azure.eventhubs",
      type: "targets",
      name: "EventBus",
      category: "Messaging",
      provider: "Azure",
      tags: ["pub/sub", "iot", "cloud", "managed"],
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "entity_path"
        ],
        properties: {
          kind: {
            type: "string",
            const: "azure.eventhubs"
          },
          end_point: {
            type: "string",
            title: "Endpoint",
            description: "Set Eventhubs End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Access Key Name",
            description: "Set Eventhubs Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Access Key",
            description: "Set Eventhubs Shared Access Key"
          },
          entity_path: {
            type: "string",
            title: "Entity Path",
            description: "Set Eventhubs Entity Path"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "azure.eventhubs",
      type: "sources",
      name: "EventsHub",
      category: "Messaging",
      provider: "Azure",
      tags: ["events", "iot", "cloud", "managed"],
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
          kind: {
            type: "string",
            const: "azure.eventhubs"
          },
          end_point: {
            type: "string",
            title: "Endpoint Address",
            description: "Set Eventhubs End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Access Key Name",
            description: "Set Eventhubs Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Access Key",
            description: "Set Eventhubs Shared Access Key"
          },
          entity_path: {
            type: "string",
            title: "Entity Path",
            description: "Set Eventhubs Entity Path"
          },
          partition_id: {
            type: "string",
            title: "Partition ID",
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
                    title: "Timestamp",
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
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "storage.filesystem",
      type: "sources",
      name: "File System",
      category: "Storage",
      provider: "",
      tags: ["s3", "minio"],
      schema: {
        required: ["folders", "bucket_type", "bucket_name"],
        properties: {
          kind: {
            type: "string",
            const: "storage.filesystem"
          },
          folders: {
            type: "string",
            title: "Sync Folders Names",
            description: "Set Local Folders Directory To Scan"
          },
          bucket_type: {
            type: "string",
            title: "Sync Target Type",
            default: "aws",
            description: "Set Remote Target Type",
            enum: [
              "aws",
              "gcp",
              "minio",
              "filesystem",
              "hdfs",
              "azure",
              "pass-through"
            ]
          },
          bucket_name: {
            type: "string",
            title: "Bucket/Directory Destination",
            description: "Set Remote Target Bucket/Dir Name"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            backup_folder: {
              type: "string",
              title: "Set Backup Folder",
              description: "Set Backup Folder After Sending Files"
            },
            concurrency: {
              type: "integer",
              title: "Concurrency",
              default: 1,
              description: "Set Execution Concurrency",
              minimum: 0
            },
            scan_interval: {
              type: "integer",
              title: "Scan Interval",
              default: 5,
              description: "Set Scan Interval In Seconds",
              minimum: 0
            }
          }
        }
      }
    },
    {
      kind: "storage.filesystem",
      type: "targets",
      name: "File System",
      category: "Storage",
      provider: "",
      tags: ["filesystem"],
      schema: {
        required: ["base_path"],
        properties: {
          kind: {
            type: "string",
            const: "storage.filesystem"
          },
          base_path: {
            type: "string",
            title: "Destination Path",
            default: "./",
            description: "Set Local File System Base Path"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "azure.storage.files",
      type: "targets",
      name: "Files",
      category: "Storage",
      provider: "Azure",
      tags: ["filesystem", "db", "cloud", "managed"],
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          kind: {
            type: "string",
            const: "azure.storage.files"
          },
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
        "x-class": "vjsf",
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
              title: "Try Timout (milliseconds)",
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
      kind: "gcp.firebase",
      type: "targets",
      name: "Firebase",
      category: "Store",
      provider: "GCP",
      tags: ["db", "no-sql", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.firebase"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
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
        "x-class": "vjsf",
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
              title: "Is DB Client",
              default: false,
              description: "Set Firebase Target Is A Db Client"
            },
            db_url: {
              type: "string",
              title: "DB URL",
              description: "Set Firebase Db Url"
            },
            messaging_client: {
              type: "boolean",
              title: "Is Messaging Client",
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
      category: "Store",
      provider: "GCP",
      tags: ["db", "no-sql", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.firestore"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "storage.hdfs",
      type: "targets",
      name: "HDFS",
      category: "Storage",
      provider: "",
      tags: ["big data"],
      schema: {
        required: ["address"],
        properties: {
          kind: {
            type: "string",
            const: "storage.hdfs"
          },
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
        "x-class": "vjsf",
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
      kind: "http",
      type: "sources",
      name: "HTTP",
      category: "General",
      provider: "",
      tags: ["rest", "api"],
      schema: {
        required: ["methods", "path"],
        properties: {
          kind: {
            type: "string",
            const: "http"
          },
          methods: {
            type: "string",
            title: "Methods",
            default: "post",
            description: "List Of Supported Methods Separated By A Comma"
          },
          path: {
            type: "string",
            title: "Register Path",
            default: "/*",
            description: "Http Endpoint Path"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            dynamic_mapping: {
              type: "boolean",
              title: "Dynamic Mapping",
              default: false,
              description: "Set Path/Channel Dynamic Mapping"
            }
          }
        }
      }
    },
    {
      kind: "http",
      type: "targets",
      name: "HTTP",
      category: "General",
      provider: "",
      tags: ["rest", "api"],
      schema: {
        required: ["auth_type"],
        properties: {
          kind: {
            type: "string",
            const: "http"
          },
          auth_type: {
            type: "object",
            title: "Authentication Type",
            oneOf: [
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
              },
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
        "x-class": "vjsf",
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
            },
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
      provider: "",
      tags: ["db"],
      schema: {
        required: ["address", "server_name", "ssl"],
        properties: {
          kind: {
            type: "string",
            const: "cache.hazelcast"
          },
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
            title: "SSL",
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
                    title: "Certification Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Certification File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "Use SSL",
              default: false,
              description: "Set If Use Ssl"
            }
          }
        }
      }
    },
    {
      kind: "messaging.ibmmq",
      type: "sources",
      name: "IBM MQ",
      category: "Messaging",
      provider: "",
      tags: ["queue", "streaming"],
      schema: {
        required: [
          "queue_manager_name",
          "host_name",
          "channel_name",
          "username",
          "queue_name"
        ],
        properties: {
          kind: {
            type: "string",
            const: "messaging.ibmmq"
          },
          queue_manager_name: {
            type: "string",
            title: "Queue Manager Name",
            description: "Set Ibm-Mq Queue Manager Name"
          },
          host_name: {
            type: "string",
            title: "Hostname",
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
        "x-class": "vjsf",
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
              title: "TLS Client Auth",
              default: "NONE",
              description: "Set Ibm-Mq Tls Client Auth"
            },
            port_number: {
              type: "integer",
              title: "Port",
              default: 1414,
              description: "Set Ibm-Mq Server Port Number",
              minimum: 1,
              maximum: 65535
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
      kind: "messaging.kafka",
      type: "sources",
      name: "Kafka",
      category: "Messaging",
      provider: "",
      tags: ["pub/sub", "streaming"],
      schema: {
        required: ["brokers", "topics", "consumer_group", "dynamic_mapping"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.kafka"
          },
          brokers: {
            type: "string",
            title: "Brokers Address",
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
        "x-class": "vjsf",
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
              title: "SASL Username",
              description: "Set Sasl Username"
            },
            sasl_password: {
              type: "string",
              title: "SASL Password",
              description: "Set Sasl Password"
            }
          }
        }
      }
    },
    {
      kind: "messaging.kafka",
      type: "targets",
      name: "Kafka",
      category: "Messaging",
      provider: "",
      tags: ["streaming", "pub/sub"],
      schema: {
        required: ["brokers", "topic"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.kafka"
          },
          brokers: {
            type: "string",
            title: "Brokers Address",
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
        "x-class": "vjsf",
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
              title: "SASL Username",
              description: "Set Kafka Username"
            },
            sasl_password: {
              type: "string",
              title: "SASL Password",
              description: "Set Kafka Password"
            }
          }
        }
      }
    },
    {
      kind: "aws.keyspaces",
      type: "targets",
      name: "Keyspaces",
      category: "Store",
      provider: "AWS",
      tags: ["cassandra", "db", "no-sql", "cloud", "managed"],
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
          kind: {
            type: "string",
            const: "aws.keyspaces"
          },
          hosts: {
            type: "string",
            title: "Hosts Addresses",
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
            title: "TLS",
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
        "x-class": "vjsf",
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
              title: "Connect Timeout (Seconds)",
              default: 60,
              description: "Set Keyspaces Connection Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            },
            timeout_seconds: {
              type: "integer",
              title: "Operation Timeout (Seconds)",
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
      kind: "aws.kinesis",
      type: "targets",
      name: "Kinesis",
      category: "Messaging",
      provider: "AWS",
      tags: ["streaming", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.kinesis"
          },
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
        "x-class": "vjsf",
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
      kind: "aws.lambda",
      type: "targets",
      name: "Lambda",
      category: "Serverless",
      provider: "AWS",
      tags: ["faas", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.lambda"
          },
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
        "x-class": "vjsf",
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
      kind: "messaging.mqtt",
      type: "targets",
      name: "MQTT",
      category: "Messaging",
      provider: "",
      tags: ["iot", "pub/sub"],
      schema: {
        required: ["host"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.mqtt"
          },
          host: {
            type: "string",
            title: "Host Address",
            description: "Set Mqtt Broker Host"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Client ID",
              description: "Set Mqtt Broker Client Id"
            },
            default_topic: {
              type: "string",
              title: "Default Topic",
              description: "Set Mqtt Default Topic"
            },
            default_qos: {
              type: "integer",
              title: "Default Qos",
              default: 0,
              description: "Set Mqtt Default Qos Level",
              minimum: 0,
              maximum: 2
            }
          }
        }
      }
    },
    {
      kind: "messaging.mqtt",
      type: "sources",
      name: "MQTT",
      category: "Messaging",
      provider: "",
      tags: ["pub/sub", "iot"],
      schema: {
        required: ["host", "topic", "dynamic_mapping"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.mqtt"
          },
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
        "x-class": "vjsf",
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
              title: "Client ID",
              description: "Set Client Id"
            },
            qos: {
              type: "integer",
              title: "QOS Level",
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
      kind: "aws.msk",
      type: "sources",
      name: "MSK",
      category: "Messaging",
      provider: "AWS",
      tags: ["streaming", "kafka", "cloud", "managed"],
      schema: {
        required: ["brokers", "topics", "consumer_group", "dynamic_mapping"],
        properties: {
          kind: {
            type: "string",
            const: "aws.msk"
          },
          brokers: {
            type: "string",
            title: "Brokers Address",
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
        "x-class": "vjsf",
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
              title: "SASL Username",
              description: "Set Saal Username"
            },
            sasl_password: {
              type: "string",
              title: "SASL Password",
              description: "Set Saal Password"
            }
          }
        }
      }
    },
    {
      kind: "aws.msk",
      type: "targets",
      name: "MSK",
      category: "Messaging",
      provider: "AWS",
      tags: ["kafka", "streaming", "cloud", "managed"],
      schema: {
        required: ["brokers", "topic"],
        properties: {
          kind: {
            type: "string",
            const: "aws.msk"
          },
          brokers: {
            type: "string",
            title: "Brokers Address",
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
        "x-class": "vjsf",
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
              title: "SASL Username",
              description: "Set Msk Username"
            },
            sasl_password: {
              type: "string",
              title: "SASL Password",
              description: "Set Msk Password"
            }
          }
        }
      }
    },
    {
      kind: "azure.stores.azuresql",
      type: "targets",
      name: "MSSQL",
      category: "Store",
      provider: "Azure",
      tags: ["sql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "azure.stores.azuresql"
          },
          connection: {
            type: "string",
            title: "Connection String",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "aws.rds.mssql",
      type: "targets",
      name: "MSSQL",
      category: "Store",
      provider: "AWS",
      tags: ["rds", "sql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "aws.rds.mssql"
          },
          connection: {
            type: "string",
            title: "Connection String",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "stores.mssql",
      type: "targets",
      name: "MSSQL",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.mssql"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Mssql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "aws.rds.mariadb",
      type: "targets",
      name: "MariaDB",
      category: "Store",
      provider: "AWS",
      tags: ["rds", "sql", "mysql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "aws.rds.mariadb"
          },
          connection: {
            type: "string",
            title: "Connection String",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "cache.memcached",
      type: "targets",
      name: "Memcached",
      category: "Cache",
      provider: "",
      tags: ["db"],
      schema: {
        required: ["hosts"],
        properties: {
          kind: {
            type: "string",
            const: "cache.memcached"
          },
          hosts: {
            type: "string",
            title: "Hosts Address",
            description: "Set Memcached Hosts"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Default Timeout (Seconds)",
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
      kind: "gcp.cache.memcached",
      type: "targets",
      name: "Memcached",
      category: "Cache",
      provider: "GCP",
      tags: ["db", "memory-store", "cloud", "managed"],
      schema: {
        required: ["hosts"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.cache.memcached"
          },
          hosts: {
            type: "string",
            title: "Hosts Address",
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
        "x-class": "vjsf",
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
              title: "Default Timeout (Seconds)",
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
      kind: "storage.minio",
      type: "targets",
      name: "Minio",
      category: "Storage",
      provider: "",
      tags: ["s3"],
      schema: {
        required: ["endpoint"],
        properties: {
          kind: {
            type: "string",
            const: "storage.minio"
          },
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
        "x-class": "vjsf",
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
              title: "USE SSL",
              default: true,
              description: "Set Minio Ssl Connection"
            },
            access_key_id: {
              type: "string",
              title: "Access Key ID",
              description: "Set Minio Access Key Id"
            },
            secret_access_key: {
              type: "string",
              title: "Access Key Secret",
              description: "Set Minio Secret Access Key",
              "x-display": "textarea"
            }
          }
        }
      }
    },
    {
      kind: "storage.minio",
      type: "sources",
      name: "Minio",
      category: "Storage",
      provider: "",
      tags: ["s3"],
      schema: {
        required: [
          "endpoint",
          "access_key_id",
          "secret_access_key",
          "bucket_name",
          "folders",
          "target_type"
        ],
        properties: {
          kind: {
            type: "string",
            const: "storage.minio"
          },
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
          },
          access_key_id: {
            type: "string",
            title: "Access Key ID",
            description: "Set Minio Access Key Id"
          },
          secret_access_key: {
            type: "string",
            title: "Access Key Secret",
            description: "Set Minio Secret Access Key",
            "x-display": "textarea"
          },
          bucket_name: {
            type: "string",
            title: "Bucket Source",
            description: "Set Remote Target Bucket/Dir Name"
          },
          folders: {
            type: "string",
            title: "Sync Folders Names",
            default: "/",
            description: "Set Bucket Folders Directory To Scan"
          },
          target_type: {
            type: "string",
            title: "Sync Target Type",
            default: "filesystem",
            description: "Set Remote Target Bucket Type",
            enum: [
              "aws",
              "gcp",
              "minio",
              "filesystem",
              "hdfs",
              "azure",
              "pass-through"
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "USE SSL",
              default: true,
              description: "Set Minio Ssl Connection"
            },
            concurrency: {
              type: "integer",
              title: "Concurrency",
              default: 1,
              description: "Set Execution Concurrency",
              minimum: 0
            },
            scan_interval: {
              type: "integer",
              title: "Scan Interval",
              default: 5,
              description: "Set Scan Interval In Seconds",
              minimum: 0
            }
          }
        }
      }
    },
    {
      kind: "stores.mongodb",
      type: "targets",
      name: "MongoDB",
      category: "Store",
      provider: "",
      tags: ["db", "no-sql"],
      schema: {
        required: ["host", "database", "collection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.mongodb"
          },
          host: {
            type: "string",
            title: "Host address",
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
        "x-class": "vjsf",
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
              title: "Operation Timeout (Seconds)",
              default: 90,
              description: "Set Mongodb Operation Timeout Seconds",
              minimum: 0,
              maximum: 2147483647
            }
          }
        }
      }
    },
    {
      kind: "stores.mysql",
      type: "targets",
      name: "MySQL",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.mysql"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Mysql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "azure.stores.mysql",
      type: "targets",
      name: "MySQL",
      category: "Store",
      provider: "Azure",
      tags: ["sql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "azure.stores.mysql"
          },
          connection: {
            type: "string",
            title: "Connection lifetime String",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "aws.rds.mysql",
      type: "targets",
      name: "MySQL",
      category: "Store",
      provider: "AWS",
      tags: ["rds", "sql", "db", "cloud", "managed"],
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
          kind: {
            type: "string",
            const: "aws.rds.mysql"
          },
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
            title: "Endpoint",
            description: "Set Mysql End Point Address"
          },
          db_port: {
            type: "integer",
            title: "Port",
            default: 3306,
            description: "Set Mysql End Point Port",
            minimum: 0,
            maximum: 65535
          },
          db_user: {
            type: "string",
            title: "Username",
            description: "Set Mysql Db User"
          },
          db_name: {
            type: "string",
            title: "Database",
            description: "Set Mysql Db Name"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "gcp.stores.mysql",
      type: "targets",
      name: "MySQL",
      category: "Store",
      provider: "GCP",
      tags: ["db", "sql", "cloud", "managed"],
      schema: {
        required: ["connection-type"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.stores.mysql"
          },
          "connection-type": {
            type: "object",
            title: "Connection Type",
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
                    title: "Connection String",
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
                    title: "Username",
                    description: "Set Mysql Db User"
                  },
                  db_password: {
                    type: "string",
                    title: "Password",
                    description: "Set Mysql Db Password"
                  },
                  db_name: {
                    type: "string",
                    title: "Database",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "messaging.nats",
      type: "sources",
      name: "NATS",
      category: "Messaging",
      provider: "",
      tags: ["queue", "pub/sub"],
      schema: {
        required: ["url", "subject", "dynamic_mapping", "tls"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.nats"
          },
          url: {
            type: "string",
            title: "URL Address",
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
            title: "TLS",
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
                    title: "Certificate Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Certificate File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "TLS",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "messaging.nats",
      type: "targets",
      name: "NATS",
      category: "Messaging",
      provider: "",
      tags: ["queue", "pub/sub"],
      schema: {
        required: ["url", "tls"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.nats"
          },
          url: {
            type: "string",
            title: "Connection String",
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
                    title: "Certification Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "Certification File": {
                    type: "string",
                    title: "Certification File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "Use TLS",
              default: false,
              description: "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      kind: "serverless.openfaas",
      type: "targets",
      name: "OpenFaas",
      category: "Serverless",
      provider: "",
      tags: ["functions"],
      schema: {
        required: ["gateway", "username", "password"],
        properties: {
          kind: {
            type: "string",
            const: "serverless.openfaas"
          },
          gateway: {
            type: "string",
            title: "Gateway Address",
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
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "stores.percona",
      type: "targets",
      name: "Percona",
      category: "Store",
      provider: "",
      tags: ["db", "sql", "mysql"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.percona"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Percona Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "azure.stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Store",
      provider: "Azure",
      tags: ["sql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "azure.stores.postgres"
          },
          connection: {
            type: "string",
            title: "Connection String",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.postgres"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Postgres Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "aws.rds.postgres",
      type: "targets",
      name: "Postgres",
      category: "Store",
      provider: "AWS",
      tags: ["rds", "sql", "db", "cloud", "managed"],
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
          kind: {
            type: "string",
            const: "aws.rds.postgres"
          },
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
            title: "Endpoint",
            description: "Set Postgres End Point Address"
          },
          db_port: {
            type: "integer",
            title: "Port",
            default: 5432,
            description: "Set Postgres End Point Port",
            minimum: 0,
            maximum: 65535
          },
          db_user: {
            type: "string",
            title: "Username",
            description:
              "Set Postgres Db User(Should Match User Created For Iam Access)"
          },
          db_name: {
            type: "string",
            title: "Database",
            description: "Set Postgres Db Name"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "gcp.stores.postgres",
      type: "targets",
      name: "Postgres",
      category: "Store",
      provider: "GCP",
      tags: ["db", "sql", "cloud", "managed"],
      schema: {
        required: ["connection-type"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.stores.postgres"
          },
          "connection-type": {
            type: "object",
            title: "Connection Type",
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
                    title: "Connection String",
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
                    title: "Username",
                    description: "Set Postgres Db User"
                  },
                  db_password: {
                    type: "string",
                    title: "Password",
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
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "gcp.pubsub",
      type: "targets",
      name: "PubSub",
      category: "Messaging",
      provider: "GCP",
      tags: ["streaming", "cloud", "managed"],
      schema: {
        required: ["project_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.pubsub"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Gcp Project Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
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
        "x-class": "vjsf",
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
      kind: "gcp.pubsub",
      type: "sources",
      name: "PubSub",
      category: "Messaging",
      provider: "GCP",
      tags: ["streaming", "cloud", "managed"],
      schema: {
        required: ["project_id", "subscriber_id", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.pubsub"
          },
          project_id: {
            type: "string",
            title: "Project ID",
            description: "Set Project Id"
          },
          subscriber_id: {
            type: "string",
            title: "Subscriber ID",
            description: "Set Subscriber Id"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "azure.storage.queue",
      type: "targets",
      name: "Queue",
      category: "Storage",
      provider: "Azure",
      tags: ["queue", "messaging", "db", "cloud", "managed"],
      schema: {
        required: ["storage_access_key", "storage_account", "policy"],
        properties: {
          kind: {
            type: "string",
            const: "azure.storage.queue"
          },
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
        "x-class": "vjsf",
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
              title: "Try Timout (milliseconds)",
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
      kind: "messaging.rabbitmq",
      type: "targets",
      name: "RabbitMQ",
      category: "Messaging",
      provider: "",
      tags: ["queue", "pub/sub"],
      schema: {
        required: ["url"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.rabbitmq"
          },
          url: {
            type: "string",
            title: "Url",
            description: "Set Rabbitmq Url Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            default_exchange: {
              type: "string",
              title: "Default Exchange",
              description: "Set Default Exchange For Routing"
            },
            default_topic: {
              type: "string",
              title: "Default Topic",
              description: "Set Default Topic For Routing"
            },
            default_persistence: {
              type: "boolean",
              title: "Default Persistence",
              default: true,
              description: "Set Default Persistence For Routed Message"
            }
          }
        }
      }
    },
    {
      kind: "messaging.rabbitmq",
      type: "sources",
      name: "RabbitMQ",
      category: "Messaging",
      provider: "",
      tags: ["queue", "pub/sub"],
      schema: {
        required: ["url", "queue"],
        properties: {
          kind: {
            type: "string",
            const: "messaging.rabbitmq"
          },
          url: {
            type: "string",
            title: "URL Address",
            description: "Set Rabbitmq Connection String"
          },
          queue: {
            type: "string",
            title: "Queue Name",
            description: "Set Queue Name"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            dynamic_mapping: {
              type: "boolean",
              title: "Dynamic Mapping",
              default: false,
              description: "Set Queue/Channel Dynamic Mapping"
            },
            consumer: {
              type: "string",
              title: "Consumer ID",
              description: "Set Consumer Tag Value"
            },
            requeue_on_error: {
              type: "boolean",
              title: "Requeue on Error",
              default: false,
              description: "Set Requeue Message On Error"
            },
            auto_ack: {
              type: "boolean",
              title: "Automatic Ack",
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
      kind: "cache.redis",
      type: "targets",
      name: "Redis",
      category: "Cache",
      provider: "",
      tags: ["db"],
      schema: {
        required: ["url"],
        properties: {
          kind: {
            type: "string",
            const: "cache.redis"
          },
          url: {
            type: "string",
            title: "Connection String",
            default: "redis://redis.host:6379",
            description: "Set Redis Url"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "gcp.cache.redis",
      type: "targets",
      name: "Redis",
      category: "Cache",
      provider: "GCP",
      tags: ["db", "memory-store", "cloud", "managed"],
      schema: {
        required: ["url"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.cache.redis"
          },
          url: {
            type: "string",
            title: "Connection String",
            default: "redis://localhost:6379",
            description: "Set Redis Url"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "aws.rds.redshift",
      type: "targets",
      name: "Redshift",
      category: "Store",
      provider: "AWS",
      tags: ["rds", "sql", "db", "cloud", "managed"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "aws.rds.redshift"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Redshift Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      name: "Redshift Service",
      category: "Store",
      provider: "AWS",
      tags: ["sql", "db", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.redshift.service"
          },
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
        "x-class": "vjsf",
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
      kind: "stores.rethinkdb",
      type: "targets",
      name: "RethinkDB",
      category: "Store",
      provider: "",
      tags: ["db", "sql"],
      schema: {
        required: ["host", "tls"],
        properties: {
          kind: {
            type: "string",
            const: "stores.rethinkdb"
          },
          host: {
            type: "string",
            title: "Host Address",
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
            title: "Use TLS",
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
                    title: "Certification Key",
                    description: "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  cert_file: {
                    type: "string",
                    title: "Certification File",
                    description: "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
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
              title: "Authentication Key",
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
      kind: "aws.s3",
      type: "sources",
      name: "S3",
      category: "Storage",
      provider: "AWS",
      tags: ["s3"],
      schema: {
        required: [
          "aws_key",
          "aws_secret_key",
          "region",
          "bucket_name",
          "folders",
          "target_type"
        ],
        properties: {
          kind: {
            type: "string",
            const: "aws.s3"
          },
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
          bucket_name: {
            type: "string",
            title: "Bucket Source",
            description: "Set Remote Target Bucket/Dir Name"
          },
          folders: {
            type: "string",
            title: "Sync Folders Names",
            default: "/",
            description: "Set Bucket Folders Directory To Scan"
          },
          target_type: {
            type: "string",
            title: "Sync Target Type",
            default: "filesystem",
            description: "Set Remote Target Bucket Type",
            enum: [
              "aws",
              "gcp",
              "minio",
              "filesystem",
              "hdfs",
              "azure",
              "pass-through"
            ]
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
            concurrency: {
              type: "integer",
              title: "Concurrency",
              default: 1,
              description: "Set Execution Concurrency",
              minimum: 0
            },
            scan_interval: {
              type: "integer",
              title: "Scan Interval",
              default: 5,
              description: "Set Scan Interval In Seconds",
              minimum: 0
            }
          }
        }
      }
    },
    {
      kind: "aws.s3",
      type: "targets",
      name: "S3",
      category: "Storage",
      provider: "AWS",
      tags: ["filesystem", "object", "db", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.s3"
          },
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
        "x-class": "vjsf",
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
            }
          }
        }
      }
    },
    {
      kind: "aws.sns",
      type: "targets",
      name: "SNS",
      category: "Messaging",
      provider: "AWS",
      tags: ["pub/sub", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.sns"
          },
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
        "x-class": "vjsf",
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
      kind: "aws.sqs",
      type: "sources",
      name: "SQS",
      category: "Messaging",
      provider: "AWS",
      tags: ["queue", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region", "queue"],
        properties: {
          kind: {
            type: "string",
            const: "aws.sqs"
          },
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
        "x-class": "vjsf",
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
              title: "Max Messages",
              default: 1,
              description: "Set Max Number Of Messages",
              minimum: 0,
              maximum: 2147483647
            },
            wait_time_seconds: {
              type: "integer",
              title: "Wait time (seconds)",
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
      kind: "aws.sqs",
      type: "targets",
      name: "SQS",
      category: "Messaging",
      provider: "AWS",
      tags: ["queue", "cloud", "managed"],
      schema: {
        required: ["aws_key", "aws_secret_key", "region"],
        properties: {
          kind: {
            type: "string",
            const: "aws.sqs"
          },
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
        "x-class": "vjsf",
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
              title: "Dead Letter Queue",
              description: "Set Sqs Dead Letter Queue"
            },
            default_queue: {
              type: "string",
              title: "Default Queue",
              description: "Set Sqs Default Queue"
            }
          }
        }
      }
    },
    {
      kind: "azure.servicebus",
      type: "sources",
      name: "ServiceBus",
      category: "Messaging",
      provider: "Azure",
      tags: ["queue", "pub/sub", "cloud", "managed"],
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        properties: {
          kind: {
            type: "string",
            const: "azure.servicebus"
          },
          end_point: {
            type: "string",
            title: "Endpoint Address",
            description: "Set Servicebus End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Access Key Name",
            description: "Set Servicebus Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Access Key",
            description: "Set Servicebus Shared Access Key"
          },
          queue_name: {
            type: "string",
            title: "Queue",
            description: "Set Servicebus Queue Name"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "azure.servicebus",
      type: "targets",
      name: "ServiceBus",
      category: "Messaging",
      provider: "Azure",
      tags: ["queue", "pub/sub", "cloud", "managed"],
      schema: {
        required: [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        properties: {
          kind: {
            type: "string",
            const: "azure.servicebus"
          },
          end_point: {
            type: "string",
            title: "Endpoint",
            description: "Set Service Bus End Point"
          },
          shared_access_key_name: {
            type: "string",
            title: "Access Key Name",
            description: "Set Service Bus Shared Access Key Name"
          },
          shared_access_key: {
            type: "string",
            title: "Access Key",
            description: "Set Service Bus Shared Access Key"
          },
          queue_name: {
            type: "string",
            title: "Queue Name",
            description: "Set Service Bus Queue Name"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "stores.singlestore",
      type: "targets",
      name: "Single Store",
      category: "Store",
      provider: "",
      tags: ["db", "sql", "cache"],
      schema: {
        required: ["connection"],
        properties: {
          kind: {
            type: "string",
            const: "stores.singlestore"
          },
          connection: {
            type: "string",
            title: "Connection String",
            description: "Set Memsql Connection String"
          },
          setDefaults: {
            type: "boolean",
            title: "Set Defaults Properties",
            default: true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
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
              title: "Connection Lifetime (Seconds)",
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
      kind: "gcp.spanner",
      type: "targets",
      name: "Spanner",
      category: "Store",
      provider: "GCP",
      tags: ["db", "sql", "cloud", "managed"],
      schema: {
        required: ["db", "credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.spanner"
          },
          db: {
            type: "string",
            title: "Database name",
            description: "Set Gcp Spanner Db"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      kind: "gcp.storage",
      type: "targets",
      name: "Storage",
      category: "Storage",
      provider: "GCP",
      tags: ["db", "filesystem", "object", "cloud", "managed"],
      schema: {
        required: ["credentials"],
        properties: {
          kind: {
            type: "string",
            const: "gcp.storage"
          },
          credentials: {
            type: "string",
            title: "Json Credentials",
            description: "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    }
  ],
  kubemq_sources: {
    title: "Select",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
            sources: {
              type: "string",
              title: "Concurrent Connections",
              default: "1",
              description: "Set How Many Concurrent Queue Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client ID",
              description: "Set Queue Connection Clients Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            batch_size: {
              type: "integer",
              title: "Poll Batch Size",
              default: 1,
              description: "Set How Many Messages Will Pull In One Request",
              minimum: 0
            },
            wait_timeout: {
              type: "integer",
              title: "Wait Timeout (Seconds)",
              default: 5,
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Concurrent Connections",
              default: "1",
              description: "Set How Many Concurrent Query Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client ID",
              description: "Set Query Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Query Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Reconnect Automatically",
              default: true,
              description: "Set Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnection Interval (Seconds)",
              default: 0,
              description: "Set Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnections",
              default: 0,
              description: "Set Auto Reconnection Max Reconnects",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Concurrent Connections",
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
              title: "Client ID",
              description: "Set Events Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Events Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Reconnect Automatically",
              default: true,
              description: "Set Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnection Interval (Seconds)",
              default: 0,
              description: "Set Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnections",
              default: 0,
              description: "Set Auto Reconnection Max Reconnects",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Concurrent Connections",
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
              title: "Client ID",
              description: "Set Events-Store Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Events-Store Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Reconnect Automatically",
              default: true,
              description: "Set Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnection Interval (Seconds)",
              default: 0,
              description: "Set Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnections",
              default: 0,
              description: "Set Auto Reconnection Max Reconnects",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Concurrent Connections",
              default: "1",
              description: "Set How Many Concurrent Commands Sources To Run"
            },
            client_id: {
              type: "string",
              title: "Client ID",
              description: "Set Command Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Command Connection Authentication Token",
              "x-display": "textarea"
            },
            auto_reconnect: {
              type: "boolean",
              title: "Reconnect Automatically",
              default: true,
              description: "Set Auto Reconnection "
            },
            reconnect_interval_seconds: {
              type: "integer",
              title: "Reconnection Interval (Seconds)",
              default: 0,
              description: "Set Auto Reconnection Interval In Seconds ",
              minimum: 0
            },
            max_reconnects: {
              type: "integer",
              title: "Max Reconnections",
              default: 0,
              description: "Set Auto Reconnection Max Reconnects",
              minimum: 0
            }
          }
        }
      }
    ],
    "x-class": "vjsf"
  },
  kubemq_targets: {
    title: "Select",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Client ID",
              description: "Set Queue Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            expiration_seconds: {
              type: "integer",
              title: "Message Expiration (Seconds)",
              default: 0,
              description: "Set Queue Message Expiration In Seconds",
              minimum: 0,
              maximum: 2147483647
            },
            delay_seconds: {
              type: "integer",
              title: "Message Delay (Seconds)",
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
              title: "Max Receive Fails",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Client ID",
              description: "Set Query Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Query Connection Authentication Token",
              "x-display": "textarea"
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout (Seconds)",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Client ID",
              description: "Set Events Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Client ID",
              description: "Set Events-Store Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
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
            title: "KubeMQ gRPC Service Address",
            default: "kubemq-cluster-grpc.kubemq:50000",
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
              title: "Client ID",
              description: "Set Command Connection Client Id"
            },
            auth_token: {
              type: "string",
              title: "Authentication Token",
              description: "Set Command Connection Authentication Token",
              "x-display": "textarea"
            },
            timeout_seconds: {
              type: "integer",
              title: "Timeout (Seconds)",
              default: 60,
              description: "Set Command Request Timeout In Seconds",
              minimum: 1,
              maximum: 2147483647
            }
          }
        }
      }
    ],
    "x-class": "vjsf"
  }
};
