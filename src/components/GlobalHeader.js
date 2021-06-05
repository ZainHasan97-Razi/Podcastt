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
import Feather from 'react-native-vector-icons/Feather';
import {theme, FontColor, Fonts} from './constant/theme';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {DrawerActions} from 'react-navigation';
import LinearGradient from 'expo-linear-gradient';
// import {theme, FontColor, Fonts} from '../components/constant/theme';

export default class GlobalHeader extends Component {
  render() {
    return (
      //         ALL PROPS
      //
      //   <GlobalHeader
      //       leftArrow={true}
      // colorArrow={"white"} for arrow color
      //       leftCross={true}
      //       leftMenu={true}
      //       twoWords={1}
      //  fontFamily="Nunito-SemiBold"
      //       HeadingText= "Dashboard"
      // color="white" for heading text color
      // rightImg={true}
      //       rightMore={true}
      //       elevation={4}
      //   backgroundColor={"#f2f2f2"}
      //       navigation={this.props.navigation}
      //         />

      <Header
        style={{
          // justifyContent: 'flex-end',
          alignItems: 'center',
          // zIndex: 300,
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : 'rgba(255, 255, 255, 0.2);',
          elevation: this.props.elevation,
          height: 65,
        }}>
        <Left
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingLeft: 3,
            borderWidth: 0,
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
                source={require('../../assets/leftIcon.png')}
                style={{height: 21, width: 13}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          ) : this.props.leftCross == true ? (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons
                name="clear"
                style={{color: '#727272', fontSize: 26, paddingLeft: 3}}
              />
            </TouchableOpacity>
          ) : this.props.leftMenu ? (
            <TouchableOpacity
              style={{height: 42, width: 42}}
              // onPress={() => this.props.navigation.toggleDrawer()}
              // onPress={() => navigation.openDrawer()}
              // onPress={() =>
              //   this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              // }
              //  onPress={()=>  this.props.navigation.dispatch(navigateAction)}
              // onPress={()=>  this.props.navigation.dispatch(DrawerActions.closeDrawer())}

              //  onPress={()=>this.props.navigation.goMenu()}
            >
              <Image
                source={require('../../assets/swimage.png')}
                style={{height: '100%', width: '100%'}}
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords == 1
              ? {
                  flex: 1,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  alignSelf: 'center',
                  // marginLeft: 20,
                  borderWidth: 0,
                }
              : {
                  flex: 2.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 0,
                  // borderWidth:1,
                  // marginLeft:30
                }
          }>
          {this.props.HeadingText !== '' ? (
            <Text
              style={{
                color: this.props.color ? this.props.color : FontColor.black,

                fontFamily: this.props.fontFamily
                  ? this.props.fontFamily
                  : Fonts.medium,
                left: this.props.left ? this.props.left : 0,
                fontSize: this.props.fontSize ? this.props.fontSize : 22,
              }}>
              {this.props.HeadingText}{' '}
            </Text>
          ) : null}
        </Body>

        <Right
          style={{
            borderWidth: 0,
            height: '100%',

            alignItems: 'center',
            right: this.props.right ? this.props.right : 8,
          }}>
          {this.props.search ? (
            <TouchableOpacity
              style={{width: 43}}
              onPress={() => this.props.navigation.navigate('Search')}>
              <Fontisto name="search" size={22} color="#fff" />
            </TouchableOpacity>
          ) : null}
          {this.props.bell == true ? (
            <TouchableOpacity
              style={{width: 43}}
              onPress={() => this.props.navigation.navigate('Notification')}>
              <LinearGradient
                colors={['#ebf3f3', '#64aeda']}
                style={{
                  borderRadius: 90,
                  zIndex: 1,
                  width: 20,
                  height: 20,
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
              style={{width: 46, height: 46}}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/profile.png')}
                style={{height: '100%', width: '100%'}}
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
