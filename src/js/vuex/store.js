import { createStore } from "vuex";
import appModule from "@vuex/appModule.js";
import authModule from "@vuex/authModule.js";
import projectListModule from "@vuex/projectListModule.js";

export default createStore({
  modules: {
    appState: appModule,
    authState: authModule,
    projectsState: projectListModule,
  },
});
