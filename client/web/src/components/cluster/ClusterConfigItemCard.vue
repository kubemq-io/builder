<template>
  <v-card elevation="1" class="pa-0 ">
    <v-card-title class="pa-0">
      <v-list-item-avatar color="secondary" size="20">
        <span class="white--text body-2">{{ initial }}</span>
      </v-list-item-avatar>
      <h5 class="secondary--text font-weight-regular">
        {{ title }}
      </h5>
    </v-card-title>
    <v-card-text class="py-1">
      <v-form v-if="toShow" ref="form" v-model="config.isValid">
        <v-jsf
          @change="validateForm"
          v-model="config.model"
          :schema="config.schema"
          :options="config.options"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import { ClusterConfigItem } from "@/components/cluster/classes/ClusterConfigItem";
export default {
  name: "ClusterConfigItemCard",
  components: { VJsf },
  props: {
    title: String,
    config: ClusterConfigItem,
    show: Boolean
  },
  data: function() {
    return {};
  },

  computed: {
    initial: function() {
      return this.title.charAt(0).toUpperCase();
    },
    toShow: function() {
      return this.show;
    }
  },
  methods: {
    validateForm() {
      this.$nextTick(() => {
        this.$refs.form.validate();
      });
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
</style>
