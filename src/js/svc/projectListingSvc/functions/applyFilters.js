const applyFilters = (
  sortedProjects,
  statusDisplaySelection,
  // blocked
  filterByBlocked,
  filterByBlockedSelection,
  // started
  filterByStarted,
  filterByStartedSelection,
  // priority
  filterByPriority,
  priorityOperator,
  priorityFilterValue,
  // difficulty
  filterByDifficulty,
  difficultyOperator,
  difficultyFilterValue,
  // length
  filterByLength,
  lengthOperator,
  lengthFilterValue,
  // cost
  filterByCostEstimate,
  costEstimateOperator,
  costEstimateFilterValue,
  // created
  filterByCreated,
  createdOperator,
  createdFilterValue,
  // deadline
  filterByHasDeadline,
  filterByHasDeadlineSelection,
  filterByDeadlineDate,
  deadlineOperator,
  deadlineFilterValue,
  // completed
  filterByCompleted,
  completedOperator,
  completedFilterValue,
  // category
  filterByCategory,
  includedCategories
) => {
  let filteredProjects = [...sortedProjects];

  if (statusDisplaySelection === "ongoing") {
    filteredProjects = filteredProjects.filter((project) => !project.completed);
  } else if (statusDisplaySelection === "completed") {
    filteredProjects = filteredProjects.filter((project) => project.completed);
  }

  if (statusDisplaySelection === "trash") {
    filteredProjects = filteredProjects.filter(
      (project) => project.isTrashed === 1
    );
  } else {
    filteredProjects = filteredProjects.filter(
      (project) => project.isTrashed === 0
    );
  }

  if (filterByBlocked) {
    if (filterByBlockedSelection === "Blocked") {
      filteredProjects = filteredProjects.filter(
        (project) => project.isBlocked === 1
      );
    } else if (filterByBlockedSelection === "Not Blocked") {
      filteredProjects = filteredProjects.filter(
        (project) => project.isBlocked === 0
      );
    }
  }

  if (filterByStarted) {
    if (filterByStartedSelection === "Started") {
      filteredProjects = filteredProjects.filter(
        (project) => project.isStarted === 1
      );
    } else if (filterByStartedSelection === "Not Started") {
      filteredProjects = filteredProjects.filter(
        (project) => project.isStarted === 0
      );
    }
  }

  if (filterByPriority) {
    if (priorityOperator === ">=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.priority >= priorityFilterValue
      );
    } else if (priorityOperator === "=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.priority === priorityFilterValue
      );
    } else if (priorityOperator === "<=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.priority <= priorityFilterValue
      );
    }
  }

  if (filterByDifficulty) {
    if (difficultyOperator === ">=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.difficulty >= difficultyFilterValue
      );
    } else if (difficultyOperator === "=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.difficulty === difficultyFilterValue
      );
    } else if (difficultyOperator === "<=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.difficulty <= difficultyFilterValue
      );
    }
  }

  if (filterByLength) {
    if (lengthOperator === ">=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.length >= lengthFilterValue
      );
    } else if (lengthOperator === "=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.length === lengthFilterValue
      );
    } else if (lengthOperator === "<=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.length <= lengthFilterValue
      );
    }
  }

  if (filterByCostEstimate) {
    if (costEstimateOperator === ">=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.costEstimate >= costEstimateFilterValue
      );
    } else if (costEstimateOperator === "=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.costEstimate == costEstimateFilterValue
      );
    } else if (costEstimateOperator === "<=") {
      filteredProjects = filteredProjects.filter(
        (project) => project.costEstimate <= costEstimateFilterValue
      );
    }
  }

  if (filterByCreated) {
    if (createdOperator === "After") {
      filteredProjects = filteredProjects.filter(
        (project) => project.created && project.created >= createdFilterValue
      );
    } else if (createdOperator === "Before") {
      filteredProjects = filteredProjects.filter(
        (project) => project.created && project.created <= createdFilterValue
      );
    }
  }

  if (filterByHasDeadline) {
    if (filterByHasDeadlineSelection === "Has Deadline") {
      filteredProjects = filteredProjects.filter((project) => project.deadline);
    } else if (filterByHasDeadlineSelection === "No Deadline Set") {
      filteredProjects = filteredProjects.filter(
        (project) => !project.deadline
      );
    }
  }

  if (filterByDeadlineDate) {
    if (deadlineOperator === "After") {
      filteredProjects = filteredProjects.filter(
        (project) => project.deadline && project.deadline >= deadlineFilterValue
      );
    } else if (deadlineOperator === "Before") {
      filteredProjects = filteredProjects.filter(
        (project) => project.deadline && project.deadline <= deadlineFilterValue
      );
    }
  }

  if (filterByCompleted) {
    if (completedOperator === "After") {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.completed && project.completed >= completedFilterValue
      );
    } else if (completedOperator === "Before") {
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.completed && project.completed <= completedFilterValue
      );
    }
  }

  if (filterByCategory) {
    filteredProjects = filteredProjects.filter((project) =>
      project.categories.some((categoryId) =>
        includedCategories.includes(categoryId)
      )
    );
  }

  return filteredProjects;
};

export default applyFilters;
