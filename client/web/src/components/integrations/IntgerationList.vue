<template>
  <v-card flat tile class="min-w-0">
    <div v-if="currentBindingList.length === 0">
      <div class="px-1 py-6 text-center">No Integrations</div>
    </div>
    <!--    <v-slide-y-transition v-else group tag="div">-->
    <v-card v-for="(item, index) in currentBindingList" :key="item.Name">
      <div class="item d-flex justify-center align-center align-content-center">
        <div id="index" class="pl-3">
          <v-avatar color="primary" size="35">
            <span class="white--text headline">{{ index + 1 }}</span>
          </v-avatar>
        </div>
        <div id="content" class="flex-grow-1">
          <v-card-title class="pa-0 pl-3 pb-2 pt-2">
            <h4 class="secondary--text font-weight-bold">{{ item.Name }}</h4>
          </v-card-title>
          <v-card-subtitle class="pa-0 pl-3">
            <div
              class="d-flex justify-center align-center align-content-center"
            >
              <div
                class="d-flex justify-center align-center align-content-center"
              >
                <div class="d-flex">
                  <h3 class="secondary--text">
                    {{ item.SourceSide.Name }}
                  </h3>
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
                  <v-list-item-avatar color="primary" size="25">
                    <v-icon size="15" color="white">
                      fa-arrow-right
                    </v-icon>
                  </v-list-item-avatar>
                </div>
                <div class="d-flex">
                  <h3 class="secondary--text">
                    {{ item.TargetSide.Name }}
                  </h3>
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

              <div class="flex-grow-1">
                <v-col class="d-flex justify-end">
                  <v-icon
                    size="20"
                    class="pr-2"
                    @click.stop="cloneIntegration(item)"
                  >
                    fa-clone
                  </v-icon>
                  <v-icon
                    size="20"
                    class="pr-2 pl-2"
                    @click.stop="editIntegration(item)"
                  >
                    fa-edit
                  </v-icon>
                  <v-icon
                    size="20"
                    class="pl-2"
                    @click.stop="delIntegration(item)"
                  >
                    fa-trash-alt
                  </v-icon>
                </v-col>
              </div>
            </div>
          </v-card-subtitle>
        </div>
      </div>
    </v-card>
    <!--    </v-slide-y-transition>-->
    <BindingDlg ref="bindingDlg"></BindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </v-card>
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
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "Name",
          width: "10%"
        },
        {
          text: "Source",
          align: "Start",
          value: "SourceSide",
          width: "35%"
        },
        {
          text: "Target",
          align: "Start",
          value: "TargetSide",
          width: "35%"
        },
        {
          text: "Middlewares",
          align: "Start",
          value: "Middlewares",
          sortable: false,
          width: "10%"
        },
        { text: "", value: "actions", sortable: false, width: "10%" }
      ]
    };
  },
  computed: {
    currentBindingList: function() {
      return this.$store.state.integrations.currentBindingList;
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
  border-bottom: 1px solid #595a5c;

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
