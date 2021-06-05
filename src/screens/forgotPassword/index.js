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
import {theme, FontColor, Fonts} from '../../constants/Theme';

const ForgetPassword = ({navigation}) => {
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
            <View style={{width: '100%', height: '60%'}}>
              <View style={{width: '85%', alignSelf: 'center'}}>
                <View style={{alignItems: 'center'}}>
                  <Text style={style.enterVerificationText}>
                    Enter the Verification code sent to
                  </Text>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                  user@gmail.com
                  </Text>
                </View>
                <View style={{marginTop: 25, marginBottom: 22}}>
                  <Text style={style.verificationText}>Verification Code</Text>
                  <View style={style.verificationTextInputView}>
                    <TextInput
                      style={style.codeInputText}
                      placeholder="Enter Code Here"
                      placeholderTextColor={FontColor.white}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChangePassword')}>
                  <LinearGradient
                    colors={[
                      theme.purpleLightLinearGradient,
                      theme.purpleDarkLinearGradient,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    useAngle={true}
                    angle={160}
                    style={{
                      alignItems: 'center',
                      paddingVertical: 15,
                      borderRadius: 15,
                    }}>
                    <Text style={{color: FontColor.white, fontSize: 15}}>
                      Verify
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <View style={style.bottomView}>
                  <Text style={style.receiveCodeText}>
                    Didn't receive the code?
                  </Text>
                  <TouchableOpacity>
                    <Text style={style.resendText}>Resend</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
export default ForgetPassword;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterVerificationText: {
    color: FontColor.white,
    opacity: 0.5,
    fontSize: 16,
    marginBottom: 4,
  },
  verificationText: {
    color: FontColor.white,
    opacity: 0.7,
    marginLeft: 19,
    fontSize: 15,
    marginBottom: 6,
  },
  verificationTextInputView: {
    borderRadius: 15,
    backgroundColor: theme.gray,
    paddingVertical: 12,
    paddingLeft: 19,
  },
  codeInputText: {
    padding: 0,
    opacity: 0.7,
    fontSize: 15,
    color: FontColor.white,
  },
  bottomView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  receiveCodeText: {
    color: FontColor.white,
    opacity: 0.5,
    fontSize: 16,
    marginRight: 12,
  },
  resendText: {
    color: FontColor.white,
    fontSize: 16,
  },
});
