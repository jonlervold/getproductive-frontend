import callApi from "@apiSvc/util/callApi.js";

const deauthorizeToken = async () => {
  const route = "auth/deauthorize-token";
  const res = await callApi(route, {});
  return res;
};

export default deauthorizeToken;
