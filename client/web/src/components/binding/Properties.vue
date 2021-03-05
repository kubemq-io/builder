<template>
  <div class="d-flex wrap">
    <div class="side pl-0 pr-2 pt-0 pb-2 col-6">
      <v-card elevation="1" min-height="210px">
        <v-list-item class="pa-0">
          <v-list-item-avatar color="primary" size="30">
            <span class="white--text headline">{{
              source.Initial
            }}</span></v-list-item-avatar
          >
          <h3 class="secondary--text">
            {{ source.Title }}
          </h3>
        </v-list-item>
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
    <div class="side pl-2 pr-0 pt-0 pb-2 col-6">
      <v-card elevation="1" min-height="210px">
        <v-list-item class="pa-0">
          <v-list-item-avatar color="primary" size="30">
            <span class="white--text headline">{{
              target.Initial
            }}</span></v-list-item-avatar
          >
          <h3 class="secondary--text">
            {{ target.Title }}
          </h3>
        </v-list-item>
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
  name: "Properties",
  components: { VJsf },
  props: {
    binding: {},
    show: Boolean
  },
  data: function() {
    return {
      options: {
        initialValidation: "all"
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
/*.side {*/
/*  flex-basis: 100%;*/
/*}*/
</style>
