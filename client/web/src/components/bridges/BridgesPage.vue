<template>
  <v-card flat>
    <v-toolbar flat color="primary" extended>
      <v-toolbar-title class="white--text ">
        Configure KubeMQ Bridges
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat style="margin-top: -20px;">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="">
            <v-fab-transition>
              <v-btn
                color="secondary"
                fab
                x-small
                absolute
                top
                left
                @click="add"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </div>
          <div>
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
    return {};
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
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
