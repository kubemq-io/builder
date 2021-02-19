<template>
  <v-container>
    <v-form ref="form-template" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
    <v-layout row class="mt-2">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="print()">Validate</v-btn>
    </v-layout>
  </v-container>

</template>

<script>
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'
export default {
  name: "template",
  components: { VJsf },
  data: function () {
    return {
      valid: false,
      model: loadedModel,
      schema: defaultSchema,
      options: loadedOptions
    }
  },
  methods: {
    print: function () {
      console.log(this.model)
    }
  }
}
const loadedModel ={
}
const loadedOptions = {
}
const defaultSchema =
    {
      "title": "General",
      "type": "object",
      "properties": {
      }
    }

</script>

<style scoped>

</style>
