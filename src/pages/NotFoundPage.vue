<template>
  <div
    class="px-4 pb-4 d-flex flex-grow-1 flex-column justify-start align-start align-content-space-between"
  >
    <div class="col-12 pb-0">
      <v-card flat class="text-center w-full error-page pa-3">
        <v-img
          src="/assets/images/404-illustration.svg"
          max-height="400"
          contain
        />
        <div class="display-2 mt-10">How did you get here?</div>
        <div class="mt-3 mb-6">
          Sorry we can't seem to find the page you're looking for.
        </div>
        <v-btn to="/" block large color="primary">Send me Home</v-btn>
      </v-card>
    </div>
  </div>
</template>
<script></script>
<style>
.error-page {
  max-width: 500px;
}
</style>
