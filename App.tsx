// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen  from '../rn_assets/Details';
import HomeScreen from './Home';
import LoginScreen from './LoginScreen';
import Dashboard from './Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}