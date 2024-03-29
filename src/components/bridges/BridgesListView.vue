<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        title="bridges"
        @add="add"
        show-add
        show-back
        @back="back"
      ></builder-title>
    </div>
    <div class="col-12 pt-0">
      <v-card flat tile>
        <template v-for="(binding, index) in bindings">
          <v-list-item :key="'c' + index" class="px-0">
            <v-list-item-avatar>
              <v-avatar class="secondary" size="40">
                <span class="white--text headline">{{ index + 1 }}</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content class="pb-1">
              <v-list-item-title class="d-flex align-end">
                <h2 class="secondary--text pr-2">
                  {{ binding.Name }}
                </h2>
                <v-chip
                  v-show="binding.Middlewares.hasData()"
                  color="success"
                  outlined
                  class="font-weight-bold"
                  small
                >
                  Middleware
                </v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div
                  class="d-flex justify-start align-stretch align-content-center pa-0"
                >
                  <v-col class="pa-0 " cols="5">
                    <div>
                      <h2 class="secondary-text">
                        {{ binding.SourceSide.Type }}
                      </h2>
                    </div>
                    <div>
                      <v-chip-group
                        v-for="(connection,
                        index) in binding.SourceSide.getConnections()"
                        :key="'s' + connection + index"
                        column
                      >
                        <v-chip
                          color="primary"
                          small
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.address }}
                        </v-chip>
                        <v-chip
                          color="primary"
                          small
                          outlined
                          class="my-0 px-1"
                        >
                          {{
                            connection.channel !== undefined
                              ? connection.channel
                              : connection.channels
                          }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-col>
                  <v-col
                    class="d-flex   flex-column justify-center align-center align-content-center pa-0"
                    cols="1"
                  >
                    <v-list-item-avatar color="secondary" size="40">
                      <v-img :src="getBindingType(binding)" />
                    </v-list-item-avatar>
                  </v-col>
                  <v-col class="side pa-0" cols="5">
                    <h2 class="secondary--text">
                      {{ binding.TargetSide.Type }}
                    </h2>
                    <div>
                      <v-chip-group
                        v-for="(connection,
                        index) in binding.TargetSide.getConnections()"
                        :key="'t' + connection + index"
                        color="primary"
                        column
                      >
                        <v-chip
                          small
                          color="primary"
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.address }}
                        </v-chip>
                        <v-chip
                          small
                          color="primary"
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.channel }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-col>
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="ma-0">
              <div class="d-flex justify-end align-end align-content-end pt-5">
                <v-btn icon>
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="edit(binding, index)"
                  >
                    fa-edit
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="cloneBinding(binding)"
                  >
                    fa-clone
                  </v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="delBinding(binding, index)"
                  >
                    fa-trash-alt
                  </v-icon>
                </v-btn>
              </div>
            </v-list-item-action>
          </v-list-item>
          <v-divider :key="'d' + index"></v-divider>
        </template>
      </v-card>
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasBindings" class="col-12">
      <h4 class="gray--text text-center">NO BRIDGES</h4>
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasBindings" class="col-12">
      <v-divider class="secondary lighten-5"></v-divider>
    </div>
    <div class="col-12 d-flex pt-2">
      <v-spacer />
      <div>
        <v-btn
          :disabled="!hasBindings"
          rounded
          text
          color="secondary"
          @click.stop="clearAll()"
        >
          <v-icon left small>
            fa-trash-alt
          </v-icon>
          DELETE ALL</v-btn
        >
      </div>
      <div>
        <v-btn
          :disabled="!hasBindings"
          rounded
          outlined
          color="primary"
          @click="deploy"
        >
          <v-icon left small>
            fa-download
          </v-icon>
          DEPLOY</v-btn
        >
      </div>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
      <deploy-dlg ref="deploy"></deploy-dlg>
    </div>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapActions, mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BuilderTitle from "@/components/common/BuilderTitle";
import { BridgesBinding } from "@/components/bridges/bridges";
import DeployDlg from "@/components/deploy/DeployDlg";

export default {
  name: "BridgesListView",
  components: { DeployDlg, BuilderTitle, ConfirmDlg },
  data() {
    return {};
  },
  computed: {
    bindings: function() {
      return this.$store.state.bridges.bindings;
    },
    hasBindings: function() {
      return this.bindings.length > 0;
    }
  },
  methods: {
    ...mapActions(["showSuccess"]),
    ...mapGetters(["getBridgesBindingNames"]),
    ...mapMutations([
      "updateBindings",
      "clearBridgesBindingsList",
      "setConfigBinding"
    ]),
    async delBinding(item, index) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this binding?"
        )
      ) {
        this.deleteBinding(item, index);
      }
    },

    cloneBinding(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.updateBindings({ mode: "clone", binding: clonedItem });
      this.showSuccess(`Bridge ${item.Name} was cloned successfully`);
    },
    deleteBinding(item, index) {
      this.updateBindings({ mode: "delete", index: index });
      this.showSuccess(`Bridge ${item.Name} was deleted successfully`);
    },

    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all bridge?"
        )
      ) {
        this.clearBridgesBindingsList();
      }
    },
    add() {
      this.setConfigBinding({ mode: "add", binding: new BridgesBinding() });
      this.$router.push({
        name: "configBridge"
      });
    },
    edit(item, index) {
      this.setConfigBinding({ mode: "edit", binding: item, index: index });
      this.$router.push({
        name: "configBridge"
      });
    },
    back: function() {
      this.$router.back();
    },
    async deploy() {
      const bindings = [];
      this.bindings.forEach(value => bindings.push(value.GetConfiguration()));
      const deployOptions = {
        title: "Bridges",
        type: "bridges",
        configuration: JSON.stringify({ bindings: bindings })
      };
      await this.$refs.deploy.open(deployOptions);
    },
    getBindingType: function(binding) {
      const type = binding.getType();
      switch (type) {
        case "bridge":
          return "/assets/images/bridge.svg";
        case "replicate":
          return "/assets/images/replicate.svg";
        case "aggregate":
          return "/assets/images/aggregate.svg";
        case "transform":
          return "/assets/images/transform.svg";
      }
    }
  }
};
const makeid = function(length) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
</script>

<style scoped></style>
