import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "@/views/Homepage.vue";
import Instructions from "@/views/Instructions.vue";
import Checkers from "@/views/Checkers.vue";


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/instructions',
        name: 'Instructions',
        component: Instructions
    },
    {
        path: '/new8Grid',
        name: 'Checkers8',
        component: Checkers
    },
    {
        path: '/new10Grid',
        name: 'Checkers10',
        component: Checkers
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router