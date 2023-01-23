import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "@/views/Homepage.vue";
import Instructions from "@/views/Instructions.vue";
import Checkers from "@/views/Checkers.vue";
import LoginComponent from "@/components/LoginComponent.vue";


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/home',
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
    {
        path: '/register-user',
        name: 'register-user',
        component: () => import('../components/RegisterComponent.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../components/LoginComponent.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/DashboardComponent.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router