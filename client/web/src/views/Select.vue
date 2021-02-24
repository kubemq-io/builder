<template>
  <div class="mb-7">
    <ClusterConfig
      v-if="currentSelectedConfig.type === 'cluster'"
    ></ClusterConfig>
    <BridgesSelect
      v-if="currentSelectedConfig.type === 'bridges'"
    ></BridgesSelect>
    <TargetsConfig
      v-if="currentSelectedConfig.type === 'targets'"
    ></TargetsConfig>
    <SourcesConfig
      v-if="currentSelectedConfig.type === 'sources'"
    ></SourcesConfig>
  </div>
</template>

<script>
import ClusterConfig from "@/components/cluster/ClusterConfig";
import BridgesSelect from "@/components/bridges/BridgesSelect";
import TargetsConfig from "@/components/targets/TargetsConfig";
import SourcesConfig from "@/components/sources/SourcesConfig";
export default {
  name: "Select",
  components: {
    SourcesConfig,
    TargetsConfig,
    BridgesSelect,
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
