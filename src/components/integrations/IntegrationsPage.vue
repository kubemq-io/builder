<template>
  <v-card flat>
    <v-card-title>
      <span class="primary--text text-h5 text-capitalize font-weight-bold">
        KubeMQ {{ type }}
      </span>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col class="py-1">
          <v-card flat tile>
            <v-card-title>
              <span class="secondary--text font-weight-bold pr-1">
                Deployment
              </span>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="4" class="py-1">
                  <v-text-field
                    v-model="deploymentName"
                    label="Name"
                    :rules="rules"
                    hide-details="auto"
                    color="secondary"
                    ref="deploymentName"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="py-1">
                  <v-text-field
                    label="Namespace"
                    v-model="deploymentNamespace"
                    :rules="rules"
                    hide-details="auto"
                    color="secondary"
                    ref="deploymentNamespace"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-1">
          <v-card flat tile>
            <v-card-title
              class="pa-0 pb-1 d-flex justify-center align-center align-content-center"
            >
              <div class="pa-0 pl-2 pr-2">
                <span
                  class="secondary--text text-h6 font-weight-bold text-capitalize"
                >
                  {{ type }}
                </span>
              </div>
              <div class=" flex-grow-1">
                <IntegrationSearch :type="type" />
              </div>
            </v-card-title>
            <v-card-text>
              <v-divider v-show="hasIntegration" inset></v-divider>
              <IntegrationList :type="type"></IntegrationList>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-show="!hasIntegration" class="py-1">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row no-gutters justify="end" align-content="center" align="center">
        <div>
          <v-btn
            :disabled="!hasIntegration"
            rounded
            text
            color="secondary"
            @click.stop="clearAll()"
          >
            <v-icon left small>
              fa-trash-alt
            </v-icon>
            Clear All</v-btn
          >
        </div>
        <div>
          <v-btn
            :disabled="!hasIntegration"
            rounded
            outlined
            color="primary"
            @click="deploy"
          >
            <v-icon left small>
              fa-download
            </v-icon>
            Deploy</v-btn
          >
        </div>
        <ConfirmDlg ref="confirm"></ConfirmDlg>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import IntegrationSearch from "@/components/integrations/IntegrationSearch";
import IntegrationList from "@/components/integrations/IntgerationsList";

export default {
  name: "IntegrationsPage",
  components: {
    IntegrationList,
    IntegrationSearch,
    ConfirmDlg
  },
  props: {
    type: String
  },
  data() {
    return {
      deploymentName: `kubemq-${this.type}`,
      deploymentNamespace: "kubemq",
      rules: [value => !!value || "Required"]
    };
  },
  created() {
    this.loadIntegrations();
  },
  computed: {
    sources: function() {
      return this.$store.state.integrations.sources;
    },
    targets: function() {
      return this.$store.state.integrations.targets;
    },
    hasIntegration: function() {
      return this.sources.length > 0 || this.targets.length > 0;
    }
  },
  methods: {
    ...mapActions(["loadIntegrations"]),
    ...mapMutations(["clearIntegrationsList"]),
    async clearAll() {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete all integration?"
        )
      ) {
        this.clearIntegrationsList();
      }
    },
    deploy: function() {
      this.sources.forEach(value => console.log(value.GetConfiguration()));
      this.targets.forEach(value => console.log(value.GetConfiguration()));
    }
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
</style>
