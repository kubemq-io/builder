export default {
  "integrations": [
    {
      "kind": "messaging.activemq",
      "type": "sources",
      "name": "ActiveMQ",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "streaming"
      ],
      "schema": {
        "required": [
          "host",
          "destination"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.activemq"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Activemq Host Connection"
          },
          "destination": {
            "type": "string",
            "title": "Destination",
            "description": "Set Destination"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Password"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.activemq",
      "type": "targets",
      "name": "ActiveMQ",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "host"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.activemq"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Activemq Host Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Activemq Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Activemq Password"
            },
            "default_destination": {
              "type": "string",
              "title": "Default Destination",
              "description": "Set Activemq Default Destination"
            }
          }
        }
      }
    },
    {
      "kind": "stores.aerospike",
      "type": "targets",
      "name": "Aerospike",
      "category": "Store",
      "provider": "",
      "tags": [
        "db"
      ],
      "schema": {
        "required": [
          "host",
          "port"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.aerospike"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Aerospike Host Address"
          },
          "port": {
            "type": "integer",
            "title": "Port",
            "default": 3000,
            "description": "Set Aerospike Port Address",
            "minimum": 0,
            "maximum": 65355
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Aerospike Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Aerospike Password"
            },
            "timeout": {
              "type": "integer",
              "title": "Timeout",
              "default": 5,
              "description": "Set Aerospike Timeout Seconds",
              "minimum": 0,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.amazonmq",
      "type": "targets",
      "name": "AmazonMQ",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "queue",
        "cloud",
        "mq"
      ],
      "schema": {
        "required": [
          "host",
          "username",
          "password"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.amazonmq"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Amazonmq Host"
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Set Amazonmq Username"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "description": "Set Amazonmq Password"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "default_destination": {
              "type": "string",
              "title": "Default Destination",
              "description": "Set Amazonmq Default Destination"
            }
          }
        }
      }
    },
    {
      "kind": "aws.amazonmq",
      "type": "sources",
      "name": "AmazonMQ",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "queue",
        "pub/sub",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "host",
          "username",
          "password",
          "destination",
          "dynamic_mapping"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.amazonmq"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Amazonmq Host"
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Set Username"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "description": "Set Password"
          },
          "destination": {
            "type": "string",
            "title": "Destination",
            "description": "Set Destination"
          },
          "dynamic_mapping": {
            "type": "boolean",
            "title": "Dynamic Mapping",
            "default": true,
            "description": "Set Topic/Channel Dynamic Mapping"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "aws.athena",
      "type": "targets",
      "name": "Athena",
      "category": "Analytics",
      "provider": "AWS",
      "tags": [
        "query",
        "s3",
        "SQL"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.athena"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Athena Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Athena Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Athena Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Athena Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "gcp.bigquery",
      "type": "targets",
      "name": "Big Query",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.bigquery"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "gcp.bigtable",
      "type": "targets",
      "name": "Big Table",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "sql",
        "distributed",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials",
          "instance"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.bigtable"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          },
          "instance": {
            "type": "string",
            "title": "Instance",
            "description": "Set Bigtable Instance"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "azure.storage.blob",
      "type": "targets",
      "name": "Blob",
      "category": "Storage",
      "provider": "Azure",
      "tags": [
        "object",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "storage_access_key",
          "storage_account",
          "policy"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.storage.blob"
          },
          "storage_access_key": {
            "type": "string",
            "title": "Storage Access Key",
            "description": "Set Blob Storage Storage Access Key"
          },
          "storage_account": {
            "type": "string",
            "title": "Storage Account",
            "description": "Set Blob Storage Storage Account"
          },
          "policy": {
            "type": "string",
            "title": "Policy",
            "default": "exponential",
            "description": "Set Blob Storage Retry Policy",
            "enum": [
              "exponential",
              "fixed"
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_tries": {
              "type": "integer",
              "title": "Max Tries",
              "default": 1,
              "description": "Set Blob Storage Max Tries",
              "minimum": 1,
              "maximum": 2147483647
            },
            "try_timeout": {
              "type": "integer",
              "title": "Try Timout (milliseconds)",
              "default": 1000,
              "description": "Set Blob Storage Try Timeout In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "retry_delay": {
              "type": "integer",
              "title": "Retry Delay",
              "default": 60000,
              "description": "Set Blob Storage Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_retry_delay": {
              "type": "integer",
              "title": "Max Retry Delay",
              "default": 180000,
              "description": "Set Blob Storage Max Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.cassandra",
      "type": "targets",
      "name": "Cassandra",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql",
        "no-sql"
      ],
      "schema": {
        "required": [
          "hosts",
          "port"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.cassandra"
          },
          "hosts": {
            "type": "string",
            "title": "Hosts Addresses",
            "description": "Set Cassandra Hosts Addresses"
          },
          "port": {
            "type": "integer",
            "title": "Port",
            "default": 9042,
            "description": "Set Cassandra Port",
            "minimum": 0,
            "maximum": 65535
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Cassandra Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Cassandra Password"
            },
            "replication_factor": {
              "type": "integer",
              "title": "Replication Factor",
              "default": 1,
              "description": "Set Cassandra Replication Factor",
              "minimum": 1,
              "maximum": 2147483647
            },
            "consistency": {
              "type": "string",
              "title": "Consistency",
              "default": "All",
              "description": "Set Cassandra Consistency",
              "enum": [
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
            "default_table": {
              "type": "string",
              "title": "Default Table",
              "description": "Set Cassandra Default Table"
            },
            "default_keyspace": {
              "type": "string",
              "title": "Default Keyspace",
              "description": "Set Cassandra Default Keyspace"
            },
            "connect_timeout_seconds": {
              "type": "integer",
              "title": "Connect Timeout (Seconds)",
              "default": 60,
              "description": "Set Cassandra Connection Timeout In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "timeout_seconds": {
              "type": "integer",
              "title": "Operation Timeout (Seconds)",
              "default": 60,
              "description": "Set Cassandra Operation Timeout In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.cloudfunctions",
      "type": "targets",
      "name": "Cloud Functions",
      "category": "Serverless",
      "provider": "GCP",
      "tags": [
        "faas",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.cloudfunctions"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "location_match": {
              "type": "boolean",
              "title": "Location Match",
              "default": true,
              "description": "Set Cloud Functions Location Match"
            }
          }
        }
      }
    },
    {
      "kind": "aws.cloudwatch.events",
      "type": "targets",
      "name": "Cloudwatch Events",
      "category": "Observability",
      "provider": "AWS",
      "tags": [
        "events",
        "cloud"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.cloudwatch.events"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Cloudwatch-Events Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Cloudwatch-Events Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Cloudwatch-Events Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Cloudwatch-Events Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "aws.cloudwatch.logs",
      "type": "targets",
      "name": "Cloudwatch Logs",
      "category": "Observability",
      "provider": "AWS",
      "tags": [
        "logs",
        "cloud"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.cloudwatch.logs"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Cloudwatch-Logs Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Cloudwatch-Logs Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Cloudwatch-Logs Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Cloudwatch-Logs Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "aws.cloudwatch.metrics",
      "type": "targets",
      "name": "Cloudwatch Metrics",
      "category": "Observability",
      "provider": "AWS",
      "tags": [
        "metrics",
        "cloud"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.cloudwatch.metrics"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Cloudwatch-Metrics Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Cloudwatch-Metrics Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Cloudwatch-Metrics Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Cloudwatch-Metrics Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "stores.cockroachdb",
      "type": "targets",
      "name": "CockroachDB",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql",
        "postgres"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.cockroachdb"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Cockroach Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Cockroach Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Cockroach Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Cockroach Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.consulkv",
      "type": "targets",
      "name": "Consul",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "key-value store",
        "cache"
      ],
      "schema": {
        "required": [
          "address",
          "tls"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.consulkv"
          },
          "address": {
            "type": "string",
            "title": "Address",
            "description": "Set Consulkv Address Connection"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "tls": {
            "type": "object",
            "title": "Use TLS",
            "oneOf": [
              {
                "title": "True",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "true"
                  },
                  "cert_key": {
                    "type": "string",
                    "title": "Certification Key",
                    "description": "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "cert_file": {
                    "type": "string",
                    "title": "Certification File",
                    "description": "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "wait_time": {
              "type": "integer",
              "title": "Wait Time (Milliseconds)",
              "default": 36000,
              "description": "Set Wait Time Milliseconds ",
              "minimum": 1,
              "maximum": 2147483647
            },
            "scheme": {
              "type": "string",
              "title": "Scheme",
              "description": "Set Consulkv Scheme"
            },
            "data_center": {
              "type": "string",
              "title": "Data Center",
              "description": "Set Consulkv Data Center"
            },
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Consulkv Token"
            },
            "token_file": {
              "type": "string",
              "title": "Token File",
              "description": "Set Consulkv Token File"
            },
            "insecure_skip_verify": {
              "type": "boolean",
              "title": "Insecure Skip Verify",
              "default": false,
              "description": "Set If Insecure Skip Verify"
            },
            "tls": {
              "type": "boolean",
              "title": "Use TLS",
              "default": false,
              "description": "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      "kind": "stores.couchbase",
      "type": "targets",
      "name": "Couchbase",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "url",
          "bucket"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.couchbase"
          },
          "url": {
            "type": "string",
            "title": "Connection URL",
            "description": "Set Couchbase Url"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "bucket": {
            "type": "string",
            "title": "Bucket",
            "description": "Set Couchbase Bucket"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Couchbase Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Couchbase Password"
            },
            "collection": {
              "type": "string",
              "title": "Collection",
              "description": "Set Couchbase Collection"
            },
            "num_to_replicate": {
              "type": "integer",
              "title": "Replication Nodes",
              "default": 1,
              "description": "Set Couchbase Number Of Nodes To Replicate",
              "minimum": 1,
              "maximum": 2147483647
            },
            "num_to_persist": {
              "type": "integer",
              "title": "Persistence Nodes",
              "default": 1,
              "description": "Set Couchbase Number Of Node To Persist",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.crate",
      "type": "targets",
      "name": "Crate",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.crate"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "default": "postgresql://crate@localhost:5432/doc?sslmode=disable",
            "description": "Set Crate Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Crate Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Crate Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Crate Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.dynamodb",
      "type": "targets",
      "name": "DynamoDB",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "db",
        "no-sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.dynamodb"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Dynamodb Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Dynamodb Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Dynamodb Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Dynamodb Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "echo",
      "type": "targets",
      "name": "Echo",
      "category": "Testing",
      "provider": "",
      "tags": [],
      "schema": {
        "properties": {
          "kind": {
            "type": "string",
            "const": "echo"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "stores.elasticsearch",
      "type": "targets",
      "name": "Elasticsearch",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "logs"
      ],
      "schema": {
        "required": [
          "urls"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.elasticsearch"
          },
          "urls": {
            "type": "string",
            "title": "Connection URLs",
            "description": "Set Elastic Search Urls"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Elastic Search Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Elastic Search Password"
            },
            "sniff": {
              "type": "boolean",
              "title": "Use Sniff",
              "default": false,
              "description": "Set Elastic Search Sniff Mode"
            }
          }
        }
      }
    },
    {
      "kind": "aws.elasticsearch",
      "type": "targets",
      "name": "Elasticsearch",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "db",
        "log",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.elasticsearch"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Elastic Search Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Elastic Search Aws Secret Key"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Elastic Search Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "azure.eventhubs",
      "type": "targets",
      "name": "EventBus",
      "category": "Messaging",
      "provider": "Azure",
      "tags": [
        "pub/sub",
        "iot",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "entity_path"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.eventhubs"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Eventhubs End Point"
          },
          "shared_access_key_name": {
            "type": "string",
            "title": "Access Key Name",
            "description": "Set Eventhubs Shared Access Key Name"
          },
          "shared_access_key": {
            "type": "string",
            "title": "Access Key",
            "description": "Set Eventhubs Shared Access Key"
          },
          "entity_path": {
            "type": "string",
            "title": "Entity Path",
            "description": "Set Eventhubs Entity Path"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "azure.eventhubs",
      "type": "sources",
      "name": "EventsHub",
      "category": "Messaging",
      "provider": "Azure",
      "tags": [
        "events",
        "iot",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "entity_path",
          "partition_id",
          "receive_type",
          "receive_type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.eventhubs"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint Address",
            "description": "Set Eventhubs End Point"
          },
          "shared_access_key_name": {
            "type": "string",
            "title": "Access Key Name",
            "description": "Set Eventhubs Shared Access Key Name"
          },
          "shared_access_key": {
            "type": "string",
            "title": "Access Key",
            "description": "Set Eventhubs Shared Access Key"
          },
          "entity_path": {
            "type": "string",
            "title": "Entity Path",
            "description": "Set Eventhubs Entity Path"
          },
          "partition_id": {
            "type": "string",
            "title": "Partition ID",
            "description": "Set Eventhubs Partition Id"
          },
          "receive_type": {
            "type": "object",
            "title": "Receive Type",
            "oneOf": [
              {
                "title": "From Timestamp",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "from_timestamp"
                  },
                  "time_stamp": {
                    "type": "integer",
                    "title": "Timestamp",
                    "default": 0,
                    "description": "Set Timestamp To Collect Events From (Rfc3339)",
                    "minimum": 0,
                    "maximum": 2147483647
                  }
                }
              },
              {
                "title": "With Consumer Group",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "with_consumer_group"
                  },
                  "consumer_group": {
                    "type": "string",
                    "title": "Consumer Group",
                    "description": "Set The Consumer Group To Collect Events From"
                  }
                }
              },
              {
                "title": "With Epoch",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "with_epoch"
                  },
                  "epoch": {
                    "type": "integer",
                    "title": "Epoch",
                    "default": 0,
                    "description": "Set Timestamp To Collect Events From (Epoch)",
                    "minimum": 0,
                    "maximum": 2147483647
                  }
                }
              },
              {
                "title": "With Prefetch Count",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "with_prefetch_count"
                  },
                  "prefetch_count": {
                    "type": "integer",
                    "title": "Prefetch Count",
                    "default": 0,
                    "description": "Set Prefetch Count To Collect Events From",
                    "minimum": 0,
                    "maximum": 2147483647
                  }
                }
              },
              {
                "title": "With Starting Offset",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "with_starting_offset"
                  },
                  "starting_offset": {
                    "type": "string",
                    "title": "Starting Offset",
                    "description": "Set Starting Offset"
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
      "kind": "storage.filesystem",
      "type": "sources",
      "name": "File System",
      "category": "Storage",
      "provider": "",
      "tags": [
        "s3",
        "minio"
      ],
      "schema": {
        "required": [
          "folders",
          "bucket_type",
          "bucket_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "storage.filesystem"
          },
          "folders": {
            "type": "string",
            "title": "Sync Folders Names",
            "description": "Set Local Folders Directory To Scan"
          },
          "bucket_type": {
            "type": "string",
            "title": "Sync Target Type",
            "default": "aws",
            "description": "Set Remote Target Type",
            "enum": [
              "aws",
              "gcp",
              "minio",
              "filesystem",
              "hdfs",
              "azure",
              "pass-through"
            ]
          },
          "bucket_name": {
            "type": "string",
            "title": "Bucket/Directory Destination",
            "description": "Set Remote Target Bucket/Dir Name"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "backup_folder": {
              "type": "string",
              "title": "Set Backup Folder",
              "description": "Set Backup Folder After Sending Files"
            },
            "concurrency": {
              "type": "integer",
              "title": "Concurrency",
              "default": 1,
              "description": "Set Execution Concurrency",
              "minimum": 0
            },
            "scan_interval": {
              "type": "integer",
              "title": "Scan Interval",
              "default": 5,
              "description": "Set Scan Interval In Seconds",
              "minimum": 0
            }
          }
        }
      }
    },
    {
      "kind": "storage.filesystem",
      "type": "targets",
      "name": "File System",
      "category": "Storage",
      "provider": "",
      "tags": [
        "filesystem"
      ],
      "schema": {
        "required": [
          "base_path"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "storage.filesystem"
          },
          "base_path": {
            "type": "string",
            "title": "Destination Path",
            "default": "./",
            "description": "Set Local File System Base Path"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "azure.storage.files",
      "type": "targets",
      "name": "Files",
      "category": "Storage",
      "provider": "Azure",
      "tags": [
        "filesystem",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "storage_access_key",
          "storage_account",
          "policy"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.storage.files"
          },
          "storage_access_key": {
            "type": "string",
            "title": "Storage Access Key",
            "description": "Set Files Storage Storage Access Key"
          },
          "storage_account": {
            "type": "string",
            "title": "Storage Account",
            "description": "Set Files Storage Storage Account"
          },
          "policy": {
            "type": "string",
            "title": "Policy",
            "default": "exponential",
            "description": "Set Files Storage Retry Policy",
            "enum": [
              "exponential",
              "fixed"
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_tries": {
              "type": "integer",
              "title": "Max Tries",
              "default": 1,
              "description": "Set Files Storage Max Tries",
              "minimum": 1,
              "maximum": 2147483647
            },
            "try_timeout": {
              "type": "integer",
              "title": "Try Timout (milliseconds)",
              "default": 1000,
              "description": "Set Files Storage Try Timeout In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "retry_delay": {
              "type": "integer",
              "title": "Retry Delay",
              "default": 60000,
              "description": "Set Files Storage Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_retry_delay": {
              "type": "integer",
              "title": "Max Retry Delay",
              "default": 180000,
              "description": "Set Files Storage Max Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.firebase",
      "type": "targets",
      "name": "Firebase",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "no-sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.firebase"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "auth_client": {
              "type": "boolean",
              "title": "Auth Client",
              "default": false,
              "description": "Set Firebase Target Is A Auth Client"
            },
            "db_client": {
              "type": "boolean",
              "title": "Is DB Client",
              "default": false,
              "description": "Set Firebase Target Is A Db Client"
            },
            "db_url": {
              "type": "string",
              "title": "DB URL",
              "description": "Set Firebase Db Url"
            },
            "messaging_client": {
              "type": "boolean",
              "title": "Is Messaging Client",
              "default": false,
              "description": "Set Firebase Target Is A Messaging Client"
            }
          }
        }
      }
    },
    {
      "kind": "gcp.firestore",
      "type": "targets",
      "name": "Firestore",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "no-sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.firestore"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "storage.hdfs",
      "type": "targets",
      "name": "HDFS",
      "category": "Storage",
      "provider": "",
      "tags": [
        "big data"
      ],
      "schema": {
        "required": [
          "address"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "storage.hdfs"
          },
          "address": {
            "type": "string",
            "title": "Address",
            "description": "Set Hadoop Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "user": {
              "type": "string",
              "title": "User",
              "description": "Set Hadoop User"
            }
          }
        }
      }
    },
    {
      "kind": "http",
      "type": "targets",
      "name": "HTTP",
      "category": "General",
      "provider": "",
      "tags": [
        "rest",
        "api"
      ],
      "schema": {
        "required": [
          "auth_type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "http"
          },
          "auth_type": {
            "type": "object",
            "title": "Authentication Type",
            "oneOf": [
              {
                "title": "Basic",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Basic"
                  },
                  "": null,
                  "username": {
                    "type": "string",
                    "title": "Username",
                    "description": "Set Basic Auth Username"
                  },
                  "password": {
                    "type": "string",
                    "title": "Password",
                    "description": "Set Basic Auth Password"
                  }
                }
              },
              {
                "title": "No Auth",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "No Auth"
                  },
                  "": null
                }
              },
              {
                "title": "Token",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Token"
                  },
                  "": null,
                  "token": {
                    "type": "string",
                    "title": "Token",
                    "description": "Set Auth Token",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "default_headers": {
              "type": "array",
              "title": "Add Default Headers Key Value Pairs",
              "items": {
                "type": "object",
                "required": [
                  "key",
                  "value"
                ],
                "properties": {
                  "key": {
                    "type": "string",
                    "title": "Set Key"
                  },
                  "value": {
                    "type": "string",
                    "title": "Set Value"
                  }
                }
              }
            },
            "proxy": {
              "type": "string",
              "title": "Proxy",
              "description": "Set Proxy Address"
            },
            "root_certificate": {
              "type": "string",
              "title": "Root Certificate",
              "description": "Set Root Certificate",
              "x-display": "textarea"
            },
            "client_private_key": {
              "type": "string",
              "title": "Client Private Key",
              "description": "Set Client Private Key",
              "x-display": "textarea"
            },
            "client_public_key": {
              "type": "string",
              "title": "Client Public Key",
              "description": "Set Client Public Key",
              "x-display": "textarea"
            }
          }
        }
      }
    },
    {
      "kind": "http",
      "type": "sources",
      "name": "HTTP",
      "category": "General",
      "provider": "",
      "tags": [
        "rest",
        "api"
      ],
      "schema": {
        "required": [
          "methods",
          "path"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "http"
          },
          "methods": {
            "type": "string",
            "title": "Methods",
            "default": "post",
            "description": "List Of Supported Methods Separated By A Comma"
          },
          "path": {
            "type": "string",
            "title": "Register Path",
            "default": "/*",
            "description": "Http Endpoint Path"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "dynamic_mapping": {
              "type": "boolean",
              "title": "Dynamic Mapping",
              "default": false,
              "description": "Set Path/Channel Dynamic Mapping"
            }
          }
        }
      }
    },
    {
      "kind": "cache.hazelcast",
      "type": "targets",
      "name": "Hazelcast",
      "category": "Cache",
      "provider": "",
      "tags": [
        "db"
      ],
      "schema": {
        "required": [
          "address",
          "server_name",
          "ssl"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "cache.hazelcast"
          },
          "address": {
            "type": "string",
            "title": "Address",
            "description": "Set Hazelcast Address Connection"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "server_name": {
            "type": "string",
            "title": "Server Name",
            "description": "Set Hazelcast Server Name"
          },
          "ssl": {
            "type": "object",
            "title": "SSL",
            "oneOf": [
              {
                "title": "True",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "true"
                  },
                  "cert_key": {
                    "type": "string",
                    "title": "Certification Key",
                    "description": "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "cert_file": {
                    "type": "string",
                    "title": "Certification File",
                    "description": "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Password"
            },
            "connection_attempt_limit": {
              "type": "integer",
              "title": "Connection Attempt Limit",
              "default": 1,
              "description": "Set Connections Attempt Limit",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_attempt_period": {
              "type": "integer",
              "title": "Connection Attempt Period",
              "default": 5,
              "description": "Set Connections Attempt Period In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_timeout": {
              "type": "integer",
              "title": "Connection Timeout",
              "default": 5,
              "description": "Set Connections Attempt Timeout In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "ssl": {
              "type": "boolean",
              "title": "Use SSL",
              "default": false,
              "description": "Set If Use Ssl"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.ibmmq",
      "type": "sources",
      "name": "IBM MQ",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "streaming"
      ],
      "schema": {
        "required": [
          "queue_manager_name",
          "host_name",
          "channel_name",
          "username",
          "queue_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.ibmmq"
          },
          "queue_manager_name": {
            "type": "string",
            "title": "Queue Manager Name",
            "description": "Set Ibm-Mq Queue Manager Name"
          },
          "host_name": {
            "type": "string",
            "title": "Hostname",
            "description": "Set Ibm-Mq Host Name"
          },
          "channel_name": {
            "type": "string",
            "title": "Channel Name",
            "description": "Set Ibm-Mq Channel Name The Queue Is Under"
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Set Ibm-Mq Username"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "queue_name": {
            "type": "string",
            "title": "Queue Name",
            "description": "Sets Ibm-Mq Queue Name"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "certificate_label": {
              "type": "string",
              "title": "Certificate Label",
              "description": "Set Ibm-Mq Certificate Label For Requests"
            },
            "tls_client_auth": {
              "type": "string",
              "title": "TLS Client Auth",
              "default": "NONE",
              "description": "Set Ibm-Mq Tls Client Auth"
            },
            "port_number": {
              "type": "integer",
              "title": "Port",
              "default": 1414,
              "description": "Set Ibm-Mq Server Port Number",
              "minimum": 1,
              "maximum": 65535
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Ibm-Mq Password"
            },
            "key_repository": {
              "type": "string",
              "title": "Key Repository",
              "description": "Set Ibm-Mq Key Repository A Certificate Store"
            },
            "wait_pull_time": {
              "type": "integer",
              "title": "Wait Pull Time",
              "default": 100,
              "description": "Set Default Wait Time For Messages (Milliseconds)",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        }
      }
    },
    {
      "kind": "messaging.kafka",
      "type": "sources",
      "name": "Kafka",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "pub/sub",
        "streaming"
      ],
      "schema": {
        "required": [
          "brokers",
          "topics",
          "consumer_group",
          "dynamic_mapping"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.kafka"
          },
          "brokers": {
            "type": "string",
            "title": "Brokers Address",
            "description": "Set Brokers List"
          },
          "topics": {
            "type": "string",
            "title": "Topics",
            "description": "Set Topics List"
          },
          "consumer_group": {
            "type": "string",
            "title": "Consumer Group",
            "description": "Set Consumer Group"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "dynamic_mapping": {
            "type": "boolean",
            "title": "Dynamic Mapping",
            "default": true,
            "description": "Set Topic/Channel Dynamic Mapping"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "sasl_username": {
              "type": "string",
              "title": "SASL Username",
              "description": "Set Sasl Username"
            },
            "sasl_password": {
              "type": "string",
              "title": "SASL Password",
              "description": "Set Sasl Password"
            },
            "sasl_mechanism": {
              "type": "string",
              "title": "SASL Mechanism",
              "description": "Scram-Sha-256, Scram-Sha-512, Plain, 0auth Bearer, Or Gss-Api"
            },
            "security_protocol": {
              "type": "string",
              "title": "Security Protocol",
              "description": "Plaintext, Sasl-Plaintext, Sasl-Ssl, Ssl"
            },
            "ca_cert": {
              "type": "string",
              "title": "Ca Cert",
              "description": "Set Tls Ca Certificate",
              "x-display": "textarea"
            },
            "client_certificate": {
              "type": "string",
              "title": "Client Certificate",
              "description": "Set Tls Client Pem Data",
              "x-display": "textarea"
            },
            "client_key": {
              "type": "string",
              "title": "Client Key",
              "description": "Set Tls Client Key Pem Data",
              "x-display": "textarea"
            },
            "insecure": {
              "type": "boolean",
              "title": "Insecure",
              "default": false,
              "description": "Set Self-Signed Ssl Certificate"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.kafka",
      "type": "targets",
      "name": "Kafka",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "streaming",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "brokers",
          "topic"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.kafka"
          },
          "brokers": {
            "type": "string",
            "title": "Brokers Address",
            "default": "localhost:9092",
            "description": "Set Kafka Brokers List"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "topic": {
            "type": "string",
            "title": "Topic",
            "description": "Set Kafka Topic"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "sasl_username": {
              "type": "string",
              "title": "SASL Username",
              "description": "Set Kafka Username"
            },
            "sasl_password": {
              "type": "string",
              "title": "SASL Password",
              "description": "Set Kafka Password"
            },
            "sasl_mechanism": {
              "type": "string",
              "title": "SASL Mechanism",
              "description": "Scram-Sha-256, Scram-Sha-512, Plain, 0auth Bearer, Or Gss-Api"
            },
            "security_protocol": {
              "type": "string",
              "title": "Security Protocol",
              "description": "Plaintext, Sasl-Plaintext, Sasl-Ssl, Ssl"
            },
            "ca_cert": {
              "type": "string",
              "title": "Ca Cert",
              "description": "Set Tls Ca Certificate",
              "x-display": "textarea"
            },
            "client_certificate": {
              "type": "string",
              "title": "Client Certificate",
              "description": "Set Tls Client Pem Data",
              "x-display": "textarea"
            },
            "client_key": {
              "type": "string",
              "title": "Client Key",
              "description": "Set Tls Client Key Pem Data",
              "x-display": "textarea"
            },
            "insecure": {
              "type": "boolean",
              "title": "Insecure",
              "default": false,
              "description": "Set Self-Signed Ssl Certificate"
            }
          }
        }
      }
    },
    {
      "kind": "aws.keyspaces",
      "type": "targets",
      "name": "Keyspaces",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "cassandra",
        "db",
        "no-sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "hosts",
          "port",
          "username",
          "password",
          "tls",
          "consistency"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.keyspaces"
          },
          "hosts": {
            "type": "string",
            "title": "Hosts Addresses",
            "description": "Set Keyspaces Hosts Addresses"
          },
          "port": {
            "type": "integer",
            "title": "Port",
            "default": 9142,
            "description": "Set Keyspaces Port",
            "minimum": 0,
            "maximum": 65535
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Set Keyspaces Username"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "description": "Set Keyspaces Password"
          },
          "tls": {
            "type": "string",
            "title": "TLS",
            "description": "Set Keyspaces Tls Download Url"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "consistency": {
            "type": "string",
            "title": "Consistency",
            "default": "LocalQuorum",
            "description": "Set Keyspaces Consistency",
            "enum": [
              "One",
              "LocalQuorum",
              "local_one"
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "replication_factor": {
              "type": "integer",
              "title": "Replication Factor",
              "default": 1,
              "description": "Set Keyspaces Replication Factor",
              "minimum": 1,
              "maximum": 2147483647
            },
            "proto_version": {
              "type": "integer",
              "title": "Proto Version",
              "default": 4,
              "description": "Set Keyspaces Protoversion",
              "minimum": 1,
              "maximum": 2147483647
            },
            "default_table": {
              "type": "string",
              "title": "Default Table",
              "description": "Set Keyspaces Default Table"
            },
            "default_keyspace": {
              "type": "string",
              "title": "Default Keyspace",
              "description": "Set Keyspaces Default Keyspace"
            },
            "connect_timeout_seconds": {
              "type": "integer",
              "title": "Connect Timeout (Seconds)",
              "default": 60,
              "description": "Set Keyspaces Connection Timeout In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "timeout_seconds": {
              "type": "integer",
              "title": "Operation Timeout (Seconds)",
              "default": 60,
              "description": "Set Keyspaces Operation Timeout In Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.kinesis",
      "type": "targets",
      "name": "Kinesis",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "streaming",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.kinesis"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Kinesis Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Kinesis Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Kinesis Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Kinesis Aws Token"
            }
          }
        }
      }
    },
    {
      "kind": "aws.lambda",
      "type": "targets",
      "name": "Lambda",
      "category": "Serverless",
      "provider": "AWS",
      "tags": [
        "faas",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.lambda"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Lambda Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Lambda Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Lambda Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Lambda Token"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.mqtt",
      "type": "sources",
      "name": "MQTT",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "pub/sub",
        "iot"
      ],
      "schema": {
        "required": [
          "host",
          "topic",
          "dynamic_mapping"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.mqtt"
          },
          "host": {
            "type": "string",
            "title": "Host",
            "description": "Set Mqtt Host:Port Connection"
          },
          "topic": {
            "type": "string",
            "title": "Topic",
            "description": "Set Subscribed Topic Name"
          },
          "dynamic_mapping": {
            "type": "boolean",
            "title": "Dynamic Mapping",
            "default": true,
            "description": "Set Topic/Channel Dynamic Mapping"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Password"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Client Id"
            },
            "qos": {
              "type": "integer",
              "title": "QOS Level",
              "default": 0,
              "description": "Set Qos Level",
              "minimum": 0,
              "maximum": 2
            }
          }
        }
      }
    },
    {
      "kind": "messaging.mqtt",
      "type": "targets",
      "name": "MQTT",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "iot",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "host"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.mqtt"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Mqtt Broker Host"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Mqtt Broker Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Mqtt Broker Password"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Mqtt Broker Client Id"
            },
            "default_topic": {
              "type": "string",
              "title": "Default Topic",
              "description": "Set Mqtt Default Topic"
            },
            "default_qos": {
              "type": "integer",
              "title": "Default Qos",
              "default": 0,
              "description": "Set Mqtt Default Qos Level",
              "minimum": 0,
              "maximum": 2
            }
          }
        }
      }
    },
    {
      "kind": "aws.msk",
      "type": "targets",
      "name": "MSK",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "kafka",
        "streaming",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "brokers",
          "topic"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.msk"
          },
          "brokers": {
            "type": "string",
            "title": "Brokers Address",
            "default": "localhost:9092",
            "description": "Set Msk Brokers List"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "topic": {
            "type": "string",
            "title": "Topic",
            "description": "Set Msk Topic"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "sasl_username": {
              "type": "string",
              "title": "SASL Username",
              "description": "Set Msk Username"
            },
            "sasl_password": {
              "type": "string",
              "title": "SASL Password",
              "description": "Set Msk Password"
            }
          }
        }
      }
    },
    {
      "kind": "aws.msk",
      "type": "sources",
      "name": "MSK",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "streaming",
        "kafka",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "brokers",
          "topics",
          "consumer_group",
          "dynamic_mapping"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.msk"
          },
          "brokers": {
            "type": "string",
            "title": "Brokers Address",
            "description": "Set Brokers List"
          },
          "topics": {
            "type": "string",
            "title": "Topics",
            "description": "Set Topics List"
          },
          "consumer_group": {
            "type": "string",
            "title": "Consumer Group",
            "description": "Set Consumer Group"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "dynamic_mapping": {
            "type": "boolean",
            "title": "Dynamic Mapping",
            "default": true,
            "description": "Set Topic/Channel Dynamic Mapping"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "sasl_username": {
              "type": "string",
              "title": "SASL Username",
              "description": "Set Saal Username"
            },
            "sasl_password": {
              "type": "string",
              "title": "SASL Password",
              "description": "Set Saal Password"
            }
          }
        }
      }
    },
    {
      "kind": "azure.stores.azuresql",
      "type": "targets",
      "name": "MSSQL",
      "category": "Store",
      "provider": "Azure",
      "tags": [
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.stores.azuresql"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "default": "server=server.net;user id=test;password=test;port=1433;database=initial_db;",
            "description": "Set Azuresql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Azuresql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Azuresql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Azuresql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.mssql",
      "type": "targets",
      "name": "MSSQL",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.mssql"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Mssql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mssql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mssql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mssql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.rds.mssql",
      "type": "targets",
      "name": "MSSQL",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "rds",
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.rds.mssql"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "default": "sqlserver://sa:n8x2Nz!f@localhost:1433?database=master",
            "description": "Set Mssql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mssql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mssql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mssql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.rds.mariadb",
      "type": "targets",
      "name": "MariaDB",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "rds",
        "sql",
        "mysql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.rds.mariadb"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "default": "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
            "description": "Set Mariadb Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mariadb Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mariadb Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mariadb Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "cache.memcached",
      "type": "targets",
      "name": "Memcached",
      "category": "Cache",
      "provider": "",
      "tags": [
        "db"
      ],
      "schema": {
        "required": [
          "hosts"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "cache.memcached"
          },
          "hosts": {
            "type": "string",
            "title": "Hosts Address",
            "description": "Set Memcached Hosts"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 2,
              "description": "Set Memcached Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "default_timeout_seconds": {
              "type": "integer",
              "title": "Default Timeout (Seconds)",
              "default": 30,
              "description": "Set Memcached Default Timeout Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.cache.memcached",
      "type": "targets",
      "name": "Memcached",
      "category": "Cache",
      "provider": "GCP",
      "tags": [
        "db",
        "memory-store",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "hosts"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.cache.memcached"
          },
          "hosts": {
            "type": "string",
            "title": "Hosts Address",
            "default": "localhost:11211",
            "description": "Set Memcached Hosts"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 2,
              "description": "Set Memcached Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "default_timeout_seconds": {
              "type": "integer",
              "title": "Default Timeout (Seconds)",
              "default": 30,
              "description": "Set Memcached Default Timeout Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "storage.minio",
      "type": "targets",
      "name": "Minio",
      "category": "Storage",
      "provider": "",
      "tags": [
        "s3"
      ],
      "schema": {
        "required": [
          "endpoint"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "storage.minio"
          },
          "endpoint": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Minio Endpoint Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "use_ssl": {
              "type": "boolean",
              "title": "USE SSL",
              "default": true,
              "description": "Set Minio Ssl Connection"
            },
            "access_key_id": {
              "type": "string",
              "title": "Access Key ID",
              "description": "Set Minio Access Key Id"
            },
            "secret_access_key": {
              "type": "string",
              "title": "Access Key Secret",
              "description": "Set Minio Secret Access Key",
              "x-display": "textarea"
            }
          }
        }
      }
    },
    {
      "kind": "storage.minio",
      "type": "sources",
      "name": "Minio",
      "category": "Storage",
      "provider": "",
      "tags": [
        "s3"
      ],
      "schema": {
        "required": [
          "endpoint",
          "access_key_id",
          "secret_access_key",
          "bucket_name",
          "folders",
          "target_type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "storage.minio"
          },
          "endpoint": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Minio Endpoint Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "access_key_id": {
            "type": "string",
            "title": "Access Key ID",
            "description": "Set Minio Access Key Id"
          },
          "secret_access_key": {
            "type": "string",
            "title": "Access Key Secret",
            "description": "Set Minio Secret Access Key",
            "x-display": "textarea"
          },
          "bucket_name": {
            "type": "string",
            "title": "Bucket Source",
            "description": "Set Remote Target Bucket/Dir Name"
          },
          "folders": {
            "type": "string",
            "title": "Sync Folders Names",
            "default": "/",
            "description": "Set Bucket Folders Directory To Scan"
          },
          "target_type": {
            "type": "string",
            "title": "Sync Target Type",
            "default": "filesystem",
            "description": "Set Remote Target Bucket Type",
            "enum": [
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
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "use_ssl": {
              "type": "boolean",
              "title": "USE SSL",
              "default": true,
              "description": "Set Minio Ssl Connection"
            },
            "concurrency": {
              "type": "integer",
              "title": "Concurrency",
              "default": 1,
              "description": "Set Execution Concurrency",
              "minimum": 0
            },
            "scan_interval": {
              "type": "integer",
              "title": "Scan Interval",
              "default": 5,
              "description": "Set Scan Interval In Seconds",
              "minimum": 0
            }
          }
        }
      }
    },
    {
      "kind": "stores.mongodb",
      "type": "targets",
      "name": "MongoDB",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "no-sql"
      ],
      "schema": {
        "required": [
          "host",
          "database",
          "collection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.mongodb"
          },
          "host": {
            "type": "string",
            "title": "Host address",
            "description": "Set Mongodb Host Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "database": {
            "type": "string",
            "title": "Database",
            "description": "Set Mongodb Database"
          },
          "collection": {
            "type": "string",
            "title": "Collection",
            "description": "Set Mongodb Collection"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Mongodb Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Mongodb Password"
            },
            "params": {
              "type": "string",
              "title": "Params",
              "description": "Set Mongodb Params"
            },
            "read_concurrency": {
              "type": "string",
              "title": "Read Concurrency",
              "default": "local",
              "description": "Set Mongodb Read Concurrency",
              "enum": [
                "local",
                "majority",
                "available",
                "linearizable",
                "snapshot"
              ]
            },
            "write_concurrency": {
              "type": "string",
              "title": "Write Concurrency",
              "default": "majority",
              "description": "Set Mongodb Write Concurrency",
              "enum": [
                "majority",
                "Other"
              ]
            },
            "operation_timeout_seconds": {
              "type": "integer",
              "title": "Operation Timeout (Seconds)",
              "default": 90,
              "description": "Set Mongodb Operation Timeout Seconds",
              "minimum": 0,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.stores.mysql",
      "type": "targets",
      "name": "MySQL",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection-type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.stores.mysql"
          },
          "connection-type": {
            "type": "object",
            "title": "Connection Type",
            "oneOf": [
              {
                "title": "Proxy",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Proxy"
                  },
                  "": null,
                  "instance_connection_name": {
                    "type": "string",
                    "title": "Instance Connection Name",
                    "description": "Set Mysql Instance Connection Name"
                  },
                  "db_user": {
                    "type": "string",
                    "title": "Username",
                    "description": "Set Mysql Db User"
                  },
                  "db_password": {
                    "type": "string",
                    "title": "Password",
                    "description": "Set Mysql Db Password"
                  },
                  "db_name": {
                    "type": "string",
                    "title": "Database",
                    "description": "Sets Mysql Db Name"
                  },
                  "credentials": {
                    "type": "string",
                    "title": "Credentials",
                    "description": "Set Mysql Credentials",
                    "x-display": "textarea"
                  }
                }
              },
              {
                "title": "Direct",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Direct"
                  },
                  "": null,
                  "connection": {
                    "type": "string",
                    "title": "Connection String",
                    "default": "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
                    "description": "Set Mysql Connection String"
                  }
                }
              }
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mysql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mysql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mysql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.mysql",
      "type": "targets",
      "name": "MySQL",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.mysql"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Mysql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mysql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mysql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mysql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.rds.mysql",
      "type": "targets",
      "name": "MySQL",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "rds",
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region",
          "end_point",
          "db_port",
          "db_user",
          "db_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.rds.mysql"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Mysql Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Mysql Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Mysql Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Mysql End Point Address"
          },
          "db_port": {
            "type": "integer",
            "title": "Port",
            "default": 3306,
            "description": "Set Mysql End Point Port",
            "minimum": 0,
            "maximum": 65535
          },
          "db_user": {
            "type": "string",
            "title": "Username",
            "description": "Set Mysql Db User"
          },
          "db_name": {
            "type": "string",
            "title": "Database",
            "description": "Set Mysql Db Name"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Mysql Aws Token"
            },
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mysql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mysql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mysql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "azure.stores.mysql",
      "type": "targets",
      "name": "MySQL",
      "category": "Store",
      "provider": "Azure",
      "tags": [
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.stores.mysql"
          },
          "connection": {
            "type": "string",
            "title": "Connection lifetime String",
            "default": "root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local",
            "description": "Set Mysql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Mysql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Mysql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Mysql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "messaging.nats",
      "type": "sources",
      "name": "NATS",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "url",
          "subject",
          "dynamic_mapping",
          "tls"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.nats"
          },
          "url": {
            "type": "string",
            "title": "URL Address",
            "description": "Set Nats Url Connection"
          },
          "subject": {
            "type": "string",
            "title": "Subject",
            "description": "Set Subject"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "dynamic_mapping": {
            "type": "boolean",
            "title": "Dynamic Mapping",
            "default": false,
            "description": "Set Subject/Channel Dynamic Mapping"
          },
          "tls": {
            "type": "object",
            "title": "TLS",
            "oneOf": [
              {
                "title": "True",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "true"
                  },
                  "cert_key": {
                    "type": "string",
                    "title": "Certificate Key",
                    "description": "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "cert_file": {
                    "type": "string",
                    "title": "Certificate File",
                    "description": "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Password"
            },
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Token"
            },
            "tls": {
              "type": "boolean",
              "title": "TLS",
              "default": false,
              "description": "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.nats",
      "type": "targets",
      "name": "NATS",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "url",
          "tls"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.nats"
          },
          "url": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Nats Url Connection"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "tls": {
            "type": "object",
            "title": "Tls",
            "oneOf": [
              {
                "title": "True",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "true"
                  },
                  "cert_key": {
                    "type": "string",
                    "title": "Certification Key",
                    "description": "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "Certification File": {
                    "type": "string",
                    "title": "Certification File",
                    "description": "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Password"
            },
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Token"
            },
            "tls": {
              "type": "boolean",
              "title": "Use TLS",
              "default": false,
              "description": "Set If Use Tls"
            }
          }
        }
      }
    },
    {
      "kind": "serverless.openfaas",
      "type": "targets",
      "name": "OpenFaas",
      "category": "Serverless",
      "provider": "",
      "tags": [
        "functions"
      ],
      "schema": {
        "required": [
          "gateway",
          "username",
          "password"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "serverless.openfaas"
          },
          "gateway": {
            "type": "string",
            "title": "Gateway Address",
            "default": "localhost:27017",
            "description": "Set Openfaas Gateway Address"
          },
          "username": {
            "type": "string",
            "title": "Username",
            "description": "Set Openfaas Username"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "description": "Set Openfaas Password"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "stores.percona",
      "type": "targets",
      "name": "Percona",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql",
        "mysql"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.percona"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Percona Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Percona Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Percona Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Percona Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "azure.stores.postgres",
      "type": "targets",
      "name": "Postgres",
      "category": "Store",
      "provider": "Azure",
      "tags": [
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.stores.postgres"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "default": "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable",
            "description": "Set Postgres Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Postgres Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Postgres Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Postgres Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.stores.postgres",
      "type": "targets",
      "name": "Postgres",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection-type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.stores.postgres"
          },
          "connection-type": {
            "type": "object",
            "title": "Connection Type",
            "oneOf": [
              {
                "title": "Direct",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Direct"
                  },
                  "": null,
                  "connection": {
                    "type": "string",
                    "title": "Connection String",
                    "default": "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable",
                    "description": "Set Postgres Connection String"
                  }
                }
              },
              {
                "title": "Proxy",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "Proxy"
                  },
                  "": null,
                  "instance_connection_name": {
                    "type": "string",
                    "title": "Instance Connection Name",
                    "description": "Set Postgres Instance Connection Name"
                  },
                  "db_user": {
                    "type": "string",
                    "title": "Username",
                    "description": "Set Postgres Db User"
                  },
                  "db_password": {
                    "type": "string",
                    "title": "Password",
                    "description": "Set Postgres Db Password"
                  },
                  "credentials": {
                    "type": "string",
                    "title": "Credentials",
                    "description": "Set Postgres Credentials",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Postgres Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Postgres Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Postgres Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.rds.postgres",
      "type": "targets",
      "name": "Postgres",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "rds",
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region",
          "end_point",
          "db_port",
          "db_user",
          "db_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.rds.postgres"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Postgres Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Postgres Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Postgres Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Postgres End Point Address"
          },
          "db_port": {
            "type": "integer",
            "title": "Port",
            "default": 5432,
            "description": "Set Postgres End Point Port",
            "minimum": 0,
            "maximum": 65535
          },
          "db_user": {
            "type": "string",
            "title": "Username",
            "description": "Set Postgres Db User(Should Match User Created For Iam Access)"
          },
          "db_name": {
            "type": "string",
            "title": "Database",
            "description": "Set Postgres Db Name"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Postgres Aws Token"
            },
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Postgres Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Postgres Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Postgres Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "stores.postgres",
      "type": "targets",
      "name": "Postgres",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.postgres"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Postgres Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Postgres Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Postgres Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Postgres Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.pubsub",
      "type": "targets",
      "name": "PubSub",
      "category": "Messaging",
      "provider": "GCP",
      "tags": [
        "streaming",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.pubsub"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Gcp Project Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "retries": {
              "type": "integer",
              "title": "Retries",
              "default": 0,
              "description": "Set Pubsub Sending Message Retries",
              "minimum": 0,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.pubsub",
      "type": "sources",
      "name": "PubSub",
      "category": "Messaging",
      "provider": "GCP",
      "tags": [
        "streaming",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "project_id",
          "subscriber_id",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.pubsub"
          },
          "project_id": {
            "type": "string",
            "title": "Project ID",
            "description": "Set Project Id"
          },
          "subscriber_id": {
            "type": "string",
            "title": "Subscriber ID",
            "description": "Set Subscriber Id"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "azure.storage.queue",
      "type": "targets",
      "name": "Queue",
      "category": "Storage",
      "provider": "Azure",
      "tags": [
        "queue",
        "messaging",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "storage_access_key",
          "storage_account",
          "policy"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.storage.queue"
          },
          "storage_access_key": {
            "type": "string",
            "title": "Storage Access Key",
            "description": "Set Queue Storage Storage Access Key"
          },
          "storage_account": {
            "type": "string",
            "title": "Storage Account",
            "description": "Set Queue Storage Storage Account"
          },
          "policy": {
            "type": "string",
            "title": "Policy",
            "default": "retry_policy_exponential",
            "description": "Set Queue Storage Retry Policy",
            "enum": [
              "retry_policy_exponential",
              "retry_policy_fixed"
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_tries": {
              "type": "integer",
              "title": "Max Tries",
              "default": 1,
              "description": "Set Queue Storage Max Tries",
              "minimum": 1,
              "maximum": 2147483647
            },
            "try_timeout": {
              "type": "integer",
              "title": "Try Timout (milliseconds)",
              "default": 1000,
              "description": "Set Queue Storage Try Timeout In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "retry_delay": {
              "type": "integer",
              "title": "Retry Delay",
              "default": 60000,
              "description": "Set Queue Storage Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_retry_delay": {
              "type": "integer",
              "title": "Max Retry Delay",
              "default": 180000,
              "description": "Set Queue Storage Max Retry Delay In Milliseconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "messaging.rabbitmq",
      "type": "sources",
      "name": "RabbitMQ",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "url",
          "queue"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.rabbitmq"
          },
          "url": {
            "type": "string",
            "title": "URL Address",
            "description": "Set Rabbitmq Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "queue": {
            "type": "string",
            "title": "Queue Name",
            "description": "Set Queue Name"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "ca_cert": {
              "type": "string",
              "title": "Ca Cert",
              "description": "Set Tls Ca Certificate",
              "x-display": "textarea"
            },
            "client_certificate": {
              "type": "string",
              "title": "Client Certificate",
              "description": "Set Tls Client Pem Data",
              "x-display": "textarea"
            },
            "client_key": {
              "type": "string",
              "title": "Client Key",
              "description": "Set Tls Client Key Pem Data",
              "x-display": "textarea"
            },
            "dynamic_mapping": {
              "type": "boolean",
              "title": "Dynamic Mapping",
              "default": false,
              "description": "Set Queue/Channel Dynamic Mapping"
            },
            "consumer": {
              "type": "string",
              "title": "Consumer ID",
              "description": "Set Consumer Tag Value"
            },
            "requeue_on_error": {
              "type": "boolean",
              "title": "Requeue on Error",
              "default": false,
              "description": "Set Requeue Message On Error"
            },
            "auto_ack": {
              "type": "boolean",
              "title": "Automatic Ack",
              "default": false,
              "description": "Set Auto Ack Upon Receive Message"
            },
            "exclusive": {
              "type": "boolean",
              "title": "Exclusive",
              "default": false,
              "description": "Set Exclusive Subscription"
            }
          }
        }
      }
    },
    {
      "kind": "messaging.rabbitmq",
      "type": "targets",
      "name": "RabbitMQ",
      "category": "Messaging",
      "provider": "",
      "tags": [
        "queue",
        "pub/sub"
      ],
      "schema": {
        "required": [
          "url"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "messaging.rabbitmq"
          },
          "url": {
            "type": "string",
            "title": "Url",
            "description": "Set Rabbitmq Url Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "skip_insecure": {
              "type": "boolean",
              "title": "Skip Insecure",
              "default": false,
              "description": "Set Skip Tls Certificate Verification"
            },
            "ca_cert": {
              "type": "string",
              "title": "Ca Cert",
              "description": "Set Tls Ca Certificate",
              "x-display": "textarea"
            },
            "default_exchange": {
              "type": "string",
              "title": "Default Exchange",
              "description": "Set Default Exchange For Routing"
            },
            "default_topic": {
              "type": "string",
              "title": "Default Topic",
              "description": "Set Default Topic For Routing"
            },
            "default_persistence": {
              "type": "boolean",
              "title": "Default Persistence",
              "default": true,
              "description": "Set Default Persistence For Routed Message"
            }
          }
        }
      }
    },
    {
      "kind": "gcp.cache.redis",
      "type": "targets",
      "name": "Redis",
      "category": "Cache",
      "provider": "GCP",
      "tags": [
        "db",
        "memory-store",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "url"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.cache.redis"
          },
          "url": {
            "type": "string",
            "title": "Connection String",
            "default": "redis://localhost:6379",
            "description": "Set Redis Url"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "cache.redis",
      "type": "targets",
      "name": "Redis",
      "category": "Cache",
      "provider": "",
      "tags": [
        "db"
      ],
      "schema": {
        "required": [
          "url"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "cache.redis"
          },
          "url": {
            "type": "string",
            "title": "Connection String",
            "default": "redis://redis.host:6379",
            "description": "Set Redis Url"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "aws.rds.redshift",
      "type": "targets",
      "name": "Redshift",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "rds",
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.rds.redshift"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Redshift Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Redshift Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Redshift Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Redshift Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.redshift.service",
      "type": "targets",
      "name": "Redshift Service",
      "category": "Store",
      "provider": "AWS",
      "tags": [
        "sql",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.redshift.service"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Redshift Service Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Redshift Service Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Redshift Service Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Redshift Service Token"
            }
          }
        }
      }
    },
    {
      "kind": "stores.rethinkdb",
      "type": "targets",
      "name": "RethinkDB",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql"
      ],
      "schema": {
        "required": [
          "host",
          "tls"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.rethinkdb"
          },
          "host": {
            "type": "string",
            "title": "Host Address",
            "description": "Set Rethinkdb Host Address"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "tls": {
            "type": "object",
            "title": "Use TLS",
            "oneOf": [
              {
                "title": "True",
                "properties": {
                  "key": {
                    "type": "string",
                    "const": "true"
                  },
                  "cert_key": {
                    "type": "string",
                    "title": "Certification Key",
                    "description": "Set Certificate Key",
                    "x-display": "textarea"
                  },
                  "cert_file": {
                    "type": "string",
                    "title": "Certification File",
                    "description": "Set Certificate File",
                    "x-display": "textarea"
                  }
                }
              }
            ]
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "username": {
              "type": "string",
              "title": "Username",
              "description": "Set Rethinkdb Username"
            },
            "password": {
              "type": "string",
              "title": "Password",
              "description": "Set Rethinkdb Password"
            },
            "timeout": {
              "type": "integer",
              "title": "Timeout",
              "default": 5,
              "description": "Set Rethinkdb Operation Timeout Seconds",
              "minimum": 0,
              "maximum": 2147483647
            },
            "keep_alive_period": {
              "type": "integer",
              "title": "Keep Alive Period",
              "default": 5,
              "description": "Set Rethinkdb Operation Keep Alive Period Seconds",
              "minimum": 0,
              "maximum": 2147483647
            },
            "auth_key": {
              "type": "string",
              "title": "Authentication Key",
              "description": "Set Rethinkdb Auth Key"
            },
            "hand_shake_version": {
              "type": "integer",
              "title": "Hand Shake Version",
              "default": 0,
              "description": "Set Rethinkdb Hand Shake Version",
              "minimum": 0,
              "maximum": 2147483647
            },
            "number_of_retries": {
              "type": "integer",
              "title": "Number Of Retries",
              "default": 0,
              "description": "Set Rethinkdb Number Of Retries",
              "minimum": 0,
              "maximum": 2147483647
            },
            "initial_cap": {
              "type": "integer",
              "title": "Initial Cap",
              "default": 0,
              "description": "Set Rethinkdb Initial Cap",
              "minimum": 0,
              "maximum": 2147483647
            },
            "max_open": {
              "type": "integer",
              "title": "Max Open",
              "default": 0,
              "description": "Set Rethinkdb Max Open Connections",
              "minimum": 0,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "aws.s3",
      "type": "sources",
      "name": "S3",
      "category": "Storage",
      "provider": "AWS",
      "tags": [
        "s3"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region",
          "bucket_name",
          "folders",
          "target_type"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.s3"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set S3 Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set S3 Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set S3 Aws Region"
          },
          "bucket_name": {
            "type": "string",
            "title": "Bucket Source",
            "description": "Set Remote Target Bucket/Dir Name"
          },
          "folders": {
            "type": "string",
            "title": "Sync Folders Names",
            "default": "/",
            "description": "Set Bucket Folders Directory To Scan"
          },
          "target_type": {
            "type": "string",
            "title": "Sync Target Type",
            "default": "filesystem",
            "description": "Set Remote Target Bucket Type",
            "enum": [
              "aws",
              "gcp",
              "minio",
              "filesystem",
              "hdfs",
              "azure",
              "pass-through"
            ]
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set S3 Token"
            },
            "concurrency": {
              "type": "integer",
              "title": "Concurrency",
              "default": 1,
              "description": "Set Execution Concurrency",
              "minimum": 0
            },
            "scan_interval": {
              "type": "integer",
              "title": "Scan Interval",
              "default": 5,
              "description": "Set Scan Interval In Seconds",
              "minimum": 0
            }
          }
        }
      }
    },
    {
      "kind": "aws.s3",
      "type": "targets",
      "name": "S3",
      "category": "Storage",
      "provider": "AWS",
      "tags": [
        "filesystem",
        "object",
        "db",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.s3"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set S3 Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set S3 Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set S3 Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set S3 Token"
            }
          }
        }
      }
    },
    {
      "kind": "aws.sns",
      "type": "targets",
      "name": "SNS",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "pub/sub",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.sns"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Sns Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Sns Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Sns Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Sns Token"
            }
          }
        }
      }
    },
    {
      "kind": "aws.sqs",
      "type": "targets",
      "name": "SQS",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "queue",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.sqs"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Sqs Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Sqs Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Sqs Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Sqs Token"
            },
            "max_receive": {
              "type": "integer",
              "title": "Max Receive",
              "default": 0,
              "description": "Set Sqs Max Receive",
              "minimum": 0,
              "maximum": 2147483647
            },
            "retries": {
              "type": "integer",
              "title": "Retries",
              "default": 0,
              "description": "Set Sqs Number Of Retries On Failed Send Request",
              "minimum": 0,
              "maximum": 2147483647
            },
            "default_delay": {
              "type": "integer",
              "title": "Default Delay",
              "default": 10,
              "description": "Set Sqs Default Delay In Seconds",
              "minimum": 0,
              "maximum": 2147483647
            },
            "dead_letter": {
              "type": "string",
              "title": "Dead Letter Queue",
              "description": "Set Sqs Dead Letter Queue"
            },
            "default_queue": {
              "type": "string",
              "title": "Default Queue",
              "description": "Set Sqs Default Queue"
            }
          }
        }
      }
    },
    {
      "kind": "aws.sqs",
      "type": "sources",
      "name": "SQS",
      "category": "Messaging",
      "provider": "AWS",
      "tags": [
        "queue",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "aws_key",
          "aws_secret_key",
          "region",
          "queue"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "aws.sqs"
          },
          "aws_key": {
            "type": "string",
            "title": "Aws Key",
            "description": "Set Aws Key"
          },
          "aws_secret_key": {
            "type": "string",
            "title": "Aws Secret Key",
            "description": "Set Aws Secret Key"
          },
          "region": {
            "type": "string",
            "title": "Region",
            "description": "Set Aws Region"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          },
          "queue": {
            "type": "string",
            "title": "Queue",
            "description": "Set Sqs Queue Name"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "token": {
              "type": "string",
              "title": "Token",
              "description": "Set Aws Token"
            },
            "pull_delay": {
              "type": "integer",
              "title": "Pull Delay",
              "default": 5,
              "description": "Set Pull Delay In Seconds",
              "minimum": 0,
              "maximum": 2147483647
            },
            "visibility_timeout": {
              "type": "integer",
              "title": "Visibility Timeout",
              "default": 0,
              "description": "Set Visibility Timout",
              "minimum": 0,
              "maximum": 2147483647
            },
            "max_number_of_messages": {
              "type": "integer",
              "title": "Max Messages",
              "default": 1,
              "description": "Set Max Number Of Messages",
              "minimum": 0,
              "maximum": 2147483647
            },
            "wait_time_seconds": {
              "type": "integer",
              "title": "Wait time (seconds)",
              "default": 0,
              "description": "Set Wait Time Second",
              "minimum": 0,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "azure.servicebus",
      "type": "targets",
      "name": "ServiceBus",
      "category": "Messaging",
      "provider": "Azure",
      "tags": [
        "queue",
        "pub/sub",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.servicebus"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint",
            "description": "Set Service Bus End Point"
          },
          "shared_access_key_name": {
            "type": "string",
            "title": "Access Key Name",
            "description": "Set Service Bus Shared Access Key Name"
          },
          "shared_access_key": {
            "type": "string",
            "title": "Access Key",
            "description": "Set Service Bus Shared Access Key"
          },
          "queue_name": {
            "type": "string",
            "title": "Queue Name",
            "description": "Set Service Bus Queue Name"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "azure.servicebus",
      "type": "sources",
      "name": "ServiceBus",
      "category": "Messaging",
      "provider": "Azure",
      "tags": [
        "queue",
        "pub/sub",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "end_point",
          "shared_access_key_name",
          "shared_access_key",
          "queue_name"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "azure.servicebus"
          },
          "end_point": {
            "type": "string",
            "title": "Endpoint Address",
            "description": "Set Servicebus End Point"
          },
          "shared_access_key_name": {
            "type": "string",
            "title": "Access Key Name",
            "description": "Set Servicebus Shared Access Key Name"
          },
          "shared_access_key": {
            "type": "string",
            "title": "Access Key",
            "description": "Set Servicebus Shared Access Key"
          },
          "queue_name": {
            "type": "string",
            "title": "Queue",
            "description": "Set Servicebus Queue Name"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "stores.singlestore",
      "type": "targets",
      "name": "Single Store",
      "category": "Store",
      "provider": "",
      "tags": [
        "db",
        "sql",
        "cache"
      ],
      "schema": {
        "required": [
          "connection"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "stores.singlestore"
          },
          "connection": {
            "type": "string",
            "title": "Connection String",
            "description": "Set Memsql Connection String"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "x-class": "vjsf",
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "max_idle_connections": {
              "type": "integer",
              "title": "Max Idle Connections",
              "default": 10,
              "description": "Set Memsql Max Idle Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "max_open_connections": {
              "type": "integer",
              "title": "Max Open Connections",
              "default": 100,
              "description": "Set Memsql Max Open Connections",
              "minimum": 1,
              "maximum": 2147483647
            },
            "connection_max_lifetime_seconds": {
              "type": "integer",
              "title": "Connection Lifetime (Seconds)",
              "default": 3600,
              "description": "Set Memsql Connection Max Lifetime Seconds",
              "minimum": 1,
              "maximum": 2147483647
            }
          }
        }
      }
    },
    {
      "kind": "gcp.spanner",
      "type": "targets",
      "name": "Spanner",
      "category": "Store",
      "provider": "GCP",
      "tags": [
        "db",
        "sql",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "db",
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.spanner"
          },
          "db": {
            "type": "string",
            "title": "Database name",
            "description": "Set Gcp Spanner Db"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    },
    {
      "kind": "gcp.storage",
      "type": "targets",
      "name": "Storage",
      "category": "Storage",
      "provider": "GCP",
      "tags": [
        "db",
        "filesystem",
        "object",
        "cloud",
        "managed"
      ],
      "schema": {
        "required": [
          "credentials"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "gcp.storage"
          },
          "credentials": {
            "type": "string",
            "title": "Json Credentials",
            "description": "Set Gcp Credentials",
            "x-display": "textarea"
          }
        },
        "x-class": "vjsf"
      }
    }
  ],
  "kubemq_sources": {
    "title": "Select",
    "type": "object",
    "oneOf": [
      {
        "type": "object",
        "title": "Kubemq Queue",
        "required": [
          "address",
          "channel"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "kubemq.queue"
          },
          "address": {
            "type": "string",
            "title": "KubeMQ gRPC Service Address",
            "default": "kubemq-cluster-grpc.kubemq:50000",
            "description": "Set Kubemq Grpc Endpoint Address"
          },
          "channel": {
            "type": "string",
            "title": "Channel",
            "description": "Set Queue Channel"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "do_not_parse_payload": {
              "type": "boolean",
              "title": "Don't Parse Payload",
              "default": false,
              "description": "Allow Payload Pass-Through"
            },
            "response_channel": {
              "type": "string",
              "title": "Response Channel",
              "description": "Set Queue Response Channel"
            },
            "sources": {
              "type": "string",
              "title": "Concurrent Connections",
              "default": "1",
              "description": "Set How Many Concurrent Queue Sources To Run"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Queue Connection Clients Id"
            },
            "auth_token": {
              "type": "string",
              "title": "Authentication Token",
              "description": "Set Queue Connection Authentication Token",
              "x-display": "textarea"
            },
            "batch_size": {
              "type": "integer",
              "title": "Poll Batch Size",
              "default": 1,
              "description": "Set How Many Messages Will Pull In One Request",
              "minimum": 0
            },
            "wait_timeout": {
              "type": "integer",
              "title": "Wait Timeout (Seconds)",
              "default": 5,
              "description": "Set How Long To Wait In Seconds For Messages During Pull Of Requests",
              "minimum": 0
            }
          }
        }
      },
      {
        "type": "object",
        "title": "Kubemq Query",
        "required": [
          "address",
          "channel"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "kubemq.query"
          },
          "address": {
            "type": "string",
            "title": "KubeMQ gRPC Service Address",
            "default": "kubemq-cluster-grpc.kubemq:50000",
            "description": "Set Kubemq Grpc Endpoint Address"
          },
          "channel": {
            "type": "string",
            "title": "Channel",
            "description": "Set Query Channel"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "do_not_parse_payload": {
              "type": "boolean",
              "title": "Don't Parse Payload",
              "default": false,
              "description": "Allow Payload Pass-Through"
            },
            "group": {
              "type": "string",
              "title": "Group",
              "description": "Set Query Channel Group"
            },
            "sources": {
              "type": "string",
              "title": "Concurrent Connections",
              "default": "1",
              "description": "Set How Many Concurrent Query Sources To Run"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Query Connection Client Id"
            },
            "auth_token": {
              "type": "string",
              "title": "Authentication Token",
              "description": "Set Query Connection Authentication Token",
              "x-display": "textarea"
            },
            "auto_reconnect": {
              "type": "boolean",
              "title": "Reconnect Automatically",
              "default": true,
              "description": "Set Auto Reconnection "
            },
            "reconnect_interval_seconds": {
              "type": "integer",
              "title": "Reconnection Interval (Seconds)",
              "default": 0,
              "description": "Set Auto Reconnection Interval In Seconds ",
              "minimum": 0
            },
            "max_reconnects": {
              "type": "integer",
              "title": "Max Reconnections",
              "default": 0,
              "description": "Set Auto Reconnection Max Reconnects",
              "minimum": 0
            }
          }
        }
      },
      {
        "type": "object",
        "title": "Kubemq Events",
        "required": [
          "address",
          "channel"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "kubemq.events"
          },
          "address": {
            "type": "string",
            "title": "KubeMQ gRPC Service Address",
            "default": "kubemq-cluster-grpc.kubemq:50000",
            "description": "Set Kubemq Grpc Endpoint Address"
          },
          "channel": {
            "type": "string",
            "title": "Channel",
            "description": "Set Events Channel"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "do_not_parse_payload": {
              "type": "boolean",
              "title": "Don't Parse Payload",
              "default": false,
              "description": "Allow Payload Pass-Through"
            },
            "group": {
              "type": "string",
              "title": "Group",
              "description": "Set Events Channel Group"
            },
            "sources": {
              "type": "string",
              "title": "Concurrent Connections",
              "default": "1",
              "description": "Set How Many Concurrent Events Sources To Run"
            },
            "response_channel": {
              "type": "string",
              "title": "Response Channel",
              "description": "Set Events Response Channel"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Events Connection Client Id"
            },
            "auth_token": {
              "type": "string",
              "title": "Authentication Token",
              "description": "Set Events Connection Authentication Token",
              "x-display": "textarea"
            },
            "auto_reconnect": {
              "type": "boolean",
              "title": "Reconnect Automatically",
              "default": true,
              "description": "Set Auto Reconnection "
            },
            "reconnect_interval_seconds": {
              "type": "integer",
              "title": "Reconnection Interval (Seconds)",
              "default": 0,
              "description": "Set Auto Reconnection Interval In Seconds ",
              "minimum": 0
            },
            "max_reconnects": {
              "type": "integer",
              "title": "Max Reconnections",
              "default": 0,
              "description": "Set Auto Reconnection Max Reconnects",
              "minimum": 0
            }
          }
        }
      },
      {
        "type": "object",
        "title": "Kubemq Events-Store",
        "required": [
          "address",
          "channel"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "kubemq.events-store"
          },
          "address": {
            "type": "string",
            "title": "KubeMQ gRPC Service Address",
            "default": "kubemq-cluster-grpc.kubemq:50000",
            "description": "Set Kubemq Grpc Endpoint Address"
          },
          "channel": {
            "type": "string",
            "title": "Channel",
            "description": "Set Events-Store Channel"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "do_not_parse_payload": {
              "type": "boolean",
              "title": "Don't Parse Payload",
              "default": false,
              "description": "Allow Payload Pass-Through"
            },
            "group": {
              "type": "string",
              "title": "Group",
              "description": "Set Events-Store Channel Group"
            },
            "sources": {
              "type": "string",
              "title": "Concurrent Connections",
              "default": "1",
              "description": "Set How Many Concurrent Events Sources To Run"
            },
            "response_channel": {
              "type": "string",
              "title": "Response Channel",
              "description": "Set Events-Store Response Channel"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Events-Store Connection Client Id"
            },
            "auth_token": {
              "type": "string",
              "title": "Authentication Token",
              "description": "Set Events-Store Connection Authentication Token",
              "x-display": "textarea"
            },
            "auto_reconnect": {
              "type": "boolean",
              "title": "Reconnect Automatically",
              "default": true,
              "description": "Set Auto Reconnection "
            },
            "reconnect_interval_seconds": {
              "type": "integer",
              "title": "Reconnection Interval (Seconds)",
              "default": 0,
              "description": "Set Auto Reconnection Interval In Seconds ",
              "minimum": 0
            },
            "max_reconnects": {
              "type": "integer",
              "title": "Max Reconnections",
              "default": 0,
              "description": "Set Auto Reconnection Max Reconnects",
              "minimum": 0
            }
          }
        }
      },
      {
        "type": "object",
        "title": "Kubemq Command",
        "required": [
          "address",
          "channel"
        ],
        "properties": {
          "kind": {
            "type": "string",
            "const": "kubemq.command"
          },
          "address": {
            "type": "string",
            "title": "KubeMQ gRPC Service Address",
            "default": "kubemq-cluster-grpc.kubemq:50000",
            "description": "Set Kubemq Grpc Endpoint Address"
          },
          "channel": {
            "type": "string",
            "title": "Channel",
            "description": "Set Command Channel"
          },
          "setDefaults": {
            "type": "boolean",
            "title": "Set Defaults Properties",
            "default": true,
            "x-display": "checkbox"
          }
        },
        "if": {
          "required": [
            "setDefaults"
          ],
          "properties": {
            "setDefaults": {
              "const": false
            }
          }
        },
        "then": {
          "properties": {
            "do_not_parse_payload": {
              "type": "boolean",
              "title": "Don't Parse Payload",
              "default": false,
              "description": "Allow Payload Pass-Through"
            },
            "group": {
              "type": "string",
              "title": "Group",
              "description": "Set Command Channel Group"
            },
            "sources": {
              "type": "string",
              "title": "Concurrent Connections",
              "default": "1",
              "description": "Set How Many Concurrent Commands Sources To Run"
            },
            "client_id": {
              "type": "string",
              "title": "Client ID",
              "description": "Set Command Connection Client Id"
            },
            "auth_token": {
              "type": "string",
              "title": "Authentication Token",
              "description": "Set Command Connection Authentication Token",
              "x-display": "textarea"
            },
            "auto_reconnect": {
              "type": "boolean",
              "title": "Reconnect Automatically",
              "default": true,
              "description": "Set Auto Reconnection "
            },
            "reconnect_interval_seconds": {
              "type": "integer",
              "title": "Reconnection Interval (Seconds)",
              "default": 0,
              "description": "Set Auto Reconnection Interval In Seconds ",
              "minimum": 0
            },
            "max_reconnects": {
              "type": "integer",
              "title": "Max Reconnections",
              "default": 0,
              "description": "Set Auto Reconnection Max Reconnects",
              "minimum": 0
            }
          }
        }
      }
    ],
    "x-class": "vjsf"
  },
  "kubemq_targets": {"schema":"targets","version":"","sources":[{"kind":"kubemq.queue","name":"KubeMQ Queue","provider":"","category":"Queue","description":"Kubemq Queue Source","tags":[],"properties":[{"name":"address","kind":"string","title":"KubeMQ gRPC Service Address","description":"Set Kubemq grpc endpoint address","default":"kubemq-cluster-grpc.kubemq:50000","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":"kubemq-address"},{"name":"channel","kind":"string","title":"","description":"Set Queue channel","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"channel.queue","LoadedOptions":""},{"name":"do_not_parse_payload","kind":"bool","title":"Don't Parse Payload","description":"Allow payload pass-through","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"response_channel","kind":"string","title":"Response Channel","description":"Set Queue response channel","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sources","kind":"string","title":"Concurrent Connections","description":"Set how many concurrent Queue sources to run","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set Queue connection clients Id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_token","kind":"multilines","title":"Authentication Token","description":"Set Queue connection authentication token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"batch_size","kind":"int","title":"Poll Batch Size","description":"Set how many messages will pull in one request","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"wait_timeout","kind":"int","title":"Wait Timeout (Seconds)","description":"Set how long to wait in seconds for messages during pull of requests","default":"5","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""},{"kind":"kubemq.query","name":"KubeMQ Query","provider":"","category":"RPC","description":"Kubemq Query Source","tags":[],"properties":[{"name":"address","kind":"string","title":"KubeMQ gRPC Service Address","description":"Set Kubemq grpc endpoint address","default":"kubemq-cluster-grpc.kubemq:50000","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":"kubemq-address"},{"name":"channel","kind":"string","title":"","description":"Set Query channel","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"channel.query","LoadedOptions":""},{"name":"do_not_parse_payload","kind":"bool","title":"Don't Parse Payload","description":"Allow payload pass-through","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"group","kind":"string","title":"","description":"Set Query channel group","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sources","kind":"string","title":"Concurrent Connections","description":"Set how many concurrent Query sources to run","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set Query connection client Id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_token","kind":"multilines","title":"Authentication Token","description":"Set Query connection authentication token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auto_reconnect","kind":"bool","title":"Reconnect Automatically","description":"Set auto reconnection ","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"reconnect_interval_seconds","kind":"int","title":"Reconnection Interval (Seconds)","description":"Set auto reconnection interval in seconds ","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_reconnects","kind":"int","title":"Max Reconnections","description":"Set auto reconnection max reconnects","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""},{"kind":"kubemq.events","name":"KubeMQ Events","provider":"","category":"Pub/Sub","description":"Kubemq Events Source","tags":[],"properties":[{"name":"address","kind":"string","title":"KubeMQ gRPC Service Address","description":"Set Kubemq grpc endpoint address","default":"kubemq-cluster-grpc.kubemq:50000","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":"kubemq-address"},{"name":"channel","kind":"string","title":"","description":"Set Events channel","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"channel.events","LoadedOptions":""},{"name":"do_not_parse_payload","kind":"bool","title":"Don't Parse Payload","description":"Allow payload pass-through","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"group","kind":"string","title":"","description":"Set Events channel group","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sources","kind":"string","title":"Concurrent Connections","description":"Set how many concurrent events sources to run","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"response_channel","kind":"string","title":"Response Channel","description":"Set Events response channel","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set Events connection client Id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_token","kind":"multilines","title":"Authentication Token","description":"Set Events connection authentication token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auto_reconnect","kind":"bool","title":"Reconnect Automatically","description":"Set auto reconnection ","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"reconnect_interval_seconds","kind":"int","title":"Reconnection Interval (Seconds)","description":"Set auto reconnection interval in seconds ","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_reconnects","kind":"int","title":"Max Reconnections","description":"Set auto reconnection max reconnects","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""},{"kind":"kubemq.events-store","name":"KubeMQ Events Store","provider":"","category":"Pub/Sub","description":"Kubemq Events-Store Source","tags":[],"properties":[{"name":"address","kind":"string","title":"KubeMQ gRPC Service Address","description":"Set Kubemq grpc endpoint address","default":"kubemq-cluster-grpc.kubemq:50000","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":"kubemq-address"},{"name":"channel","kind":"string","title":"","description":"Set Events-Store channel","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"channel.events-store","LoadedOptions":""},{"name":"do_not_parse_payload","kind":"bool","title":"Don't Parse Payload","description":"Allow payload pass-through","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"group","kind":"string","title":"","description":"Set Events-Store channel group","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sources","kind":"string","title":"Concurrent Connections","description":"Set how many concurrent events sources to run","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"response_channel","kind":"string","title":"Response Channel","description":"Set Events-Store response channel","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set Events-Store connection client Id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_token","kind":"multilines","title":"Authentication Token","description":"Set Events-Store connection authentication token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auto_reconnect","kind":"bool","title":"Reconnect Automatically","description":"Set auto reconnection ","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"reconnect_interval_seconds","kind":"int","title":"Reconnection Interval (Seconds)","description":"Set auto reconnection interval in seconds ","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_reconnects","kind":"int","title":"Max Reconnections","description":"Set auto reconnection max reconnects","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""},{"kind":"kubemq.command","name":"KubeMQ Command","provider":"","category":"RPC","description":"Kubemq Command Source","tags":[],"properties":[{"name":"address","kind":"string","title":"KubeMQ gRPC Service Address","description":"Set Kubemq grpc endpoint address","default":"kubemq-cluster-grpc.kubemq:50000","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":"kubemq-address"},{"name":"channel","kind":"string","title":"","description":"Set Command channel","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"channel.command","LoadedOptions":""},{"name":"do_not_parse_payload","kind":"bool","title":"Don't Parse Payload","description":"Allow payload pass-through","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"group","kind":"string","title":"","description":"Set Command channel group","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sources","kind":"string","title":"Concurrent Connections","description":"Set how many concurrent commands sources to run","default":"1","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set Command connection client Id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_token","kind":"multilines","title":"Authentication Token","description":"Set Command connection authentication token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auto_reconnect","kind":"bool","title":"Reconnect Automatically","description":"Set auto reconnection ","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"reconnect_interval_seconds","kind":"int","title":"Reconnection Interval (Seconds)","description":"Set auto reconnection interval in seconds ","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_reconnects","kind":"int","title":"Max Reconnections","description":"Set auto reconnection max reconnects","default":"0","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""}],"targets":[{"kind":"echo","name":"Echo","provider":"","category":"Testing","description":"target for echo each request","tags":[],"properties":null,"metadata":null,"PropertiesSpec":""},{"kind":"cache.redis","name":"Redis","provider":"","category":"Cache","description":"Redis Target","tags":["db"],"properties":[{"name":"url","kind":"string","title":"Connection String","description":"Set Redis url","default":"redis://redis.host:6379","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Redis execution method","default":"get","options":["get","set","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Redis key","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"etag","kind":"int","description":"Set Redis etag","default":"0","options":null,"must":false,"min":0,"max":32767,"LoadedOptions":""},{"name":"concurrency","kind":"string","description":"Set Redis write concurrency","default":"","options":["first-write","last-write",""],"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"consistency","kind":"string","description":"Set Redis read consistency","default":"","options":["strong","eventual",""],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"cache.memcached","name":"Memcached","provider":"","category":"Cache","description":"Memcached Target","tags":["db"],"properties":[{"name":"hosts","kind":"string","title":"Hosts Address","description":"Set Memcached hosts","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Memcached max idle connections","default":"2","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_timeout_seconds","kind":"int","title":"Default Timeout (Seconds)","description":"Set Memcached default timeout seconds","default":"30","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Memcached execution method","default":"get","options":["get","set","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Memcached key","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.postgres","name":"Postgres","provider":"","category":"Store","description":"Postgres Target","tags":["db","sql"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Postgres connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Postgres max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Postgres max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Postgres connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Postgres execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Postgres isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.crate","name":"Crate","provider":"","category":"Store","description":"Crate Target","tags":["db","sql"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Crate connection string","default":"postgresql://crate@localhost:5432/doc?sslmode=disable","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Crate max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Crate max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Crate connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Crate execution method","default":"query","options":["query","exec"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Crate isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.mysql","name":"MySQL","provider":"","category":"Store","description":"MySQL Target","tags":["db","sql"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set MySQL connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MySQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MySQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MySQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MySql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MySql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.mssql","name":"MSSQL","provider":"","category":"Store","description":"MSSQL Target","tags":["db","sql"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set MSSQL connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MSSQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MSSQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MSSQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MSSQL execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MSSQL isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.mongodb","name":"MongoDB","provider":"","category":"Store","description":"MongoDB Target","tags":["db","no-sql"],"properties":[{"name":"host","kind":"string","title":"Host address","description":"Set MongoDB host address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set MongoDB username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set MongoDB password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"database","kind":"string","title":"","description":"Set MongoDB database","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"collection","kind":"string","title":"","description":"Set MongoDB collection","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"params","kind":"string","title":"","description":"Set MongoDB params","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"read_concurrency","kind":"string","title":"","description":"Set MongoDB read concurrency","default":"local","options":["local","majority","available","linearizable","snapshot"],"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"write_concurrency","kind":"string","title":"","description":"Set MongoDB write concurrency","default":"majority","options":["majority","Other"],"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"operation_timeout_seconds","kind":"int","title":"Operation Timeout (Seconds)","description":"Set MongoDB operation timeout seconds","default":"90","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MongoDB execution method","default":"get","options":["get_by_key","set_by_key","delete_by_key","find","find_many","insert","insert_many","update","update_many","delete_one","delete_many","aggregate","distinct"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set MongoDB key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"filter","kind":"string","description":"Set filter","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"set_upsert","kind":"bool","description":"Set Upsert in update mode","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.elasticsearch","name":"Elasticsearch","provider":"","category":"Store","description":"Elastic Search Target","tags":["db","logs"],"properties":[{"name":"urls","kind":"string","title":"Connection URLs","description":"Set Elastic Search Urls","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Elastic Search username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Elastic Search password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sniff","kind":"bool","title":"Use Sniff","description":"Set Elastic Search sniff mode","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Elastic execution method","default":"get","options":["get","set","delete","index.exists","index.create","index.delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"index","kind":"string","description":"Select Elastic index","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"id","kind":"string","description":"Select Elastic document id","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.cassandra","name":"Cassandra","provider":"","category":"Store","description":"Cassandra Target","tags":["db","sql","no-sql"],"properties":[{"name":"hosts","kind":"string","title":"Hosts Addresses","description":"Set Cassandra hosts addresses","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"port","kind":"int","title":"","description":"Set Cassandra port","default":"9042","options":null,"must":true,"min":0,"max":65535,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Cassandra username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Cassandra password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"replication_factor","kind":"int","title":"","description":"Set Cassandra replication factor","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"consistency","kind":"string","title":"","description":"Set Cassandra consistency","default":"All","options":["All","One","Two","Three","Quorum","LocalQuorum","EachQuorum","LocalOne","Any"],"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_table","kind":"string","title":"","description":"Set Cassandra default table","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_keyspace","kind":"string","title":"","description":"Set Cassandra default keyspace","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connect_timeout_seconds","kind":"int","title":"Connect Timeout (Seconds)","description":"Set Cassandra connection timeout in seconds","default":"60","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"timeout_seconds","kind":"int","title":"Operation Timeout (Seconds)","description":"Set Cassandra operation timeout in seconds","default":"60","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Cassandra execution method","default":"get","options":["get","set","delete","query","exec"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"method","kind":"consistency","description":"Set Cassandra consistency Level","default":"strong","options":["strong","eventual",""],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Cassandra key to set get or delete","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"table","kind":"string","description":"Cassandra table name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"keyspace","kind":"string","description":"Cassandra keyspace data container name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.couchbase","name":"Couchbase","provider":"","category":"Store","description":"Couchbase Target","tags":["db","sql"],"properties":[{"name":"url","kind":"string","title":"Connection URL","description":"Set Couchbase url","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Couchbase username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Couchbase password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"bucket","kind":"string","title":"","description":"Set Couchbase bucket","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"collection","kind":"string","title":"","description":"Set Couchbase collection","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"num_to_replicate","kind":"int","title":"Replication Nodes","description":"Set Couchbase number of nodes to replicate","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"num_to_persist","kind":"int","title":"Persistence Nodes","description":"Set Couchbase number of node to persist","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Couchbase execution method","default":"get","options":["get","set","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Couchbase key to set get or delete","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.cockroachdb","name":"CockroachDB","provider":"","category":"Store","description":"Cockroach Target","tags":["db","sql","postgres"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Cockroach connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Cockroach max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Cockroach max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Cockroach connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Cockroach execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Cockroach isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.percona","name":"Percona","provider":"","category":"Store","description":"Percona Target","tags":["db","sql","mysql"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Percona connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Percona max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Percona max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Percona connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Percona execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Percona isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.aerospike","name":"Aerospike","provider":"","category":"Store","description":"Aerospike Target","tags":["db"],"properties":[{"name":"host","kind":"string","title":"Host Address","description":"Set Aerospike host address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"port","kind":"int","title":"","description":"Set Aerospike port address","default":"3000","options":null,"must":true,"min":0,"max":65355,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Aerospike username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Aerospike password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"timeout","kind":"int","title":"","description":"Set aerospike timeout seconds","default":"5","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set aerospike execution method","default":"get","options":["get","set","delete","get_batch"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set aerospike key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"user_key","kind":"string","description":"Set aerospike user key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"namespace","kind":"string","description":"Set aerospike namespace","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.rethinkdb","name":"RethinkDB","provider":"","category":"Store","description":"Rethinkdb Target","tags":["db","sql"],"properties":[{"name":"host","kind":"string","title":"Host Address","description":"Set Rethinkdb host address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Rethinkdb username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Rethinkdb password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"timeout","kind":"int","title":"","description":"Set Rethinkdb operation timeout seconds","default":"5","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"keep_alive_period","kind":"int","title":"","description":"Set Rethinkdb operation keep alive period seconds","default":"5","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_key","kind":"string","title":"Authentication Key","description":"Set Rethinkdb auth key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"condition","title":"Use TLS","description":"Set tls conditions","default":"false","options":["true","false"],"must":true,"min":0,"max":0,"Conditional":{"true":[{"name":"cert_key","kind":"multilines","title":"Certification Key","description":"Set certificate key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"cert_file","kind":"multilines","title":"Certification File","description":"Set certificate file","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""},{"name":"hand_shake_version","kind":"int","title":"","description":"Set Rethinkdb hand shake version","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"number_of_retries","kind":"int","title":"","description":"Set Rethinkdb number of retries","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"initial_cap","kind":"int","title":"","description":"Set Rethinkdb initial cap","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open","kind":"int","title":"","description":"Set Rethinkdb max open connections","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Rethinkdb execution method","default":"get","options":["get","update","delete","insert"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Rethinkdb key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"table","kind":"string","description":"Set Rethinkdb table name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"db_name","kind":"string","description":"Set Rethinkdb db name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.singlestore","name":"Single Store","provider":"","category":"Store","description":"MemSQL Target","tags":["db","sql","cache"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set MemSQL connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MemSQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MemSQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MemSQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MySql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MySql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"stores.consulkv","name":"Consul","provider":"","category":"Store","description":"consulkv source properties","tags":["db","key-value store","cache"],"properties":[{"name":"address","kind":"string","title":"","description":"Set consulkv address connection","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"wait_time","kind":"int","title":"Wait Time (Milliseconds)","description":"Set wait time milliseconds ","default":"36000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"scheme","kind":"string","title":"","description":"Set consulkv scheme","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"data_center","kind":"string","title":"","description":"Set consulkv data center","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set consulkv token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token_file","kind":"string","title":"","description":"Set consulkv token_file","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"insecure_skip_verify","kind":"bool","title":"","description":"Set if insecure skip verify","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"bool","title":"Use TLS","description":"Set if use tls","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"condition","title":"Use TLS","description":"Set tls conditions","default":"false","options":["true","false"],"must":true,"min":0,"max":0,"Conditional":{"true":[{"name":"cert_key","kind":"multilines","title":"Certification Key","description":"Set certificate key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"cert_file","kind":"multilines","title":"Certification File","description":"Set certificate file","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"key","kind":"string","description":"Set key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"data_center","kind":"string","description":"Set data center","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"near","kind":"string","description":"Set near","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"filter","kind":"string","description":"Set filter","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"prefix","kind":"string","description":"Set prefix","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"allow_stale","kind":"bool","description":"Set if allow stale","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"require_consistent","kind":"bool","description":"Set if require consistent","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"user_cache","kind":"bool","description":"Set if use user cache","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"max_age","kind":"int","description":"Set max age milliseconds ","default":"36000","options":null,"must":false,"min":1,"max":2147483647,"LoadedOptions":""},{"name":"stale_if_error","kind":"int","description":"Set stale if error time in milliseconds","default":"36000","options":null,"must":false,"min":1,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"http","name":"HTTP","provider":"","category":"General","description":"HTTP/Rest Target","tags":["rest","api"],"properties":[{"name":"auth_type","kind":"condition","title":"Authentication Type","description":"Set Auth type","default":"No Auth","options":["No Auth","Basic","Token"],"must":true,"min":0,"max":0,"Conditional":{"Basic":[{"name":"auth_type","kind":"null","title":"Authentication Type","description":"Set Auth type","default":"basic","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Basic auth username","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Basic auth password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"No Auth":[{"name":"auth_type","kind":"null","title":"Authentication Type","description":"Set Auth type","default":"no_auth","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"Token":[{"name":"auth_type","kind":"null","title":"Authentication Type","description":"Set Auth type","default":"auth_token","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"multilines","title":"","description":"Set Auth token","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""},{"name":"default_headers","kind":"map","title":"","description":"Set Default headers  (key1=value1;key2=value2;...)","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"proxy","kind":"string","title":"","description":"Set Proxy address","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"root_certificate","kind":"multilines","title":"","description":"Set Root Certificate","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_private_key","kind":"multilines","title":"","description":"Set Client private key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_public_key","kind":"multilines","title":"","description":"Set Client public key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set method","default":"post","options":["post","get","head","put","delete","patch","options"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"url","kind":"string","description":"Set HTTP URL bucket name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"headers","kind":"string","description":"Set HTTP headers","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.mqtt","name":"MQTT","provider":"","category":"Messaging","description":"MQTT Messaging Target","tags":["iot","pub/sub"],"properties":[{"name":"host","kind":"string","title":"Host Address","description":"Set MQTT broker host","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set MQTT broker username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set MQTT broker password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_id","kind":"string","title":"Client ID","description":"Set MQTT broker client id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_topic","kind":"string","title":"","description":"Set MQTT default topic","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_qos","kind":"int","title":"","description":"Set MQTT default qos level","default":"0","options":null,"must":false,"min":0,"max":2,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"topic","kind":"string","description":"Set MQTT topic","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"qos","kind":"int","description":"Set MQTT qos level","default":"0","options":null,"must":true,"min":0,"max":2,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.rabbitmq","name":"RabbitMQ","provider":"","category":"Messaging","description":"RabbitMQ Messaging Target","tags":["queue","pub/sub"],"properties":[{"name":"url","kind":"string","title":"","description":"Set RabbitMQ url connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"skip_insecure","kind":"bool","title":"","description":"Set skip TLS Certificate verification","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"ca_cert","kind":"multilines","title":"","description":"Set TLS CA Certificate","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_exchange","kind":"string","title":"","description":"Set Default Exchange for routing","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_topic","kind":"string","title":"","description":"Set Default Topic for routing","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_persistence","kind":"bool","title":"","description":"Set Default Persistence for routed message","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"queue","kind":"string","description":"Set RabbitMQ queue Name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"exchange","kind":"string","description":"Set RabbitMQ exchange name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"mandatory","kind":"bool","description":"Set RabbitMQ mandatory","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"immediate","kind":"bool","description":"Set RabbitMQ immediate","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"delivery_mode","kind":"int","description":"Set RabbitMQ delivery mode","default":"1","options":null,"must":true,"min":0,"max":2,"LoadedOptions":""},{"name":"priority","kind":"int","description":"Set RabbitMQ priority","default":"0","options":null,"must":true,"min":0,"max":9,"LoadedOptions":""},{"name":"correlation_id","kind":"string","description":"Set RabbitMQ correlation id ","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"reply_to","kind":"string","description":"Set RabbitMQ set reply to target ","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"expiry_seconds","kind":"int","description":"Set RabbitMQ expiry in seconds","default":"","options":null,"must":true,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.kafka","name":"Kafka","provider":"","category":"Messaging","description":"Kafka Messaging Target","tags":["streaming","pub/sub"],"properties":[{"name":"brokers","kind":"string","title":"Brokers Address","description":"Set Kafka brokers list","default":"localhost:9092","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sasl_username","kind":"string","title":"SASL Username","description":"Set Kafka username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sasl_password","kind":"string","title":"SASL Password","description":"Set Kafka password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"topic","kind":"string","title":"","description":"Set Kafka topic","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sasl_mechanism","kind":"string","title":"SASL Mechanism","description":"SCRAM-SHA-256, SCRAM-SHA-512, plain, 0Auth bearer, or GSS-API","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"security_protocol","kind":"string","title":"Security Protocol","description":"plaintext, SASL-plaintext, SASL-SSL, SSL","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"ca_cert","kind":"multilines","title":"","description":"Set TLS CA Certificate","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_certificate","kind":"multilines","title":"","description":"Set TLS Client PEM data","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"client_key","kind":"multilines","title":"","description":"Set TLS Client Key PEM data","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"insecure","kind":"bool","title":"","description":"Set self-signed SSL Certificate","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"headers","kind":"string","description":"Set Kafka headers","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Kafka Key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.activemq","name":"ActiveMQ","provider":"","category":"Messaging","description":"ActiveMQ Messaging Target","tags":["queue","pub/sub"],"properties":[{"name":"host","kind":"string","title":"Host Address","description":"Set ActiveMQ host address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set ActiveMQ username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set ActiveMQ password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_destination","kind":"string","title":"","description":"Set ActiveMQ default destination","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"destination","kind":"string","description":"Set ActiveMQ destination","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.nats","name":"NATS","provider":"","category":"Messaging","description":"nats source properties","tags":["queue","pub/sub"],"properties":[{"name":"url","kind":"string","title":"Connection String","description":"Set nats url connection","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"bool","title":"Use TLS","description":"Set if use tls","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"condition","title":"","description":"Set tls conditions","default":"false","options":["true","false"],"must":true,"min":0,"max":0,"Conditional":{"true":[{"name":"cert_key","kind":"multilines","title":"Certification Key","description":"Set certificate key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"Certification File","kind":"multilines","title":"","description":"Set certificate file","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"subject","kind":"string","description":"Set subject","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"cache.hazelcast","name":"Hazelcast","provider":"","category":"Cache","description":"hazelcast source properties","tags":["db"],"properties":[{"name":"address","kind":"string","title":"","description":"Set hazelcast address connection","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_attempt_limit","kind":"int","title":"","description":"Set connections attempt limit","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_attempt_period","kind":"int","title":"","description":"Set connections attempt period in seconds","default":"5","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_timeout","kind":"int","title":"","description":"Set connections attempt timeout in seconds","default":"5","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"server_name","kind":"string","title":"","description":"Set hazelcast server name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"ssl","kind":"bool","title":"Use SSL","description":"Set if use ssl","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"ssl","kind":"condition","title":"SSL","description":"Set ssl conditions","default":"false","options":["true","false"],"must":true,"min":0,"max":0,"Conditional":{"true":[{"name":"cert_key","kind":"multilines","title":"Certification Key","description":"Set certificate key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"cert_file","kind":"multilines","title":"Certification File","description":"Set certificate file","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"key","kind":"string","description":"Set key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"map_name","kind":"string","description":"Set map name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"list_name","kind":"string","description":"Set list name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"method","kind":"string","description":"Set execution method","default":"get","options":["get","set","delete","get_list"],"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"storage.minio","name":"Minio","provider":"","category":"Storage","description":"Minio Storage Target","tags":["s3"],"properties":[{"name":"endpoint","kind":"string","title":"Endpoint","description":"Set Minio endpoint address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"use_ssl","kind":"bool","title":"USE SSL","description":"Set Minio SSL connection","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"access_key_id","kind":"string","title":"Access Key ID","description":"Set Minio access key id","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"secret_access_key","kind":"multilines","title":"Access Key Secret","description":"Set Minio secret access key","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Minio method","default":"make_bucket","options":["make_bucket","list_buckets","bucket_exists","remove_bucket","list_objects","put","get","remove"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"param1","kind":"string","description":"Set Minio bucket name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"param2","kind":"string","description":"Set Minio object name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"storage.hdfs","name":"HDFS","provider":"","category":"Storage","description":"Hadoop Target","tags":["big data"],"properties":[{"name":"address","kind":"string","title":"","description":"Set Hadoop address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"user","kind":"string","title":"","description":"Set Hadoop user","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Hadoop execution method","default":"read_file","options":["write_file","remove_file","read_file","rename_file","mkdir","stat"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"file_path","kind":"string","description":"Set Hadoop file path","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"old_file_path","kind":"string","description":"Set Hadoop old file path","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"file_mode","kind":"string","description":"Set os file mode","default":"0777","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"storage.filesystem","name":"File System","provider":"","category":"Storage","description":"Local Filesystem Target","tags":["filesystem"],"properties":[{"name":"base_path","kind":"string","title":"Destination Path","description":"Set local file system base path","default":"./","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set file system method","default":"","options":["save","load","delete","list"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"path","kind":"string","description":"Set path","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"filename","kind":"string","description":"Set filename","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"serverless.openfaas","name":"OpenFaas","provider":"","category":"Serverless","description":"Openfaas Target","tags":["functions"],"properties":[{"name":"gateway","kind":"string","title":"Gateway Address","description":"Set Openfaas gateway address","default":"localhost:27017","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Openfaas username","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Openfaas password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"topic","kind":"string","description":"Set OpenFaas function topic","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.sqs","name":"SQS","provider":"AWS","category":"Messaging","description":"AWS SQS Target","tags":["queue","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set SQS aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set SQS aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set SQS aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set SQS token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_receive","kind":"int","title":"","description":"Set SQS max receive","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"retries","kind":"int","title":"","description":"Set SQS number of retries on failed send request","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_delay","kind":"int","title":"","description":"Set SQS default delay in seconds","default":"10","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"dead_letter","kind":"string","title":"Dead Letter Queue","description":"Set SQS dead letter queue","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_queue","kind":"string","title":"Default Queue","description":"Set SQS Default Queue","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"queue","kind":"string","description":"Set EventHubs queue name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"tags","kind":"string","description":"Set EventHubs tags","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"partition_key","kind":"string","description":"Set EventHubs partition key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.sns","name":"SNS","provider":"AWS","category":"Messaging","description":"AWS SNS Target","tags":["pub/sub","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set SNS aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set SNS aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set SNS aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set SNS token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set SNS execution method","default":"send_message","options":["list_topics","list_subscriptions","list_subscriptions_by_topic","create_topic","subscribe","send_message","delete_topic"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"topic","kind":"string","description":"Set SNS topic","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"end_point","kind":"string","description":"Set SNS end point","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"return_subscription","kind":"bool","description":"Set SNS return subscription","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"target_arn","kind":"string","description":"Set SNS target arn","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"message","kind":"string","description":"Set SNS message","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"phone_number","kind":"string","description":"Set SNS phone number","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"subject","kind":"string","description":"Set SNS subject","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.s3","name":"S3","provider":"AWS","category":"Storage","description":"AWS S3 Target","tags":["filesystem","object","db","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set S3 aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set S3 aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set S3 aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set S3 token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set S3 execution method","default":"upload_item","options":["list_buckets","list_bucket_items","create_bucket","delete_bucket","delete_item_from_bucket","delete_all_items_from_bucket","upload_item","copy_item","get_item"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"bucket_name","kind":"string","description":"Set S3 bucket name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"copy_source","kind":"string","description":"Set S3 copy source","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"wait_for_completion","kind":"bool","description":"Set S3 wait for completion until retuning response","default":"false","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"item_name","kind":"string","description":"Set S3 item name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.amazonmq","name":"AmazonMQ","provider":"AWS","category":"Messaging","description":"AWS AmazonMQ Target","tags":["queue","cloud","mq"],"properties":[{"name":"host","kind":"string","title":"Host Address","description":"Set AmazonMQ host","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set AmazonMQ username","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set AmazonMQ password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_destination","kind":"string","title":"","description":"Set AmazonMQ default destination","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"destination","kind":"string","description":"Set AmazonMQ destination","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.rds.postgres","name":"Postgres","provider":"AWS","category":"Store","description":"AWS RDS Postgres Target","tags":["rds","sql","db","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Postgres aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Postgres aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Postgres aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Postgres aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"end_point","kind":"string","title":"Endpoint","description":"Set Postgres end point address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_port","kind":"int","title":"Port","description":"Set Postgres end point port","default":"5432","options":null,"must":true,"min":0,"max":65535,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_user","kind":"string","title":"Username","description":"Set Postgres db user(should match user created for IAM Access)","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_name","kind":"string","title":"Database","description":"Set Postgres db name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Postgres max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Postgres max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Postgres connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Postgres execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Postgres isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.rds.mysql","name":"MySQL","provider":"AWS","category":"Store","description":"AWS RDS MySQL Target","tags":["rds","sql","db","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set MySQL aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set MySQL aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set MySQL aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set MySQL aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"end_point","kind":"string","title":"Endpoint","description":"Set MySQL end point address","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_port","kind":"int","title":"Port","description":"Set MySQL end point port","default":"3306","options":null,"must":true,"min":0,"max":65535,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_user","kind":"string","title":"Username","description":"Set MySQL db user","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_name","kind":"string","title":"Database","description":"Set MySQL db name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MySQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MySQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MySQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MySql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MySql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.rds.mariadb","name":"MariaDB","provider":"AWS","category":"Store","description":"AWS RDS MariaDB Target","tags":["rds","sql","mysql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set MariaDB connection string","default":"root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MariaDB max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MariaDB max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MariaDB connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MariaDB execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MariaDB isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.rds.mssql","name":"MSSQL","provider":"AWS","category":"Store","description":"AWS RDS MSSQL Target","tags":["rds","sql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set MSSQL connection string","default":"sqlserver://sa:n8x2Nz!f@localhost:1433?database=master","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MSSQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MSSQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MSSQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MSSQL execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MSSQL isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.dynamodb","name":"DynamoDB","provider":"AWS","category":"Store","description":"AWS Dynamodb Target","tags":["db","no-sql","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Dynamodb aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Dynamodb aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Dynamodb aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Dynamodb aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Dynamodb execution method","default":"insert_item","options":["list_tables","create_table","delete_table","insert_item","get_item","delete_item","update_item"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"table_name","kind":"string","description":"Set Dynamodb table name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.rds.redshift","name":"Redshift","provider":"AWS","category":"Store","description":"AWS RDS Redshift Target","tags":["rds","sql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Redshift connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Redshift max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Redshift max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Redshift connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Redshift execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Redshift isolation level","default":"read_committed","options":["read_uncommitted","read_committed","repeatable_read","serializable",""],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.redshift.service","name":"Redshift Service","provider":"AWS","category":"Store","description":"AWS Redshift Service Target","tags":["sql","db","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Redshift Service aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Redshift Service aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Redshift Service aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Redshift Service token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Redshift Service execution method","default":"create_tags","options":["create_tags","delete_tags","list_tags","list_snapshots","list_snapshots_by_tags_keys","list_snapshots_by_tags_values","describe_cluster","list_clusters","list_clusters_by_tags_keys","list_clusters_by_tags_values"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"resource_arn","kind":"string","description":"Set Redshift Service resource arn","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"resource_name","kind":"string","description":"Set Redshift Service resource name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.athena","name":"Athena","provider":"AWS","category":"Analytics","description":"AWS Athena Target","tags":["query","s3","SQL"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Athena aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Athena aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Athena aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Athena aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Athena execution method","default":"query","options":["list_databases","list_data_catalogs","query","get_query_result"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"query","kind":"string","description":"Set Athena query","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"catalog","kind":"string","description":"Set Athena catalog","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"db","kind":"string","description":"Set Athena db","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"output_location","kind":"string","description":"Set Athena output location","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"execution_id","kind":"string","description":"Set Athena execution id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.msk","name":"MSK","provider":"AWS","category":"Messaging","description":"AWS MSK Target","tags":["kafka","streaming","cloud","managed"],"properties":[{"name":"brokers","kind":"string","title":"Brokers Address","description":"Set MSK brokers list","default":"localhost:9092","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sasl_username","kind":"string","title":"SASL Username","description":"Set MSK username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"sasl_password","kind":"string","title":"SASL Password","description":"Set MSK password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"topic","kind":"string","title":"","description":"Set MSK topic","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"headers","kind":"string","description":"Set Kafka headers","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Kafka Key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.lambda","name":"Lambda","provider":"AWS","category":"Serverless","description":"AWS Lambda Target","tags":["faas","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Lambda aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Lambda aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Lambda aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Lambda token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Lambda execution method","default":"run","options":["list","create","run","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"zip_file_name","kind":"string","description":"Set Lambda zip file name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"handler_name","kind":"string","description":"Set Lambda handler name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"role","kind":"string","description":"Set Lambda role","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"runtime","kind":"string","description":"Set Lambda runtime version","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"function_name","kind":"string","description":"Set Lambda function name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"description","kind":"string","description":"Set Lambda description","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"memory_size","kind":"int","description":"Set Lambda memory size","default":"256","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"timeout","kind":"int","description":"Set Lambda timeout","default":"15","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.kinesis","name":"Kinesis","provider":"AWS","category":"Messaging","description":"AWS Kinesis Target","tags":["streaming","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Kinesis aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Kinesis aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Kinesis aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Kinesis aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Kinesis execution method","default":"put_record","options":["list_streams","list_stream_consumers","create_stream","delete_stream","put_record","put_records","get_records","get_shard_iterator","list_shards"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"stream_name","kind":"string","description":"Set Kinesis stream name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"partition_key","kind":"string","description":"Set Kinesis partition key","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"shard_id","kind":"string","description":"Set Kinesis shard id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"stream_arn","kind":"string","description":"Set Kinesis stream arn","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"shard_iterator_type","kind":"string","description":"Set Kinesis shard iterator type","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"shard_iterator_id","kind":"string","description":"Set Kinesis shard iterator id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"limit","kind":"int","description":"Set Kinesis limit","default":"1","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"shard_count","kind":"int","description":"Set Kinesis shard count","default":"1","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"consumer_name","kind":"string","description":"Set consumer name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.keyspaces","name":"Keyspaces","provider":"AWS","category":"Store","description":"AWS Keyspaces Target","tags":["cassandra","db","no-sql","cloud","managed"],"properties":[{"name":"hosts","kind":"string","title":"Hosts Addresses","description":"Set Keyspaces hosts addresses","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"port","kind":"int","title":"","description":"Set Keyspaces port","default":"9142","options":null,"must":true,"min":0,"max":65535,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set Keyspaces username","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set Keyspaces password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"tls","kind":"string","title":"TLS","description":"Set Keyspaces tls download url","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"replication_factor","kind":"int","title":"","description":"Set Keyspaces replication factor","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"proto_version","kind":"int","title":"","description":"Set Keyspaces protoVersion","default":"4","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"consistency","kind":"string","title":"","description":"Set Keyspaces consistency","default":"LocalQuorum","options":["One","LocalQuorum","local_one"],"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_table","kind":"string","title":"","description":"Set Keyspaces default table","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_keyspace","kind":"string","title":"","description":"Set Keyspaces default keyspace","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connect_timeout_seconds","kind":"int","title":"Connect Timeout (Seconds)","description":"Set Keyspaces connection timeout in seconds","default":"60","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"timeout_seconds","kind":"int","title":"Operation Timeout (Seconds)","description":"Set Keyspaces operation timeout in seconds","default":"60","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Keyspaces execution method","default":"get","options":["get","set","delete","query","exec"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"method","kind":"consistency","description":"Set Keyspaces consistency Level","default":"strong","options":["strong","eventual",""],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Keyspaces key to set get or delete","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"table","kind":"string","description":"Keyspaces table name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"keyspace","kind":"string","description":"Keyspaces keyspace data container name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.elasticsearch","name":"Elasticsearch","provider":"AWS","category":"Store","description":"AWS Elastic Search Target","tags":["db","log","cloud","managed"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Elastic Search aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Elastic Search aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Elastic Search aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Elastic Search execution method","default":"GET","options":["GET","POST","PUT","DELETE","OPTIONS"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"region","kind":"string","description":"Set Elastic Search region","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"domain","kind":"string","description":"Set Elastic Search domain","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"index","kind":"string","description":"Set Elastic Search index","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"endpoint","kind":"string","description":"Set Elastic Search endpoint","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"id","kind":"string","description":"Set Elastic Search id","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"json","kind":"multilines","description":"Set Elastic Search json","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"service","kind":"string","description":"Set Elastic Search service","default":"es","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.cloudwatch.events","name":"Cloudwatch Events","provider":"AWS","category":"Observability","description":"AWS Cloudwatch Events Target","tags":["events","cloud"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Cloudwatch-Events aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Cloudwatch-Events aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Cloudwatch-Events aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Cloudwatch-Events aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Cloudwatch-Events execution method","default":"send_event","options":["put_targets","send_event","list_buses"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"rule","kind":"string","description":"Set Cloudwatch-Events rule","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"detail","kind":"string","description":"Set Cloudwatch-Events detail","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"detail_type","kind":"string","description":"Set Cloudwatch-Events detail type","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"source","kind":"string","description":"Set Cloudwatch-Events source","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"limit","kind":"int","description":"Set Cloudwatch-Events limit","default":"100","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.cloudwatch.logs","name":"Cloudwatch Logs","provider":"AWS","category":"Observability","description":"AWS Cloudwatch Logs Target","tags":["logs","cloud"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Cloudwatch-Logs aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Cloudwatch-Logs aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Cloudwatch-Logs aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Cloudwatch-Logs aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Cloudwatch-Logs execution method","default":"put_log_event","options":["create_log_event_stream","describe_log_event_stream","delete_log_event_stream","put_log_event","get_log_event","create_log_group","delete_log_group","describe_log_group"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"sequence_token","kind":"string","description":"Set Cloudwatch-Logs sequence token","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"log_group_name","kind":"string","description":"Set Cloudwatch-Logs log group name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"log_stream_name","kind":"string","description":"Set Cloudwatch-Logs sequence log stream name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"log_group_prefix","kind":"string","description":"Set Cloudwatch-Logs log group prefix","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"limit","kind":"int","description":"Set Cloudwatch-Logs limit","default":"100","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"aws.cloudwatch.metrics","name":"Cloudwatch Metrics","provider":"AWS","category":"Observability","description":"AWS Cloudwatch Metrics Target","tags":["metrics","cloud"],"properties":[{"name":"aws_key","kind":"string","title":"","description":"Set Cloudwatch-Metrics aws key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"aws_secret_key","kind":"string","title":"","description":"Set Cloudwatch-Metrics aws secret key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"region","kind":"string","title":"","description":"Set Cloudwatch-Metrics aws region","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"token","kind":"string","title":"","description":"Set Cloudwatch-Metrics aws token","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Cloudwatch-Metrics execution method","default":"put_metrics","options":["put_metrics","list_metrics"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"namespace","kind":"string","description":"Set Cloudwatch-Metrics namespace","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.pubsub","name":"PubSub","provider":"GCP","category":"Messaging","description":"GCP PubSub Target","tags":["streaming","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"retries","kind":"int","title":"","description":"Set PubSub sending message retries","default":"0","options":null,"must":false,"min":0,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"topic_id","kind":"string","description":"Set PubSub request topic id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"tags","kind":"string","description":"Set PubSub request tags","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.cache.redis","name":"Redis","provider":"GCP","category":"Cache","description":"GCP Memory Store Redis Target","tags":["db","memory-store","cloud","managed"],"properties":[{"name":"url","kind":"string","title":"Connection String","description":"Set Redis url","default":"redis://localhost:6379","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Redis execution method","default":"get","options":["get","set","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Redis key","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"etag","kind":"int","description":"Set Redis etag","default":"0","options":null,"must":false,"min":0,"max":32767,"LoadedOptions":""},{"name":"concurrency","kind":"string","description":"Set Redis write concurrency","default":"","options":["first-write","last-write",""],"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"consistency","kind":"string","description":"Set Redis read consistency","default":"","options":["strong","eventual",""],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.cache.memcached","name":"Memcached","provider":"GCP","category":"Cache","description":"GCP Memory Store Memcached Target","tags":["db","memory-store","cloud","managed"],"properties":[{"name":"hosts","kind":"string","title":"Hosts Address","description":"Set Memcached hosts","default":"localhost:11211","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Memcached max idle connections","default":"2","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"default_timeout_seconds","kind":"int","title":"Default Timeout (Seconds)","description":"Set Memcached default timeout seconds","default":"30","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Memcached execution method","default":"get","options":["get","set","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"key","kind":"string","description":"Set Memcached key","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.stores.postgres","name":"Postgres","provider":"GCP","category":"Store","description":"GCP Postgres Direct Mode Target","tags":["db","sql","cloud","managed"],"properties":[{"name":"connection-type","kind":"condition","title":"Connection Type","description":"Set Postgres Connection Type","default":"Proxy","options":["Proxy","Direct"],"must":true,"min":0,"max":0,"Conditional":{"Direct":[{"name":"use_proxy","kind":"null","title":"","description":"Set use proxy","default":"false","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection","kind":"string","title":"Connection String","description":"Set Postgres connection string","default":"postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"Proxy":[{"name":"use_proxy","kind":"null","title":"","description":"Set use proxy","default":"true","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"instance_connection_name","kind":"string","title":"","description":"Set Postgres instance connection name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_user","kind":"string","title":"Username","description":"Set Postgres db user","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_password","kind":"string","title":"Password","description":"Set Postgres db password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"","description":"Set Postgres credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Postgres max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Postgres max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Postgres connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Postgres execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Postgres isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.stores.mysql","name":"MySQL","provider":"GCP","category":"Store","description":"GCP MySQL Direct Mode Target","tags":["db","sql","cloud","managed"],"properties":[{"name":"connection-type","kind":"condition","title":"Connection Type","description":"Set MySQL Connection Type","default":"Proxy","options":["Proxy","Direct"],"must":true,"min":0,"max":0,"Conditional":{"Direct":[{"name":"use_proxy","kind":"null","title":"","description":"Set use proxy","default":"false","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection","kind":"string","title":"Connection String","description":"Set MySQL connection string","default":"root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"Proxy":[{"name":"use_proxy","kind":"null","title":"","description":"Set use proxy","default":"true","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"instance_connection_name","kind":"string","title":"","description":"Set MySQL instance connection name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_user","kind":"string","title":"Username","description":"Set MySQL db user","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_password","kind":"string","title":"Password","description":"Set MySQL db password","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_name","kind":"string","title":"Database","description":"Sets Mysql db name","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"","description":"Set MySQL credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}]},"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MySQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MySQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MySQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MySql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MySql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.spanner","name":"Spanner","provider":"GCP","category":"Store","description":"GCP Spanner Target","tags":["db","sql","cloud","managed"],"properties":[{"name":"db","kind":"string","title":"Database name","description":"Set GCP Spanner DB","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Spanner execution method","default":"query","options":["query","read","update_database_ddl","insert","update","insert_or_update"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"query","kind":"string","description":"Set Spanner query request","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"table_name","kind":"string","description":"Set Spanner table_name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.bigtable","name":"Big Table","provider":"GCP","category":"Store","description":"GCP Bigtable Target","tags":["db","sql","distributed","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"instance","kind":"string","title":"","description":"Set Bigtable instance","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP Bigtable execution method","default":"write","options":["write","write_batch","get_row","get_all_rows","delete_row","get_tables","create_table","delete_table","create_column_family","get_all_rows_by_column"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"table_name","kind":"string","description":"Set Bigtable table name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"column_family","kind":"string","description":"Set Bigtable column family","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"row_key_prefix","kind":"string","description":"Set Bigtable row key prefix","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"column_name","kind":"string","description":"Set Bigtable column name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.bigquery","name":"Big Query","provider":"GCP","category":"Store","description":"GCP Bigquery Target","tags":["db","sql","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP BigQuery execution method","default":"query","options":["query","create_data_set","delete_data_set","create_table","delete_table","get_table_info","get_data_sets","insert"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"table_name","kind":"string","description":"Set BigQuery table name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"dataset_id","kind":"string","description":"Set BigQuery dataset id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"location","kind":"string","description":"Set BigQuery location","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"query","kind":"string","description":"Set BigQuery query","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.cloudfunctions","name":"Cloud Functions","provider":"GCP","category":"Serverless","description":"GCP Cloud Functions Target","tags":["faas","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"location_match","kind":"bool","title":"","description":"Set Cloud Functions location match","default":"true","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"name","kind":"string","description":"Set Cloud Functions name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"project","kind":"string","description":"Set Cloud Functions project","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"location","kind":"string","description":"Set Cloud Functions location","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.firebase","name":"Firebase","provider":"GCP","category":"Store","description":"GCP Firebase Target","tags":["db","no-sql","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"auth_client","kind":"bool","title":"","description":"Set Firebase target is a auth client","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_client","kind":"bool","title":"Is DB Client","description":"Set Firebase target is a db client","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"db_url","kind":"string","title":"DB URL","description":"Set Firebase db url","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"messaging_client","kind":"bool","title":"Is Messaging Client","description":"Set Firebase target is a messaging client","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP Firebase execution method","default":"create_user","options":["custom_token","verify_token","retrieve_user","create_user","delete_user","delete_multiple_users","list_users","get_db","delete_db","set_db","send_message","send_multi"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"retrieve_by","kind":"string","description":"Set GCP Firebase retrieve by type","default":"by_uid","options":["by_uid","by_email","by_phone"],"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"token_id","kind":"string","description":"Set Firebase token id","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"uid","kind":"string","description":"Set Firebase user uid","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"email","kind":"string","description":"Set Firebase user email","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"phone","kind":"string","description":"Set Firebase user phone","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"ref_path","kind":"string","description":"Set Firebase reference path","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"child_ref","kind":"string","description":"Set Firebase child path","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.firestore","name":"Firestore","provider":"GCP","category":"Store","description":"GCP Firestore Target","tags":["db","no-sql","cloud","managed"],"properties":[{"name":"project_id","kind":"string","title":"Project ID","description":"Set GCP project ID","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP Firestore execution method","default":"add","options":["documents_all","document_key","delete_document_key","add"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"collection","kind":"string","description":"Set Firestore collection name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"item","kind":"string","description":"Set Firestore item name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"gcp.storage","name":"Storage","provider":"GCP","category":"Storage","description":"GCP Storage Target","tags":["db","filesystem","object","cloud","managed"],"properties":[{"name":"credentials","kind":"multilines","title":"Json Credentials","description":"Set GCP credentials","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP Storage method","default":"create_bucket","options":["upload","create_bucket","download","delete","rename","copy","move","list"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"object","kind":"string","description":"Set object name to save the file under","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"rename_object","kind":"string","description":"Set GCP name to change the file name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"bucket","kind":"string","description":"Set Storage bucket name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"dst_bucket","kind":"string","description":"Set the bucket name of the destination","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"path","kind":"string","description":"Set path to the file for upload","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"project_id","kind":"string","description":"Set GCP storage project id ","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"storage_class","kind":"string","description":"Set GCP storage class","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"location","kind":"string","description":"Set GCP storage location","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.stores.postgres","name":"Postgres","provider":"Azure","category":"Store","description":"Azure Postgres Target","tags":["sql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Postgres connection string","default":"postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Postgres max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Postgres max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Postgres connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Postgres execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Postgres isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.stores.mysql","name":"MySQL","provider":"Azure","category":"Store","description":"Azure MySQL Target","tags":["sql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection lifetime String","description":"Set MySQL connection string","default":"root:mysql@(localhost:3306)/store?charset=utf8\u0026parseTime=True\u0026loc=Local","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set MySQL max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set MySQL max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set MySQL connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set MySql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set MySql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.stores.azuresql","name":"MSSQL","provider":"Azure","category":"Store","description":"Azure SQL Target","tags":["sql","db","cloud","managed"],"properties":[{"name":"connection","kind":"string","title":"Connection String","description":"Set Azuresql connection string","default":"server=server.net;user id=test;password=test;port=1433;database=initial_db;","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_idle_connections","kind":"int","title":"","description":"Set Azuresql max idle connections","default":"10","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_open_connections","kind":"int","title":"","description":"Set Azuresql max open connections","default":"100","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"connection_max_lifetime_seconds","kind":"int","title":"Connection Lifetime (Seconds)","description":"Set Azuresql connection max lifetime seconds","default":"3600","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Azuresql execution method","default":"query","options":["query","exec","transaction"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"isolation_level","kind":"string","description":"Set Azuresql isolation level","default":"Default","options":["Default","ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"],"must":false,"min":0,"max":0,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.storage.queue","name":"Queue","provider":"Azure","category":"Storage","description":"Azure Queue Storage Target","tags":["queue","messaging","db","cloud","managed"],"properties":[{"name":"storage_access_key","kind":"string","title":"","description":"Set Queue Storage storage access key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"storage_account","kind":"string","title":"","description":"Set Queue Storage storage account","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"policy","kind":"string","title":"","description":"Set Queue Storage retry policy","default":"retry_policy_exponential","options":["retry_policy_exponential","retry_policy_fixed"],"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_tries","kind":"int","title":"","description":"Set Queue Storage max tries","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"try_timeout","kind":"int","title":"Try Timout (milliseconds)","description":"Set Queue Storage try timeout in milliseconds","default":"1000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"retry_delay","kind":"int","title":"","description":"Set Queue Storage retry delay in milliseconds","default":"60000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_retry_delay","kind":"int","title":"","description":"Set Queue Storage max retry delay in milliseconds","default":"180000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set Queue Storage execution method","default":"create","options":["create","get_messages_count","peek","push","pop","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"queue_name","kind":"string","description":"Set Queue Storage queue name","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"service_url","kind":"string","description":"Set Queue Storage service url","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"queue_metadata","kind":"string","description":"Set Queue Storage queue metadata","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"max_messages","kind":"int","description":"Set Queue Storage max messages","default":"32","options":null,"must":false,"min":1,"max":2147483647,"LoadedOptions":""},{"name":"visibility_timeout","kind":"int","description":"Set Queue Storage visibility timeout","default":"100000000","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"time_to_live","kind":"int","description":"Set Queue Storage time to live","default":"100000000","options":null,"must":false,"min":1,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.storage.files","name":"Files","provider":"Azure","category":"Storage","description":"Azure Files Storage Target","tags":["filesystem","db","cloud","managed"],"properties":[{"name":"storage_access_key","kind":"string","title":"","description":"Set Files Storage storage access key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"storage_account","kind":"string","title":"","description":"Set Files Storage storage account","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"policy","kind":"string","title":"","description":"Set Files Storage retry policy","default":"exponential","options":["exponential","fixed"],"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_tries","kind":"int","title":"","description":"Set Files Storage max tries","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"try_timeout","kind":"int","title":"Try Timout (milliseconds)","description":"Set Files Storage try timeout in milliseconds","default":"1000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"retry_delay","kind":"int","title":"","description":"Set Files Storage retry delay in milliseconds","default":"60000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_retry_delay","kind":"int","title":"","description":"Set Files Storage max retry delay in milliseconds","default":"180000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set GCP files Storage execution method","default":"get","options":["upload","get","delete","create"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"service_url","kind":"string","description":"Set files Storage service url","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"file_metadata","kind":"string","description":"Set files Storage file metadata","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"range_size","kind":"int","description":"Set files Storage range size","default":"4194304","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"parallelism","kind":"int","description":"Set files Storage parallelism","default":"16","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"count","kind":"int","description":"Set files Storage count","default":"0","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"offset","kind":"int","description":"Set files Storage offset","default":"0","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"max_retry_request","kind":"int","description":"Set files Storage max retry request","default":"1","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"file_size","kind":"int","description":"Set files Storage file size","default":"1000000","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"azure.storage.blob","name":"Blob","provider":"Azure","category":"Storage","description":"Azure Blob Storage Target","tags":["object","db","cloud","managed"],"properties":[{"name":"storage_access_key","kind":"string","title":"","description":"Set Blob Storage storage access key","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"storage_account","kind":"string","title":"","description":"Set Blob Storage storage account","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"policy","kind":"string","title":"","description":"Set Blob Storage retry policy","default":"exponential","options":["exponential","fixed"],"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_tries","kind":"int","title":"","description":"Set Blob Storage max tries","default":"1","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"try_timeout","kind":"int","title":"Try Timout (milliseconds)","description":"Set Blob Storage try timeout in milliseconds","default":"1000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"retry_delay","kind":"int","title":"","description":"Set Blob Storage retry delay in milliseconds","default":"60000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"max_retry_delay","kind":"int","title":"","description":"Set Blob Storage max retry delay in milliseconds","default":"180000","options":null,"must":false,"min":1,"max":2147483647,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":[{"name":"method","kind":"string","description":"Set blob Storage execution method","default":"get","options":["upload","get","delete"],"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"delete_snapshots_option_type","kind":"string","description":"Set blob Storage delete snapshots option type","default":"","options":["include","only",""],"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"blob_metadata","kind":"string","description":"Set Blob Storage blob metadata","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"file_name","kind":"string","description":"Set Blob Storage blob name","default":"","options":null,"must":false,"min":0,"max":0,"LoadedOptions":""},{"name":"service_url","kind":"string","description":"Set Blob Storage blob service url","default":"","options":null,"must":true,"min":0,"max":0,"LoadedOptions":""},{"name":"block_size","kind":"int","description":"Set Blob Storage block size","default":"4194304","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"parallelism","kind":"int","description":"Set Blob Storage parallelism","default":"16","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"count","kind":"int","description":"Set Blob Storage count","default":"0","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"offset","kind":"int","description":"Set Blob Storage offset","default":"0","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""},{"name":"max_retry_request","kind":"int","description":"Set Blob Storage max retry request","default":"1","options":null,"must":false,"min":0,"max":2147483647,"LoadedOptions":""}],"PropertiesSpec":""},{"kind":"messaging.amqp","name":"AMQP","provider":"","category":"Messaging","description":"AMQP Messaging Target","tags":["address","pub/sub","queues"],"properties":[{"name":"url","kind":"string","title":"","description":"Set AMQP url connection string","default":"","options":null,"must":true,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"skip_insecure","kind":"bool","title":"","description":"Set skip TLS Certificate verification","default":"false","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"ca_cert","kind":"multilines","title":"","description":"Set TLS CA Certificate","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"username","kind":"string","title":"","description":"Set AMQP username","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""},{"name":"password","kind":"string","title":"","description":"Set AMQP password","default":"","options":null,"must":false,"min":0,"max":0,"Conditional":null,"default_from_key":"","LoadedOptions":""}],"metadata":null,"PropertiesSpec":""}]}
};
