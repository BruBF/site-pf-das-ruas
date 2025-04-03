import { createApp } from "vue";
import App from "./App.vue";
import theme from "@/utils/theme"; 

const app = createApp(App);

app.config.globalProperties.$theme = theme;

const root = document.documentElement;

Object.entries(theme.colors).forEach(([key, value]) => {
  root.style.setProperty(`--color-${key}`, value);
});

Object.entries(theme.fonts.sizes).forEach(([key, value]) => {
  root.style.setProperty(`--font-size-${key}`, value);
});

Object.entries(theme.fonts.family).forEach(([key, value]) => {
  root.style.setProperty(`--font-${key}`, value);
});

Object.entries(theme.fonts.weight).forEach(([key, value]) => {
  root.style.setProperty(`--font-weight-${key}`, value);
});

app.mount("#app");
