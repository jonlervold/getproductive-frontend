<template src="@projectComps/ProjectComp/ProjectComp.html"></template>
<style src="@projectComps/ProjectComp/ProjectComp.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

import IntegerInput from "@projectComps/IntegerInput";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "ProjectComp",

  components: {
    DatePicker,
    IntegerInput,
  },

  emits: [
    "editModeActivation",
    "editModeDeactivation",
    "addNewProjectDeactivation",
  ],

  props: {
    isNewProjectRow: {
      type: Boolean,
      default: false,
    },

    disableEdits: {
      type: Boolean,
      default: false,
    },

    project: {
      default: {
        name: "New Project",
        priority: 3,
        difficulty: 3,
        length: 3,
        costEstimate: 0,
        isBlocked: 0,
        isStarted: 0,
        categories: [],
        created: null,
        deadline: null,
        comments: "",
      },
    },
  },

  data: function () {
    return {
      services,
      editMode: false,
      newName: services.conversion.convertHtmlEncodedString(this.project.name),
      newComments: services.conversion.convertHtmlEncodedString(
        this.project.comments
      ),
      newCostEstimate: this.project.costEstimate,
      newIsBlocked: Boolean(this.project.isBlocked),
      newIsStarted: Boolean(this.project.isStarted),
      newPriority: this.project.priority,
      newDifficulty: this.project.difficulty,
      newLength: this.project.length,
      newCategories: this.project.categories,
      newCreated: this.project.created,
      newDeadline: this.project.deadline,
      newCompleted: this.project.completed,
    };
  },

  computed: {
    ...storeHelper.getters,
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onEditModeActivation: function () {
      this.$emit("editModeActivation");
      this.editMode = true;
    },

    onCancelClick: function () {
      if (this.isNewProjectRow) {
        this.$emit("addNewProjectDeactivation");
      } else {
        this.newName = this.project.name;
        this.newComments = this.project.comments;
        this.newCostEstimate = this.project.costEstimate;
        this.newIsBlocked = this.project.isBlocked;
        this.newIsStarted = this.project.isStarted;
        this.newPriority = this.project.priority;
        this.newDifficulty = this.project.difficulty;
        this.newLength = this.project.length;
        this.newCategories = this.project.categories;
        this.newCreated = this.project.created;
        this.newDeadline = this.project.deadline;
        this.newCompleted = this.project.completed;

        this.editMode = false;
        this.$emit("editModeDeactivation");
      }
    },

    onSaveClick: async function () {
      if (this.isNewProjectRow) {
        await this.saveNewProject();
      } else {
        await this.editProject();
      }
    },

    saveNewProject: async function () {
      this.updateLoadingText("Saving new project...");
      this.updateIsLoading(true);
      const res = await this.services.api.addNewProject(
        this.newName,
        this.newPriority,
        this.newDifficulty,
        this.newLength,
        this.services.conversion.convertToUnixTimestamp(this.newCreated),
        this.services.conversion.convertToUnixTimestamp(this.newDeadline),
        this.newCostEstimate,
        this.newIsBlocked,
        this.newIsStarted,
        this.newCategories,
        this.newComments
      );
      if (res.status === 201) {
        this.updateProjectList(res.data);
        this.sortAndFilterProjects();
        this.updateStatusDisplaySelection("continuing");
        this.$emit("addNewProjectDeactivation");
      } else {
        this.updateInfoText("Failed to save project!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },

    editProject: async function () {
      this.updateLoadingText("Editing project...");
      this.updateIsLoading(true);
      const res = await this.services.api.editProject(
        this.project.projectId,
        this.newName,
        this.newPriority,
        this.newDifficulty,
        this.newLength,
        this.services.conversion.convertToUnixTimestamp(this.newCreated),
        this.services.conversion.convertToUnixTimestamp(this.newDeadline),
        this.services.conversion.convertToUnixTimestamp(this.newCompleted),
        this.newCostEstimate,
        this.newIsBlocked,
        this.newIsStarted,
        this.newCategories,
        this.newComments
      );
      if (res.status === 201) {
        this.updateProjectList(res.data);
        this.sortAndFilterProjects();
        this.editMode = false;
        this.$emit("editModeDeactivation");
      } else {
        this.updateInfoText("Failed to edit project!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },

    onEditCompleteStatusClick: async function () {
      this.updateLoadingText("Updating project status...");
      this.updateIsLoading(true);
      let timestamp = null;
      if (!this.project.completed) {
        timestamp = this.services.conversion.convertToUnixTimestamp(Date.now());
      }
      const res = await this.services.api.editProjectCompleteStatus(
        this.project.projectId,
        timestamp
      );
      if (res.status === 201) {
        this.updateProjectList(res.data);
        this.sortAndFilterProjects();
      } else {
        this.updateInfoText("Failed to update project status!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },

    onEditTrashedStatus: async function () {
      const newTrashedStatus = this.project.isTrashed === 0 ? 1 : 0;
      if (newTrashedStatus === 1) {
        this.updateLoadingText("Moving project to trash...");
      } else {
        this.updateLoadingText("Removing project from trash...");
      }
      this.updateIsLoading(true);
      const res = await this.services.api.editProjectTrashedStatus(
        this.project.projectId,
        newTrashedStatus
      );
      if (res.status === 201) {
        this.updateProjectList(res.data);
        this.sortAndFilterProjects();
      } else {
        this.updateInfoText("Failed to update trash status!");
        this.updateShowInfoModal(true);
      }
      this.updateIsLoading(false);
    },

    onDeleteProject: function () {
      this.updateProjectToDelete({
        name: this.project.name,
        id: this.project.projectId,
      });
      this.updateShowProjectDeleteConfirmModal(true);
    },

    onUpdateNewCostEstimate: function (e) {
      this.newCostEstimate = e.target.value;
    },

    categoryIsChecked: function (categoryId) {
      return this.newCategories.includes(categoryId);
    },

    onCategoryCheckboxClick: function (categoryId) {
      const isChecked = this.categoryIsChecked(categoryId);
      if (isChecked) {
        this.newCategories = this.newCategories.filter(
          (id) => id !== categoryId
        );
      } else {
        this.newCategories.push(categoryId);
      }
    },
  },

  mounted: function () {
    if (this.isNewProjectRow) {
      this.newCreated = Date.now();
      // wipes categories fresh on mount
      // if "new project" is clicked, then categories are selected, then "cancel" is clicked,
      // then "new project" is clicked again, previous category selections will still be selected
      // this is due to "newCategories" being the same as "categories" prop default array
      this.newCategories = [];
    }
  },

  watch: {
    statusDisplaySelection() {
      this.onCancelClick();
    },
  },
};
</script>
