<template>
  <v-toolbar color="primary" flat dense>
    <v-toolbar-title class="text-body-3 font-weight-bold white--text pl-2">
      {{ modeTitle }} {{ binding.Title }}
    </v-toolbar-title>
  </v-toolbar>
</template>
<script>
export default {
  name: "BindingTitle",
  props: {
    binding: {},
    mode: String
  },
  computed: {
    modeTitle: function() {
      if (this.mode === "add") {
        return "Add";
      } else {
        return "Edit";
      }
    }
  }
};
</script>
