/**
 * Configure and register global directives
 */
import type { App } from 'vue';

import { setupPinDirective } from './pin';

export function setupGlobDirectives(app: App) {
  setupPinDirective(app);
}
