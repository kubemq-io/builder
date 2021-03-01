<template>
  <div>
    <div>
      <v-btn @click.stop="dialog = true">
        as
      </v-btn>
    </div>
    <v-row no-gutters>
      <v-dialog v-model="dialog" scrollable persistent width="85%">
        <div>
          <v-card>
            <BindingTitle :binding="binding" />
            <v-card-text>
              <v-divider></v-divider>
              <v-expansion-panels
                v-model="panel"
                multiple
                class="pt-2"
                accordion
              >
                <v-expansion-panel class="pb-0">
                  <v-expansion-panel-header class="pa-0">
                    <v-list-item>
                      <v-icon>fa-link</v-icon>
                      <h3 class="pa-2">
                        Name
                      </h3>
                    </v-list-item>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pl-0 pb-0 pt-0">
                    <v-row no-gutters dense>
                      <v-col cols="6">
                        <v-text-field
                          v-model="binding.Name"
                          clearable
                          label="Set Binding Name"
                          :rules="[this.validateBindingName]"
                          ref="inputName"
                          :error="errorState"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="pb-0">
                  <v-expansion-panel-header class="pa-0">
                    <v-list-item>
                      <v-icon>fa-sliders-h</v-icon>
                      <h3 class="pa-2">
                        Properties
                      </h3>
                    </v-list-item>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pl-0 pb-0 pt-0">
                    <Properties
                      ref="properties"
                      :binding="binding"
                      :options="options"
                    />
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel class="pa-0">
                  <v-expansion-panel-header class="pa-0">
                    <v-list-item>
                      <v-icon>fa-stream</v-icon>
                      <h3 class="pa-2">
                        Middlewares
                      </h3>
                    </v-list-item>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="pl-0 pb-0 pt-0">
                    <v-col cols="12">
                      <Middlewares :config="binding.Middlewares"></Middlewares>
                    </v-col>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
                  <v-btn v-if="binding.Mode === 'add'" text @click="submit"
                    >Add</v-btn
                  >
                  <v-btn v-if="binding.Mode === 'edit'" text @click="submit"
                    >Edit</v-btn
                  >
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import lodashCollection from "lodash/collection.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import { BindingConfig } from "@/components/binding/bindingConfig";
import Middlewares from "@/components/binding/Middlewares";
import Properties from "@/components/binding/Properties";
import BindingTitle from "@/components/binding/BindingTitle";

export default {
  name: "Binding",
  components: { BindingTitle, Properties, Middlewares },
  data: function() {
    return {
      dialog: false,
      panel: [0, 1],
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
      if (this.binding.Name === "") {
        return "Set binding name";
      }
      const found = lodashCollection.find(this.bindingList, function(name) {
        return name === binding.Name;
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
      this.panel = [0, 1];
      this.isValidName = this.$refs.inputName.validate();
      this.$refs.properties.$refs.formSource.validate();
      this.$refs.properties.$refs.formTarget.validate();
      if (
        this.binding.SourceSide.IsModelValid &&
        this.binding.TargetSide.IsModelValid &&
        this.isValidName
      ) {
        const cfg = this.binding.GetConfiguration();
        console.log(JSON.stringify(cfg));
        this.dialog = false;
      }
    },
    cancel: function() {
      this.dialog = false;
    }
  }
};
let bindingsName = ["b1", "b2"];
let binding = new BindingConfig()
  .SetMode("edit")
  .SetType("source")
  .SetBindingType("integrations")
  .SetSourceSide("KubeMQ", {
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
  })
  .SetTargetSide("Redis", {
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
  });
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
