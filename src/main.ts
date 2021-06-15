import { app } from './app'
import router from "./router";
import { setupStore } from '@/store';

import './global.less'

setupStore(app)
app.use(router)
import "@/directive/pin"


app.mount("#app");
