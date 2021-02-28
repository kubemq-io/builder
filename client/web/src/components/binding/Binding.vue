<template>
  <v-row no-gutters>
    <v-dialog v-model="dialog" scrollable persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <div>
        <v-card>
          <v-card-title>
            <v-list-item-avatar>
              <v-img
                class="elevation-6"
                alt=""
                src="@/assets/replicate.svg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <h3>{{ binding.title }}</h3>
            </v-list-item-content>
          </v-card-title>
          <v-card-text>
            <v-divider></v-divider>
            <v-row class="mt-1">
              <v-col cols="12">
                <v-text-field
                  prepend-inner-icon="fa-link"
                  v-model="binding.name"
                  clearable
                  solo
                  label="Set binding name"
                  :rules="[this.validateBindingName]"
                  ref="inputName"
                  :error="errorState"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="d-flex warp">
                  <div class="side pr-2">
                    <v-card elevation="1" min-height="210px">
                      <v-list-item>
                        <v-list-item-avatar color="accent" size="30">
                          <span class="white--text headline">{{
                            binding.sourceSide.initial
                          }}</span></v-list-item-avatar
                        >
                        <h3>
                          {{ binding.sourceSide.title }}
                        </h3>
                      </v-list-item>
                      <v-card-text>
                        <v-form
                          ref="formSource"
                          v-model="binding.sourceSide.isValid"
                        >
                          <v-jsf
                            v-model="binding.sourceSide.model"
                            :schema="binding.sourceSide.schema"
                            :options="options"
                          />
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </div>

                  <div class="side pl-2">
                    <v-card elevation="1" min-height="210px">
                      <v-list-item>
                        <v-list-item-avatar color="accent" size="30">
                          <span class="white--text headline">{{
                            binding.targetSide.initial
                          }}</span></v-list-item-avatar
                        >
                        <h3>
                          {{ binding.targetSide.title }}
                        </h3>
                      </v-list-item>
                      <v-card-text>
                        <v-form
                          ref="formTarget"
                          v-model="binding.targetSide.isValid"
                        >
                          <v-jsf
                            v-model="binding.targetSide.model"
                            :schema="binding.targetSide.schema"
                            :options="options"
                          />
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row
              justify="end"
              align-content="center"
              align="center"
              class="pa-2"
            >
              <div class="pa-2">
                <v-btn text @click="cancel">cancel</v-btn>
              </div>
              <div class="pa-2">
                <v-btn text @click="submit">ok</v-btn>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import lodashCollection from "lodash/collection.js";
import lodashObject from "lodash/object";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import VJsf from "@koumoul/vjsf/lib/VJsf";
export default {
  name: "Binding",
  components: { VJsf },
  data: function() {
    return {
      dialog: false,
      binding: binding,
      bindingList: bindingsName,
      options: {},
      isValidName: true
    };
  },
  computed: {
    errorState: function() {
      return !this.isValidName;
    }
  },
  methods: {
    validateBindingName: function() {
      if (this.binding.name === "") {
        return "Set binding name";
      }
      const found = lodashCollection.find(this.bindingList, function(name) {
        return name === binding.name;
      });
      if (found) {
        this.isValidName = false;
        return "Set unique binding name";
      } else {
        this.isValidName = true;
        return true;
      }
    },
    submit: function() {
      this.isValidName = this.$refs.inputName.validate();
      this.$refs.formSource.validate();
      this.$refs.formTarget.validate();
      if (
        this.binding.sourceSide.isValid &&
        this.binding.targetSide.isValid &&
        this.isValidName
      ) {
        getBindingModel(
          this.binding.name,
          this.binding.sourceSide.model,
          this.binding.targetSide.model
        );
        this.dialog = false;
      } else {
        console.log("invalid");
      }
    },
    cancel: function() {
      this.dialog = false;
    }
  }
};
const getBindingModel = function(name, source, target) {
  const sourceKind = source.kind;
  const targetKind = target.kind;
  const sourceProperties = lodashObject.omit(source, ["kind", "setDefaults"]);
  const targetProperties = lodashObject.omit(target, ["kind", "setDefaults"]);
  const binding = {
    name: name,
    source: {
      kind: sourceKind,
      properties: sourceProperties
    },
    target: {
      kind: targetKind,
      properties: targetProperties
    }
  };
  console.log(binding);
};
let bindingsName = ["b1", "b2"];
let binding = {
  type: "source",
  title: "Kubemq - Redis integration",
  name: "",
  sourceSide: {
    title: "KubeMQ Source",
    initial: "K",
    isKubeMQ: true,
    kind: "",
    schema: {
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
    model: {},
    isValid: false
  },
  targetSide: {
    title: "Redis Target",
    initial: "R",
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
    },
    model: {},
    isValid: false
  }
};
</script>

<style scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
.side {
  flex-basis: 100%;
}
.icon {
  flex-basis: 10%;
  margin: 10px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 50px;
  height: 50px;
}
</style>
