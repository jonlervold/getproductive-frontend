import callApi from "@apiSvc/util/callApi.js";

const resetPassword = async (newPassword, jwtVerifier) => {
  const route = "auth/reset-password";
  const res = await callApi(route, { newPassword, jwtVerifier });
  return res;
};

export default resetPassword;
