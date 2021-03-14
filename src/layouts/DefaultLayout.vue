<template>
  <v-main class="secondary lighten-5">
    <v-toolbar color="primary" extended></v-toolbar>
    <v-container class="px-0">
      <v-card
        style="margin-top: -102px;"
        rounded
        min-height="90vh"
        class="d-flex flex-column justify-space-between align-stretch align-content-space-around"
      >
        <div class="d-flex justify-start align-end align-content-end pt-2 pl-2">
          <v-avatar size="65">
            <img src="@/assets/logo.svg" alt="logo" />
          </v-avatar>
          <h1 class="primary--text pl-2">KubeMQ Build & Deploy</h1>
        </div>
        <router-view :key="$route.fullPath"> </router-view>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style scoped></style>
