<template>
  <div
    class="d-flex flex-grow-1 justify-space-between align-center align-content-space-between"
  >
    <v-spacer></v-spacer>
    <div class="d-flex justify-end align-content-center align-center col-12">
      <v-spacer></v-spacer>
      <div class="col-5 pr-2">
        <v-img src="@/assets/ship.svg" alt="ship" />
      </div>
      <div class="col-6 pl-2">
        <v-list elevation="1" two-line>
          <template v-for="(item, index) in menu">
            <v-divider v-if="item.divider" inset :key="index"></v-divider>
            <v-list-item
              v-else
              :key="item.title"
              link
              :to="item.link"
              class="col-12"
            >
              <div class="col-1 pa-0">
                <v-avatar size="48">
                  <v-img :src="item.image" />
                </v-avatar>
              </div>
              <div class="col-10">
                <v-card-title class="pa-0 secondary--text">
                  {{ item.title }}
                </v-card-title>
                <v-list-item-subtitle class="secondary--text">
                  {{ item.subTitle }}
                </v-list-item-subtitle>
              </div>
              <div class="col-1  pa-0">
                <v-icon right big color="secondary">
                  fa-angle-right
                </v-icon>
              </div>
            </v-list-item>
          </template>
        </v-list>
      </div>
      <v-spacer></v-spacer>
    </div>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      menu: [
        {
          title: "KubeMQ Clusters",
          subTitle:
            "Build KubeMQ Clusters, Kubernetes Queue and Message Broker",
          image: "/assets/images/cluster.svg",
          link: "/clusters"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Bridges",
          subTitle:
            "Bridge, Transform, Replicate and Aggregate KubeMQ Clusters",
          image: "/assets/images/bridges.svg",
          link: "/bridges"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Targets",
          subTitle:
            "Connects and integrate KubeMQ Clusters to external services ",
          image: "/assets/images/targets.svg",
          link: "/targets"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Sources",
          subTitle: "Ingests and Connect external services to KubeMQ Clusters ",
          image: "/assets/images/sources.svg",
          link: "/sources"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
