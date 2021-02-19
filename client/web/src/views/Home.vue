<template>
  <Stages />
</template>

<script>
import Stages from "@/views/Stages";
export default {
  name: "Home",
  components: { Stages },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
