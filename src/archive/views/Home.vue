<template>
  <v-card>
    <v-list color="transparent">
      <v-list-item v-for="item in menu" :key="item.label" link :to="item.link">
        <v-list-item-avatar color="secondary" size="32"> </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="secondary--text">
            {{ item.label }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      menu: [
        {
          label: "Clusters",
          icon: "bx bxs-inbox",
          link: "/clusters"
        },
        {
          label: "Bridges",
          icon: "bx-send",
          link: "/bridges"
        },
        {
          label: "Targets",
          icon: "mdi-pencil-outline",
          link: "/targets"
        },
        {
          label: "Sources",
          icon: "mdi-star-outline",
          link: "/sources"
        }
      ]
    };
  },
  methods: {}
};
</script>
