import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "@/views/Homepage";
import Instructions from "@/views/Instructions";


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
        path: '/checkers',
        name: 'Checkers',
        component: Checkers8
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router