
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './components/screens/ProfileScreen';
import { useColorScheme } from 'react-native';
import { darkTheme } from './components/theme/darkTheme';
import { lightTheme } from './components/theme/lighTheme';





const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  
  return (
    <NavigationContainer  theme={lightTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;