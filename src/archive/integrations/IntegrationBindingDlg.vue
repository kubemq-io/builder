<template>
  <v-dialog v-model="show" scrollable persistent>
    <v-card tile class="pa-0">
      <DialogTitle :title="bindingModel.Title" :mode="mode" />
      <v-card-text>
        <v-card flat tile>
          <v-card-text>
            <v-row class="flex-column">
              <v-col cols="6" class="pb-0">
                <v-text-field
                  v-model="bindingModel.Name"
                  clearable
                  label="Integration Name"
                  :rules="[this.validateBindingName]"
                  ref="inputName"
                  :error="errorState"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <IntegrationsBindingProperties
                  ref="properties"
                  :binding="bindingModel"
                  :options="options"
                  :show="show"
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-switch
                  v-model="setMiddleware"
                  label="Middlewares"
                  flat
                  dense
                  color="primary"
                  class="mt-1"
                ></v-switch>
                <v-card-text v-if="setMiddleware" class="pa-0 pb-2">
                  <IntegrationsBindingMiddlewares
                    :config="bindingModel.Middlewares"
                    :show="show"
                  ></IntegrationsBindingMiddlewares>
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <v-row justify="end" align-content="center" align="center">
                  <div class="pr-1">
                    <v-btn color="secondary" text rounded @click.native="cancel"
                      >CANCEL</v-btn
                    >
                  </div>
                  <div class="pr-2">
                    <v-btn
                      color="primary"
                      v-if="mode === 'add'"
                      outlined
                      rounded
                      @click="submit"
                      >ADD</v-btn
                    >
                    <v-btn
                      color="primary"
                      class="pr-2"
                      v-if="mode === 'edit'"
                      outlined
                      rounded
                      @click="submit"
                      >EDIT</v-btn
                    >
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text> </v-card
    >s
  </v-dialog>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import IntegrationsBindingMiddlewares from "@/components/integrations/IntegrationsBindingMiddlewares";
import IntegrationsBindingProperties from "@/components/integrations/IntegrationsBindingsProperties";
import { mapMutations } from "vuex";
import lodashArray from "lodash/array";
import lodashLang from "lodash/lang";
import { IntegrationsBinding } from "@/components/integrations/Integrations";
import DialogTitle from "@/archive/DialogTitle";

export default {
  name: "IntegrationsBindingDlg",
  components: {
    DialogTitle,
    IntegrationsBindingProperties,
    IntegrationsBindingMiddlewares
  },
  data: function() {
    return {
      bindingModel: new IntegrationsBinding(),
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
    },
    isValidForm: function() {
      return (
        this.$refs.inputName.validate() &&
        this.$refs.properties.$refs.formSource.validate() &&
        this.$refs.properties.$refs.formTarget.validate()
      );
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["addIntegrationsBinding", "replaceIntegrationsBinding"]),

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
        return "Set integration name";
      }
      const checkName = this.bindingModel.Name;
      const found = lodashArray.findIndex(this.forbiddenNames, function(b) {
        return b.name === checkName;
      });
      if (this.mode === "add") {
        if (found >= 0) {
          return "Integration name must be unique";
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
        return "Integration name must be unique";
      } else {
        this.isValidName = true;
        return true;
      }
    },

    submit: function() {
      this.isValidName = this.$refs.inputName.validate();
      if (this.isValidForm) {
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
/*.v-text-field >>> input {*/
/*  font-size: 0.9em;*/
/*}*/
/*.v-text-field >>> label {*/
/*  font-size: 0.9em;*/
/*}*/
/*.v-text-field >>> button {*/
/*  font-size: 0.9em;*/
/*}*/
.v-dialog__content {
  align-items: flex-start;
  justify-content: center;
}
</style>
