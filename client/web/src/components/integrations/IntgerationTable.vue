<template>
  <v-card class="d-flex ma-3">
    <v-data-table
      :headers="headers"
      :items="currentBindingList"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click.stop="editIntegration(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click.stop="delIntegration(item)">
          mdi-delete
        </v-icon>
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
          value: "Name"
        },
        {
          text: "Type",
          align: "start",
          value: "Type"
        },
        {
          text: "Source",
          align: "start",
          value: "SourceSide.Name"
        },
        {
          text: "Target",
          align: "start",
          value: "TargetSide.Name"
        },
        { text: "Actions", value: "actions", sortable: false }
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
