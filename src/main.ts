// Register windi
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import './global.less'

import { createApp } from 'vue';
import App from './App.vue';

import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directive';
// import { setupNaiveUI } from '@/lib/naive';

async function bootstrap() {
    const app = createApp(App);

    // Configure store
    setupStore(app);

    // Configure routing
    setupRouter(app);

    // setupNaiveUI(app);

    // Register global directive
    setupGlobDirectives(app);

    await router.isReady()

    app.mount('#app', true);
}

void bootstrap();

