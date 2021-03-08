<template>
  <div class="d-flex justify-center align-content-center align-center">
    <div class="side pl-0 pr-2 pt-0 pb-2">
      <v-card elevation="1" class="pa-0 ">
        <v-card-title class="pa-0 pb-2">
          <v-list-item-avatar color="primary" size="25">
            <span class="white--text">S</span>
          </v-list-item-avatar>
          <h5 class="secondary--text">
            Bridge Sources
          </h5>
        </v-card-title>
        <v-card-text>
          <v-form v-if="toShow" ref="formSource" v-model="source.IsModelValid">
            <v-jsf
              v-model="source.Model"
              :schema="source.Schema"
              :options="options"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </div>
    <div class="pl-3 flex-grow-1">
      <v-list-item-avatar color="primary" size="25">
        <v-icon size="15" color="white">
          fa-arrow-right
        </v-icon>
      </v-list-item-avatar>
    </div>
    <div class="side pl-2 pr-0 pt-0 pb-2">
      <v-card elevation="1" class="pa-0">
        <v-card-title class="pa-0 pb-2">
          <v-list-item-avatar color="primary" size="25">
            <span class="white--text">T</span>
          </v-list-item-avatar>
          <h5 class="secondary--text">
            Bridge Targets
          </h5>
        </v-card-title>
        <v-card-text>
          <v-form v-if="toShow" ref="formTarget" v-model="target.IsModelValid">
            <v-jsf
              v-model="target.Model"
              :schema="target.Schema"
              :options="options"
            ></v-jsf>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import VJsf from "@koumoul/vjsf/lib/VJsf";

export default {
  name: "BridgesBindingProperties",
  components: { VJsf },
  props: {
    binding: {},
    show: Boolean
  },
  data: function() {
    return {
      options: {
        initialValidation: "all",
        checkboxProps: {
          dense: true
        },
        rules: {
          validateConnections: function(array) {
            if (array.length === 0) {
              return "At least one connection must be defined";
            } else {
              return true;
            }
          }
        }
      }
    };
  },
  computed: {
    target: function() {
      return this.binding.TargetSide;
    },
    source: function() {
      return this.binding.SourceSide;
    },
    toShow: function() {
      return this.show;
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
  flex-basis: 95%;
}
</style>
