import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

import Parent from './screens/Parent';
import Splash from './screens/Splash';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name='Parent' component={Parent} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
