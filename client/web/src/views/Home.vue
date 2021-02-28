<template>
  <!--  <Stages />-->

  <div>
    <!--    <Schema />-->
    <!--    <AggregateForm></AggregateForm>-->
    <!--    <Integrations />-->
    <Binding />
  </div>
</template>

<script>
import Binding from "@/components/binding/Binding";
export default {
  name: "Home",
  components: { Binding },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
