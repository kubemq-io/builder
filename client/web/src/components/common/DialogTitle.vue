<template>
  <v-toolbar color="primary" flat dense>
    <v-toolbar-title class="text-body-3 white--text pa-0">
      {{ modeTitle }} {{ title }}
    </v-toolbar-title>
  </v-toolbar>
</template>
<script>
export default {
  name: "DialogTitle",
  props: {
    title: String,
    mode: String,
    enable: Boolean
  },
  computed: {
    modeTitle: function() {
      if (this.mode === "add") {
        return "Add";
      } else {
        return "Edit";
      }
    }
  },
  methods: {
    setAction(action) {
      this.$emit("action", action);
    }
  }
};
</script>
<style scoped></style>
