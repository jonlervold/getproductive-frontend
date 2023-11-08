import callApi from "@apiSvc/util/callApi.js";

const verifyEmail = async (jwtVerifier) => {
  const route = "auth/verify-email";
  const res = await callApi(route, { jwtVerifier });
  return res;
};

export default verifyEmail;
