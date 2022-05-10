import { createApp } from 'vue';
import router from './router/router';
import store from './store/index';
import App from './App.vue';
import './config/rem';

const app = createApp(App);


app.use(router)
	.use(store)
	.use(router);

app.mount('#app');

