<template>
  <v-card-title>
    <v-list-item-avatar>
      <v-img
          v-if="binding.Type === 'bridge'"
          src="@/assets/bridge.svg"
          alt="bridge"
      />
      <v-img
          v-if="binding.Type === 'replicate'"
          src="@/assets/replicate.svg"
          alt="replicate"
      />
      <v-img
          v-if="binding.Type === 'aggregate'"
          src="@/assets/aggregate.svg"
          alt="aggregate"
      />
      <v-img
          v-if="binding.Type === 'source'"
          src="@/assets/source.svg"
          alt="source"
      />
      <v-img
          v-if="binding.Type === 'target'"
          src="@/assets/target.svg"
          alt="target"
      />
    </v-list-item-avatar>
    <v-list-item-content>
      <h3>{{ binding.Title }}</h3>
    </v-list-item-content>
  </v-card-title>
</template>
<script>
export default {
  name: 'BindingTitle',
  props: {
    binding: {}
  }
}
</script>
