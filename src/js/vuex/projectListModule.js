import filtersSubmodule from "@vuex/filtersSubmodule.js";
import services from "@svc/services";

export default {
  state: {
    projectList: [],
    projectListSorted: [],
    categoriesDict: {},

    sortKey: "name",
    sortIsReversed: false,

    statusDisplaySelection: "ongoing",

    showProjectDeleteConfirmModal: false,
    projectToDelete: {
      name: "",
      id: "",
    },

    showCategoryDeleteConfirmModal: false,
    categoryToDelete: {
      name: "",
      id: "",
    },

    showInfoModal: false,
    infoText: "",

    ...filtersSubmodule.state,
  },

  getters: {
    projectList: function (state) {
      return state.projectList;
    },

    projectListSorted: function (state) {
      return state.projectListSorted;
    },

    categoriesDict: function (state) {
      return state.categoriesDict;
    },

    categoryIdsArray: function (state) {
      const categoryIdsArray = [];
      for (const categoryId of Object.keys(state.categoriesDict)) {
        categoryIdsArray.push(Number(categoryId));
      }
      return categoryIdsArray;
    },

    sortedCategoriesList: function (state) {
      const categoriesList = [];
      for (const categoryId of Object.keys(state.categoriesDict)) {
        categoriesList.push({
          categoryId: Number(categoryId),
          name: state.categoriesDict[categoryId],
        });
      }
      categoriesList.sort((a, b) => a.name.localeCompare(b.name));
      return categoriesList;
    },

    displayNoCategoriesIndicator: function (state) {
      return state.categoriesDict.length === 0;
    },

    sortKey: function (state) {
      return state.sortKey;
    },

    sortIsReversed: function (state) {
      return state.sortIsReversed;
    },

    statusDisplaySelection: function (state) {
      return state.statusDisplaySelection;
    },

    showingTrash: function (state) {
      return state.statusDisplaySelection === "trash";
    },

    showingOngoing: function (state) {
      return state.statusDisplaySelection !== "completed";
    },

    showingCompleted: function (state) {
      return state.statusDisplaySelection !== "ongoing";
    },

    newDisplayOptionClosesNewProjectRow: function (state) {
      return (
        state.statusDisplaySelection === "ongoing" ||
        state.statusDisplaySelection === "all"
      );
    },

    showProjectDeleteConfirmModal: function (state) {
      return state.showProjectDeleteConfirmModal;
    },

    projectToDelete: function (state) {
      return state.projectToDelete;
    },

    showCategoryDeleteConfirmModal: function (state) {
      return state.showCategoryDeleteConfirmModal;
    },

    categoryToDelete: function (state) {
      return state.categoryToDelete;
    },

    showInfoModal: function (state) {
      return state.showInfoModal;
    },

    infoText: function (state) {
      return state.infoText;
    },

    ...filtersSubmodule.getters,
  },

  mutations: {
    updateProjectList: function (state, newList) {
      state.projectList = newList;
    },

    updateProjectListSorted: function (state, newList) {
      state.projectListSorted = newList;
    },

    updateCategoriesDict: function (state, newDict) {
      state.categoriesDict = newDict;
    },

    updateSortKey: function (state, newSortKey) {
      state.sortKey = newSortKey;
    },

    updateSortIsReversed: function (state, newReverseState) {
      state.sortIsReversed = newReverseState;
    },

    updateStatusDisplaySelection: function (state, newStatusDisplaySelection) {
      state.statusDisplaySelection = newStatusDisplaySelection;
    },

    updateShowProjectDeleteConfirmModal: function (
      state,
      newShowProjectDeleteConfirmModal
    ) {
      state.showProjectDeleteConfirmModal = newShowProjectDeleteConfirmModal;
    },

    updateProjectToDelete: function (state, newProjectToDelete) {
      state.projectToDelete = newProjectToDelete;
    },

    updateShowCategoryDeleteConfirmModal: function (
      state,
      newShowCategoryDeleteConfirmModal
    ) {
      state.showCategoryDeleteConfirmModal = newShowCategoryDeleteConfirmModal;
    },

    updateCategoryToDelete: function (state, newCategoryToDelete) {
      state.categoryToDelete = newCategoryToDelete;
    },

    updateShowInfoModal: function (state, newShowInfoModal) {
      state.showInfoModal = newShowInfoModal;
    },

    updateInfoText: function (state, newInfoText) {
      state.infoText = newInfoText;
    },

    ...filtersSubmodule.mutations,
  },

  actions: {
    sortAndFilterProjects: function ({ commit, state }) {
      const sortedProjects = services.projectListing.sortByHeader(
        state.projectList,
        state.sortKey,
        state.separateBlocked,
        state.separateStarted,
        state.sortIsReversed
      );
      const filteredProjects = services.projectListing.applyFilters(
        sortedProjects,
        state.statusDisplaySelection,
        // blocked
        state.filterByBlocked,
        state.filterByBlockedSelection,
        // started
        state.filterByStarted,
        state.filterByStartedSelection,
        // priority
        state.filterByPriority,
        state.priorityOperator,
        state.priorityFilterValue,
        // difficulty
        state.filterByDifficulty,
        state.difficultyOperator,
        state.difficultyFilterValue,
        // length
        state.filterByLength,
        state.lengthOperator,
        state.lengthFilterValue,
        // cost
        state.filterByCostEstimate,
        state.costEstimateOperator,
        state.costEstimateFilterValue,
        // created
        state.filterByCreated,
        state.createdOperator,
        state.createdFilterValue,
        // deadline
        state.filterByHasDeadline,
        state.filterByHasDeadlineSelection,
        state.filterByDeadlineDate,
        state.deadlineOperator,
        state.deadlineFilterValue,
        // completed
        state.filterByCompleted,
        state.completedOperator,
        state.completedFilterValue,
        // category
        state.filterByCategory,
        state.includedCategories
      );
      commit("updateProjectListSorted", filteredProjects);
    },
  },
};
