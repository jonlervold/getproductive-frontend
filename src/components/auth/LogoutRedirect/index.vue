<template src="@authComps/LogoutRedirect/LogoutRedirect.html"></template>
<style src="@authComps/LogoutRedirect/LogoutRedirect.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "LogoutRedirect",

  data: function () {
    return {
      services,
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,
  },

  mounted: async function () {
    this.updateLoadingText("Logging out...");
    this.updateIsLoading(true);
    this.updateEmail("");
    await this.services.api.deauthorizeToken();
    localStorage.removeItem("jwt");
    location.replace("/");
  },
};
</script>
