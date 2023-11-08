import { createApp } from "vue";
import App from "@structureComps/App";
import store from "@vuex/store.js";
import router from "@js/router";

const getProductiveApp = createApp(App);
getProductiveApp.use(store);
getProductiveApp.use(router);
getProductiveApp.mount("#app");
