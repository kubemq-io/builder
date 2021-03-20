<template>
  <div>
    <div class="d-flex justify-center align-content-center align-center pb-2">
      <v-btn-toggle v-model="toggleMode">
        <v-btn @click="switchMode('bridge')">
          <v-list-item-avatar size="30">
            <v-img src="/assets/images/bridge.svg" />
          </v-list-item-avatar>
          <span>BRIDGE</span>
        </v-btn>

        <v-btn @click="switchMode('replicate')">
          <v-list-item-avatar size="30">
            <v-img src="/assets/images/replicate.svg" />
          </v-list-item-avatar>
          <span>REPLICATE</span>
        </v-btn>

        <v-btn @click="switchMode('aggregate')">
          <v-list-item-avatar size="30">
            <v-img src="/assets/images/aggregate.svg" />
          </v-list-item-avatar>
          <span>AGGREGATE</span>
        </v-btn>

        <v-btn @click="switchMode('transform')">
          <v-list-item-avatar size="30">
            <v-img src="/assets/images/transform.svg" />
          </v-list-item-avatar>
          <span>TRANSFORM</span>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="d-flex justify-center align-content-center align-center">
      <div class="side">
        <v-card class="pa-0 ">
          <v-card-title class="pa-0">
            <v-list-item-avatar>
              <v-avatar color="secondary" size="30">
                <span class="white--text body-1">S</span>
              </v-avatar>
            </v-list-item-avatar>
            <h4 class="secondary--text">
              Bridge Sources
            </h4>
          </v-card-title>
          <v-card-text>
            <v-form
              v-if="toShow"
              ref="formSource"
              v-model="source.IsModelValid"
            >
              <v-jsf
                v-model="source.Model"
                :schema="source.Schema"
                :options="options"
              />
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div class="pl-3 flex-grow-1">
        <v-list-item-avatar color="primary" size="30">
          <v-img :src="getBindingType" />
        </v-list-item-avatar>
      </div>
      <div class="side">
        <v-card class="pa-0">
          <v-card-title class="pa-0">
            <v-list-item-avatar>
              <v-avatar color="secondary" size="30">
                <span class="white--text body-1">T</span>
              </v-avatar>
            </v-list-item-avatar>
            <h4 class="secondary--text">
              Bridge Targets
            </h4>
          </v-card-title>
          <v-card-text>
            <v-form
              v-if="toShow"
              ref="formTarget"
              v-model="target.IsModelValid"
            >
              <v-jsf
                v-model="target.Model"
                :schema="target.Schema"
                :options="options"
              ></v-jsf>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import VJsf from "@koumoul/vjsf/lib/VJsf";

export default {
  name: "BridgesBindingProperties",
  components: { VJsf },
  props: {
    binding: {},
    show: Boolean
  },
  data: function() {
    return {
      toggleMode: 0,
      showLocal: true,
      currentMode: "",
      options: {
        initialValidation: "all",
        checkboxProps: {
          dense: true
        },
        rules: {
          validateConnections: function(array) {
            if (array.length === 0) {
              return "At least one connection must be defined";
            } else {
              return true;
            }
          }
        }
      }
    };
  },
  mounted() {
    switch (this.binding.SourceSide.mode) {
      case "bridge":
        this.toggleMode = 0;
        this.currentMode = "bridge";
        break;
      case "replicate":
        this.toggleMode = 1;
        this.currentMode = "replicate";

        break;
      case "aggregate":
        this.toggleMode = 2;
        this.currentMode = "aggregate";
        break;

      case "transform":
        this.toggleMode = 3;
        this.currentMode = "transform";
        break;
    }
  },
  watch: {},
  computed: {
    target: function() {
      return this.binding.TargetSide;
    },
    source: function() {
      return this.binding.SourceSide;
    },
    getBindingType: function() {
      switch (this.currentMode) {
        case "bridge":
          return "/assets/images/bridge.svg";
        case "replicate":
          return "/assets/images/replicate.svg";
        case "aggregate":
          return "/assets/images/aggregate.svg";
        case "transform":
          return "/assets/images/transform.svg";
      }
      return "/assets/images/bridge.svg";
    },
    toShow: function() {
      return this.showLocal;
    }
  },
  methods: {
    switchMode(val) {
      this.currentMode = val;
      this.binding.SourceSide.switchMode("Source", val);
      this.binding.TargetSide.switchMode("Target", val);
      this.showLocal = false;
      this.$nextTick(() => {
        this.showLocal = true;
      });
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
.side {
  flex-basis: 95%;
}
</style>
