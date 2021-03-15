<template>
  <v-card>
    <v-card-title>
      <h3 class="secondary--text pr-1">
        Deployment
      </h3>
    </v-card-title>
    <v-card-text>
      <v-form v-if="toShow" ref="form" v-model="cluster.deployment.isValid">
        <v-jsf
          @change="validateForm"
          v-model="cluster.deployment.model"
          :schema="cluster.deployment.schema"
          :options="cluster.deployment.options"
        />
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
export default {
  name: "ClusterDeploymentPanel",
  components: { VJsf },
  props: {
    cluster: {},
    show: Boolean
  },
  data: function() {
    return {};
  },
  computed: {
    isValid: function() {
      return this.cluster.deployment.isValid;
    },
    toShow: function() {
      return this.show;
    },
    getColor: function() {
      if (!this.isValid) {
        return "error";
      }
      if (this.hasContent) {
        return "secondary";
      }
      return "primary";
    }
  },

  methods: {
    validateForm() {
      this.$nextTick(() => {
        this.$refs.form.validate();
      });
    }
  }
};
</script>
