import { DefaultTheme as NavigationDarkTheme } from '@react-navigation/native';

export const lightTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    iconPrimary: '#000000',
    orange: '#EE8924',
    iconWhite: '#ffffff',
    textPrimary: '#262422',
    textSecondary: '#ABABAB',
    iconSecondary: '#ABABAB',
   bg: '#ffffff'
  },
};