<template>
  <v-card flat>
    <v-toolbar flat color="primary" extended extension-height="0px">
      <v-toolbar-title class="white--text ">
        Configure KubeMQ Bridges
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat style="margin-top: -00px;">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="col-12 pb-0">
            <v-row>
              <v-col>
                <v-text-field
                  v-model="deploymentName"
                  label="Deployment Name"
                  :rules="rules"
                  hide-details="auto"
                  color="secondary"
                  ref="deploymentName"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Deployment Namespace"
                  v-model="deploymentNamespace"
                  :rules="rules"
                  hide-details="auto"
                  color="secondary"
                  ref="deploymentNamespace"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
          <div class="pa-1">
            <v-subheader>
              <h3 class="secondary--text font-weight-bold pr-1">Bridges</h3>
              <v-fab-transition>
                <v-btn color="secondary" fab x-small @click="add">
                  <v-icon>fa-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </v-subheader>
            <v-divider inset></v-divider>

            <BridgesList />
          </div>
        </div>
        <div class="d-flex justify-end ma-3">
          <v-btn
            :disabled="!hasBridges"
            rounded
            text
            color="secondary"
            @click.stop="clearAll()"
          >
            <v-icon left small>
              fa-trash-alt
            </v-icon>
            Clear All</v-btn
          >
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
          <BridgesBindingDlg ref="bindingDlg"></BridgesBindingDlg>
          <ConfirmDlg ref="confirm"></ConfirmDlg>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import BridgesList from "@/components/bridges/BridgesList";
import BridgesBindingDlg from "@/components/bridges/BridgesBindingDlg";
import { BridgesBinding } from "@/components/bridges/bridges";

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
