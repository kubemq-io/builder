<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        :title="type"
        @add="add"
        show-search
        :type="type"
        show-back
        @back="back"
      ></builder-title>
    </div>
    <div class="col-12 pt-0">
      <v-card flat tile>
        <template v-for="(integration, index) in integrations">
          <v-list-item :key="'c' + index" class="px-0">
            <v-list-item-avatar>
              <v-avatar color="secondary" size="40">
                <span class="white--text headline">{{ index + 1 }}</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content class="pb-1">
              <v-list-item-title class="d-flex align-end">
                <h2 class="secondary--text pr-2">
                  {{ integration.Name }}
                </h2>
                <v-chip
                  v-show="integration.Middlewares.hasData()"
                  color="success"
                  small
                  outlined
                  class="font-weight-bold"
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
                      <h2 class="secondary--text">
                        {{ integration.SourceSide.Name }}
                      </h2>
                    </div>
                    <div>
                      <v-chip small color="primary" outlined class="my-1 px-1">
                        {{ integration.SourceSide.Category }}
                      </v-chip>
                    </div>
                  </v-col>
                  <v-col
                    class="d-flex   flex-column justify-center align-center align-content-center pa-0"
                    cols="1"
                  >
                    <v-list-item-avatar color="secondary" size="30">
                      <v-icon size="25" color="white">
                        fa-arrow-right
                      </v-icon>
                    </v-list-item-avatar>
                  </v-col>
                  <v-col class="pa-0 " cols="5">
                    <div>
                      <h2 class="secondary--text">
                        {{ integration.TargetSide.Name }}
                      </h2>
                    </div>
                    <div>
                      <v-chip small color="primary" outlined class="my-1 px-1">
                        {{ integration.TargetSide.Category }}
                      </v-chip>
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
                    @click.stop="edit(integration, index)"
                  >
                    fa-edit
                  </v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="cloneBinding(integration)"
                  >
                    fa-clone
                  </v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon
                    size="20"
                    color="secondary"
                    @click.stop="delBinding(index)"
                  >
                    fa-trash-alt
                  </v-icon>
                </v-btn>
              </div>
            </v-list-item-action>
          </v-list-item>
          <v-divider
            :key="'d' + index"
            inset
            class="secondary lighten-5"
          ></v-divider>
        </template>
      </v-card>
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasIntegrations" class="col-12">
      <h4 class="gray--text text-center text-uppercase">NO {{ this.type }}</h4>
    </div>
    <v-spacer></v-spacer>
    <div v-show="!hasIntegrations" class="col-12">
      <v-divider class="secondary lighten-5"></v-divider>
    </div>
    <div class="col-12 d-flex pt-2">
      <v-spacer />
      <div>
        <v-btn
          :disabled="!hasIntegrations"
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
          :disabled="!hasIntegrations"
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";
import BuilderTitle from "@/components/common/BuilderTitle";

export default {
  name: "IntegrationListView",
  components: { BuilderTitle, ConfirmDlg },
  props: {
    type: String
  },
  data() {
    return {};
  },
  created() {
    this.loadIntegrations();
  },
  computed: {
    integrations: function() {
      if (this.type === "sources") {
        return this.$store.state.integrations.sources;
      } else {
        return this.$store.state.integrations.targets;
      }
    },
    hasIntegrations: function() {
      if (this.type === "sources") {
        return this.$store.state.integrations.sources.length > 0;
      } else {
        return this.$store.state.integrations.targets.length > 0;
      }
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapGetters(["getIntegrationsBindingNames"]),
    ...mapMutations([
      "updateIntegrationBinding",
      "clearIntegrationsList",
      "setConfigIntegrationBinding"
    ]),
    async delBinding(index) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this integration?"
        )
      ) {
        this.deleteBinding(index);
      }
    },

    cloneBinding(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.updateIntegrationBinding({
        type: this.type,
        mode: "clone",
        binding: clonedItem
      });
    },
    deleteBinding(index) {
      this.updateIntegrationBinding({
        type: this.type,
        mode: "delete",
        index: index
      });
    },

    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all integrations?"
        )
      ) {
        this.clearIntegrationsList();
      }
    },
    add() {
      if (this.type === "sources") {
        this.$router.push({
          name: "configSourceIntegration"
        });
      } else {
        this.$router.push({
          name: "configTargetIntegration"
        });
      }
    },
    edit(item, index) {
      this.setConfigIntegrationBinding({
        type: this.type,
        mode: "edit",
        binding: item,
        index: index
      });
      if (this.type === "sources") {
        this.$router.push({
          name: "configSourceIntegration"
        });
      } else {
        this.$router.push({
          name: "configTargetIntegration"
        });
      }
    },
    back: function() {
      this.$router.back();
    },
    deploy: function() {
      this.integrations.forEach(value => console.log(value));
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
