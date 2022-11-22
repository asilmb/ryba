import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/main.css";
import "./assets/css/header.css";
import "./assets/css/menu-navigator.css";
import "./assets/css/divider.css";
import "./assets/css/contacts.css"
export default {
    props: {
        mapConfig: Object,
        apiKey: String,
    }
}
const app = createApp(App);

app.use(router);

app.mount("#app");
