import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignUpScreen';
import LandingScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';

 const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={LandingScreen} />
      {/* <Stack.Screen name="About" component={AboutScreen} />  */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}




