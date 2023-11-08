import callApi from "@apiSvc/util/callApi.js";

const requestPasswordReset = async (email) => {
  const route = "auth/request-password-reset";
  const res = await callApi(route, { email });
  return res;
};

export default requestPasswordReset;
