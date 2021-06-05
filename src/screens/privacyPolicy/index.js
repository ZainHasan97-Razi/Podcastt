import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { theme, FontColor, Fonts } from '../../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';

const Privacypolicy = ({ navigation }) => {
    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../../assets/bakcgroundimage2.png')}
                style={{ width: '100%', height: '100%' }}>
                <GlobalHeaderNew
                    leftArrow={true}
                    // twoWords={1}
                    // elevation={4}
                    //    leftMenu={true}
                    //   search={true}
                    //   bell={true}
                    //   profile={true}
                    HeadingText="Privacy Policy"
                    // fontSize={30}
                    // backgroundColor={'transparent'}
                    navigation={navigation}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: '92%', alignSelf: 'center', marginBottom: 20 }}>
                        <View style={{ borderColor: 'white', marginTop: 22 }}>
                            <Text
                                style={{
                                    color: FontColor.white,
                                    fontSize: 27,
                                    // fontFamily: Fonts.medium,
                                }}>
                                Welcome to Podcastt
                </Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                At Website Name, accessible at Website.com, one of our main
                                priorities is the privacy of our visitors. This Privacy Policy
                                document contains types of information that is collected and
                                recorded by Website Name and how we use it.
                  {'\n'}
                                {'\n'}
                  If you have additional questions or require more information
                  about our Privacy Policy, do not
                </Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text
                                style={{
                                    color: FontColor.white,
                                    fontSize: 27,
                                    // fontFamily: Fonts.medium,
                                }}>
                                Log Files
                            </Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                We employ the use of cookies. By accessing Website Name, you
                                agreed to use cookies in agreement with the Company Name's
                            Privacy Policy. {'\n'}
                                {'\n'}
                            Most interactive websites use cookies to let us retrieve the
                            user's details for each visit. Cookies are used by our website
                            to enable the functionality of certain areas to make it easier
                            for people visiting our website. Some of our affiliate/
                            </Text>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text
                                style={{
                                    color: FontColor.white,
                                    fontSize: 27,
                                    // fontFamily: Fonts.medium,
                                }}>
                                Cookies & Web Beacons
                            </Text>
                        </View>
                        <View style={{ marginTop: 5, marginBottom: 7 }}>
                            <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                You must not:
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <LinearGradient
                                colors={[
                                    theme.circleLightPurpleLinearGradient,
                                    theme.circleDarkPurpleLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
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
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                    Republish material from Website Name.
                  </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <LinearGradient
                                colors={[
                                    theme.circleLightPurpleLinearGradient,
                                    theme.circleDarkPurpleLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
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
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                    Sell, rent or sub-license material from Website.
                  </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <LinearGradient
                                colors={[
                                    theme.circleLightPurpleLinearGradient,
                                    theme.circleDarkPurpleLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
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
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                    Reproduce, duplicate or copy material from Website Name
                  </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <LinearGradient
                                colors={[
                                    theme.circleLightPurpleLinearGradient,
                                    theme.circleDarkPurpleLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
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
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                    Reproduce, duplicate or copy material from Website Name
                  </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 6 }}>
                            <LinearGradient
                                colors={[
                                    theme.circleLightPurpleLinearGradient,
                                    theme.circleDarkPurpleLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
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
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
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
export default Privacypolicy;

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});
