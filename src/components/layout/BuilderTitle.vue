<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-column">
      <div class="d-flex pb-2 align-content-center align-center justify-center">
        <div v-show="showBack" class="pr-1">
          <v-btn color="secondary" text @click="$emit('back')">
            <v-icon size="30">fa-arrow-left</v-icon>
          </v-btn>
        </div>
        <div>
          <h2 class="secondary--text text-uppercase">{{ title }}</h2>
        </div>
        <v-spacer></v-spacer>
        <div v-show="showSave">
          <v-btn
            text
            @click="$emit('save')"
            :disabled="disableSave"
            color="secondary"
          >
            <h2>SAVE</h2>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center align-start">
      <div class="flex-grow-1">
        <v-divider class="secondary lighten-5"></v-divider>
      </div>
      <div v-show="showAdd" class="mt-n4 pr-2">
        <v-fab-transition>
          <v-btn color="primary" fab large @click="$emit('add')">
            <v-icon>fa-plus</v-icon>
          </v-btn>
        </v-fab-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuilderTitle",
  props: {
    title: String,
    showAdd: Boolean,
    showBack: Boolean,
    showSave: Boolean,
    disableSave: Boolean
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
</style>
