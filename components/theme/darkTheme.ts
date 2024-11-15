import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const darkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    iconPrimary: '#FFFFFF',
    orange: '#EE8924',
    iconWhite: '#ffffff',
    textPrimary: '#FFFFFF',
    textSecondary: '#ffffff',
    iconSecondary: '#FFFFFFF',
    bg: '#1D1919'
  },
};