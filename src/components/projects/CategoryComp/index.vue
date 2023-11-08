<template src="@projectComps/CategoryComp/CategoryComp.html"></template>
<style src="@projectComps/CategoryComp/CategoryComp.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "CategoryComp",

  props: {
    savedName: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
  },

  data: function () {
    return {
      services,
      nameField: "",
      editMode: false,
      newName: this.savedName,
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onEditCategoryClick: function () {
      this.editMode = true;
    },

    onCancelEditCategoryClick: function () {
      this.newName = this.savedName;
      this.editMode = false;
    },

    onSubmitSaveEditCategory: async function () {
      this.updateLoadingText("Editing category...");
      this.updateIsLoading(true);
      const res = await this.services.api.editCategoryName(
        this.categoryId,
        this.newName
      );
      if (res.status === 200) {
        this.updateCategoriesDict(res.data);
        this.editMode = false;
      } else {
        this.updateInfoText("Failed to edit category!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },

    onDeleteCategoryClick: async function () {
      this.updateCategoryToDelete({
        name: this.savedName,
        id: this.categoryId,
      });
      this.updateShowCategoryDeleteConfirmModal(true);
    },
  },
};
</script>
