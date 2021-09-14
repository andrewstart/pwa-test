import { createApp } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createStore } from 'vuex';
import App from './App.vue';
import HomeView from './views/Home.vue';
import SecondView from './views/Second.vue';

export interface StoreState
{
    count: number
}

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeView },
    { path: '/second', component: SecondView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const store = createStore({
    state() {
        return {
            count: parseInt(localStorage.getItem('savedCount') || '') || 0
        }
    },
    mutations: {
        saveCount(state: StoreState, count: number)
        {
            state.count = count;
            localStorage.setItem('savedCount', count.toString());
        }
    },
});

createApp(App).use(store).use(router).mount('#app')
