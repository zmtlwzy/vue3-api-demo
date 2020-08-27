import { app } from './app'
import router from "./router";
import store from "./store";

import './global.scss'

app.use(store)
app.use(router)
import "@/directive/pin"


app.mount("#app");
