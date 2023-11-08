import { createRouter, createWebHistory } from "vue-router";

import HomeComp from "@projectComps/HomeComp";
import VerifyEmail from "@authComps/VerifyEmail";
import RegisterUser from "@authComps/RegisterUser";
import ResetPassword from "@authComps/ResetPassword";
import ChangePassword from "@authComps/ChangePassword";
import LogoutRedirect from "@authComps/LogoutRedirect";
import ForgotPassword from "@authComps/ForgotPassword";
import CategoriesManager from "@projectComps/CategoriesManager";
import PrivacyPolicy from "@structureComps/PrivacyPolicy";

const routes = [
  { path: "/", component: HomeComp },
  { path: "/register", component: RegisterUser },
  { path: "/change-password", component: ChangePassword },
  { path: "/verify-email", component: VerifyEmail },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/reset-password", component: ResetPassword },
  { path: "/logout", component: LogoutRedirect },
  { path: "/categories-manager", component: CategoriesManager },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
