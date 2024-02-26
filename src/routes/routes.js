import Uno from "../components/Uno.vue"
import Dos from "../components/Dos.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", component: Uno },
    { path: "/dos", component: Dos },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})