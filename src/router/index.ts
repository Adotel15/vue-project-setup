import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/views/HomeScreen.vue';
import ContactScreen from '@/views/ContactScreen.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeScreen,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactScreen,
        },
    ],
});

export default router;
