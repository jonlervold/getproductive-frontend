const convertCategories = (categoriesDict, projectCategories) => {
  let convertedList = [];
  for (const categoryId of projectCategories) {
    convertedList.push(categoriesDict[categoryId]);
  }

  const localeDefinition = undefined;
  const caseInsensitive = { sensitivity: "base" };
  convertedList.sort(function (a, b) {
    return a.localeCompare(b, localeDefinition, caseInsensitive);
  });

  return convertedList.join(", ");
};

export default convertCategories;
