<template>
  <div
    class="d-flex flex-grow-1 justify-space-between align-center align-content-space-between"
  >
    <div class="d-flex justify-end align-content-center align-center col-12">
      <div class="col-5">
        <v-img
          max-height="550px"
          max-width="550px"
          src="@/assets/ship.svg"
          alt="ship"
        />
      </div>
      <div class="col-5 pr-15">
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
    </div>
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
          subTitle: "Build KubeMQ Clusters",
          image: "/assets/images/cluster.svg",
          link: "/clusters"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Bridges",
          subTitle: "Build KubeMQ Bridges",
          image: "/assets/images/bridges.svg",
          link: "/bridges"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Targets",
          subTitle: "Build KubeMQ Targets",
          image: "/assets/images/targets.svg",
          link: "/targets"
        },
        { divider: true, inset: true },
        {
          title: "KubeMQ Sources",
          subTitle: "Build KubeMQ Sources",
          image: "/assets/images/sources.svg",
          link: "/sources"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
