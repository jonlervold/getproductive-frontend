import callApi from "@apiSvc/util/callApi.js";

const editCategoryName = async (categoryId, newName) => {
  const route = "projects/edit-category-name";
  const res = await callApi(route, { categoryId, newName });
  return res;
};

export default editCategoryName;
