import { darkTheme } from 'naive-ui'
import themeOverrides from '#/naive-ui-theme-overrides.json'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const getNaiveThemeProps = computed(() => {
  if (isDark.value) {
    return {
      'theme': darkTheme,
      'theme-overrides': null,
    }
  }
  else {
    return {
      'theme-overrides': themeOverrides,
    }
  }
})
