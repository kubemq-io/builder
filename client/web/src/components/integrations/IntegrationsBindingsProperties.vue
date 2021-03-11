<template>
  <div class="d-flex justify-center align-content-center align-center">
    <div class="side">
      <v-card class="pa-0 ">
        <v-card-title class="pa-0">
          <v-list-item-avatar color="primary" size="25">
            <span class="white--text body-1">{{ source.Initial }}</span>
          </v-list-item-avatar>
          <h5 class="secondary--text">
            {{ source.Title }}
          </h5>
        </v-card-title>
        <v-card-text class="pb-1">
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
    <div class="side">
      <v-card class="pa-0">
        <v-card-title class="pa-0 pb-2">
          <v-list-item-avatar color="primary" size="25">
            <span class="white--text body-1">{{ target.Initial }}</span>
          </v-list-item-avatar>
          <h5 class="secondary--text">
            {{ target.Title }}
          </h5>
        </v-card-title>
        <v-card-text class="pb-1">
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
  name: "Properties",
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
