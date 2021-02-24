<template>
  <v-card>
    <v-form ref="form-binding-general" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
    <v-form ref="form-binding-source" v-model="valid">
      <v-jsf v-model="model" :schema="schema" :options="options" />
    </v-form>
  </v-card>

</template>

<script>
export default {
  name: "BindingForm"

};
</script>

<style scoped></style>
