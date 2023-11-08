import isDefaultDescKey from "../util/isDefaultDescKey";
import isStringSortKey from "../util/isStringSortingKey";
import isNullToBottomKey from "../util/isNullToBottomKey";

const sortByHeader = (
  projectList,
  sortKey,
  separateBlocked,
  separateStarted,
  reverse = false
) => {
  const projectListCopy = [...projectList];

  // sub-alphabetize by name
  let newSortResults = projectListCopy.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  // for keys that should be descending on first click,
  // achieve the result by reversing the reversal prop
  if (isDefaultDescKey(sortKey)) {
    reverse = !reverse;
  }

  // sort by the most recent sorting key/property
  if (isStringSortKey(sortKey)) {
    newSortResults = newSortResults.sort((a, b) => {
      return !reverse
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    });
  } else if (isNullToBottomKey(sortKey)) {
    // null always at bottom
    newSortResults = newSortResults.sort((a, b) => {
      const aSortKey = a[sortKey];
      const bSortKey = b[sortKey];
      if (aSortKey === null && bSortKey === null) {
        return 0;
      } else if (aSortKey === null) {
        return 1;
      } else if (bSortKey === null) {
        return -1;
      } else {
        return !reverse ? bSortKey - aSortKey : aSortKey - bSortKey;
      }
    });
  } else {
    newSortResults = newSortResults.sort((a, b) => {
      return !reverse ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    });
  }

  // if "push blocked to bottom" is selected, do so
  if (separateBlocked) {
    newSortResults = newSortResults.sort((a, b) => {
      if (a.isBlocked && !b.isBlocked) {
        return 1;
      }
      if (!a.isBlocked && b.isBlocked) {
        return -1;
      }
      return 0;
    });
  }

  // if "push non-started to bottom" is selected, do so
  if (separateStarted) {
    newSortResults = newSortResults.sort((a, b) => {
      if (a.isStarted && !b.isStarted) {
        return -1;
      }
      if (!a.isStarted && b.isStarted) {
        return 1;
      }
      return 0;
    });
  }

  return newSortResults;
};

export default sortByHeader;
