<template src="@projectComps/HomeComp/HomeComp.html"></template>
<style src="@projectComps/HomeComp/HomeComp.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

import LoginPrompt from "@authComps/LoginPrompt";
import ModalDisplay from "@displayComps/ModalDisplay";
import ProjectsManager from "@projectComps/ProjectsManager";

export default {
  name: "HomeComp",

  components: {
    LoginPrompt,
    ModalDisplay,
    ProjectsManager,
  },

  computed: { ...storeHelper.getters },
  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
