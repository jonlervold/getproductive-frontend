<template src="@displayComps/InfoDisplay/InfoDisplay.html"></template>
<style src="@displayComps/InfoDisplay/InfoDisplay.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "InfoDisplay",

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
