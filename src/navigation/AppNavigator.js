import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home'
import PrivacyPolicy from '../screens/privacyPolicy'
import TermsConditions from '../screens/termsConditions'
import Notification from '../screens/notification'
import NewsFeed from '../screens/newsFeed'
import UserProfile from '../screens/userProfile'
import ChatInbox from '../screens/chatInbox'
import ChatScreen from '../screens/chatScreen'
import MyPosts from '../screens/myPosts'
import BottomTabNavigator from './BottomTabNavigator'
import AuthNavigator from './AuthNavigator'

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator" headerMode="none" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="ChatInbox" component={ChatInbox} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="MyPosts" component={MyPosts} />

      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
