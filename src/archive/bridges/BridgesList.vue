<template>
  <div class="pt-0">
    <v-card flat tile min-height="45vh">
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
                  @click.stop="cloneBridge(binding)"
                >
                  fa-clone
                </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  size="15"
                  color="secondary"
                  @click.stop="editIntegration(binding)"
                >
                  fa-edit
                </v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon
                  size="15"
                  color="secondary"
                  @click.stop="delIntegration(binding)"
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

    <BridgesBindingDlg ref="bindingDlg"></BridgesBindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";

import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BridgesBindingDlg from "@/archive/bridges/BridgesBindingDlg";

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

<style lang="scss" scoped>
.side {
  display: flex;
  flex-direction: column;
  width: auto;
}
.item {
  //border-bottom: 1px solid #595a5c;

  &:hover {
    background-color: rgba(100, 100, 100, 0.1);
  }

  .item-content {
    &.complete {
      text-decoration: line-through;
    }
  }
}
</style>
