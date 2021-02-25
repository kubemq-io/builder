<template>
  <div class="d-flex">
    <div class="d-flex justify-center align-center">
      <v-list-item-title class="font-weight-bold">{{ name }}</v-list-item-title>
    </div>
  </div>
</template>

<script>
export default {
  name: "Name",
  props: {
    name: String
  },
  methods: {}
};
</script>

<style scoped></style>
