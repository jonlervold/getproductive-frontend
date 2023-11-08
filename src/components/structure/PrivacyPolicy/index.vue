<template src="@structureComps/PrivacyPolicy/PrivacyPolicy.html"></template>
<style
  src="@structureComps/PrivacyPolicy/PrivacyPolicy.scss"
  lang="scss"
></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "PrivacyPolicy",

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
