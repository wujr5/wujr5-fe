import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import 'vite-plugin-vue-atomcss/plugin/atomcss.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
