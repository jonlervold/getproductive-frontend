<template src="@authComps/LoginPrompt/LoginPrompt.html"></template>
<style src="@authComps/LoginPrompt/LoginPrompt.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "LoginPrompt",

  data: function () {
    return {
      services,
      emailField: "",
      passwordField: "",
      submissionProblems: [],
    };
  },

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onSubmitLogIn: async function () {
      this.validateFields();

      if (this.submissionProblems.length > 0) {
        return;
      }

      this.updateLoadingText("Logging in...");
      this.updateIsLoading(true);
      const res = await this.services.api.login(
        this.emailField,
        this.passwordField
      );
      if (res.status === 200) {
        localStorage.setItem("jwt", res.data.jwt);
        this.updateIsLoggedIn(true);
        await this.fetchProjectsCategoriesEmail();
      } else {
        if (res.status === 401) {
          this.updateInfoText("Failed to log in. Wrong email or password!");
        } else {
          this.updateInfoText("Failed to log in!");
        }
        this.updateShowInfoModal(true);
      }

      this.updateIsLoading(false);
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
      if (!this.passwordField) {
        this.submissionProblems.push("Password field is empty.");
      }
      if (
        this.passwordField &&
        !this.services.validation.isPasswordValid(this.passwordField)
      ) {
        this.submissionProblems.push(
          "Passwords must be at least 8 characters."
        );
      }
    },

    fetchProjectsCategoriesEmail: async function () {
      this.updateLoadingText("Loading projects...");
      this.updateIsLoading(true);
      const res = await this.services.api.fetchProjectsCategoriesEmail();
      if (res.status === 200) {
        this.updateEmail(res.data.email);
        this.updateProjectList(res.data.projects);
        this.updateCategoriesDict(res.data.categories);
        this.sortAndFilterProjects();
      } else {
        this.updateInfoText("Failed to fetch projects!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },
  },
};
</script>
