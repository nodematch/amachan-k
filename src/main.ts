import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap-vue-3"; //bootstrap
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"; //bootstrap
import "bootstrap/dist/css/bootstrap.css"; //bootstrap

createApp(App).use(router, bootstrap).mount("#app");
