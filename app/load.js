import '@/theme/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
  .use(store)
  .use(router);
router.isReady().then(() => app.mount('#app'));
