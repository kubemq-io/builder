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
    <v-toolbar color="primary" extended></v-toolbar>
    <v-col class="px-4">
      <v-card
        style="margin-top: -102px;"
        rounded
        min-height="90vh"
        class="d-flex flex-column justify-space-between align-stretch align-content-space-around"
      >
        <v-card-text>
          <div
            class="d-flex justify-start align-end align-content-end pt-2 pl-2"
          >
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
    return {};
  },
  computed: {
    ...mapState(["toast"])
  }
};
</script>

<style scoped></style>
