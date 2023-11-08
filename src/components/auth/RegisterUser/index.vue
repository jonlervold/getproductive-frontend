<template src="@authComps/RegisterUser/RegisterUser.html"></template>
<style src="@authComps/RegisterUser/RegisterUser.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "RegisterUser",

  data: function () {
    return {
      services,
      emailField: "",
      emailVerifyField: "",
      passwordField: "",
      passwordVerifyField: "",
      submissionProblems: [],
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitNewUser: async function () {
      this.validateFields();

      if (this.submissionProblems.length > 0) {
        return;
      }

      this.updateLoadingText("Adding new user...");
      this.updateIsLoading(true);
      const res = await this.services.api.addNewUser(
        this.emailField,
        this.passwordField
      );
      if (res.status === 201) {
        this.$router.push("/");
        this.updateInfoText(
          "New user successfully requested! Check your email for a verification link to complete the registration process. The link will be valid for 15 minutes."
        );
      } else if (res.status === 409) {
        this.updateInfoText(
          "Email is already registered! Use 'Forgot Password' to recover your account."
        );
      } else {
        this.updateInfoText("Failed to add new user!");
      }
      this.updateIsLoading(false);
      this.updateShowInfoModal(true);
    },

    validateFields: function () {
      this.submissionProblems = [];

      if (
        this.emailField &&
        !this.services.validation.isEmailValid(this.emailField)
      ) {
        this.submissionProblems.push("Email appears to be invalid.");
      }
      if (!this.emailField) {
        this.submissionProblems.push("Email field is empty.");
      }
      if (!this.emailVerifyField) {
        this.submissionProblems.push("Email verification field is empty.");
      }
      if (
        this.emailField &&
        this.emailVerifyField &&
        this.emailField !== this.emailVerifyField
      ) {
        this.submissionProblems.push("Email fields do not match.");
      }

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
};
</script>
