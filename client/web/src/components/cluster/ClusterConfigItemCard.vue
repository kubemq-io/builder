<template>
  <v-card elevation="1" class="pa-0 ">
    <v-card-title class="pa-0 pb-2">
      <v-list-item-avatar color="primary" size="25">
        <span class="white--text">{{ initial }}</span>
      </v-list-item-avatar>
      <h5 class="secondary--text">
        {{ title }}
      </h5>
    </v-card-title>
    <v-card-text>
      <v-form :ref="getRef" v-model="config.isValid">
        <v-jsf
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
    config: ClusterConfigItem
  },
  data: function() {
    return {};
  },
  computed: {
    getRef: function() {
      return `cluster-${this.title}-card`;
    },
    initial: function() {
      return this.title.charAt(0).toUpperCase();
    }
  }
};
</script>

<style scoped></style>
