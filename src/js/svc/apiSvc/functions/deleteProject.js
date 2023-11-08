import callApi from "@apiSvc/util/callApi.js";

const deleteProject = async (projectId) => {
  const route = "projects/delete-project";
  const res = await callApi(route, { projectId });
  return res;
};

export default deleteProject;
