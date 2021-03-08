<template>
  <v-form ref="form-BridgesModule-sources-queue" v-model="valid">
    <v-jsf :value="model" :schema="schema" :options="options" />
  </v-form>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf";

export default {
  name: "QueueSource",
  components: { VJsf },
  data: function() {
    return {
      valid: false,
      model: null,
      schema: defaultSchema,
      options: loadedOptions
    };
  }
};
const loadedOptions = {};
</script>

<style scoped></style>
