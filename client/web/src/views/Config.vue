<template>
  <div class="mb-7">
    <ClusterConfig v-if="currentSelectedConfig === 'cluster'"></ClusterConfig>
    <BridgesConfig v-if="currentSelectedConfig === 'bridges'"></BridgesConfig>
    <TargetsConfig v-if="currentSelectedConfig === 'targets'"></TargetsConfig>
    <SourcesConfig v-if="currentSelectedConfig === 'sources'"></SourcesConfig>
  </div>
</template>

<script>
import ClusterConfig from "@/components/cluster/ClusterConfig";
import BridgesConfig from "@/components/bridges/BridgesConfig";
import TargetsConfig from "@/components/targets/TargetsConfig";
import SourcesConfig from "@/components/sources/SourcesConfig";
export default {
  name: "Config",
  components: {
    SourcesConfig,
    TargetsConfig,
    BridgesConfig,
    ClusterConfig
  },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {},
  computed: {
    currentSelectedConfig: function() {
      return this.$store.state.stages.selectedConfig;
    }
  }
};
</script>

<style scoped></style>
