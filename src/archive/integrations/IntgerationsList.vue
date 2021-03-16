<template>
  <div class="pt-0">
    <v-card min-height="45vh" flat tile>
      <template v-for="(integration, index) in integrations">
        <v-list-item :key="'c' + index" class="px-0">
          <v-list-item-avatar>
            <v-avatar color="secondary" size="35">
              <span class="white--text headline">{{ index + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-1">
            <v-list-item-title>
              <h3 class="secondary--text">
                {{ integration.Name }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div
                class="d-flex justify-start align-center align-content-center"
              >
                <div class="d-flex flex-column justify-start col-5 pa-0">
                  <h3 class="secondary--text pb-1">
                    {{ integration.SourceSide.Name }}
                  </h3>
                  <div>
                    <v-chip x-small color="primary" outlined class="my-0 px-1">
                      {{ integration.SourceSide.Category }}
                    </v-chip>
                  </div>
                </div>
                <div class="col-1 pa-0">
                  <v-list-item-avatar color="secondary" size="20">
                    <v-icon size="15" color="white">
                      fa-arrow-right
                    </v-icon>
                  </v-list-item-avatar>
                </div>
                <div class="d-flex flex-column justify-start col-5 pa-0">
                  <h3 class="secondary--text pb-1">
                    {{ integration.TargetSide.Name }}
                  </h3>
                  <div>
                    <v-chip x-small color="primary" outlined class="my-0 px-1">
                      {{ integration.TargetSide.Category }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="ma-0">
            <div class="d-flex justify-end align-end align-content-end pt-5">
              <div>
                <v-btn icon>
                  <v-icon
                    size="15"
                    color="secondary"
                    @click.stop="cloneIntegration(integration)"
                  >
                    fa-clone
                  </v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn icon>
                  <v-icon
                    size="15"
                    color="secondary"
                    @click.stop="editIntegration(integration)"
                  >
                    fa-edit
                  </v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn icon>
                  <v-icon
                    size="15"
                    color="secondary"
                    @click.stop="delIntegration(integration)"
                  >
                    fa-trash-alt
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'d' + index"></v-divider>
      </template>
    </v-card>

    <IntegrationsBindingDlg ref="bindingDlg"></IntegrationsBindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import IntegrationsBindingDlg from "@/archive/integrations/IntegrationBindingDlg";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { mapMutations } from "vuex";
import lodashLang from "lodash/lang";

export default {
  name: "IntegrationList",
  components: { IntegrationsBindingDlg, ConfirmDlg },
  props: {
    type: String
  },
  data() {
    return {};
  },
  computed: {
    integrations: function() {
      if (this.type === "sources") {
        return this.$store.state.integrations.sources;
      } else {
        return this.$store.state.integrations.targets;
      }
    }
  },
  methods: {
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
        .open(
          item,
          this.$store.getters.getIntegrationsBindingNames(this.type),
          "edit"
        )
        .then(result => this.replaceIntegrationsBinding(result));
    },
    cloneIntegration(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.addIntegrationsBinding({ binding: clonedItem });
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
