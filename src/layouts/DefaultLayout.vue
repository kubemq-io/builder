<template>
  <v-main class="secondary lighten-5">
    <v-snackbar
      v-model="toast.show"
      :timeout="toast.timeout"
      :color="toast.color"
      bottom
    >
      {{ toast.message }}
      <v-btn
        v-if="toast.timeout === 0"
        color="white"
        text
        @click="toast.show = false"
        >Close</v-btn
      >
    </v-snackbar>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>fa-arrow-up</v-icon>
    </v-btn>
    <v-toolbar color="primary" extended></v-toolbar>
    <v-col class="px-4">
      <v-card
        style="margin-top: -102px;"
        rounded
        min-height="90vh"
        class="container d-flex flex-column justify-space-between align-stretch align-content-space-around pt-0 pl-0"
      >
        <v-card-text>
          <div class="d-flex justify-start align-end align-content-end">
            <v-avatar size="65">
              <v-img src="@/assets/logo.svg" alt="logo" />
            </v-avatar>
            <h1 class="primary--text pl-2">KubeMQ Build & Deploy</h1>
          </div>
        </v-card-text>
        <router-view :key="$route.fullPath"> </router-view>
      </v-card>
    </v-col>
  </v-main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  data: function() {
    return {
      fab: false
    };
  },
  computed: {
    ...mapState(["toast"])
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped></style>
