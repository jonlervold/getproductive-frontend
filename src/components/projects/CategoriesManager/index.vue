<template
  src="@projectComps/CategoriesManager/CategoriesManager.html"
></template>
<style
  src="@projectComps/CategoriesManager/CategoriesManager.scss"
  lang="scss"
></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

import CategoryComp from "@projectComps/CategoryComp";

export default {
  name: "CategoriesManager",

  components: {
    CategoryComp,
  },

  data: function () {
    return {
      services,
      newCategoryNameField: "",
    };
  },

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitNewCategory: async function () {
      this.updateLoadingText("Adding new category...");
      this.updateIsLoading(true);
      const res = await this.services.api.addNewCategory(
        this.newCategoryNameField
      );
      if (res.status === 201) {
        this.updateCategoriesDict(res.data);
        this.newCategoryNameField = "";
      } else {
        this.updateInfoText("Failed to add new category!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },
  },
};
</script>
