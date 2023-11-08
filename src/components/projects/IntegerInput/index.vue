<template src="@projectComps/IntegerInput/IntegerInput.html"></template>
<style src="@projectComps/IntegerInput/IntegerInput.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "IntegerInput",

  props: {
    integerValue: {
      type: String,
      required: true,
    },

    updateIntegerValue: {
      type: Function,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data: function () {
    return {
      services,
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    cleanAndUpdateInteger() {
      let cleanedValue = "";

      if (this.integerValue) {
        const isNegative = this.integerValue.startsWith("-");
        cleanedValue = this.removeAllButZeroToNine(this.integerValue);
        cleanedValue = this.stripLeadingZeroes(cleanedValue);
        cleanedValue = isNegative ? `-${cleanedValue}` : cleanedValue;
      }

      if (!cleanedValue || cleanedValue === "-") {
        cleanedValue = "0";
      }

      // use same object structure as the native event fired from template
      // so it can just be one propped function for all updates
      const event = { target: { value: cleanedValue } };
      this.updateIntegerValue(event);
    },

    removeAllButZeroToNine(string) {
      return string.replace(/[^0-9]/g, "");
    },

    stripLeadingZeroes(string) {
      return string.replace(/^0+/, "");
    },
  },
};
</script>
