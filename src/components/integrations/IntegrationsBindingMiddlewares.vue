<template>
  <div>
    <v-row class="d-flex" dense>
      <v-col cols="4">
        <v-card>
          <v-card-title class="pa-0 pb-2">
            <v-list-item-avatar>
              <v-avatar :color="getColorLogging" size="30">
                <span class="white--text body-1">L</span>
              </v-avatar>
            </v-list-item-avatar>
            <h4 :class="`${getColorLogging}--text`">
              Logging
            </h4>
          </v-card-title>
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
          <v-card-title class="pa-0 pb-2">
            <v-list-item-avatar>
              <v-avatar :color="getColorRetries" size="30">
                <span class="white--text body-1">R</span>
              </v-avatar>
            </v-list-item-avatar>
            <h4 :class="`${getColorRetries}--text`">
              Retries
            </h4>
          </v-card-title>
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
          <v-card-title class="pa-0 pb-2">
            <v-list-item-avatar>
              <v-avatar :color="getColorRate" size="30">
                <span class="white--text body-1">R</span>
              </v-avatar>
            </v-list-item-avatar>
            <h4 :class="`${getColorRate}--text`">
              Rate Limiter
            </h4>
          </v-card-title>
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
import { IntegrationsBindingMiddlewares } from "@/components/integrations/Integrations";
export default {
  name: "Middlewares",
  components: { VJsf },
  props: {
    config: IntegrationsBindingMiddlewares,
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
    },
    getColorLogging: function() {
      if (this.logging.HasData()) {
        return "primary";
      }
      return "secondary";
    },
    getColorRetries: function() {
      if (this.retries.HasData()) {
        return "primary";
      }
      return "secondary";
    },
    getColorRate: function() {
      if (this.rate.HasData()) {
        return "primary";
      }
      return "secondary";
    }
  }
};
</script>

<style scoped></style>
