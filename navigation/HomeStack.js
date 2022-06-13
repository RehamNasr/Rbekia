import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from '../navigation/tabs';

import {Restaurant, DetailRecyle, Trip, Update} from '../screens/index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="detailRecyle" component={DetailRecyle} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Trip" component={Trip} />
      <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
  );
};

export default HomeStack;
