<template>
  <!--  <Stages />-->
  <!--  <Integrations />-->
  <div>
    <Schema />
    <AggregateForm></AggregateForm>
  </div>
</template>

<script>
import Schema from "@/views/Schema";
import AggregateForm from "@/components/bridges/AggregateForm";
export default {
  name: "Home",
  components: { AggregateForm, Schema },
  data: function() {
    return {
      valid: false
    };
  },
  methods: {}
};
</script>
