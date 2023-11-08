import callApi from "@apiSvc/util/callApi.js";

const editProjectCompleteStatus = async (projectId, timestamp) => {
  const route = "projects/edit-project-complete-status";
  const res = await callApi(route, {
    projectId,
    timestamp,
  });
  return res;
};

export default editProjectCompleteStatus;
