<template>
  <v-card flat>
    <v-card-title>
      <span class="primary--text text-h5 font-weight-bold">
        KubeMQ Bridges
      </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col class="py-1">
          <v-card flat tile>
            <v-card-title>
              <span class="secondary--text font-weight-bold pr-1">
                Deployment
              </span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4" class="py-1">
                  <v-text-field
                    v-model="deploymentName"
                    label="Name"
                    :rules="rules"
                    hide-details="auto"
                    color="secondary"
                    ref="deploymentName"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="py-1">
                  <v-text-field
                    label="Namespace"
                    v-model="deploymentNamespace"
                    :rules="rules"
                    hide-details="auto"
                    color="secondary"
                    ref="deploymentNamespace"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-1">
          <v-card flat tile>
            <v-card-title class="pa-0">
              <v-btn text color="secondary" @click="add">
                <span class="secondary--text text-h6 font-weight-bold">
                  Bridges
                </span>
                <v-icon right big>
                  fa-plus
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-divider v-show="hasBridges" inset></v-divider>
              <BridgesList />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-show="!hasBridges" class="py-1">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end" align-content="center" align="center">
        <div>
          <v-btn
            :disabled="!hasBridges"
            rounded
            text
            color="primary"
            @click.stop="clearAll()"
          >
            <v-icon left small>
              fa-trash-alt
            </v-icon>
            Clear All</v-btn
          >
        </div>
        <div>
          <v-btn
            :disabled="!hasBridges"
            rounded
            outlined
            color="primary"
            @click="deploy"
          >
            <v-icon left small>
              fa-download
            </v-icon>
            Deploy</v-btn
          >
        </div>
        <BridgesBindingDlg ref="bindingDlg" />
        <ConfirmDlg ref="confirm"></ConfirmDlg>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import BridgesList from "@/archive/bridges/BridgesList";
import { BridgesBinding } from "@/components/bridges/bridges";
import BridgesBindingDlg from "@/archive/bridges/BridgesBindingDlg";

export default {
  name: "BridgesPage",
  components: { BridgesBindingDlg, BridgesList, ConfirmDlg },
  data() {
    return {
      deploymentName: "kubemq-bridges",
      deploymentNamespace: "kubemq",
      rules: [value => !!value || "Required"]
    };
  },
  computed: {
    bindings: function() {
      return this.$store.state.bridges.bindings;
    },

    hasBridges: function() {
      return this.bindings.length > 0;
    }
  },
  methods: {
    ...mapGetters(["getBridgesBindingNames"]),
    ...mapMutations(["clearBridgesBindingsList", "addBridgesBinding"]),
    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all bridges connections?"
        )
      ) {
        this.clearBridgesBindingsList();
      }
    },
    async add() {
      let newBinding = new BridgesBinding();
      await this.$refs.bindingDlg
        .open(newBinding, this.getBridgesBindingNames(), "add")
        .then(result => this.addBridgesBinding(result));
    },

    deploy: function() {
      this.bindings.forEach(value => console.log(value.GetConfiguration()));
    }
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
</style>
