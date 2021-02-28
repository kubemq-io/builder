<template>
  <div>
    <div class="container d-flex text-input">
      <v-text-field
        class="text-input"
        dense
        label="Integration Name"
        hide-details="auto"
        placeholder="Set integration name"
      ></v-text-field>
    </div>
    <div
      class="container d-flex justify-center align-center align-content-center"
    >
      <div class="card">
        <v-card elevation="1">
          <v-list-item>
            <v-list-item-avatar color="secondary" size="36">
              <span class="white--text headline">S</span></v-list-item-avatar
            >
            <v-list-item-title class="title">{{
              binding.content.sourceTitle
            }}</v-list-item-title>
          </v-list-item>
          <v-card-text>
            <v-form ref="formSource" v-model="binding.content.sourceValid">
              <v-jsf
                v-model="binding.content.sourceModel.properties"
                :schema="binding.content.sourceSchema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div class="icon">
        <v-list-item-avatar>
          <img
            v-if="binding.content.iconType === 'source'"
            src="@/assets/source.svg"
            alt="source"
          />
          <img
            v-if="binding.content.iconType === 'target'"
            src="@/assets/target.svg"
            alt="target"
          />
        </v-list-item-avatar>
      </div>
      <div class="card">
        <v-card elevation="1">
          <v-list-item>
            <v-list-item-avatar color="accent" size="36">
              <span class="white--text headline">T</span></v-list-item-avatar
            >
            <v-list-item-title class="title">{{
              binding.content.targetTitle
            }}</v-list-item-title>
          </v-list-item>
          <v-card-text>
            <v-form
              ref="formBridgeTarget"
              v-model="binding.content.targetValid"
            >
              <v-jsf
                v-model="binding.content.targetModel.properties"
                :schema="binding.content.targetSchema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="container d-flex justify-space-between">
      <div>
        <v-btn color="primary">Back</v-btn>
      </div>
      <div>
        <v-btn color="primary">Deploy</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { IntegrationBinding } from "@/components/integrations/binding/binding";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import VJsf from "@koumoul/vjsf/lib/VJsf";
export default {
  name: "IntegrationBindingContent",
  components: { VJsf },
  props: {
    binding: IntegrationBinding,
    options: {}
  }
};
</script>

<style scoped>
.container {
  padding: 4px 4px 4px 4px;
}
.text-input {
  flex-basis: 20%;
}
.card {
  flex-basis: 95%;
}
.icon {
  flex-basis: 10%;
  margin: 10px;
}
</style>
