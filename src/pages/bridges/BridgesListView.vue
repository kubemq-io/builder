<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title title="bridges" @add="add" show-add></builder-title>
    </div>
    <div class="col-12 pt-0">
      <v-card flat tile>
        <template v-for="(binding, index) in bindings">
          <v-list-item :key="'c' + index" class="px-0">
            <v-list-item-avatar>
              <v-avatar class="secondary" size="35">
                <span class="white--text headline">{{ index + 1 }}</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content class="pb-1">
              <v-list-item-title>
                <h3 class="secondary--text">
                  {{ binding.Name }}
                </h3>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div
                  class="d-flex justify-start align-stretch align-content-center pa-0"
                >
                  <v-col class="side pa-0 " cols="5">
                    <div>
                      <h3 class="secondary-text">
                        {{ binding.SourceSide.Type }}
                      </h3>
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
                          x-small
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.address }}
                        </v-chip>
                        <v-chip
                          color="primary"
                          x-small
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.channel }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-col>
                  <v-col
                    class="d-flex   flex-column justify-center align-center align-content-center pa-0"
                    cols="1"
                  >
                    <v-list-item-avatar color="secondary" size="20">
                      <v-icon size="15" color="white">
                        fa-arrow-right
                      </v-icon>
                    </v-list-item-avatar>
                  </v-col>
                  <v-col class="side pa-0" cols="5">
                    <h3 class="secondary--text">
                      {{ binding.TargetSide.Type }}
                    </h3>
                    <div>
                      <v-chip-group
                        v-for="(connection,
                        index) in binding.TargetSide.getConnections()"
                        :key="'t' + connection + index"
                        color="primary"
                        column
                      >
                        <v-chip
                          color="primary"
                          x-small
                          outlined
                          class="my-0 px-1"
                        >
                          {{ connection.address }}
                        </v-chip>
                        <v-chip
                          color="primary"
                          x-small
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
                    size="15"
                    color="secondary"
                    @click.stop="cloneBinding(binding)"
                  >
                    fa-clone
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon
                    size="15"
                    color="secondary"
                    @click.stop="edit(binding, index)"
                  >
                    fa-edit
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon
                    size="15"
                    color="secondary"
                    @click.stop="delBinding(index)"
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
          Clear All</v-btn
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
          Deploy</v-btn
        >
      </div>
      <ConfirmDlg ref="confirm"></ConfirmDlg>
    </div>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BuilderTitle from "@/components/layout/BuilderTitle";
import { BridgesBinding } from "@/components/bridges/bridges";

export default {
  name: "BridgesListView",
  components: { BuilderTitle, ConfirmDlg },
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
    ...mapGetters(["getBridgesBindingNames"]),
    ...mapMutations([
      "updateBindings",
      "clearBridgesBindingsList",
      "setConfigBinding"
    ]),
    async delBinding(index) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this binding?"
        )
      ) {
        this.deleteBinding(index);
      }
    },

    cloneBinding(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.updateBindings({ mode: "clone", binding: clonedItem });
    },
    deleteBinding(index) {
      this.updateBindings({ mode: "delete", index: index });
    },
    getColor(type, more) {
      return "primary" + more;
    },
    getColorText(type, more) {
      return "primary--text" + more;
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
      this.$router.replace({
        name: "configBridge"
      });
    },
    edit(item, index) {
      this.setConfigBinding({ mode: "edit", binding: item, index: index });
      this.$router.replace({
        name: "configBridge"
      });
    },

    deploy: function() {
      this.bindings.forEach(value => console.log(value));
    }
  }
};
const makeid = function(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
</script>

<style scoped></style>
