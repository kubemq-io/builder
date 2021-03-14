<template>
  <v-container>
    <v-row justify="center" align="center" align-content="center">
      <v-col cols="6">
        <img src="@/assets/ship.svg" alt="ship" />
      </v-col>
      <v-col cols="6">
        <v-list elevation="1">
          <v-list-item
            v-for="item in menu"
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
        </v-list>
      </v-col>
    </v-row>
  </v-container>
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
        {
          title: "KubeMQ Bridges",
          subTitle: "Build KubeMQ Bridges",
          image: "/assets/images/bridges.svg",
          link: "/bridges"
        },
        {
          title: "KubeMQ Targets",
          subTitle: "Build KubeMQ Targets",
          image: "/assets/images/targets.svg",
          link: "/targets"
        },
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
