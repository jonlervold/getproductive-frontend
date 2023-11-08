<template src="@structureComps/HeaderComp/HeaderComp.html"></template>
<style src="@structureComps/HeaderComp/HeaderComp.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "HeaderComp",

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
