import Uno from "../components/Uno.vue"

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Uno },
    
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})