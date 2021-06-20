import { DarkTheme, LightTheme } from 'baseui';

type theme = typeof LightTheme;

export interface AppTheme extends theme {
  maxPageWidth: string;
}

export const AppLightTheme: AppTheme = {
  ...LightTheme,
  maxPageWidth: '1400px',
};

export const AppDarkTheme: AppTheme = {
  ...DarkTheme,
  maxPageWidth: '1400px',
};
