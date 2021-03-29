<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <builder-title
        :title="getTitle"
        @save="save"
        show-back
        @back="cancel"
        show-save
      ></builder-title>
    </div>
    <div class="col-12 pb-0">
      <v-card flat tile>
        <v-card-text>
          <v-row class="flex-column">
            <v-col cols="6" class="pb-2 pt-0">
              <v-text-field
                v-model="bindingModel.Name"
                clearable
                label="Bridge Name"
                :rules="[this.validateBindingName]"
                ref="inputName"
                :error="errorState"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <BridgesBindingProperties
                ref="properties"
                :binding="bindingModel"
                :options="options"
                :show="show"
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch
                v-model="setMiddleware"
                flat
                :color="getMiddlewareColor"
                class="mt-1"
              >
                <template v-slot:label>
                  <h2 :class="`${getMiddlewareColor}--text`">Middlewares</h2>
                </template>
              </v-switch>

              <v-card-text v-show="setMiddleware" class="pa-0 pb-2">
                <BridgesBindingMiddlewares
                  :config="bindingModel.Middlewares"
                  :show="show"
                ></BridgesBindingMiddlewares>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

import { mapGetters, mapMutations, mapActions } from "vuex";
import lodashArray from "lodash/array";

import BuilderTitle from "@/components/common/BuilderTitle";
import BridgesBindingProperties from "@/components/bridges/BridgesBindingsProperties";
import BridgesBindingMiddlewares from "@/components/bridges/BridgesBindingMiddlewares";

export default {
  name: "BridgesConfigView",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.show = true;
    });
  },
  components: {
    BridgesBindingMiddlewares,
    BridgesBindingProperties,
    BuilderTitle
  },
  data: function() {
    return {
      show: false,
      options: {},
      setMiddleware: false,
      isValidName: true
    };
  },

  computed: {
    bindingModel: function() {
      return this.$store.state.bridges.configBinding.binding;
    },
    mode: function() {
      return this.$store.state.bridges.configBinding.mode;
    },
    originateName: function() {
      return this.$store.state.bridges.configBinding.originateName;
    },
    forbiddenNames: function() {
      return this.$store.state.bridges.configBinding.existedBindingNames;
    },
    bindingConfig: function() {
      return this.$store.state.bridges.configBinding;
    },

    errorState: function() {
      return !this.isValidName;
    },
    getTitle: function() {
      if (this.mode === "add") {
        return "bridges > add";
      } else {
        return "bridges > edit";
      }
    },
    getMiddlewareColor: function() {
      if (this.bindingModel.Middlewares.hasData()) {
        return "primary";
      }
      return "secondary";
    }
  },
  watch: {},
  methods: {
    ...mapMutations(["updateBindings"]),
    ...mapGetters(["getBridgesBindingNames"]),
    ...mapActions(["showSuccess", "showError", "showToast"]),

    validateBindingName: function() {
      const val = this.bindingModel.Name;
      if (val !== val.toLowerCase()) {
        return "Value must be lowercase only";
      }
      if (val.indexOf(" ") > 0) {
        return "Value cannot contain white space";
      }

      if (val === "" || val === null) {
        return "Set bridge name";
      }
      const checkName = val;
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
        checkName !== this.originateName
      ) {
        return "Bridge name must be unique";
      } else {
        this.isValidName = true;
        return true;
      }
    },

    save: function() {
      this.isValidName = this.$refs.inputName.validate();
      this.$refs.properties.$refs.formSource.validate();
      this.$refs.properties.$refs.formTarget.validate();
      if (
        this.bindingModel.SourceSide.IsModelValid &&
        this.bindingModel.TargetSide.IsModelValid &&
        this.isValidName
      ) {
        this.updateBindings(this.bindingConfig);
        this.show = false;
        this.$router.back();
        if (this.mode === "add") {
          this.showSuccess(
            `Bridge ${this.bindingConfig.binding.Name} was added successfully`
          );
        } else {
          this.showSuccess(
            `Bridge ${this.bindingConfig.binding.Name} was edited successfully`
          );
        }
      }
    },

    cancel: function() {
      this.show = false;
      this.$router.back();
    }
  }
};
</script>

<style scoped></style>
