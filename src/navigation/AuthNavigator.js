import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login'
import Signup from '../screens/signup'
import Welcome from '../screens/welcome'
import ForgetPassword from '../screens/forgotPassword'
import ChangePassword from '../screens/changePassword'
import TermsConditions from '../screens/termsConditions'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none" >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
