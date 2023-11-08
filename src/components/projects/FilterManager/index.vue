<template src="@projectComps/FilterManager/FilterManager.html"></template>
<style src="@projectComps/FilterManager/FilterManager.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper";
import services from "@svc/services";

import IntegerInput from "@projectComps/IntegerInput";
import ActiveFilters from "@projectComps/ActiveFilters";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "FilterManager",

  components: {
    DatePicker,
    IntegerInput,
    ActiveFilters,
  },

  data: function () {
    return {
      services,
    };
  },

  computed: {
    ...storeHelper.getters,

    showHideFilterOptionsButton: function () {
      return this.filterViewSelection !== "none";
    },

    showStarted: function () {
      return this.filterViewSelection === "started";
    },

    showBlocked: function () {
      return this.filterViewSelection === "blocked";
    },

    showPriority: function () {
      return this.filterViewSelection === "priority";
    },

    showDifficulty: function () {
      return this.filterViewSelection === "difficulty";
    },

    showLength: function () {
      return this.filterViewSelection === "length";
    },

    showCostEstimate: function () {
      return this.filterViewSelection === "costEstimate";
    },

    showCreated: function () {
      return this.filterViewSelection === "created";
    },

    showDeadline: function () {
      return this.filterViewSelection === "deadline";
    },

    showCompleted: function () {
      return this.filterViewSelection === "completed";
    },

    showCategory: function () {
      return this.filterViewSelection === "category";
    },
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onFilterViewSelectionChange: function (e) {
      this.updateFilterViewSelection(e.target.value);
    },

    onHideFilterOptionsClick: function () {
      this.updateFilterViewSelection("none");
    },

    // blocked

    onFilterByBlockedChange: function (e) {
      this.updateSeparateBlocked(false);
      this.updateFilterByBlocked(e.target.checked);
      this.sortAndFilterProjects();
    },

    onFilterByBlockedSelectionChange: function (e) {
      this.updateFilterByBlockedSelection(e.target.value);
      this.sortAndFilterProjects();
    },

    onSeparateBlockedChange: function (e) {
      this.updateFilterByBlocked(false);
      this.updateSeparateStarted(false);
      this.updateSeparateBlocked(e.target.checked);
      this.sortAndFilterProjects();
    },

    // started

    onFilterByStartedChange: function (e) {
      this.updateSeparateStarted(false);
      this.updateFilterByStarted(e.target.checked);
      this.sortAndFilterProjects();
    },

    onFilterByStartedSelectionChange: function (e) {
      this.updateFilterByStartedSelection(e.target.value);
      this.sortAndFilterProjects();
    },

    onSeparateStartedChange: function (e) {
      this.updateFilterByStarted(false);
      this.updateSeparateBlocked(false);
      this.updateSeparateStarted(e.target.checked);
      this.sortAndFilterProjects();
    },

    // priority

    onFilterByPriorityChange: function (e) {
      this.updateFilterByPriority(e.target.checked);
      this.sortAndFilterProjects();
    },

    onPriorityOperatorChange: function (e) {
      this.updatePriorityOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onPriorityFilterValueChange: function (e) {
      this.updatePriorityFilterValue(e.target.value);
      this.sortAndFilterProjects();
    },

    // difficulty

    onFilterByDifficultyChange: function (e) {
      this.updateFilterByDifficulty(e.target.checked);
      this.sortAndFilterProjects();
    },

    onDifficultyOperatorChange: function (e) {
      this.updateDifficultyOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onDifficultyFilterValueChange: function (e) {
      this.updateDifficultyFilterValue(e.target.value);
      this.sortAndFilterProjects();
    },

    // length

    onFilterByLengthChange: function (e) {
      this.updateFilterByLength(e.target.checked);
      this.sortAndFilterProjects();
    },

    onLengthOperatorChange: function (e) {
      this.updateLengthOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onLengthFilterValueChange: function (e) {
      this.updateLengthFilterValue(e.target.value);
      this.sortAndFilterProjects();
    },

    // cost estimate

    onFilterByCostEstimateChange: function (e) {
      this.updateFilterByCostEstimate(e.target.checked);
      this.sortAndFilterProjects();
    },

    onCostEstimateOperatorChange: function (e) {
      this.updateCostEstimateOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onCostEstimateFilterValueChange: function (e) {
      this.updateCostEstimateFilterValue(e.target.value);
      if (this.isValidInteger(e.target.value)) {
        this.sortAndFilterProjects();
      }
    },

    isValidInteger: function (input) {
      const ifMinusPresentIsOnlyFirstCharacter = !input.slice(1).includes("-");
      const onlyContainsZeroToNineAndMinus = /^[0-9-]+$/.test(input);
      return (
        onlyContainsZeroToNineAndMinus && ifMinusPresentIsOnlyFirstCharacter
      );
    },

    // created

    onFilterByCreatedChange: function (e) {
      this.updateFilterByCreated(e.target.checked);
      this.sortAndFilterProjects();
    },

    onCreatedOperatorChange: function (e) {
      this.updateCreatedOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onCreatedFilterValueChange: function (newCreatedFilterDate) {
      this.updateCreatedFilterValue(Math.floor(newCreatedFilterDate));
      this.sortAndFilterProjects();
    },

    // deadline

    onFilterByHasDeadlineChange: function (e) {
      this.updateFilterByHasDeadline(e.target.checked);
      this.updateFilterByDeadlineDate(false);
      this.sortAndFilterProjects();
    },

    onFilterByHasDeadlineSelectionChange: function (e) {
      this.updateFilterByHasDeadlineSelection(e.target.value);
      this.sortAndFilterProjects();
    },

    onFilterByDeadlineDateChange: function (e) {
      this.updateFilterByDeadlineDate(e.target.checked);
      this.updateFilterByHasDeadline(false);
      this.sortAndFilterProjects();
    },

    onDeadlineOperatorChange: function (e) {
      this.updateDeadlineOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onDeadlineFilterValueChange: function (newDeadlineFilterDate) {
      this.updateDeadlineFilterValue(Math.floor(newDeadlineFilterDate));
      this.sortAndFilterProjects();
    },

    // completed

    onFilterByCompletedChange: function (e) {
      this.updateFilterByCompleted(e.target.checked);
      this.sortAndFilterProjects();
    },

    onCompletedOperatorChange: function (e) {
      this.updateCompletedOperator(e.target.value);
      this.sortAndFilterProjects();
    },

    onCompletedFilterValueChange: function (newCompletedFilterDate) {
      this.updateCompletedFilterValue(Math.floor(newCompletedFilterDate));
      this.sortAndFilterProjects();
    },

    // category

    onFilterByCategoryChange: function (e) {
      this.updateFilterByCategory(e.target.checked);
      this.sortAndFilterProjects();
    },

    categoryFilterIsChecked: function (categoryId) {
      return this.includedCategories.includes(categoryId);
    },

    onCategoryFilterCheckboxClick: function (categoryId) {
      const isChecked = this.categoryFilterIsChecked(categoryId);
      if (isChecked) {
        let newCategoriesList = [...this.includedCategories];
        newCategoriesList = newCategoriesList.filter((id) => id !== categoryId);
        this.updateIncludedCategories(newCategoriesList);
      } else {
        const newCategoriesList = [...this.includedCategories];
        newCategoriesList.push(categoryId);
        this.updateIncludedCategories(newCategoriesList);
      }
      this.sortAndFilterProjects();
    },

    onSelectAllCategories: function () {
      this.updateIncludedCategories([...this.categoryIdsArray]);
      this.sortAndFilterProjects();
    },

    onDeselectAllCategories: function () {
      this.updateIncludedCategories([]);
      this.sortAndFilterProjects();
    },
  },
};
</script>
