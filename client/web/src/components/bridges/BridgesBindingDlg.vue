<template>
  <v-dialog v-model="show" scrollable persistent width="960px">
    <v-card rounded>
      <DialogTitle title="KubeMQ Bridge" :mode="mode" />
      <v-card-text>
        <v-card flat tile>
          <v-card-title class="pa-0">
            <v-icon size="15" color="secondary">fa-link</v-icon>
            <h5 class="pa-2 secondary--text">
              Name
            </h5>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-col cols="6" class="pt-0 pb-0">
              <v-text-field
                v-model="bindingModel.Name"
                clearable
                label="Bridge Name"
                :rules="[this.validateBindingName]"
                ref="inputName"
                :error="errorState"
              ></v-text-field>
            </v-col>
          </v-card-text>
        </v-card>
        <v-card flat tile>
          <v-card-title class="pa-0">
            <v-icon size="15" color="secondary">fa-sliders-h</v-icon>
            <h5 class="pa-2 secondary--text">
              Properties
            </h5>
          </v-card-title>
          <v-card-text class="pa-0">
            <BridgesBindingProperties
              ref="properties"
              :binding="bindingModel"
              :options="options"
              :show="show"
            />
          </v-card-text>
        </v-card>
        <v-card flat tile>
          <v-card-title class="pt-0 pr-0 pl-0">
            <v-switch
              v-model="setMiddleware"
              flat
              dense
              color="primary"
            ></v-switch>
            <v-card-title class="pa-0">
              <h5 class="pa-2 secondary--text">
                Middlewares
              </h5>
            </v-card-title>
            <v-card-text v-if="setMiddleware" class="pa-0">
              <BridgesBindingMiddlewares
                :config="bindingModel.Middlewares"
                :show="show"
              ></BridgesBindingMiddlewares>
            </v-card-text>
          </v-card-title>
        </v-card>
        <v-card flat tile> </v-card>
        <v-row justify="end" align-content="center" align="center" class="pa-2">
          <div class="pa-2">
            <v-btn color="primary" text rounded @click.native="cancel"
              >cancel</v-btn
            >
          </div>
          <div class="pa-2">
            <v-btn
              color="primary"
              v-if="mode === 'add'"
              outlined
              rounded
              @click="submit"
            >
              Add</v-btn
            >
            <v-btn
              color="primary"
              class=""
              v-if="mode === 'edit'"
              outlined
              rounded
              @click="submit"
              >Edit</v-btn
            >
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapMutations, mapGetters } from "vuex";
import lodashArray from "lodash/array";
import lodashLang from "lodash/lang";
import { BridgesBinding } from "@/components/bridges/bridges";
import BridgesBindingProperties from "@/components/bridges/BridgesBindingsProperties";
import BridgesBindingMiddlewares from "@/components/bridges/BridgesBindingMiddlewares";
import DialogTitle from "@/components/common/DialogTitle";

export default {
  name: "BridgesBindingDlg",
  components: {
    DialogTitle,
    BridgesBindingMiddlewares,
    BridgesBindingProperties
  },
  data: function() {
    return {
      bindingModel: new BridgesBinding(),
      show: false,
      forbiddenNames: [],
      panel: [0, 1],
      options: {},
      mode: "",
      resolve: null,
      reject: null,
      isValidName: true,
      setMiddleware: false,
      editedItem: {
        binding: {},
        index: {},
        originateName: ""
      }
    };
  },
  computed: {
    errorState: function() {
      return !this.isValidName;
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["addBridgesBinding", "replaceBridgesBinding"]),
    ...mapGetters(["getBridgesBindingNames"]),
    open(item, forbiddenNames, mode) {
      this.show = true;
      this.bindingModel = lodashLang.cloneDeep(item);
      this.mode = mode;
      this.forbiddenNames = forbiddenNames;
      this.setMiddleware = this.bindingModel.Middlewares.hasData();
      if (this.mode === "edit") {
        this.editedItem.binding = lodashLang.cloneDeep(item);

        const currentName = this.editedItem.binding.Name;
        this.editedItem.originateName = currentName;
        this.editedItem.index = lodashArray.findIndex(
          this.forbiddenNames,
          function(b) {
            return b.name === currentName;
          }
        );
      }
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    validateBindingName: function() {
      if (this.bindingModel.Name === "" || this.bindingModel.Name === null) {
        return "Set bridge name";
      }
      const checkName = this.bindingModel.Name;
      const found = lodashArray.findIndex(this.forbiddenNames, function(b) {
        return b.name === checkName;
      });
      if (this.mode === "add") {
        if (found >= 0) {
          return "Bridge name must be unique";
        } else {
          this.isValidName = true;
          return true;
        }
      }
      if (
        this.mode === "edit" &&
        found >= 0 &&
        checkName !== this.editedItem.originateName
      ) {
        return "Bridge name must be unique";
      } else {
        this.isValidName = true;
        return true;
      }
    },
    isValidBindingName: function() {},
    submit: function() {
      this.panel = [0, 1];
      this.isValidName = this.$refs.inputName.validate();

      this.$refs.properties.$refs.formSource.validate();
      this.$refs.properties.$refs.formTarget.validate();
      if (
        this.bindingModel.SourceSide.IsModelValid &&
        this.bindingModel.TargetSide.IsModelValid &&
        this.isValidName
      ) {
        if (this.mode === "add") {
          this.resolve({
            binding: this.bindingModel
          });
        } else {
          this.resolve({
            index: this.editedItem.index,
            binding: this.bindingModel
          });
        }
        this.show = false;
      }
    },
    cancel: function() {
      if (this.mode === "edit") {
        this.resolve(this.editedItem);
      } else {
        this.resolve(null);
      }
      this.show = false;
    }
  }
};
</script>

<style scoped>
.v-text-field >>> input {
  font-size: 0.9em;
}
.v-text-field >>> label {
  font-size: 0.9em;
}
.v-text-field >>> button {
  font-size: 0.9em;
}
.v-dialog__content {
  align-items: flex-start;
  justify-content: center;
}
</style>
