<template>
  <div class="pt-0">
    <v-list two-line>
      <v-subheader>
        <h3 class="primary--text">Bridges</h3>
      </v-subheader>
      <v-card-text v-if="bindings.length === 0" class="text-center">
        <h5 class="primary--text body-2">No Bridges</h5>
      </v-card-text>
      <template v-for="(binding, index) in bindings">
        <v-list-item :key="'c' + index">
          <v-list-item-avatar>
            <v-avatar class="primary" size="35">
              <span class="white--text headline">{{ index + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <v-list-item-title>
              <h3 class="primary--text">
                {{ binding.Name }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div
                class="d-flex justify-start align-stretch align-content-center pa-0"
              >
                <v-col class="side pa-0 " cols="5">
                  <div>
                    <h3 class="secondary--text">
                      {{ binding.SourceSide.Type }}
                    </h3>
                  </div>
                  <div>
                    <v-chip-group
                      v-for="(connection,
                      index) in binding.SourceSide.getConnections()"
                      :key="'s' + connection + index"
                      color="secondary"
                    >
                      <v-chip x-small outlined class="ma-1 pa-1">
                        {{ connection.address }}
                      </v-chip>
                      <v-chip x-small outlined class="ma-1 pa-1">
                        {{ connection.channel }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-col>
                <v-col
                  class="d-flex   flex-column justify-center align-center align-content-center pl-0 pr-0"
                  cols="1"
                >
                  <div class="pa-0">
                    <v-list-item-avatar color="primary" size="20">
                      <v-icon size="15" color="white">
                        fa-arrow-right
                      </v-icon>
                    </v-list-item-avatar>
                  </div>
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
                      color="secondary"
                    >
                      <v-chip x-small outlined class="ma-1 pa-1">
                        {{ connection.address }}
                      </v-chip>
                      <v-chip x-small outlined class="ma-1 pa-1">
                        {{ connection.channel }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-col>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="ma-0">
            <div class="d-flex justify-start align-center align-content-center">
              <div>
                <v-icon
                  size="15"
                  class="pr-2"
                  color="secondary"
                  @click.stop="cloneBridge(binding)"
                >
                  fa-clone
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pr-2 pl-2"
                  color="secondary"
                  @click.stop="editIntegration(binding)"
                >
                  fa-edit
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pl-2"
                  color="secondary"
                  @click.stop="delIntegration(binding)"
                >
                  fa-trash-alt
                </v-icon>
              </div>
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'d' + index" inset></v-divider>
      </template>
    </v-list>
    <v-divider v-if="bindings.length === 0" inset></v-divider>
    <BridgesBindingDlg ref="bindingDlg"></BridgesBindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BridgesBindingDlg from "@/components/bridges/BridgesBindingDlg";

export default {
  name: "BridgesList",
  components: { BridgesBindingDlg, ConfirmDlg },
  data() {
    return {};
  },
  computed: {
    bindings: function() {
      return this.$store.state.bridges.bindings;
    }
  },
  methods: {
    ...mapGetters(["getBridgesBindingNames"]),
    ...mapMutations([
      "deleteBridgesBinding",
      "replaceBridgesBinding",
      "addBridgesBinding"
    ]),
    async delIntegration(item) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this bridge?"
        )
      ) {
        this.deleteBridgesBinding(item);
      }
    },
    async editIntegration(item) {
      await this.$refs.bindingDlg
        .open(item, this.getBridgesBindingNames(), "edit")
        .then(result => this.replaceBridgesBinding(result));
    },
    cloneBridge(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.addBridgesBinding({ binding: clonedItem });
    },
    getColor(type, more) {
      return "primary" + more;
    },
    getColorText(type, more) {
      return "primary--text" + more;
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

<style scoped>
.side {
  display: flex;
  flex-direction: column;
  width: auto;
}
</style>
