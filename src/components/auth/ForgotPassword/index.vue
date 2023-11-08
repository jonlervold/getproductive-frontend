<template src="@authComps/ForgotPassword/ForgotPassword.html"></template>
<style src="@authComps/ForgotPassword/ForgotPassword.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "ForgotPassword",

  data: function () {
    return {
      services,
      emailField: "",
      submissionProblems: [],
    };
  },

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitPasswordReset: async function () {
      this.validateFields();

      if (this.submissionProblems.length > 0) {
        return;
      }

      this.updateLoadingText("Requesting password reset...");
      this.updateIsLoading(true);
      const res = await this.services.api.requestPasswordReset(this.emailField);
      if (res.status === 200) {
        this.$router.push("/");
        this.updateInfoText(
          "An email has been sent to the entered address with a link to reset its password. The link will be valid for 15 minutes."
        );
      } else if (res.status === 404) {
        this.updateInfoText(
          "The requested email address is not present in the database."
        );
      } else {
        this.updateInfoText("Failed to send reset email!");
      }
      this.updateIsLoading(false);
      this.updateShowInfoModal(true);
    },

    validateFields: function () {
      this.submissionProblems = [];

      if (!this.emailField) {
        this.submissionProblems.push("Email field is empty.");
      }
      if (
        this.emailField &&
        !this.services.validation.isEmailValid(this.emailField)
      ) {
        this.submissionProblems.push("Email appears to be invalid.");
      }
    },
  },
};
</script>
