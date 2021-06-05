import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme, FontColor, Fonts} from '../components/constant/theme';
import LinearGradient from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class ProfileSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Home', 'People', 'Pics', 'Music', 'Events'],
      eye: true,
    };
  }

  onScroll = e => {
    var pos = e.nativeEvent.contentOffset;
    console.log('pos', pos);
    this.setState({items: this.state.items.concat(this.state.items)});
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <View style={{width: '95%', alignSelf: 'center', marginBottom: 30}}>
            <View style={{marginTop: 15, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 21,
                  color: FontColor.white,
                  fontFamily: Fonts.medium,
                }}>
                Profile Information
              </Text>
            </View>
            <View style={{marginTop: 25}}>
              <Text style={style.userNameHeading}>Username or Email</Text>
              <View style={style.emailTextView}>
                <TextInput
                  style={style.emailText}
                  placeholder="matthew.matthews@mail.com"
                  placeholderTextColor={FontColor.white}
                />
              </View>
            </View>
            <View style={{marginTop: 13}}>
              <Text style={style.passwordText}>Password</Text>
              <View style={style.passwordView}>
                <View
                  style={{
                    width: '80%',
                  }}>
                  <TextInput
                    placeholder="*****************"
                    placeholderTextColor={FontColor.white}
                    style={{
                      padding: 0,
                      opacity: 0.7,
                      fontSize: 15,
                      color: 'rgba(255,255,255, 0.7)',
                    }}
                    secureTextEntry={this.state.eye ? true : false}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({eye: !this.state.eye})}
                  style={style.eyeView}>
                  {this.state.eye ? (
                    <FontAwesome5 name="eye-slash" size={17} color="gray" />
                  ) : (
                    <FontAwesome5 name="eye" size={17} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 13}}>
              <Text style={style.newPassText}>Confirm Password</Text>
              <View style={style.passTextView}>
                <View
                  style={{
                    width: '80%',
                  }}>
                  <TextInput
                    style={{
                      padding: 0,
                      opacity: 0.7,
                      fontSize: 15,
                      color: 'rgba(255,255,255, 0.7)',
                    }}
                    placeholder="*****************"
                    placeholderTextColor={FontColor.white}
                    secureTextEntry={this.state.eye ? true : false}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => this.setState({eye: !this.state.eye})}
                  style={style.eyeView}>
                  {this.state.eye ? (
                    <FontAwesome5 name="eye-slash" size={17} color="gray" />
                  ) : (
                    <FontAwesome5 name="eye" size={17} color="gray" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={{marginTop: 36}}>
              <LinearGradient
                colors={[
                  theme.purpleLightLinearGradient,
                  theme.purpleDarkLinearGradient,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                useAngle={true}
                angle={160}
                style={style.SigninLinearView}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  Save Changes
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.screenProps.rootNavigation.navigate(
                  'TermsandCondition',
                );
              }}
              style={{marginTop: 17}}>
              <LinearGradient
                colors={[
                  theme.purpleLightLinearGradient,
                  theme.purpleDarkLinearGradient,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                useAngle={true}
                angle={160}
                style={style.SigninLinearView}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  Terms & Conditions
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.screenProps.rootNavigation.navigate('Privacypolicy');
              }}
              style={{marginTop: 17}}>
              <LinearGradient
                colors={[
                  theme.purpleLightLinearGradient,
                  theme.purpleDarkLinearGradient,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                useAngle={true}
                angle={160}
                style={style.SigninLinearView}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  Privacy Policy
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // this.props.navigation.navigate('Welcome');
                this.props.screenProps.rootNavigation.navigate('Welcome');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 25,
              }}>
              <View style={{width: 20, height: 20}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../assets/Sign-out.png')}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{color: FontColor.white, fontSize: 16}}>
                  Signout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  userNameHeading: {
    color: FontColor.white,
    opacity: 0.7,
    marginLeft: 19,
    fontSize: 15,
    marginBottom: 7,
  },
  emailTextView: {
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // paddingVertical: 10,
    height: 50,
    paddingLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailText: {
    width: '80%',
    padding: 0,
    opacity: 0.7,
    fontSize: 15,
    color: 'rgba(255,255,255, 0.7)',
  },
  passwordText: {
    color: FontColor.white,
    opacity: 0.7,
    marginLeft: 19,
    fontSize: 15,
    marginBottom: 7,
  },
  passwordView: {
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    // paddingVertical: 10,
    height: 50,
    // justifyContent: 'center',
    paddingLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeView: {
    width: 40,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newPassText: {
    color: FontColor.white,
    opacity: 0.7,
    marginLeft: 19,
    fontSize: 15,
    marginBottom: 6,
  },
  passTextView: {
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // paddingVertical: 10,
    height: 50,
    paddingLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgetPassView: {
    alignItems: 'flex-end',
    marginTop: 3,
    marginBottom: 15,
  },
  SigninLinearView: {
    alignItems: 'center',
    // paddingVertical: 10,
    height: 50,
    justifyContent: 'center',
    borderRadius: 15,
  },
});
