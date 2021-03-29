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
                label="Integration Name"
                :rules="[this.validateBindingName]"
                ref="inputName"
                :error="errorState"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <IntegrationsBindingsProperties
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
              <v-card-text v-if="setMiddleware" class="pa-0 pb-2">
                <IntegrationsBindingMiddlewares
                  :config="bindingModel.Middlewares"
                  :show="show"
                ></IntegrationsBindingMiddlewares>
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
import IntegrationsBindingMiddlewares from "@/components/integrations/IntegrationsBindingMiddlewares";
import IntegrationsBindingsProperties from "@/components/integrations/IntegrationsBindingsProperties";
import { mapActions, mapGetters, mapMutations } from "vuex";
import lodashArray from "lodash/array";
import BuilderTitle from "@/components/common/BuilderTitle";

export default {
  name: "IntegrationConfigView",
  props: {
    type: String
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.show = true;
    });
  },
  components: {
    BuilderTitle,

    IntegrationsBindingsProperties,
    IntegrationsBindingMiddlewares
  },
  data: function() {
    return {
      show: false,
      options: {},
      setMiddleware: false,
      isValidName: true
    };
  },
  beforeMount() {
    if (this.bindingModel.Type === "") {
      this.$router.replace("/");
    }
  },
  computed: {
    errorState: function() {
      return !this.isValidName;
    },
    bindingModel: function() {
      return this.bindingConfig.binding;
    },
    mode: function() {
      return this.bindingConfig.mode;
    },
    originateName: function() {
      return this.bindingConfig.originateName;
    },
    forbiddenNames: function() {
      return this.bindingConfig.existedBindingNames;
    },
    bindingConfig: function() {
      if (this.type === "sources") {
        return this.$store.state.integrations.configSourcesBinding;
      } else {
        return this.$store.state.integrations.configTargetsBinding;
      }
    },

    getTitle: function() {
      if (this.mode === "add") {
        return `${this.type} > add ${this.bindingModel.Title}`;
      } else {
        return `${this.type} > edit`;
      }
    },
    getMiddlewareColor: function() {
      if (this.bindingModel.Middlewares.hasData()) {
        return "primary";
      }
      return "secondary";
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
    ...mapMutations(["updateIntegrationBinding"]),
    ...mapGetters(["getIntegrationsBindingNames"]),
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
      if (this.isValidForm) {
        this.updateIntegrationBinding(this.bindingConfig);
        this.show = false;
        this.$router.back();
        if (this.mode === "add") {
          this.showSuccess(
            `Integration ${this.bindingModel.Name} was added successfully`
          );
        } else {
          this.showSuccess(
            `Integration ${this.bindingModel.Name} was edited successfully`
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

<style scoped>

</style>
