<template>
  <v-card class="container">
    <ClusterGeneral />
  </v-card>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterGeneral from "@/archive/cluster/old/GeneralForm";

export default {
  name: "ClusterGeneralSection",
  components: { ClusterGeneral },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
