<template>
  <div class="d-flex">
    <div v-if="type === 'source'" class="d-flex justify-center align-center">
      <div class="pr-1">
        <v-img src="@/assets/source.svg" alt="source" width="40" height="40" />
      </div>
      <div>
        <v-list-item-title>Source</v-list-item-title>
      </div>
    </div>
    <div v-if="type === 'target'" class="d-flex justify-center align-center">
      <div class="pr-1">
        <v-img src="@/assets/target.svg" alt="target" width="40" height="40" />
      </div>
      <div>
        <v-list-item-title>Target</v-list-item-title>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Type",
  props: {
    type: String
  },
  methods: {}
};
</script>

<style scoped></style>
