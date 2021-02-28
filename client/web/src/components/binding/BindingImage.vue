<template>
  <div>
    <v-img v-if="type === 'bridge'" src="@/assets/bridge.svg" alt="bridge" />
    <v-img
      v-if="type === 'replicate'"
      src="@/assets/replicate.svg"
      alt="replicate"
      class="center"
      :max-height="imageSize"
      :max-width="imageSize"
    />
    <v-img
      v-if="type === 'aggregate'"
      src="@/assets/aggregate.svg"
      alt="aggregate"
      class="center"
      :max-height="imageSize"
      :max-width="imageSize"
    />
    <v-img
      v-if="type === 'transform'"
      src="@/assets/transform.svg"
      alt="transform"
      class="center"
      :max-height="imageSize"
      :max-width="imageSize"
    />
    <v-icon>
      <img
        v-if="type === 'source'"
        src="@/assets/source.svg"
        alt="source"
        class="center"
      />
    </v-icon>

    <v-img
      v-if="type === 'target'"
      src="@/assets/target.svg"
      alt="target"
      class="center"
      :max-height="imageSize"
      :max-width="imageSize"
    />
  </div>
</template>

<script>
export default {
  name: "BindingImage",
  props: {
    type: String,
    size: String
  },
  data: function() {
    return {};
  },
  computed: {
    imageSize() {
      if (this.size === "small") {
        return "35";
      }
      return "45";
    }
  }
};
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 50px;
  height: 50px;
}
</style>
