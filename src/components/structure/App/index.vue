<template src="@structureComps/App/App.html"></template>
<style src="@structureComps/App/App.scss" lang="scss"></style>

<script>
import storeHelper from "@js/vuex/storeHelper";
import services from "@svc/services";

import HomeComp from "@projectComps/HomeComp";
import HeaderComp from "@structureComps/HeaderComp";
import FooterComp from "@structureComps/FooterComp";
import InfoDisplay from "@displayComps/InfoDisplay";
import ModalDimmer from "@displayComps/ModalDimmer";
import ModalDisplay from "@displayComps/ModalDisplay";
import ProjectDeleteConfirm from "@projectComps/ProjectDeleteConfirm";
import CategoryDeleteConfirm from "@projectComps/CategoryDeleteConfirm";

export default {
  name: "App",

  data: function () {
    return {
      services,
    };
  },

  components: {
    HomeComp,
    HeaderComp,
    FooterComp,
    InfoDisplay,
    ModalDimmer,
    ModalDisplay,
    ProjectDeleteConfirm,
    CategoryDeleteConfirm,
  },

  computed: {
    ...storeHelper.getters,
    displayDimmer: function () {
      return (
        this.isLoading ||
        this.showInfoModal ||
        this.showProjectDeleteConfirmModal ||
        this.showCategoryDeleteConfirmModal
      );
    },

    routeRequiresAuth: function () {
      const nonAuthRoutes = [
        "/",
        "/register",
        "/privacy-policy",
        "/reset-password",
        "/forgot-password",
      ];
      return !nonAuthRoutes.includes(this.$route.path);
    },
  },
  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },

  mounted: async function () {
    const res = await this.services.api.fetchProjectsCategoriesEmail();
    if (res.status === 200) {
      this.updateIsLoggedIn(true);
      this.updateEmail(res.data.email);
      this.updateProjectList(res.data.projects);
      this.updateCategoriesDict(res.data.categories);
      this.sortAndFilterProjects();
    } else if (this.routeRequiresAuth) {
      this.$router.push("/");
    }
    this.updateIsLoading(false);
  },
};
</script>
