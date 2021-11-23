import '@unocss/reset/normalize.css';
import 'uno:components.css';
// 'default' layers
import 'uno:default.css';
// 'icons' layer
import 'uno:icons.css';
// "utilities" layer will have the highest priority
import 'uno:utilities.css';

// import 'uno.css';

import App from './AppRoot.vue';

import router, { setupRouter } from '@/router';
import { setupStore } from '@/store';
import { setupGlobDirectives } from '@/directive';
import { registerCustomEl } from '@/webComponents';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  registerCustomEl();

  // Configure routing
  setupRouter(app);

  // Register global directive
  setupGlobDirectives(app);

  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();
