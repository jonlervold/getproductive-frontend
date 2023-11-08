import callApi from "@apiSvc/util/callApi.js";

const fetchProjectsCategoriesEmail = async () => {
  const route = "projects/fetch-projects-categories-email";
  const res = await callApi(route, {});
  return res;
};

export default fetchProjectsCategoriesEmail;
