import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient'
import HomeBt from '../screens/newsFeed';
import AddAPostBt from '../screens/addPost';
import ChatInboxBt from '../screens/chatInbox';
import MyProfileBt from '../screens/myProfile';
import NotificationBt from '../screens/notification'
// import AddPostBt from '../screens/addPost'

import { FontColor } from '../constants/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarVisible={true}
      lazy
      tabBar={(tabProps) => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen
        // name={getTranslatedTextByKey('instructors')}
        name={'Homes'}
        component={HomeBt}
      />
      <Tab.Screen
        // name={getTranslatedTextByKey('profile')}
        name={'Post'}
        component={AddAPostBt}
      />
      <Tab.Screen
        // name={getTranslatedTextByKey('chat')}
        name={'Chat'}
        component={ChatInboxBt}
      />
      <Tab.Screen
        // name={getTranslatedTextByKey('setting')}
        name={'Profile'}
        component={MyProfileBt}
      />
      <Tab.Screen
        // name={getTranslatedTextByKey('setting')}
        name={'Notifications'}
        component={NotificationBt}
      />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation, carts }) => {
  return (
    <View style={styles.viewContainer}>
      <StatusBar hidden={true} />
      <LinearGradient 
      colors={['#AE6CE1', '#563671']}
      style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabButtons}
              key={index}>
              {index === 0 && (
                <FontAwesome5
                  name="home"
                  size={24}
                  color={isFocused ? '#fff' : 'rgba(188, 188, 188, 1)'}
                />
              )}
              {index === 1 && (
                <Entypo
                  name="camera"
                  size={22}
                  color={isFocused ? '#fff' : 'rgba(188, 188, 188, 1)'}
                />
              )}
              {index === 2 && (
                <FontAwesome
                  name="comments"
                  size={24}
                  color={isFocused ? '#fff' : 'rgba(188, 188, 188, 1)'}
                />
              )}
              {index == 3 && (
                <Entypo
                  name="user"
                  size={23}
                  color={isFocused ? '#fff' : 'rgba(188, 188, 188, 1)'}
                />
              )}
              {index == 4 && (
                <Entypo
                  name="bell"
                  size={23}
                  color={isFocused ? '#fff' : 'rgba(188, 188, 188, 1)'}
                />
              )}

              {/* <Text
                style={{
                  color: isFocused ? 'red' : 'rgba(188, 188, 188, 1)',
                  fontSize: 10,
                  top: carts?.length && label === 'CART' ? -7 : 0,
                }}>
                {label}
              </Text> */}
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#000',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: FontColor.purple,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  notification: {
    width: 17,
    height: 17,
    backgroundColor: '#D12553',
    borderRadius: 10,
    zIndex: 100,
    right: -15,
    top: 3,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButtons: {
    alignItems: 'center',
    bottom: -3,
  },
});
