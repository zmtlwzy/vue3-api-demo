// Register windi
import 'virtual:windi.css';

import './global.less'

import { createApp } from 'vue';
import App from './App.vue';

import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directive';

async function bootstrap() {
    const app = createApp(App);

    // Configure store
    setupStore(app);

    // Configure routing
    setupRouter(app);

    // Register global directive
    setupGlobDirectives(app);

    await router.isReady()

    app.mount('#app', true);
}

void bootstrap();

