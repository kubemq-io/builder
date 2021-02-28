<template>
  <div class="header-container">
    <v-list-item-avatar class="header-icon">
      <img
        v-if="binding.header.type === 'source'"
        src="@/assets/source.svg"
        alt="source"
      />
      <img
        v-if="binding.header.type === 'target'"
        src="@/assets/target.svg"
        alt="target"
      />
    </v-list-item-avatar>

    <h3 class="header-title list-title">{{ binding.header.name }}</h3>

    <div class="header-chips ">
      <v-chip x-small class="mr-1 overline" color="primary">
        {{ binding.header.provider }}
      </v-chip>
      <v-chip x-small class="overline" color="secondary">
        {{ binding.header.category }}
      </v-chip>
    </div>
  </div>
</template>

<script>
import { IntegrationBinding } from "@/components/integrations/binding/binding.js";

export default {
  name: "IntegrationBindingHeader",
  props: {
    binding: IntegrationBinding
  }
};
</script>

<style scoped>
.header-icon {
  margin-left: 16px;
  margin-right: 8px;
  padding-right: 0;
}
.header-title {
  margin-left: 8px;
  margin-right: 8px;
}
.header-chips {
  margin-left: 8px;
  margin-right: 8px;
}
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
