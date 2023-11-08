import { mapGetters, mapMutations, mapActions } from "vuex";
import appModule from "@vuex/appModule.js";
import authModule from "@vuex/authModule.js";
import projectListModule from "@vuex/projectListModule.js";

export default {
  getters: {
    ...mapGetters(Object.keys(appModule.getters)),
    ...mapGetters(Object.keys(authModule.getters)),
    ...mapGetters(Object.keys(projectListModule.getters)),
  },

  mutations: {
    ...mapMutations(Object.keys(appModule.mutations)),
    ...mapMutations(Object.keys(authModule.mutations)),
    ...mapMutations(Object.keys(projectListModule.mutations)),
  },

  actions: {
    ...mapActions(Object.keys(appModule.actions)),
    ...mapActions(Object.keys(authModule.actions)),
    ...mapActions(Object.keys(projectListModule.actions)),
  },
};
