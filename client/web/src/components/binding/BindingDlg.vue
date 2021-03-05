<template>
  <v-dialog v-model="show" scrollable persistent width="960px">
    <v-row no-gutters dense>
      <v-card>
        <BindingTitle :binding="bindingModel" :mode="mode" />
        <v-card-text>
          <v-card flat tile>
            <v-card-title class="pa-0">
              <v-icon color="primary">fa-link</v-icon>
              <h4 class="pa-2 primary--text">
                Name
              </h4>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-col cols="6" class="pa-0">
                <v-text-field
                  v-model="bindingModel.Name"
                  clearable
                  solo
                  label="Set Integration Name"
                  :rules="[this.validateBindingName]"
                  ref="inputName"
                  :error="errorState"
                ></v-text-field>
              </v-col>
            </v-card-text>
          </v-card>
          <v-card flat tile>
            <v-card-title class="pa-0">
              <v-icon color="primary">fa-sliders-h</v-icon>
              <h4 class="pa-2 primary--text">
                Properties
              </h4>
            </v-card-title>
            <v-card-text class="pa-0">
              <Properties
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
                color="secondary"
              ></v-switch>
              <v-card-title class="pa-0">
                <h4 class="pa-2 primary--text">
                  Middlewares
                </h4>
              </v-card-title>
              <v-card-text v-if="setMiddleware" class="pa-0">
                <Middlewares
                  :config="bindingModel.Middlewares"
                  :show="show"
                ></Middlewares>
              </v-card-text>
            </v-card-title>
          </v-card>
          <v-card flat tile> </v-card>
          <v-row
            justify="end"
            align-content="center"
            align="center"
            class="pa-2"
          >
            <div class="pa-2">
              <v-btn color="secondary" text rounded @click.native="cancel"
                >cancel</v-btn
              >
            </div>
            <div class="pa-2">
              <v-btn
                color="secondary"
                v-if="mode === 'add'"
                outlined
                rounded
                @click="submit"
                >Add</v-btn
              >
              <v-btn
                color="secondary"
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
    </v-row>
  </v-dialog>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import Middlewares from "@/components/binding/Middlewares";
import Properties from "@/components/binding/Properties";
import BindingTitle from "@/components/binding/BindingTitle";
import { mapMutations, mapGetters } from "vuex";
import { BindingConfig } from "@/components/binding/bindingConfig";
import lodashArray from "lodash/array";
import lodashLang from "lodash/lang";

export default {
  name: "BindingDlg",
  components: { BindingTitle, Properties, Middlewares },
  data: function() {
    return {
      bindingModel: new BindingConfig(),
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
    ...mapMutations(["addBinding", "replaceBinding"]),
    ...mapGetters(["getCurrentBindingNames"]),
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
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
.side {
  flex-basis: 100%;
}
/*.icon {*/
/*  flex-basis: 10%;*/
/*  margin: 10px;*/
/*}*/
/*.center {*/
/*  display: block;*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/

/*  width: 50px;*/
/*  height: 50px;*/
/*}*/
</style>
