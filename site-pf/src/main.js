import { createApp } from "vue";
import App from "./App.vue";
import theme from "./utils/theme";
import router from './router/router';

const app = createApp(App);

app.config.globalProperties.$theme = theme;

// Adiciona as cores do tema como variáveis CSS
const root = document.documentElement;
Object.entries(theme.colors).forEach(([key, value]) => {
  root.style.setProperty(`--${key}`, value);
});

// Adiciona os tamanhos de fonte do tema como variáveis CSS
Object.entries(theme.fonts.sizes).forEach(([key, value]) => {
  root.style.setProperty(`--font-size-${key}`, value);
});

// Adiciona as famílias de fonte do tema como variáveis CSS
Object.entries(theme.fonts.family).forEach(([key, value]) => {
  root.style.setProperty(`--font-family-${key}`, value);
});

// Usa o router na aplicação
app.use(router);

app.mount("#app");