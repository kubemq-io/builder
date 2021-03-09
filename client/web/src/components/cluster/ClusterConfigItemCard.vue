<template>
  <v-card flat>
    <v-toolbar-title dense class="secondary white--text body-2 pa-2">
      {{ title }}
    </v-toolbar-title>
    <v-card-text>
      <v-form ref="form-cluster-general" v-model="isValid">
        <v-jsf v-model="model" :schema="schema" :options="options" />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterConfigItemCard",
  components: { VJsf },
  props: {
    title: String,
    model: {
      type: Object,
      default: {}
    },
    schema: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      default: {}
    },
    isValid: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
