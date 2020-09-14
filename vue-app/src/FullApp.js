import { createApp } from "vue";
import App from "./App.vue";

const FullApp = (id) => {
    const app = createApp(App);
    app.mount(id);
}

export default FullApp;
