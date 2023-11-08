<template src="@displayComps/ModalDimmer/ModalDimmer.html"></template>
<style src="@displayComps/ModalDimmer/ModalDimmer.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "ModalDimmer",

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },
};
</script>
