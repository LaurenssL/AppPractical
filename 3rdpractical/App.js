import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ListView from './components/ListView';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen"  component={HomeScreen} 
      options={{ title: 'Home Screen'}} />

      <Stack.Screen name="List View" component={ListView} 
      options={{ title: 'List View' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
