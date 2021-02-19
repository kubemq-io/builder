<template>
  <v-container>
    <ClusterGeneral />
  </v-container>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterGeneral from "@/components/cluster/GeneralForm";
import ClusterInterfaces from "@/components/cluster/InterfacesForm";
export default {
  name: "ClusterGeneralSection",
  components: { ClusterInterfaces, ClusterGeneral, VJsf },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
