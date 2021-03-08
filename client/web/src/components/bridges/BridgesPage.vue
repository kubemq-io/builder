<template>
  <v-card class="ma-10">
    <v-toolbar
      flat
      color="primary"
      extended
      extension-height="15px"
      elevation-1
    >
      <v-toolbar-title class="white--text text-h4 pa-2 ">
        Build KubeMQ Bridges
      </v-toolbar-title>
    </v-toolbar>
    <v-card flat style="margin-top: -0px;">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="">
            <v-toolbar flat color="primary" dense>
              <v-btn
                rounded
                class="secondary--text"
                color="white"
                @click="deploy"
              >
                <v-icon left small>
                  fa-plus
                </v-icon>
                Add Bridge</v-btn
              >
            </v-toolbar>
          </div>
          <div>
            Binding List
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
          <ConfirmDlg ref="confirm"></ConfirmDlg>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";

export default {
  name: "BridgesPage",
  components: { ConfirmDlg },
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
    ...mapMutations(["clearBridgesBindingsList"]),
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
    deploy: function() {}
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
