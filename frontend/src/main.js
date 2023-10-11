import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Argon from "./theme/src/plugins/argon-kit"
import BalmUI from 'balm-ui' // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus' // BalmJS Team Material Components
import 'balm-ui-css'

const app = createApp(App)

// app.use(Argon)
app.use(router)

app.use(BalmUI); // Mandatory
app.use(BalmUIPlus); // Optional

app.mount('#app')
