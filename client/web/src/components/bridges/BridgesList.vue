<template>
  <div class="pt-0">
    <v-list two-line>
      <v-subheader>
        <h3 :class="getColorText('sources', '')">Sources</h3>
      </v-subheader>
      <v-card-text v-if="sources.length === 0" class="text-center">
        <h5 :class="getColorText('sources', ' body-2')">No Integrations</h5>
      </v-card-text>
      <template v-for="(source, index) in sources">
        <v-list-item :key="'c' + index">
          <v-list-item-avatar>
            <v-avatar :color="getColor('sources', '')" size="35">
              <span class="white--text headline">{{ index + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <v-list-item-title>
              <h3 :class="getColorText('sources', '')">
                {{ source.Name }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div
                class="d-flex justify-start align-center align-content-center"
              >
                <div class="d-flex">
                  <h3 :class="getColorText('sources', '')">
                    {{ source.SourceSide.Name }}
                  </h3>
                  <div class="pl-3">
                    <v-chip
                      x-small
                      :color="getColorText('sources', '')"
                      outlined
                    >
                      {{ source.SourceSide.Category }}
                    </v-chip>
                  </div>
                </div>
                <div class="pl-4">
                  <v-list-item-avatar
                    :color="getColor('sources', '')"
                    size="15"
                  >
                    <v-icon size="10" color="white">
                      fa-arrow-right
                    </v-icon>
                  </v-list-item-avatar>
                </div>
                <div class="d-flex">
                  <h3 class="getColorText('sources', '')">
                    {{ source.TargetSide.Name }}
                  </h3>
                  <div class="pl-2">
                    <v-chip
                      x-small
                      :color="getColorText('sources', '')"
                      outlined
                    >
                      {{ source.TargetSide.Category }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="ma-0">
            <div class="d-flex justify-start align-center align-content-center">
              <div>
                <v-icon
                  size="15"
                  class="pr-2"
                  :color="getColor('source', '')"
                  @click.stop="cloneIntegration(source)"
                >
                  fa-clone
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pr-2 pl-2"
                  :color="getColor('source', '')"
                  @click.stop="editIntegration(source)"
                >
                  fa-edit
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pl-2"
                  :color="getColor('source', '')"
                  @click.stop="delIntegration(source)"
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
    <v-divider v-if="sources.length === 0" inset></v-divider>

    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";

export default {
  name: "BridgesList",
  components: { ConfirmDlg },
  data() {
    return {};
  },
  computed: {
    bindings: function() {
      return this.$store.state.bridges.bindings;
    }
  },
  methods: {
    ...mapGetters(["getCurrentBindingNames"]),
    ...mapMutations([
      "deleteIntegrationsBinding",
      "replaceIntegrationsBinding",
      "addIntegrationsBinding"
    ]),
    async delIntegration(item) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this integration?"
        )
      ) {
        this.deleteIntegrationsBinding(item);
      }
    },
    async editIntegration(item) {
      await this.$refs.bindingDlg
        .open(item, this.getCurrentBindingNames(), "edit")
        .then(result => this.replaceIntegrationsBinding(result));
    },
    cloneIntegration(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.addIntegrationsBinding({ binding: clonedItem });
    },
    getColor(type, more) {
      return type === "targets" ? "primary" + more : "secondary" + more;
    },
    getColorText(type, more) {
      return type === "targets"
        ? "primary--text" + more
        : "secondary--text" + more;
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
//.container {
//  border: 1px solid green;
//}
//.row {
//  border: 1px solid red;
//}
//.col {
//  border: 1px solid blue;
//}

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
