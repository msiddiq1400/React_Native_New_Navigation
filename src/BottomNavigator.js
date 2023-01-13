import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomScreenTest from './screens/BottomScreenTest';
import BottomScreen2 from './screens/BottomScreen2';

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator>
        <BottomTabs.Screen name='BottomTest' component={BottomScreenTest} options={{headerShown: false}} />
        <BottomTabs.Screen name='BottomTest2' component={BottomScreen2} options={{headerShown: false}} />
    </BottomTabs.Navigator>
  )
}

export default BottomNavigator