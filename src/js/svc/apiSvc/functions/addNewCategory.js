import callApi from "@apiSvc/util/callApi.js";

const addNewCategory = async (categoryName) => {
  const route = "projects/add-new-category";
  const res = await callApi(route, { categoryName });
  return res;
};

export default addNewCategory;
