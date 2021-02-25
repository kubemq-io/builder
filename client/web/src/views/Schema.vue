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
            <v-list-item-title class="title">KubeMQ Source</v-list-item-title>
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
    </div>
    <div class="container d-flex justify-space-between">
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

export default {
  name: "Schema",
  components: { VJsf },
  data: function() {
    return {
      sourceValid: false,
      sourceModel: {},
      sourceSchema: sourceSchema,
      options: {}
    };
  },
  methods: {
    deploy: function() {
      console.log(this.sourceModel);
    }
  }
};

const sourceSchema = {
  title: "schema",
  type: "object",
  oneOf: [
    {
      type: "object",
      title: "Echo",
      properties: {
        kind: {
          type: "string",
          const: "echo"
        }
      }
    },
    {
      type: "object",
      title: "Cache Redis",
      required: ["url"],
      properties: {
        kind: {
          type: "string",
          const: "cache.redis"
        },
        url: {
          type: "string",
          title: "Url",
          description: "Set Redis Url"
        }
      }
    },
    {
      type: "object",
      title: "Cache Memcached",
      required: ["hosts"],
      properties: {
        kind: {
          type: "string",
          const: "cache.memcached"
        },
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
    },
    {
      type: "object",
      title: "Stores Postgres",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.postgres"
        },
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
    },
    {
      type: "object",
      title: "Stores Mysql",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.mysql"
        },
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
    },
    {
      type: "object",
      title: "Stores Mssql",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.mssql"
        },
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
    },
    {
      type: "object",
      title: "Stores Mongodb",
      required: ["host", "database", "collection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.mongodb"
        },
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
            enum: ["local", "majority", "available", "linearizable", "snapshot"]
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
    },
    {
      type: "object",
      title: "Stores Elasticsearch",
      required: ["urls"],
      properties: {
        kind: {
          type: "string",
          const: "stores.elasticsearch"
        },
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
    },
    {
      type: "object",
      title: "Stores Cassandra",
      required: ["hosts", "port"],
      properties: {
        kind: {
          type: "string",
          const: "stores.cassandra"
        },
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
    },
    {
      type: "object",
      title: "Stores Couchbase",
      required: ["url", "bucket"],
      properties: {
        kind: {
          type: "string",
          const: "stores.couchbase"
        },
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
    },
    {
      type: "object",
      title: "Stores Cockroachdb",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.cockroachdb"
        },
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
    },
    {
      type: "object",
      title: "Stores Percona",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.percona"
        },
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
    },
    {
      type: "object",
      title: "Stores Aerospike",
      required: ["host", "port"],
      properties: {
        kind: {
          type: "string",
          const: "stores.aerospike"
        },
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
    },
    {
      type: "object",
      title: "Stores Rethinkdb",
      required: ["host", "tls"],
      properties: {
        kind: {
          type: "string",
          const: "stores.rethinkdb"
        },
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
    },
    {
      type: "object",
      title: "Stores Singlestore",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "stores.singlestore"
        },
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
    },
    {
      type: "object",
      title: "Stores Consulkv",
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
    },
    {
      type: "object",
      title: "Http",
      required: ["auth_type"],
      properties: {
        kind: {
          type: "string",
          const: "http"
        },
        auth_type: {
          type: "object",
          title: "Auth Type",
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
    },
    {
      type: "object",
      title: "Messaging Mqtt",
      required: ["host"],
      properties: {
        kind: {
          type: "string",
          const: "messaging.mqtt"
        },
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
    },
    {
      type: "object",
      title: "Messaging Rabbitmq",
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
        }
      }
    },
    {
      type: "object",
      title: "Messaging Kafka",
      required: ["brokers", "topic"],
      properties: {
        kind: {
          type: "string",
          const: "messaging.kafka"
        },
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
    },
    {
      type: "object",
      title: "Messaging Activemq",
      required: ["host"],
      properties: {
        kind: {
          type: "string",
          const: "messaging.activemq"
        },
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
    },
    {
      type: "object",
      title: "Messaging Nats",
      required: ["url", "tls"],
      properties: {
        kind: {
          type: "string",
          const: "messaging.nats"
        },
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
    },
    {
      type: "object",
      title: "Cache Hazelcast",
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
    },
    {
      type: "object",
      title: "Storage Minio",
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
    },
    {
      type: "object",
      title: "Storage Hdfs",
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
    },
    {
      type: "object",
      title: "Storage Filesystem",
      required: ["base_path"],
      properties: {
        kind: {
          type: "string",
          const: "storage.filesystem"
        },
        base_path: {
          type: "string",
          title: "Base Path",
          default: "./",
          description: "Set Local File System Base Path"
        }
      }
    },
    {
      type: "object",
      title: "Serverless Openfaas",
      required: ["gateway", "username", "password"],
      properties: {
        kind: {
          type: "string",
          const: "serverless.openfaas"
        },
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
    },
    {
      type: "object",
      title: "Aws Sqs",
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
    },
    {
      type: "object",
      title: "Aws Sns",
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
    },
    {
      type: "object",
      title: "Aws S3",
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
    },
    {
      type: "object",
      title: "Aws Amazonmq",
      required: ["host", "username", "password"],
      properties: {
        kind: {
          type: "string",
          const: "aws.amazonmq"
        },
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
    },
    {
      type: "object",
      title: "Aws Rds Postgres",
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
    },
    {
      type: "object",
      title: "Aws Rds Mysql",
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
    },
    {
      type: "object",
      title: "Aws Rds Mariadb",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "aws.rds.mariadb"
        },
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
    },
    {
      type: "object",
      title: "Aws Rds Mssql",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "aws.rds.mssql"
        },
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
    },
    {
      type: "object",
      title: "Aws Dynamodb",
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
    },
    {
      type: "object",
      title: "Aws Rds Redshift",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "aws.rds.redshift"
        },
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
    },
    {
      type: "object",
      title: "Aws Redshift Service",
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
    },
    {
      type: "object",
      title: "Aws Athena",
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
    },
    {
      type: "object",
      title: "Aws Msk",
      required: ["brokers", "topic"],
      properties: {
        kind: {
          type: "string",
          const: "aws.msk"
        },
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
    },
    {
      type: "object",
      title: "Aws Lambda",
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
    },
    {
      type: "object",
      title: "Aws Kinesis",
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
    },
    {
      type: "object",
      title: "Aws Keyspaces",
      required: ["hosts", "port", "username", "password", "tls", "consistency"],
      properties: {
        kind: {
          type: "string",
          const: "aws.keyspaces"
        },
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
    },
    {
      type: "object",
      title: "Aws Elasticsearch",
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
    },
    {
      type: "object",
      title: "Aws Cloudwatch Events",
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
    },
    {
      type: "object",
      title: "Aws Cloudwatch Logs",
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
    },
    {
      type: "object",
      title: "Aws Cloudwatch Metrics",
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
    },
    {
      type: "object",
      title: "Gcp Pubsub",
      required: ["project_id", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.pubsub"
        },
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
    },
    {
      type: "object",
      title: "Gcp Cache Redis",
      required: ["url"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.cache.redis"
        },
        url: {
          type: "string",
          title: "Url",
          default: "redis://localhost:6379",
          description: "Set Redis Url"
        }
      }
    },
    {
      type: "object",
      title: "Gcp Cache Memcached",
      required: ["hosts"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.cache.memcached"
        },
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
    },
    {
      type: "object",
      title: "Gcp Stores Postgres",
      required: ["connection-type"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.stores.postgres"
        },
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
    },
    {
      type: "object",
      title: "Gcp Stores Mysql",
      required: ["connection-type"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.stores.mysql"
        },
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
    },
    {
      type: "object",
      title: "Gcp Spanner",
      required: ["db", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.spanner"
        },
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
    },
    {
      type: "object",
      title: "Gcp Bigtable",
      required: ["project_id", "credentials", "instance"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.bigtable"
        },
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
    },
    {
      type: "object",
      title: "Gcp Bigquery",
      required: ["project_id", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.bigquery"
        },
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
    },
    {
      type: "object",
      title: "Gcp Cloudfunctions",
      required: ["project_id", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.cloudfunctions"
        },
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
    },
    {
      type: "object",
      title: "Gcp Firebase",
      required: ["project_id", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.firebase"
        },
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
    },
    {
      type: "object",
      title: "Gcp Firestore",
      required: ["project_id", "credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.firestore"
        },
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
    },
    {
      type: "object",
      title: "Gcp Storage",
      required: ["credentials"],
      properties: {
        kind: {
          type: "string",
          const: "gcp.storage"
        },
        credentials: {
          type: "string",
          title: "Credentials",
          description: "Set Gcp Credentials",
          "x-display": "textarea"
        }
      }
    },
    {
      type: "object",
      title: "Azure Stores Postgres",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "azure.stores.postgres"
        },
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
    },
    {
      type: "object",
      title: "Azure Stores Mysql",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "azure.stores.mysql"
        },
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
    },
    {
      type: "object",
      title: "Azure Stores Azuresql",
      required: ["connection"],
      properties: {
        kind: {
          type: "string",
          const: "azure.stores.azuresql"
        },
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
    },
    {
      type: "object",
      title: "Azure Storage Queue",
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
    },
    {
      type: "object",
      title: "Azure Storage Files",
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
    },
    {
      type: "object",
      title: "Azure Storage Blob",
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
    },
    {
      type: "object",
      title: "Azure Servicebus",
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
    },
    {
      type: "object",
      title: "Azure Eventhubs",
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
