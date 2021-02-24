<template>
  <v-card class="mb-2 my-auto" elevation="0" outlined>
    <v-toolbar color="light-green mb-2" dark>
      <v-toolbar-title>Select KubeMQ Component</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list two-line subheader>
      <v-list-item @click="selectComponent('cluster')">
        <v-list-item-avatar size="50">
          <img src="@/assets/kubemq.svg" alt="kubemq" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>KubeMQ Cluster</v-list-item-title>
          <v-list-item-subtitle
            >Message Queue Broker for Cloud Native/Edge
            Applications</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="selectComponent('bridges')">
        <v-list-item-avatar>
          <img src="@/assets/replicate.svg" alt="bridge" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>KubeMQ Bridges</v-list-item-title>
          <v-list-item-subtitle
            >Bridge, Replicate, Aggregate, and Transform messages between KubeMQ
            Clusters</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="selectComponent('targets')">
        <v-list-item-avatar size="50">
          <img src="@/assets/targets.svg" alt="targets" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>KubeMQ Targets</v-list-item-title>
          <v-list-item-subtitle
            >Connects KubeMQ Server with External Systems and Cloud
            Services</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="selectComponent('sources')">
        <v-list-item-avatar>
          <img src="@/assets/transform.svg" alt="bridge" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>KubeMQ Sources</v-list-item-title>
          <v-list-item-subtitle
            >Connects External Systems and Cloud Services with KubeMQ
            Server</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Start",
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    ...mapMutations(["setStage", "setSelectedConfig"]),
    selectComponent: function(component) {
      this.setSelectedConfig({
        type: component
      });
      this.setStage(2);
    }
  }
};
</script>

<style scoped></style>
