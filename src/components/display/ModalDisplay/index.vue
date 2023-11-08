<template src="@displayComps/ModalDisplay/ModalDisplay.html"></template>
<style src="@displayComps/ModalDisplay/ModalDisplay.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";

export default {
  name: "ModalDisplay",

  props: {
    borderClickHandler: {
      type: Function,
      required: true,
    },
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onBorderClick: function (e) {
      if (e.target.className === "modal-display_outer") {
        this.borderClickHandler();
      }
    },
  },
};
</script>
