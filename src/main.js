import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { store } from "./store";
import ElementPlus from "element-plus";

const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");

export default app;
