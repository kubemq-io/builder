<template>
  <v-card class="d-flex ma-3">
    <v-data-table
      :headers="headers"
      :items="currentBindingList"
      :items-per-page="5"
      hide-default-footer
      class="elevation-1"
    >      <template v-slot:item.Name="{ item }">

        <div class="d-flex justify-center align-center align-content-center">
          <v-list-item-title class="secondary--text text-h6 font-weight-bold">{{
            item.Name
          }}</v-list-item-title>
        </div>
      </template>
      <template v-slot:item.SourceSide="{ item }">
        <div class="d-flex justify-center align-center align-content-start">
          <v-list-item-avatar color="primary" size="30" class="pa-0">
            <span class="white--text headline">{{
              item.SourceSide.Initial
            }}</span>
          </v-list-item-avatar>
          <div class="pa-0">
            <span class="secondary--text text-h6 font-weight-bold">{{
              item.SourceSide.Name
            }}</span>
          </div>
          <div class="pl-1">
            <v-chip x-small color="primary font-weight-bold" outlined>
              text 1
            </v-chip>
          </div>
          <div class="pl-1">
            <v-chip x-small color="accent font-weight-bold" outlined>
              text 2
            </v-chip>
          </div>
        </div>
      </template>
      <template v-slot:item.TargetSide="{ item }">
        <div class="d-flex justify-center align-center align-content-center">
          <v-list-item-avatar color="primary" size="30">
            <span class="white--text headline">{{
              item.TargetSide.Initial
            }}</span>
          </v-list-item-avatar>

          <v-list-item-title class="secondary--text text-h6 font-weight-bold">{{
            item.TargetSide.Name
          }}</v-list-item-title>
          <div class="pl-1">
            <v-chip x-small color="primary font-weight-bold" outlined>
              text 1
            </v-chip>
          </div>
          <div class="pl-1">
            <v-chip x-small color="accent font-weight-bold" outlined>
              text 2
            </v-chip>
          </div>
        </div>
      </template>
      <template v-slot:item.Middlewares="{ item }">
        {{ item.Middlewares.hasData() }}
      </template>
      <template v-slot:item.actions="{ item }">
        <div>
          <v-icon big class="pr-2" @click.stop="editIntegration(item)">
            fa-edit
          </v-icon>
          <v-icon big class="pl-2" @click.stop="delIntegration(item)">
            fa-trash-alt
          </v-icon>
        </div>
      </template>
      <template v-slot:no-data>
        no data
      </template>
    </v-data-table>
    <BindingDlg ref="bindingDlg"></BindingDlg>
    <ConfirmDlg ref="confirm"></ConfirmDlg>
  </v-card>
</template>
<script>
import BindingDlg from "@/components/binding/BindingDlg";
import ConfirmDlg from "@/components/common/ConfirmDlg";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "IntegrationTable",
  components: { BindingDlg, ConfirmDlg },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "Name",
          width: "10%"
        },
        {
          text: "Source",
          align: "Start",
          value: "SourceSide",
          width: "35%"
        },
        {
          text: "Target",
          align: "Start",
          value: "TargetSide",
          width: "35%"
        },
        {
          text: "Middlewares",
          align: "Start",
          value: "Middlewares",
          sortable: false,
          width: "10%"
        },
        { text: "", value: "actions", sortable: false, width: "10%" }
      ]
    };
  },
  computed: {
    currentBindingList: function() {
      return this.$store.state.integrations.currentBindingList;
    }
  },
  methods: {
    ...mapGetters(["getCurrentBindingNames"]),
    ...mapMutations(["deleteBinding", "replaceBinding"]),
    async delIntegration(item) {
      if (
        await this.$refs.confirm.open(
          "Confirm",
          "Are you sure you want to delete this integration?"
        )
      ) {
        this.deleteBinding(item);
      }
    },
    async editIntegration(item) {
      await this.$refs.bindingDlg
        .open(item, this.getCurrentBindingNames(), "edit")
        .then(result => this.replaceBinding(result));
    }
  }
};
</script>

<style scoped>
.caption {
}
.container {
  border: 1px solid green;
}
.row {
  border: 1px solid red;
}
.col {
  border: 1px solid blue;
}
</style>
