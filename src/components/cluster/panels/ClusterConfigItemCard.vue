<template>
  <v-card elevation="1" class="pa-0 ">
    <v-card-title class="pa-0">
      <v-list-item-avatar>
        <v-avatar :color="getColor" size="30">
          <span class="white--text body-1">{{ initial }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <h4 :class="`${getColor}--text`">
        {{ title }}
      </h4>
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
    show: Boolean,
    color: String
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
    },
    getColor: function() {
      if (!this.config.isValid) {
        return "error";
      }
      if (this.config.getHasConfigured()) {
        return "primary";
      }
      return "secondary";
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
