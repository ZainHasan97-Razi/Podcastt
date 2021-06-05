import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/splashscreen';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none" >
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
