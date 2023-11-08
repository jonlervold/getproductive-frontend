<template src="@projectComps/CategoryDeleteConfirm/CategoryDeleteConfirm.html"></template>
<style
  src="@projectComps/CategoryDeleteConfirm/CategoryDeleteConfirm.scss"
  lang="scss"
></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "CategoryDeleteConfirm",

  data: function () {
    return {
      services,
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    confirmDeleteCategory: async function () {
      this.updateShowCategoryDeleteConfirmModal(false);
      this.updateLoadingText("Deleting category...");
      this.updateIsLoading(true);
      const res = await this.services.api.deleteCategory(this.categoryToDelete.id);
      if (res.status === 201) {
        this.updateProjectList(res.data.projects);
        this.updateCategoriesDict(res.data.categories);
        this.sortAndFilterProjects();
        this.updateShowCategoryDeleteConfirmModal(false);
      } else {
        this.updateInfoText("Failed to delete category!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },
  },
};
</script>
