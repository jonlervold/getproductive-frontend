import callApi from "@apiSvc/util/callApi.js";

const addNewCategory = async (currentPassword, newPassword) => {
  const route = "auth/change-password";
  const res = await callApi(route, { currentPassword, newPassword });
  return res;
};

export default addNewCategory;
