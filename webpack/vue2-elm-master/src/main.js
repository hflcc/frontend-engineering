import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/router';
import store from './store/index';
import {routerMode} from './config/env';
import App from './App.vue';
import './config/rem';

const app = createApp(App);

const router = createRouter({
	routes,
	history: createWebHistory(),
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
			return { x: 0, y: to.meta.savedPosition || 0 };
		}
	}
});

app.use(router)
	.use(store)
	.use(router);

app.mount('#app');

