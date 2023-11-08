import callApi from "@apiSvc/util/callApi.js";

const login = async (email, enteredPassword) => {
  const route = "auth/login";
  const res = await callApi(route, { email, enteredPassword });
  return res;
};

export default login;
