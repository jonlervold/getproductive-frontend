import login from "@apiSvc/functions/login.js";
import addNewUser from "@apiSvc/functions/addNewUser.js";
import deauthorizeToken from "@apiSvc/functions/deauthorizeToken.js";
import fetchProjectsCategoriesEmail from "@apiSvc/functions/fetchProjectsCategoriesEmail.js";
import addNewCategory from "@apiSvc/functions/addNewCategory.js";
import editCategoryName from "@apiSvc/functions/editCategoryName.js";
import addNewProject from "@apiSvc/functions/addNewProject.js";
import editProject from "@apiSvc/functions/editProject.js";
import editProjectCompleteStatus from "@apiSvc/functions/editProjectCompleteStatus.js";
import editProjectTrashedStatus from "@apiSvc/functions/editProjectTrashedStatus";
import deleteCategory from "@apiSvc/functions/deleteCategory";
import deleteProject from "@apiSvc/functions/deleteProject";
import changePassword from "@apiSvc/functions/changePassword";
import verifyEmail from "@apiSvc/functions/verifyEmail";
import requestPasswordReset from "@apiSvc/functions/requestPasswordReset";
import resetPassword from "@apiSvc/functions/resetPassword";

const apiSvc = {
  login,
  addNewUser,
  deauthorizeToken,
  fetchProjectsCategoriesEmail,
  addNewProject,
  addNewCategory,
  editProject,
  editCategoryName,
  editProjectCompleteStatus,
  editProjectTrashedStatus,
  deleteProject,
  deleteCategory,
  changePassword,
  verifyEmail,
  requestPasswordReset,
  resetPassword,
};

export default apiSvc;
