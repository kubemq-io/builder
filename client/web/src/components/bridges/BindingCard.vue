<template>
  <v-list-item>
    <v-list-item-avatar>
      <img :src="binding.IconTypeSrc" alt="binding" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ binding.Title }}</v-list-item-title>
    </v-list-item-content>
    <v-divider></v-divider>
    <v-list-item-content>
      <v-list-item-title>{{ binding.Title }}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
    </v-list-item-action>
    <v-list-item-action>
      <v-icon color="grey lighten-1" @click="binding.Title"
        >mdi-arrow-right</v-icon
      >
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { BridgesBinding } from "@/components/bridges/bridges";

export default {
  name: "BindingCard",
  props: {
    binding: BridgesBinding
  },

  data: function() {
    return {
      valid: false
    };
  }
};
</script>

<style scoped></style>
