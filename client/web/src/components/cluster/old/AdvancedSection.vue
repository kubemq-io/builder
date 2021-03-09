<template>
  <div>
    <v-card flat tile>
      <v-expansion-panels accordion flat tile>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h5 class="primary--text">Deployment</h5>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex">
              <div class="col-4">
                <ClusterInterfaces />
              </div>
              <div class="col-4">
                <ClusterVolume />
              </div>
              <v-card class=" col-4">
                <ClusterImage />
              </v-card>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header color="secondary">
            <h5 class="white--text">Access and Security</h5>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card-text class="d-flex justify-space-between">
              <v-card class="col-4">
                <ClusterAuthentication />
              </v-card>
              <v-card class="col-4">
                <ClusterAuthorization />
              </v-card>
              <v-card class="col-4">
                <ClusterTlsForm />
              </v-card>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-card flat class="d-flex flex-column">
      <v-card-title>
        <v-subheader>
          <h5 class="primary--text">Resources and Health</h5>
        </v-subheader>
      </v-card-title>
      <v-card-text class="d-flex justify-space-between">
        <v-card class="col-4">
          <ClusterHealth />
        </v-card>
        <v-card class="col-4">
          <ClusterResource />
        </v-card>
        <v-card class="col-4">
          <ClusterNode />
        </v-card>
      </v-card-text>
    </v-card>
    <v-card flat class="d-flex flex-column">
      <v-card-title>
        <v-subheader>
          <h5 class="primary--text">Queue Store and Routing</h5>
        </v-subheader>
      </v-card-title>
      <v-card-text class="d-flex justify-space-between">
        <v-card class="col-4">
          <ClusterStore />
        </v-card>
        <v-card class="col-4">
          <ClusterQueue />
        </v-card>
        <v-card class="col-4">
          <ClusterRouting />
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterVolume from "@/components/cluster/old/VolumeForm";
import ClusterImage from "@/components/cluster/old/ImageForm";
import ClusterHealth from "@/components/cluster/old/HealthForm";
import ClusterResource from "@/components/cluster/old/ResourceForm";
import ClusterNode from "@/components/cluster/old/NodesForm";
import ClusterInterfaces from "@/components/cluster/old/InterfacesForm";
import ClusterStore from "@/components/cluster/old/StoreForm";
import ClusterQueue from "@/components/cluster/old/QueueForm";
import ClusterRouting from "@/components/cluster/old/RoutingForm";
import ClusterTlsForm from "@/components/cluster/old/TLSForm";
import ClusterAuthentication from "@/components/cluster/old/AuthenticationForm";
import ClusterAuthorization from "@/components/cluster/old/AuthorizationForm";

export default {
  name: "ClusterAdvancedSection",
  components: {
    ClusterAuthorization,
    ClusterAuthentication,
    ClusterTlsForm,
    ClusterRouting,
    ClusterQueue,
    ClusterStore,
    ClusterInterfaces,
    ClusterNode,
    ClusterResource,
    ClusterHealth,
    ClusterImage,
    ClusterVolume
  },
  data: () => ({}),

  methods: {
    addItem(item) {
      const removed = this.items.splice(0, 1);
      this.items.push(...this.more.splice(this.more.indexOf(item), 1));
      this.more.push(...removed);
      this.$nextTick(() => {
        this.currentItem = "tab-" + item;
      });
    }
  }
};
</script>

<style scoped></style>
