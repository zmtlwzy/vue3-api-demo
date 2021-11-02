import '@unocss/reset/normalize.css'
import 'uno.css'

// Register windi
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import App from './AppRoot.vue';

import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directive';
import { registerCustomEl } from '@/webComponents'

async function bootstrap() {
    const app = createApp(App);

    // Configure store
    setupStore(app);

    registerCustomEl();

    // Configure routing
    setupRouter(app);

    // Register global directive
    setupGlobDirectives(app);

    await router.isReady()

    app.mount('#app', true);
}

void bootstrap();

