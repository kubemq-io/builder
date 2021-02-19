<template>
  <v-container>
    <ClusterInterfaces />
    <ClusterImage />
    <ClusterVolume />
    <ClusterTlsForm />
    <ClusterAuthentication />
    <ClusterAuthorization />
    <ClusterHealth />
    <ClusterResource />
    <ClusterNode />
    <ClusterStore />
    <ClusterQueue />
    <ClusterRouting />
  </v-container>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import ClusterVolume from "@/components/cluster/VolumeForm";
import ClusterImage from "@/components/cluster/ImageForm";
import ClusterHealth from "@/components/cluster/HealthForm";
import ClusterResource from "@/components/cluster/ResourceForm";
import ClusterNode from "@/components/cluster/NodesForm";
import ClusterInterfaces from "@/components/cluster/InterfacesForm";
import ClusterStore from "@/components/cluster/StoreForm";
import ClusterQueue from "@/components/cluster/QueueForm";
import ClusterRouting from "@/components/cluster/RoutingForm";
import ClusterTlsForm from "@/components/cluster/TLSForm";
import ClusterAuthentication from "@/components/cluster/AuthenticationForm";
import ClusterAuthorization from "@/components/cluster/AuthorizationForm";

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
    ClusterVolume,
    VJsf
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
