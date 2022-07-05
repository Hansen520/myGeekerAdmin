import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// pinia store
import pinia from "@/store/index";
// vue Router
import router from "@/routers/index";

createApp(App).use(router).use(pinia).use(ElementPlus).mount("#app");
