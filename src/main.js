import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from "./routes/routes.js"

const app = createApp(App)
const pinia =createPinia()
const myApp = createApp(App)

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'



myApp.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
})

app.use(router)
app.use(pinia)
app.mount('#app')


