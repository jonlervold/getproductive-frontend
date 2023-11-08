import callApi from "@apiSvc/util/callApi.js";

const deleteCategory = async (categoryId) => {
  const route = "projects/delete-category";
  const res = await callApi(route, { categoryId });
  return res;
};

export default deleteCategory;
