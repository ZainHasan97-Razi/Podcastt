import React, {Component} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'expo-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {DrawerActions} from 'react-navigation';
import {theme, FontColor, Fonts} from './constant/theme';

export default class GlobalHeaderNew extends Component {
  render() {
    return (
      //         ALL PROPS
      //
      //   <GlobalHeaderNew
      //        leftArrow={true}
      // twoWords={1}
      // elevation={4}
      //    leftMenu={true}
      //   search={true}
      //   bell={true}
      //   profile={true}
      //  HeadingText="Notifications"
      // fontSize={30}
      // backgroundColor={'transparent'}
      //   navigation={this.props.navigation}
      //         />

      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : 'rgba(255, 255, 255, 0.2);',
          elevation: this.props.elevation,
          // borderWidth: 1,
          // paddingTop: 28,
          // paddingVertical: 10,
          height: 55,
          width: '100%',
          alignSelf: 'center',
        }}>
        <Left
          style={{
            flex: 1,
            height: '100%',
            justifyContent: this.props.left ? this.props.left : 'center',
            paddingLeft: 3,
            // borderWidth: 1,
          }}>
          {this.props.leftArrow == true ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{borderWidth: 0, padding: 10}}>
              {/* <FontAwesome5Pro
                name="chevron-left"
                style={{
                  color: this.props.colorArrow
                    ? this.props.colorArrow
                    : 'black',
                  fontSize: 25,
                }}
              /> */}

              <Image
                source={require('../assets/leftIcon.png')}
                style={{height: 21, width: 13}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          ) : this.props.leftMenu ? (
            <View style={{height: 50, width: 50}}>
              <Image
                source={require('../assets/swimage.png')}
                style={{height: 48, width: 48}}
                // resizeMode={'contain'}
              />
            </View>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? {flex: 0.5, borderWidth: 0}
              : {
                  flex: 6,
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }>
          {this.props.HeadingText !== '' ? (
            <Text
              style={{
                color: theme.white,
                fontSize: this.props.fontSize ? this.props.fontSize : 22,
                // fontFamily: Fonts.medium,
              }}>
              {this.props.HeadingText}
            </Text>
          ) : null}
        </Body>

        <Right
          style={{
            // justifyContent: 'flex-end',
            height: '100%',
            alignItems: 'center',
            // paddingRight: 5,
          }}>
          {this.props.chat ? (
            <TouchableOpacity
              style={{
                width: 40,

                marginRight: 5,

                // alignItems: 'center',
              }}
              // onPress={() => this.props.navigation.navigate('Search')}
              onPress={() => this.props.navigation.navigate('Messages')}>
              {/* <FontAwesome5 name="comment" size={25} color="#fff" /> */}
              <Image
                source={require('../assets/icons/comment.png')}
                style={{
                  height: 30,
                  width: 30,
                }}
                resizeMode={'contain'}
              />
              <LinearGradient
                colors={['#ebf3f3', '#64aeda']}
                style={{
                  borderRadius: 90,
                  zIndex: 1,
                  width: 18,
                  height: 18,
                  top: -5,
                  left: -3,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  2
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : null}
          {this.props.search ? (
            <TouchableOpacity
              style={{width: 43}}
              onPress={() => this.props.navigation.navigate('Search')}>
              <FontAwesome name="search" size={25} color="#fff" />
            </TouchableOpacity>
          ) : null}
          {this.props.bell == true ? (
            <TouchableOpacity
              style={{width: 38}}
              onPress={() => this.props.navigation.navigate('Notification')}>
              <LinearGradient
                colors={['#ebf3f3', '#64aeda']}
                style={{
                  borderRadius: 90,
                  zIndex: 1,
                  width: 18,
                  height: 18,
                  top: -10,
                  left: -5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  2
                </Text>
              </LinearGradient>
              <FontAwesome name="bell" size={22} color="#fff" />
            </TouchableOpacity>
          ) : null}
          {this.props.profile == true ? (
            <TouchableOpacity
              style={{width: 58, height: 58}}
              onPress={() => this.props.navigation.navigate('Toptabnavigator')}>
              <Image
                source={require('../assets/profile.png')}
                style={{height: 58, width: 58}}
                // resizeMode={'contain'}
              />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  avatarImage: {
    width: 20,
    height: 15,

    // borderRadius: 40,
    // overflow: "hidden"
  },
});
