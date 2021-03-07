<template>
  <div>
    <v-row class="d-flex" dense>
      <v-col cols="4">
        <v-card>
          <v-list-item class="pa-0">
            <v-list-item-avatar color="primary" size="30">
              <span class="white--text headline">L</span></v-list-item-avatar
            >
            <h3 class="secondary--text">
              Logging
            </h3>
          </v-list-item>
          <v-card-text>
            <v-form
              v-if="toShow"
              ref="formMiddlewaresLogging"
              v-model="logging.IsValid"
            >
              <v-jsf :value="logging.Model" :schema="logging.Schema" />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-list-item class="pa-0">
            <v-list-item-avatar color="primary" size="30">
              <span class="white--text headline">R</span></v-list-item-avatar
            >
            <h3 class="secondary--text">
              Retries
            </h3>
          </v-list-item>
          <v-card-text>
            <v-form
              v-if="toShow"
              ref="formMiddlewaresRetries"
              v-model="retries.IsValid"
            >
              <v-jsf :value="retries.Model" :schema="retries.Schema" />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-list-item class="pa-0">
            <v-list-item-avatar color="primary" size="30">
              <span class="white--text headline">R</span></v-list-item-avatar
            >
            <h3 class="secondary--text">
              Rate Limiter
            </h3>
          </v-list-item>
          <v-card-text>
            <v-form
              v-if="toShow"
              ref="formMiddlewaresRate"
              v-model="rate.IsValid"
            >
              <v-jsf :value="rate.Model" :schema="rate.Schema" />
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";
import VJsf from "@koumoul/vjsf/lib/VJsf";
import { MiddlewaresConfig } from "@/components/integrations/middlewaresConfig";
export default {
  name: "Middlewares",
  components: { VJsf },
  props: {
    config: MiddlewaresConfig,
    show: Boolean
  },
  data: function() {
    return {
      options: {
        initialValidation: "all"
      }
    };
  },
  computed: {
    rate: function() {
      return this.config.Rate;
    },
    logging: function() {
      return this.config.Logging;
    },
    retries: function() {
      return this.config.Retries;
    },
    toShow: function() {
      return this.show;
    }
  }
};
</script>

<style scoped></style>
