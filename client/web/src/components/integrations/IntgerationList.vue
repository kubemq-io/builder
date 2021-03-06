<template>
  <div class="pt-0">
    <v-list two-line>
      <v-subheader> <h4>Targets</h4> </v-subheader>
      <v-divider inset></v-divider>
      <v-card-text v-if="targets.length === 0" class="text-center">
        <h5 class="secondary--text body-2">No Integrations</h5>
      </v-card-text>
      <template v-for="(target, i) in targets">
        <v-list-item :key="'a' + i">
          <v-list-item-avatar>
            <v-avatar color="primary" size="35">
              <span class="white--text headline">{{ i + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <v-list-item-title>
              <h3 class="secondary--text font-weight-bold">
                {{ target.Name }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div
                class="d-flex justify-start align-center align-content-center"
              >
                <div class="d-flex">
                  <h4 class="secondary--text">
                    {{ target.SourceSide.Name }}
                  </h4>
                  <div class="pl-3">
                    <v-chip x-small color="primary font-weight-bold" outlined>
                      text 1asdassdasd asdasd
                    </v-chip>
                  </div>
                  <div class="pl-2">
                    <v-chip x-small color="accent font-weight-bold" outlined>
                      text 2
                    </v-chip>
                  </div>
                </div>
                <div class="pl-3">
                  <v-list-item-avatar color="primary" size="15">
                    <v-icon size="10" color="white">
                      fa-arrow-right
                    </v-icon>
                  </v-list-item-avatar>
                </div>
                <div class="d-flex">
                  <h4 class="secondary--text">
                    {{ target.TargetSide.Name }}
                  </h4>
                  <div class="pl-3">
                    <v-chip x-small color="primary font-weight-bold" outlined>
                      Queue
                    </v-chip>
                  </div>
                  <div class="pl-2">
                    <v-chip x-small color="accent font-weight-bold" outlined>
                      queue.q1.qw2.as
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
                  @click.stop="cloneIntegration(target)"
                >
                  fa-clone
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pr-2 pl-2"
                  @click.stop="editIntegration(target)"
                >
                  fa-edit
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pl-2"
                  @click.stop="delIntegration(target)"
                >
                  fa-trash-alt
                </v-icon>
              </div>
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'b' + i" inset></v-divider>
      </template>
    </v-list>
    <v-list two-line>
      <v-subheader> <h4>Sources</h4> </v-subheader>
      <v-divider inset></v-divider>
      <v-card-text v-if="sources.length === 0" class="text-center">
        <h5 class="secondary--text body-2">No Integrations</h5>
      </v-card-text>
      <template v-for="(source, index) in sources">
        <v-list-item :key="'c' + index">
          <v-list-item-avatar>
            <v-avatar color="primary" size="35">
              <span class="white--text headline">{{ index + 1 }}</span>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content class="pb-0">
            <v-list-item-title>
              <h3 class="secondary--text font-weight-bold">
                {{ source.Name }}
              </h3>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div
                class="d-flex justify-start align-center align-content-center"
              >
                <div class="d-flex">
                  <h4 class="secondary--text">
                    {{ source.SourceSide.Name }}
                  </h4>
                  <div class="pl-3">
                    <v-chip x-small color="primary font-weight-bold" outlined>
                      text 1asdassdasd asdasd
                    </v-chip>
                  </div>
                  <div class="pl-2">
                    <v-chip x-small color="accent font-weight-bold" outlined>
                      text 2
                    </v-chip>
                  </div>
                </div>
                <div class="pl-4">
                  <v-list-item-avatar color="primary" size="15">
                    <v-icon size="10" color="white">
                      fa-arrow-right
                    </v-icon>
                  </v-list-item-avatar>
                </div>
                <div class="d-flex">
                  <h4 class="secondary--text">
                    {{ source.TargetSide.Name }}
                  </h4>
                  <div class="pl-2">
                    <v-chip x-small color="primary font-weight-bold" outlined>
                      Queue
                    </v-chip>
                  </div>
                  <div class="pl-2">
                    <v-chip x-small color="accent font-weight-bold" outlined>
                      queue.q1.qw2.as
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
                  @click.stop="cloneIntegration(source)"
                >
                  fa-clone
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pr-2 pl-2"
                  @click.stop="editIntegration(source)"
                >
                  fa-edit
                </v-icon>
              </div>
              <div>
                <v-icon
                  size="15"
                  class="pl-2"
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
    <BindingDlg ref="bindingDlg"></BindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </div>
</template>
<script>
import BindingDlg from "@/components/binding/BindingDlg";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { mapGetters, mapMutations } from "vuex";
import lodashLang from "lodash/lang";

export default {
  name: "IntegrationList",
  components: { BindingDlg, ConfirmDlg },
  data() {
    return {};
  },
  computed: {
    sources: function() {
      return this.$store.state.integrations.sources;
    },
    targets: function() {
      return this.$store.state.integrations.targets;
    }
  },
  methods: {
    ...mapGetters(["getCurrentBindingNames"]),
    ...mapMutations(["deleteBinding", "replaceBinding", "addBinding"]),
    async delIntegration(item) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this integration?"
        )
      ) {
        this.deleteBinding(item);
      }
    },
    async editIntegration(item) {
      await this.$refs.bindingDlg
        .open(item, this.getCurrentBindingNames(), "edit")
        .then(result => this.replaceBinding(result));
    },
    cloneIntegration(item) {
      let clonedItem = lodashLang.cloneDeep(item);
      clonedItem.Name = `${clonedItem.Name}-${makeid(5)}`;
      this.addBinding({ binding: clonedItem });
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
