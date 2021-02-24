<template>
  <v-card class="my-auto">
    <v-toolbar color="light-green mb-7" dark>
      <v-toolbar-title>Configure KubeMQ Bridges</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <v-container>
        <v-list one-line subheader>
          <v-list-item @click="selectSubComponent('bridge')">
            <v-list-item-avatar>
              <img src="@/assets/bridge.svg" alt="bridges" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Bridge</v-list-item-title>
              <v-list-item-subtitle
                >One to One Connection between two KubeMQ</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-list one-line subheader>
          <v-list-item @click="selectSubComponent('replicate')">
            <v-list-item-avatar>
              <img src="@/assets/replicate.svg" alt="replicate" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Replicate</v-list-item-title>
              <v-list-item-subtitle
                >Copy One Source Connection to Many Targets
                Connections</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-list one-line>
          <v-list-item @click="selectSubComponent('aggregate')">
            <v-list-item-avatar>
              <img src="@/assets/aggregate.svg" alt="aggregate" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Aggregate</v-list-item-title>
              <v-list-item-subtitle
                >Combine Many Sources to One Target
                Connection</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-list one-line>
          <v-list-item @click="selectSubComponent('transform')">
            <v-list-item-avatar>
              <img src="@/assets/transform.svg" alt="transform" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Transform</v-list-item-title>
              <v-list-item-subtitle
                >Combine and Copy Many Sources to Many Targets
                Connections</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-container>
    </v-row>
    <v-row justify="space-between">
      <div class="mb-4 ml-4">
        <v-btn color="gray" outlined @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BridgesSelect",
  components: {},
  data: function() {
    return {
      valid: false
    };
  },
  methods: {
    ...mapMutations(["setStage", "setSelectedConfig"]),
    selectSubComponent: function(component) {
      this.setSelectedConfig({
        type: "bridges",
        subType: component
      });
      this.setStage(3);
    },
    back: function() {
      this.setStage(1);
    }
  }
};
</script>

<style scoped></style>
