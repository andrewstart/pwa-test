import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from './views/Home.vue';
import SecondView from './views/Second.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeView },
    { path: '/second', component: SecondView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp(App).use(router).mount('#app')
