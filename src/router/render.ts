import { h } from 'vue'
import { RouterLink } from 'vue-router'

export function renderLink(link: string, title: string) {
  return () => h(RouterLink, { to: link }, { default: () => title })
}
