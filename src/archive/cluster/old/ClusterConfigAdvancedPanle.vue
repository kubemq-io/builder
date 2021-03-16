<template>
  <v-tabs pt-2>
    <v-tab>
      <span>Access Control</span>
      <v-icon small color="error">
        fa-exclamation-circle
      </v-icon>
      <v-icon small>
        fa-edit
      </v-icon>
    </v-tab>

    <v-tab>
      <v-icon left>
        mdi-lock
      </v-icon>
      sdfsdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-lock
      </v-icon>
      sdfsdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-lock
      </v-icon>
      Option 2
    </v-tab>

    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab>
      <v-icon left>
        mdi-access-point
      </v-icon>
      sdfsdfsdfsdf
    </v-tab>
    <v-tab-item>
      <ClusterAccessControlRoutingTab
        :cluster="cluster"
        :show="show"
      ></ClusterAccessControlRoutingTab>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas,
            lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed
            mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
            adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt
            non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p>
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
            egestas, lacus ante convallis tellus, vitae iaculis lacus elit id
            tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu
            tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse
            platea dictumst. Fusce ac felis sit amet ligula pharetra
            condimentum.
          </p>

          <p>
            Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            quis gravida magna mi a libero. Nam commodo suscipit quam. In
            consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
            Aliquam eu nunc.
          </p>

          <p>
            Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt
            libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio
            nec arcu.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui
            magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce
            commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis
            a, condimentum nec, nisi.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam
            eget dui. Proin viverra, ligula sit amet ultrices semper, ligula
            arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna,
            posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
            Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at
            tortor in tellus interdum sagittis.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <ClusterAccessControlRoutingTab
        :cluster="cluster"
        :show="show"
      ></ClusterAccessControlRoutingTab>
    </v-tab-item>
    <v-tab-item>
      <ClusterAccessControlRoutingTab
        :cluster="cluster"
        :show="show"
      ></ClusterAccessControlRoutingTab>
    </v-tab-item>
    <v-tab-item>
      <ClusterAccessControlRoutingTab
        :cluster="cluster"
        :show="show"
      ></ClusterAccessControlRoutingTab>
    </v-tab-item>
  </v-tabs>

  <!--  <div>-->
  <!--    <v-tabs v-model="tab" vertical>-->
  <!--      <v-tabs-slider color="secondary"></v-tabs-slider>-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-account-->
  <!--        </v-icon>-->
  <!--        Option 1-->
  <!--      </v-tab>-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-lock-->
  <!--        </v-icon>-->
  <!--        Option 2-->
  <!--      </v-tab>-->
  <!--      <v-tab>-->
  <!--        <v-icon left>-->
  <!--          mdi-access-point-->
  <!--        </v-icon>-->
  <!--        Option 3-->
  <!--      </v-tab>-->
  <!--    </v-tabs>-->
  <!--    <v-tabs-items v-model="tab">-->
  <!--      <v-tab-item v-for="item in items" :key="item">-->
  <!--        <v-card>-->
  <!--          &lt;!&ndash;          <ClusterAccessControlRoutingTab&ndash;&gt;-->
  <!--          &lt;!&ndash;            :cluster="cluster"&ndash;&gt;-->
  <!--          &lt;!&ndash;            :show="show"&ndash;&gt;-->
  <!--          &lt;!&ndash;          ></ClusterAccessControlRoutingTab>&ndash;&gt;-->
  <!--        </v-card>-->
  <!--      </v-tab-item>-->
  <!--    </v-tabs-items>-->
  <!--  </div>-->
</template>
<script>
import ClusterAccessControlRoutingTab from "@/archive/cluster/old/ClusterAccessControlRoutingTab";
export default {
  name: "ClusterConfigAdvancedPanle",
  components: { ClusterAccessControlRoutingTab },
  props: {
    cluster: {},
    items: {},
    show: {},
    tab: {}
  },
  data: function() {
    return {
      showPanels: false
    };
  },

  methods: {
    toggle: function() {
      console.log("here");
      this.showPanels = !this.showPanels;
    }
  }
};
</script>
