<template src="@projectComps/ProjectsManager/ProjectsManager.html"></template>
<style
  src="@projectComps/ProjectsManager/ProjectsManager.scss"
  lang="scss"
></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

import ActiveFilters from "@projectComps/ActiveFilters";
import FilterManager from "@projectComps/FilterManager";
import ProjectsTable from "@projectComps/ProjectsTable";

export default {
  name: "ProjectsManager",

  components: {
    ActiveFilters,
    FilterManager,
    ProjectsTable,
  },

  data: function () {
    return {
      services,
    };
  },

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
