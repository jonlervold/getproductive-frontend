import callApi from "@apiSvc/util/callApi.js";

const addNewProject = async (
  name,
  priority,
  difficulty,
  length,
  created,
  deadline,
  costEstimate,
  isBlocked,
  isStarted,
  categories,
  comments
) => {
  const route = "projects/add-new-project";
  const res = await callApi(route, {
    name,
    priority,
    difficulty,
    length,
    created,
    deadline,
    costEstimate,
    isBlocked,
    isStarted,
    categories,
    comments,
  });
  return res;
};

export default addNewProject;
