<template src="@authComps/VerifyEmail/VerifyEmail.html"></template>
<style src="@authComps/VerifyEmail/VerifyEmail.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "VerifyEmail",

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
    const verifierJwt = new URL(window.location.href).searchParams.get(
      "verifier"
    );
    if (!verifierJwt) {
      this.updateInfoText("No verification code is present in the URL.");
      this.updateShowInfoModal(true);
      this.$router.push("/");
      return;
    }

    const res = await this.services.api.verifyEmail(verifierJwt);
    if (res.status === 201) {
      this.updateInfoText(
        "This account has been successfully verified! Please sign in using your credentials."
      );
    } else if (res.status === 401) {
      this.updateInfoText(
        "The verification code is invalid! It may have expired. Please use the registration page to try creating an account again."
      );
    } else if (res.status === 409) {
      this.updateInfoText(
        "This account is already verified! Please log in, or use the Forgot Password function if you need to reset your password."
      );
    } else {
      this.updateInfoText(
        "Failed to verify new user! Please use the registration page to try again."
      );
    }
    this.updateShowInfoModal(true);
    this.$router.push("/");
  },
};
</script>
