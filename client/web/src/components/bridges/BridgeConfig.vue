<template>
  <div>
    <BridgeForm v-if="selectedConfig.subType === 'bridge'"></BridgeForm>
    <ReplicateForm
      v-if="selectedConfig.subType === 'replicate'"
    ></ReplicateForm>
    <AggregateForm
      v-if="selectedConfig.subType === 'aggregate'"
    ></AggregateForm>
    <TransformForm
      v-if="selectedConfig.subType === 'transform'"
    ></TransformForm>
  </div>
</template>

<script>
import BridgeForm from "@/components/bridges/BridgeForm";
import ReplicateForm from "@/components/bridges/ReplicateForm";
import AggregateForm from "@/components/bridges/AggregateForm";
import TransformForm from "@/components/bridges/TransformForm";

export default {
  name: "BridgeConfig",
  components: { TransformForm, AggregateForm, ReplicateForm, BridgeForm },
  data: function() {
    return {
      valid: false
    };
  },
  computed: {
    selectedConfig: function() {
      return this.$store.state.stages.selectedConfig;
    }
  }
};
</script>

<style scoped></style>
