<template src="@authComps/ChangePassword/ChangePassword.html"></template>
<style src="@authComps/ChangePassword/ChangePassword.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "ChangePassword",

  data: function () {
    return {
      services,
      currentPasswordField: "",
      newPasswordField: "",
      newPasswordVerifyField: "",
      submissionProblems: [],
    };
  },

  computed: { ...storeHelper.getters },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitChangePassword: async function () {
      this.validateFields();

      if (this.submissionProblems.length > 0) {
        return;
      }

      this.updateLoadingText("Changing password...");
      this.updateIsLoading(true);
      const res = await this.services.api.changePassword(
        this.currentPasswordField,
        this.newPasswordField
      );
      if (res.status === 200) {
        localStorage.setItem("jwt", res.data.jwt);
        this.updateInfoText("Password successfully changed!");
        this.$router.push("/");
      } else if (res.status === 401) {
        this.updateInfoText("The current password is incorrect!");
      } else {
        this.updateInfoText("Failed to change password!");
      }
      this.updateIsLoading(false);
      this.updateShowInfoModal(true);
    },

    validateFields: function () {
      this.submissionProblems = [];

      if (!this.currentPasswordField) {
        this.submissionProblems.push("Current password field is empty.");
      }
      if (!this.newPasswordField) {
        this.submissionProblems.push("New password field is empty.");
      }
      if (!this.newPasswordVerifyField) {
        this.submissionProblems.push("Verify new password field is empty.");
      }
      if (
        this.newPasswordField &&
        this.newPasswordVerifyField &&
        this.newPasswordField !== this.newPasswordVerifyField
      ) {
        this.submissionProblems.push("New password fields do not match.");
      }
      if (
        (this.currentPasswordField &&
          !this.services.validation.isPasswordValid(
            this.currentPasswordField
          )) ||
        (this.newPasswordField &&
          !this.services.validation.isPasswordValid(this.newPasswordField))
      ) {
        this.submissionProblems.push(
          "Passwords must be at least 8 characters."
        );
      }
    },
  },
};
</script>
