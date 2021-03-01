<template>
  <v-col cols="12">
    <div class="d-flex warp">
      <div class="side pr-2">
        <v-card elevation="1" min-height="210px">
          <v-list-item>
            <v-list-item-avatar color="accent" size="30">
              <span class="white--text headline">{{
                binding.SourceSide.Initial
              }}</span></v-list-item-avatar
            >
            <h3>
              {{ binding.SourceSide.Title }}
            </h3>
          </v-list-item>
          <v-card-text>
            <v-form ref="formSource" v-model="binding.SourceSide.IsModelValid">
              <v-jsf
                v-model="binding.SourceSide.Model"
                :schema="binding.SourceSide.Schema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div class="side pl-2">
        <v-card elevation="1" min-height="210px">
          <v-list-item>
            <v-list-item-avatar color="accent" size="30">
              <span class="white--text headline">{{
                binding.TargetSide.Initial
              }}</span></v-list-item-avatar
            >
            <h3>
              {{ binding.TargetSide.Title }}
            </h3>
          </v-list-item>
          <v-card-text>
            <v-form ref="formTarget" v-model="binding.TargetSide.IsModelValid">
              <v-jsf
                v-model="binding.TargetSide.Model"
                :schema="binding.TargetSide.Schema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-col>
</template>
<script>
import VJsf from "@koumoul/vjsf/lib/VJsf";

export default {
  name: "Properties",
  components: { VJsf },
  props: {
    binding: {},
    options: {}
  }
};
</script>
<style scoped>
/*.container {*/
/*  border: 1px solid green;*/
/*}*/
/*.row {*/
/*  border: 1px solid red;*/
/*}*/
/*.col {*/
/*  border: 1px solid blue;*/
/*}*/
.side {
  flex-basis: 100%;
}
</style>
