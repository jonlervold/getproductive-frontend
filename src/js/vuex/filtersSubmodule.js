export default {
  state: {
    filterViewSelection: "none",

    filterByBlocked: false,
    filterByBlockedSelection: "Not Blocked",
    separateBlocked: false,

    filterByStarted: false,
    filterByStartedSelection: "Started",
    separateStarted: false,

    filterByPriority: false,
    priorityOperator: "=",
    priorityFilterValue: 5,

    filterByDifficulty: false,
    difficultyOperator: "=",
    difficultyFilterValue: 1,

    filterByLength: false,
    lengthOperator: "=",
    lengthFilterValue: 1,

    filterByCostEstimate: false,
    costEstimateOperator: "=",
    costEstimateFilterValue: "0",

    filterByCreated: false,
    createdOperator: "Before",
    createdFilterValue: Date.now(),

    filterByHasDeadline: false,
    filterByHasDeadlineSelection: "Has Deadline",
    filterByDeadlineDate: false,
    deadlineOperator: "Before",
    deadlineFilterValue: Date.now(),

    filterByCompleted: false,
    completedOperator: "Before",
    completedFilterValue: Date.now(),

    filterByCategory: false,
    includedCategories: [],
  },

  getters: {
    filterViewSelection: function (state) {
      return state.filterViewSelection;
    },

    // blocked

    filterByBlocked: function (state) {
      return state.filterByBlocked;
    },

    filterByBlockedSelection: function (state) {
      return state.filterByBlockedSelection;
    },

    separateBlocked: function (state) {
      return state.separateBlocked;
    },

    // started

    filterByStarted: function (state) {
      return state.filterByStarted;
    },

    filterByStartedSelection: function (state) {
      return state.filterByStartedSelection;
    },

    separateStarted: function (state) {
      return state.separateStarted;
    },

    // priority

    filterByPriority: function (state) {
      return state.filterByPriority;
    },

    priorityOperator: function (state) {
      return state.priorityOperator;
    },

    priorityFilterValue: function (state) {
      return state.priorityFilterValue;
    },

    // difficulty

    filterByDifficulty: function (state) {
      return state.filterByDifficulty;
    },

    difficultyOperator: function (state) {
      return state.difficultyOperator;
    },

    difficultyFilterValue: function (state) {
      return state.difficultyFilterValue;
    },

    // length

    filterByLength: function (state) {
      return state.filterByLength;
    },

    lengthOperator: function (state) {
      return state.lengthOperator;
    },

    lengthFilterValue: function (state) {
      return state.lengthFilterValue;
    },

    // costEstimate

    filterByCostEstimate: function (state) {
      return state.filterByCostEstimate;
    },

    costEstimateOperator: function (state) {
      return state.costEstimateOperator;
    },

    costEstimateFilterValue: function (state) {
      return state.costEstimateFilterValue;
    },

    // created

    filterByCreated: function (state) {
      return state.filterByCreated;
    },

    createdOperator: function (state) {
      return state.createdOperator;
    },

    createdFilterValue: function (state) {
      return state.createdFilterValue;
    },

    // deadline

    filterByHasDeadline: function (state) {
      return state.filterByHasDeadline;
    },

    filterByHasDeadlineSelection: function (state) {
      return state.filterByHasDeadlineSelection;
    },

    filterByDeadlineDate: function (state) {
      return state.filterByDeadlineDate;
    },

    deadlineOperator: function (state) {
      return state.deadlineOperator;
    },

    deadlineFilterValue: function (state) {
      return state.deadlineFilterValue;
    },

    // completed

    filterByCompleted: function (state) {
      return state.filterByCompleted;
    },

    completedOperator: function (state) {
      return state.completedOperator;
    },

    completedFilterValue: function (state) {
      return state.completedFilterValue;
    },

    // category

    filterByCategory: function (state) {
      return state.filterByCategory;
    },

    includedCategories: function (state) {
      return state.includedCategories;
    },
  },

  mutations: {
    updateFilterViewSelection: function (state, newFilterViewSelection) {
      state.filterViewSelection = newFilterViewSelection;
    },

    // blocked

    updateFilterByBlocked: function (state, newFilterByBlocked) {
      state.filterByBlocked = newFilterByBlocked;
    },

    updateFilterByBlockedSelection: function (
      state,
      newFilterByBlockedSelection
    ) {
      state.filterByBlockedSelection = newFilterByBlockedSelection;
    },

    updateSeparateBlocked: function (state, newSeparateBlocked) {
      state.separateBlocked = newSeparateBlocked;
    },

    // started

    updateFilterByStarted: function (state, newFilterByStarted) {
      state.filterByStarted = newFilterByStarted;
    },

    updateFilterByStartedSelection: function (
      state,
      newFilterByStartedSelection
    ) {
      state.filterByStartedSelection = newFilterByStartedSelection;
    },

    updateSeparateStarted: function (state, newSeparateStarted) {
      state.separateStarted = newSeparateStarted;
    },

    // priority

    updateFilterByPriority: function (state, newFilterByPriority) {
      state.filterByPriority = newFilterByPriority;
    },

    updatePriorityOperator: function (state, newPriorityOperator) {
      state.priorityOperator = newPriorityOperator;
    },

    updatePriorityFilterValue: function (state, newPriorityFilterValue) {
      state.priorityFilterValue = Number(newPriorityFilterValue);
    },

    // difficulty

    updateFilterByDifficulty: function (state, newFilterByDifficulty) {
      state.filterByDifficulty = newFilterByDifficulty;
    },

    updateDifficultyOperator: function (state, newDifficultyOperator) {
      state.difficultyOperator = newDifficultyOperator;
    },

    updateDifficultyFilterValue: function (state, newDifficultyFilterValue) {
      state.difficultyFilterValue = Number(newDifficultyFilterValue);
    },

    // length

    updateFilterByLength: function (state, newFilterByLength) {
      state.filterByLength = newFilterByLength;
    },

    updateLengthOperator: function (state, newLengthOperator) {
      state.lengthOperator = newLengthOperator;
    },

    updateLengthFilterValue: function (state, newLengthFilterValue) {
      state.lengthFilterValue = Number(newLengthFilterValue);
    },

    // cost

    updateFilterByCostEstimate: function (state, newFilterByCostEstimate) {
      state.filterByCostEstimate = newFilterByCostEstimate;
    },

    updateCostEstimateOperator: function (state, newCostEstimateOperator) {
      state.costEstimateOperator = newCostEstimateOperator;
    },

    updateCostEstimateFilterValue: function (
      state,
      newCostEstimateFilterValue
    ) {
      state.costEstimateFilterValue = newCostEstimateFilterValue;
    },

    // created

    updateFilterByCreated: function (state, newFilterByCreated) {
      state.filterByCreated = newFilterByCreated;
    },

    updateCreatedOperator: function (state, newCreatedOperator) {
      state.createdOperator = newCreatedOperator;
    },

    updateCreatedFilterValue: function (state, newCreatedFilterValue) {
      state.createdFilterValue = Number(newCreatedFilterValue);
    },

    // deadline

    updateFilterByHasDeadline: function (state, newFilterByHasDeadline) {
      state.filterByHasDeadline = newFilterByHasDeadline;
    },

    updateFilterByHasDeadlineSelection: function (
      state,
      newFilterByHasDeadlineSelection
    ) {
      state.filterByHasDeadlineSelection = newFilterByHasDeadlineSelection;
    },

    updateFilterByDeadlineDate: function (state, newFilterByDeadlineDate) {
      state.filterByDeadlineDate = newFilterByDeadlineDate;
    },

    updateDeadlineOperator: function (state, newDeadlineOperator) {
      state.deadlineOperator = newDeadlineOperator;
    },

    updateDeadlineFilterValue: function (state, newDeadlineFilterValue) {
      state.deadlineFilterValue = Number(newDeadlineFilterValue);
    },

    // completed

    updateFilterByCompleted: function (state, newFilterByCompleted) {
      state.filterByCompleted = newFilterByCompleted;
    },

    updateCompletedOperator: function (state, newCompletedOperator) {
      state.completedOperator = newCompletedOperator;
    },

    updateCompletedFilterValue: function (state, newCompletedFilterValue) {
      state.completedFilterValue = Number(newCompletedFilterValue);
    },

    // category

    updateFilterByCategory: function (state, newFilterByCategory) {
      state.filterByCategory = newFilterByCategory;
    },

    updateIncludedCategories: function (state, newIncludedCategories) {
      state.includedCategories = newIncludedCategories;
    },
  },
};
