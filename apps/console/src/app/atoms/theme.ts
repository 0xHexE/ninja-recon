import { atom, selector } from 'recoil';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

/**
 * Get default theme from local storage or use the mediaQuery
 * to set default theme
 */
function getDefaultTheme() {
  if (typeof window === 'undefined') {
    return Theme.LIGHT;
  }

  const theme = localStorage.getItem('app_theme');

  if (!theme) {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT;
  }

  return theme !== 'light' ? Theme.LIGHT : Theme.DARK;
}

const themeInternalState = atom({
  default: getDefaultTheme(),
  key: 'appTheme_INTERNAL',
});

export const themeState = selector<Theme>({
  key: 'appTheme',
  get({ get }) {
    return get(themeInternalState);
  },
  set({ set }, value) {
    set(themeInternalState, value);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('app_theme', `${value}`);
    }
  },
});
