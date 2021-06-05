import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme, FontColor, Fonts} from '../../constants/Theme';
import {LinearGradient} from 'expo-linear-gradient';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';

const TermsandCondition = ({navigation}) => {
    return (
        <View style={style.container}>
          <ImageBackground
            source={require('../../assets/bakcgroundimage2.png')}
            style={{width: '100%', height: '100%'}}>
            <GlobalHeaderNew
              leftArrow={true}
              HeadingText="Terms and Conditions"
              navigation={navigation}
              />
            <ScrollView>
            <View style={{width: '92%', alignSelf: 'center', marginBottom: 20}}>
              <View style={{borderColor: 'white', marginTop: 22}}>
                <Text
                  style={{
                    color: FontColor.white,
                    fontSize: 27,
                  }}>
                  Welcome to Podcastt
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  These terms and conditions outline the rules and regulations
                  for the use of Company Name's Website, located at Website.com.{' '}
                  {'\n'}
                  {'\n'}By accessing this website we assume you accept the terms
                  and conditions. Do not continue to use Website Name if you do
                  not agree to take all of the terms and conditions stated on
                  this page.
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text
                  style={{
                    color: FontColor.white,
                    fontSize: 27,
                  }}>
                  Cookies
                </Text>
              </View>
              <View style={{marginTop: 5}}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  We employ the use of cookies. By accessing Website Name, you
                  agreed to use cookies in agreement with the Company Name's
                  Privacy Policy. {'\n'}
                  {'\n'}
                  Most interactive websites use cookies to let us retrieve the
                  user's details for each visit. Cookies are used by our website
                  to enable the functionality of certain areas to make it easier
                  for people visiting our website. Some of our
                  affiliate/advertising partners may also use cookies.
                </Text>
              </View>
              {/* <TouchableOpacity
                onPress={() => navigation.navigate('Privacypolicy')}
                style={{marginTop: 5}}> */}
                <Text
                  style={{
                    color: FontColor.white,
                    fontSize: 27,
                  }}>
                  License
                </Text>
              {/* </TouchableOpacity> */}
              <View style={{marginTop: 5, marginBottom: 7}}>
                <Text style={{color: FontColor.white, fontSize: 15}}>
                  You must not:
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <LinearGradient
                  colors={[
                    theme.circleLightPurpleLinearGradient,
                    theme.circleDarkPurpleLinearGradient,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={180}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 360,
                    backgroundColor: 'blue',
                    top: 4,
                    marginRight: 13,
                  }}></LinearGradient>
                <View>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                    Republish material from Website Name.
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <LinearGradient
                  colors={[
                    theme.circleLightPurpleLinearGradient,
                    theme.circleDarkPurpleLinearGradient,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={180}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 360,
                    backgroundColor: 'blue',
                    top: 4,
                    marginRight: 13,
                  }}></LinearGradient>
                <View>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                    Sell, rent or sub-license material from Website.
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <LinearGradient
                  colors={[
                    theme.circleLightPurpleLinearGradient,
                    theme.circleDarkPurpleLinearGradient,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={180}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 360,
                    backgroundColor: 'blue',
                    top: 4,
                    marginRight: 13,
                  }}></LinearGradient>
                <View>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                    Reproduce, duplicate or copy material from Website Name
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <LinearGradient
                  colors={[
                    theme.circleLightPurpleLinearGradient,
                    theme.circleDarkPurpleLinearGradient,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={180}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 360,
                    backgroundColor: 'blue',
                    top: 4,
                    marginRight: 13,
                  }}></LinearGradient>
                <View>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                    Reproduce, duplicate or copy material from Website Name
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <LinearGradient
                  colors={[
                    theme.circleLightPurpleLinearGradient,
                    theme.circleDarkPurpleLinearGradient,
                  ]}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  useAngle={true}
                  angle={180}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 360,
                    backgroundColor: 'blue',
                    top: 4,
                    marginRight: 13,
                  }}></LinearGradient>
                <View>
                  <Text style={{color: FontColor.white, fontSize: 15}}>
                    Redistribute content from Website Name
                  </Text>
                </View>
              </View>
            </View>
            </ScrollView>
          </ImageBackground>
        </View>
    );
  }
export default TermsandCondition;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
