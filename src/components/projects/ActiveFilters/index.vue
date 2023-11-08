<template src="@projectComps/ActiveFilters/ActiveFilters.html"></template>
<style src="@projectComps/ActiveFilters/ActiveFilters.scss" lang="scss"></style>

<script>
import storeHelper from "@vuex/storeHelper.js";
import services from "@svc/services";

export default {
  name: "ActiveFilters",

  data: function () {
    return {
      services,
    };
  },

  computed: {
    ...storeHelper.getters,

    showActiveFilters() {
      return (
        this.filterByBlocked ||
        this.filterByStarted ||
        this.filterByPriority ||
        this.filterByDifficulty ||
        this.filterByLength ||
        this.filterByCostEstimate ||
        this.filterByHasDeadline ||
        this.filterByDeadlineDate ||
        this.filterByCreated ||
        this.filterByCompleted ||
        this.filterByCategory ||
        this.separateBlocked ||
        this.separateStarted
      );
    },

    selectedCategories() {
      return this.sortedCategoriesList.filter((category) =>
        this.includedCategories.includes(category.categoryId)
      );
    },
  },

  methods: {
    ...storeHelper.mutations,
    ...storeHelper.actions,

    onRemoveClick(filter) {
      switch (filter) {
        case "blocked":
          this.updateFilterByBlocked(false);
          break;
        case "started":
          this.updateFilterByStarted(false);
          break;
        case "priority":
          this.updateFilterByPriority(false);
          break;
        case "difficulty":
          this.updateFilterByDifficulty(false);
          break;
        case "length":
          this.updateFilterByLength(false);
          break;
        case "costEstimate":
          this.updateFilterByCostEstimate(false);
          break;
        case "hasDeadline":
          this.updateFilterByHasDeadline(false);
          break;
        case "deadlineDate":
          this.updateFilterByDeadlineDate(false);
          break;
        case "created":
          this.updateFilterByCreated(false);
          break;
        case "completed":
          this.updateFilterByCompleted(false);
          break;
        case "category":
          this.updateFilterByCategory(false);
          break;
        case "separateBlocked":
          this.updateSeparateBlocked(false);
          break;
        case "separateStarted":
          this.updateSeparateStarted(false);
          break;
      }
      this.sortAndFilterProjects();
    },
  },
};
</script>
