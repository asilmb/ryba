import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";
import "./assets/header.css";
import "./assets/menu-navigator.css";
import "./assets/divider.css";
const app = createApp(App);

app.use(router);

app.mount("#app");
