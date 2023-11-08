<template src="@authComps/ResetPassword/ResetPassword.html"></template>
<style src="@authComps/ResetPassword/ResetPassword.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "ResetPassword",

  data: function () {
    return {
      services,
      jwtVerifier: null,
      submissionProblems: [],
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitPasswordResetClick: async function () {
      this.validateFields();

      if (this.submissionProblems.length > 0) {
        return;
      }

      const res = await this.services.api.resetPassword(
        this.passwordField,
        this.jwtVerifier
      );
      if (res.status === 200) {
        this.updateInfoText(
          "The password has been successfully updated! Please sign in using your credentials."
        );
      } else {
        this.updateInfoText("Failed to reset password!");
      }
      this.updateShowInfoModal(true);
      this.$router.push("/");
    },

    validateFields: function () {
      this.submissionProblems = [];

      if (
        this.passwordField &&
        !this.services.validation.isPasswordValid(this.passwordField)
      ) {
        this.submissionProblems.push(
          "Passwords must be at least 8 characters."
        );
      }
      if (!this.passwordField) {
        this.submissionProblems.push("Password field is empty.");
      }
      if (!this.passwordVerifyField) {
        this.submissionProblems.push("Password verification field is empty.");
      }
      if (
        this.passwordField &&
        this.passwordVerifyField &&
        this.passwordField !== this.passwordVerifyField
      ) {
        this.submissionProblems.push("Password fields do not match.");
      }
    },
  },

  mounted: async function () {
    this.jwtVerifier = new URL(window.location.href).searchParams.get(
      "verifier"
    );
    if (!this.jwtVerifier) {
      this.updateInfoText("No verification code is present in the URL.");
      this.updateShowInfoModal(true);
      this.$router.push("/");
    }
  },
};
</script>
