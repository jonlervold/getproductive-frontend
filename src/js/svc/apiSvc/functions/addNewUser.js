import callApi from "@apiSvc/util/callApi.js";

const addNewUser = async (email, requestedPassword) => {
  const route = "auth/add-new-user";
  const res = await callApi(route, { email, requestedPassword });
  return res;
};

export default addNewUser;
