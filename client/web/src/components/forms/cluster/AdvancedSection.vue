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
import ClusterVolume from "@/components/forms/cluster/VolumeForm";
import ClusterImage from "@/components/forms/cluster/ImageForm";
import ClusterHealth from "@/components/forms/cluster/HealthForm";
import ClusterResource from "@/components/forms/cluster/ResourceForm";
import ClusterNode from "@/components/forms/cluster/NodesForm";
import ClusterInterfaces from "@/components/forms/cluster/InterfacesForm";
import ClusterStore from "@/components/forms/cluster/StoreForm";
import ClusterQueue from "@/components/forms/cluster/QueueForm";
import ClusterRouting from "@/components/forms/cluster/RoutingForm";
import ClusterTlsForm from "@/components/forms/cluster/TLSForm";
import ClusterAuthentication from "@/components/forms/cluster/AuthenticationForm";
import ClusterAuthorization from "@/components/forms/cluster/AuthorizationForm";

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
