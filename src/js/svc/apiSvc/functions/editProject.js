import callApi from "@apiSvc/util/callApi.js";

const editProject = async (
  projectId,
  name,
  priority,
  difficulty,
  length,
  created,
  deadline,
  completed,
  costEstimate,
  isBlocked,
  isStarted,
  categories,
  comments
) => {
  const route = "projects/edit-project";
  const res = await callApi(route, {
    projectId,
    name,
    priority,
    difficulty,
    length,
    created,
    deadline,
    completed,
    costEstimate,
    isBlocked,
    isStarted,
    categories,
    comments,
  });
  return res;
};

export default editProject;
