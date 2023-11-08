import callApi from "@apiSvc/util/callApi.js";

const editProjectTrashedStatus = async (projectId, newTrashedStatus) => {
  const route = "projects/edit-project-trashed-status";
  const res = await callApi(route, { projectId, newTrashedStatus });
  return res;
};

export default editProjectTrashedStatus;
