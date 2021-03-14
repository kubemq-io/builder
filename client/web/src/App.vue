<template>
  <v-app id="inspire">
    <default-layout></default-layout>
    <!--    &lt;!&ndash;    <v-app-bar app color="white" flat>&ndash;&gt;-->
    <!--    &lt;!&ndash;      <v-container class="px-0 py-0 fill-height">&ndash;&gt;-->
    <!--        <v-avatar class="pl-0" color="secondary" size="32"></v-avatar>-->
    <!--    &lt;!&ndash;        <v-spacer></v-spacer>&ndash;&gt;-->
    <!--    &lt;!&ndash;      </v-container>&ndash;&gt;-->
    <!--    &lt;!&ndash;    </v-app-bar>&ndash;&gt;-->

    <!--    <v-main class="secondary lighten-5">-->
    <!--      <v-container class="px-0 pt-2">-->
    <!--        <v-row>-->
    <!--          &lt;!&ndash;          <v-col cols="2" class="pl-0 pr-0">&ndash;&gt;-->
    <!--          &lt;!&ndash;            <v-card>&ndash;&gt;-->
    <!--          &lt;!&ndash;              <v-list color="transparent">&ndash;&gt;-->
    <!--          &lt;!&ndash;                <v-list-item&ndash;&gt;-->
    <!--          &lt;!&ndash;                  v-for="item in menu"&ndash;&gt;-->
    <!--          &lt;!&ndash;                  :key="item.label"&ndash;&gt;-->
    <!--          &lt;!&ndash;                  link&ndash;&gt;-->
    <!--          &lt;!&ndash;                  :to="item.link"&ndash;&gt;-->
    <!--          &lt;!&ndash;                >&ndash;&gt;-->
    <!--          &lt;!&ndash;                  <v-list-item-avatar color="secondary" size="32">&ndash;&gt;-->
    <!--          &lt;!&ndash;                  </v-list-item-avatar>&ndash;&gt;-->
    <!--          &lt;!&ndash;                  <v-list-item-content>&ndash;&gt;-->
    <!--          &lt;!&ndash;                    <v-list-item-title class="secondary&#45;&#45;text">&ndash;&gt;-->
    <!--          &lt;!&ndash;                      {{ item.label }}&ndash;&gt;-->
    <!--          &lt;!&ndash;                    </v-list-item-title>&ndash;&gt;-->
    <!--          &lt;!&ndash;                  </v-list-item-content>&ndash;&gt;-->
    <!--          &lt;!&ndash;                </v-list-item>&ndash;&gt;-->
    <!--          &lt;!&ndash;              </v-list>&ndash;&gt;-->
    <!--          &lt;!&ndash;            </v-card>&ndash;&gt;-->
    <!--          &lt;!&ndash;          </v-col>&ndash;&gt;-->

    <!--          <v-col>-->
    <!--            <v-sheet rounded>-->
    <!--              <router-view :key="$route.fullPath"> </router-view>-->
    <!--            </v-sheet>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </v-container>-->
    <!--    </v-main>-->
  </v-app>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  components: { DefaultLayout },
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
