<template>
  <v-card>
    <v-card-title class="row-pointer pa-1 pl-2">
      <h3 :class="`${getColor}--text pr-1`">
        Advanced
      </h3>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center align-center align-content-center">
        <div class="pr-2">
          <v-icon v-if="!isValid" color="error">
            fa-exclamation-circle
          </v-icon>
        </div>
        <div class="pr-1">
          <v-icon v-if="hasEdits" :color="getColor">
            fa-edit
          </v-icon>
        </div>
        <div class="pr-2">
          <v-btn icon @click.stop="$emit('clear')">
            <v-icon v-if="hasEdits" :color="getColor">
              fa-trash-alt
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-card-title>
    <v-card-text v-show="showAdvanced">
      <v-expansion-panels flat>
        <ClusterInterfacesSecurityPanel :cluster="cluster" :show="toShow" />
        <ClusterAccessControlRoutingPanel :cluster="cluster" :show="toShow" />
        <ClusterImageVolumePanel :cluster="cluster" :show="toShow" />
        <ClusterHealthResourcesNodesPanel :cluster="cluster" :show="toShow" />
        <ClusterStoreQueuesPanel :cluster="cluster" :show="toShow" />
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>
<script>
import ClusterInterfacesSecurityPanel from "@/components/cluster/panels/ClusterInterfacesSecurityPanel";
import ClusterAccessControlRoutingPanel from "@/components/cluster/panels/ClusterAccessControlRoutingPanel";
import ClusterImageVolumePanel from "@/components/cluster/panels/ClusterImageVolumePanel";
import ClusterHealthResourcesNodesPanel from "@/components/cluster/panels/ClusterHealthResourceNodesPanel";
import ClusterStoreQueuesPanel from "@/components/cluster/panels/ClusterStoreQueuesPanel";
export default {
  name: "ClusterAdvancedPanel",
  components: {
    ClusterStoreQueuesPanel,
    ClusterHealthResourcesNodesPanel,
    ClusterImageVolumePanel,
    ClusterAccessControlRoutingPanel,
    ClusterInterfacesSecurityPanel
  },
  props: {
    cluster: {},
    show: Boolean
  },
  data: function() {
    return {
      showAdvanced: true
    };
  },
  computed: {
    isValid: function() {
      if (this.cluster) {
        return this.cluster.configAdvanceIsValid();
      }
      return true;
    },
    hasEdits: function() {
      if (this.cluster) {
        return this.cluster.hasEdits();
      }
      return true;
    },
    toShow: function() {
      return this.show;
    },
    getColor: function() {
      if (!this.isValid) {
        return "error";
      }
      if (this.hasEdits) {
        return "primary";
      }
      return "secondary";
    }
  },

  methods: {
    validateForm() {
      this.$nextTick(() => {
        this.$refs.form.validate();
      });
    },

    toggleShowAdvanced() {
      this.showAdvanced = !this.showAdvanced;
    }
  }
};
</script>
<style scoped></style>
