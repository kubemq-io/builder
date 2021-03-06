<template>
  <v-toolbar color="primary" flat dense>
    <v-toolbar-title class="text-body-3 font-weight-bold white--text pl-2">
      {{ modeTitle }} {{ binding.Title }}
    </v-toolbar-title>
  </v-toolbar>
  <!--    -->
  <!--    <v-list-item-avatar>-->
  <!--      <v-img-->
  <!--        v-if="binding.Type === 'bridge'"-->
  <!--        src="@/assets/bridge.svg"-->
  <!--        alt="bridge"-->
  <!--      />-->
  <!--      <v-img-->
  <!--        v-if="binding.Type === 'replicate'"-->
  <!--        src="@/assets/replicate.svg"-->
  <!--        alt="replicate"-->
  <!--      />-->
  <!--      <v-img-->
  <!--        v-if="binding.Type === 'aggregate'"-->
  <!--        src="@/assets/aggregate.svg"-->
  <!--        alt="aggregate"-->
  <!--      />-->

  <!--      <v-img-->
  <!--        v-if="binding.Type === 'targets'"-->
  <!--        src="@/assets/target.svg"-->
  <!--        alt="target"-->
  <!--      />-->
  <!--    </v-list-item-avatar>-->
  <!--    <v-list-item-content>-->
  <!--      <h3 class="primary&#45;&#45;text">{{ modeTitle }} {{ binding.Title }}</h3>-->
  <!--    </v-list-item-content>-->
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
