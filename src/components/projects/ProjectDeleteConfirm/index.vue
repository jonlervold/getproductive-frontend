<template src="@projectComps/ProjectDeleteConfirm/ProjectDeleteConfirm.html"></template>
<style
  src="@projectComps/ProjectDeleteConfirm/ProjectDeleteConfirm.scss"
  lang="scss"
></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "ProjectDeleteConfirm",

  data: function () {
    return {
      services,
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    confirmDeleteProject: async function () {
      this.updateShowProjectDeleteConfirmModal(false);
      this.updateLoadingText("Permanently deleting project...");
      this.updateIsLoading(true);
      const res = await this.services.api.deleteProject(this.projectToDelete.id);
      if (res.status === 201) {
        this.updateProjectList(res.data);
        this.sortAndFilterProjects();
        this.updateShowProjectDeleteConfirmModal(false);
      } else {
        this.updateInfoText("Failed to delete project!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },
  },
};
</script>
