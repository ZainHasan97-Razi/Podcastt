import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme, FontColor, Fonts} from '../../constants/Theme';

const ChangePassword = ({navigation}) => {
    return (
      <View style={style.container}>
        <ImageBackground
          source={require('../../assets/bakcgroundimage2.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={style.logoView}>
            <View style={{width: 89, height: 88}}>
              <Image
                source={require('../../assets/swimage.png')}
                style={{width: 89, height: 88}}
              />
            </View>
          </View>
          <ScrollView>
            <View style={{width: '100%', height: '65%'}}>
              <View style={{width: '85%', alignSelf: 'center'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={style.changePassText}>Change your password</Text>
                </View>
                <View style={{marginTop: 25}}>
                  <Text style={style.newPassText}>New Password</Text>
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
                          color: FontColor.white,
                        }}
                        placeholder="Enter New Password"
                        placeholderTextColor={FontColor.white}
                        secureTextEntry={true}
                      />
                    </View>
                  </View>
                </View>
                <View style={{marginTop: 13, marginBottom: 22}}>
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
                          color: FontColor.white,
                        }}
                        placeholder="Enter New Password"
                        placeholderTextColor={FontColor.white}
                        secureTextEntry={true}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  // onPress={() => navigation.navigate('Signin')}
                  >
                  <LinearGradient
                    colors={[
                      theme.purpleLightLinearGradient,
                      theme.purpleDarkLinearGradient,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    useAngle={true}
                    angle={160}
                    style={style.changeLinearView}>
                    <Text style={{color: FontColor.white, fontSize: 15}}>
                      Change
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
export default ChangePassword;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    width: '100%',
    height: '35%',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changePassText: {
    color: FontColor.white,
    opacity: 0.5,
    fontSize: 16,
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
    backgroundColor: theme.gray,
    paddingVertical: 12,
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
  changeLinearView: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },
});
