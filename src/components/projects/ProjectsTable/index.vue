<template src="@projectComps/ProjectsTable/ProjectsTable.html"></template>
<style src="@projectComps/ProjectsTable/ProjectsTable.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

import ProjectComp from "@projectComps/ProjectComp";

export default {
  name: "ProjectsManager",

  components: {
    ProjectComp,
  },

  data: function () {
    return {
      services,
      showAddProjectRow: false,
      editModeActivated: false,
    };
  },

  computed: {
    ...storeHelper.getters,

    noProjectsAtAll: function () {
      return this.projectList.length === 0;
    },

    noProjectsMeetingFilterCriteria: function () {
      return this.projectListSorted.length === 0 && !this.noProjectsAtAll;
    },

    showNoneToDisplayIndicator: function () {
      return (
        (this.noProjectsMeetingFilterCriteria || this.noProjectsAtAll) &&
        !this.editModeActivated &&
        !this.showAddProjectRow
      );
    },
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    boldIfSelected: function (headerType) {
      const styling = {};
      if (this.sortKey === headerType) {
        styling.fontWeight = "bold";
      }
      return styling;
    },

    showSortCaret: function (headerType) {
      if (this.sortKey === headerType) {
        if (this.services.projectListing.getCaretDirection(headerType)) {
          return !this.sortIsReversed ? " 🔽" : " 🔼";
        } else {
          return this.sortIsReversed ? " 🔽" : " 🔼";
        }
      }
    },

    onSortClick: function (clickedSortKey) {
      if (!this.editModeActivated) {
        if (clickedSortKey === this.sortKey && !this.sortIsReversed) {
          this.updateSortIsReversed(true);
          this.sortAndFilterProjects();
        } else {
          this.updateSortKey(clickedSortKey);
          this.updateSortIsReversed(false);
          this.sortAndFilterProjects();
        }
      }
    },

    onStatusDisplaySelectionChange: function (e) {
      const selection = e.target.value;
      this.updateStatusDisplaySelection(selection);
      this.updateFilterByCompleted(false);
      this.sortAndFilterProjects();
      this.editModeActivated = false;
      if (!this.newDisplayOptionClosesNewProjectRow) {
        this.showAddProjectRow = false;
      }
    },

    onEditModeActivation: function () {
      this.editModeActivated = true;
    },

    onEditModeDeactivation: function () {
      this.editModeActivated = false;
    },

    onAddNewProjectActivation: function () {
      this.updateStatusDisplaySelection("continuing");
      this.showAddProjectRow = true;
    },

    onAddNewProjectDeactivation: function () {
      this.showAddProjectRow = false;
    },
  },
};
</script>
