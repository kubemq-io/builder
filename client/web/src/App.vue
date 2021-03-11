<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="px-0 py-0 fill-height">
        <v-avatar class="pl-0" color="secondary" size="32"></v-avatar>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="secondary lighten-5">
      <v-container class="px-0 pt-2">
        <v-row>
          <v-col cols="2" class="pl-0 pr-0">
            <v-card>
              <v-list color="transparent">
                <v-list-item
                  v-for="item in menu"
                  :key="item.label"
                  link
                  :to="item.link"
                >
                  <v-list-item-avatar color="secondary" size="32">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="secondary--text">
                      {{ item.label }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col>
            <v-sheet min-height="80vh" rounded>
              <router-view :key="$route.path"></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    menu: [
      {
        label: "Clusters",
        icon: "bx bxs-inbox",
        link: "/clusters"
      },
      {
        label: "Bridges",
        icon: "bx-send",
        link: "/bridges"
      },
      {
        label: "Targets",
        icon: "mdi-pencil-outline",
        link: "/targets"
      },
      {
        label: "Sources",
        icon: "mdi-star-outline",
        link: "/sources"
      }
    ]
  })
};
</script>
