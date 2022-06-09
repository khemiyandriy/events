import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from "./components/MainPage.vue";
import EventsList from "./components/EventsList.vue";
import CreateEvent from "./components/CreateEvent.vue";
import EventPage from "./components/EventPage.vue";
import NotFound from "./components/NotFound.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/main',
            name: "main",
            component: MainPage,
            alias: "/"
        },
        {
            path: '/events',
            name: "events",
            component: EventsList, 
            children: [
                {
            path: ':id',
            name: "eventPage",
            component: EventPage,
            props: true
        },
            ]
        },
        {
            path: '/create',
            name: "create",
            component: CreateEvent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
