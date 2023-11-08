<template src="@structureComps/FooterComp/FooterComp.html"></template>
<style src="@structureComps/FooterComp/FooterComp.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "FooterComp",

  computed: {
    ...storeHelper.getters,

    yearDisplay: function () {
      const currentYear = new Date().getFullYear();
      let yearDisplay = "2023";
      if (currentYear !== 2023) {
        yearDisplay = `2023-${currentYear.toString()}`;
      }
      return yearDisplay;
    },
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
