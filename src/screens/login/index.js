import React, { useState } from 'react';
import {
    View, TouchableOpacity, StyleSheet, ScrollView, Text,
    TextInput, Image, ImageBackground,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { theme, FontColor } from '../../constants/Theme';

const Login = ({ navigation }) => {
    return <View style={styles.container}>
        <ImageBackground
            source={require('../../assets/bakcgroundimage2.png')}
            style={{ width: '100%', height: '100%' }}>
            <View style={styles.logoView}>
                <View style={{ width: 89, height: 88 }}>
                    <Image
                        source={require('../../assets/swimage.png')}
                        style={{ width: 89, height: 88 }}
                    />
                </View>
                <Text style={{ color: "#fff", marginBottom: -40, fontSize: 28, marginTop: 15, fontWeight: "bold" }}>
                    Sign In
                </Text>
            </View>
            <ScrollView>
                <View style={{ width: '100%', height: '63%' }}>
                    <View style={{ width: '85%', alignSelf: 'center' }}>
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.userNameHeading}>Username or Email</Text>
                            <View style={styles.emailTextView}>
                                <TextInput
                                    style={styles.emailText}
                                    // placeholder="matthew.matthews@mail.com"
                                    placeholder="user@gmail.com"
                                    placeholderTextColor={FontColor.white}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.passwordText}>Password</Text>
                            <View style={styles.passwordView}>
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
                                        placeholderTextColor={FontColor.white}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.forgetPassView}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ForgetPassword')}>
                                <Text style={styles.forgetPassText}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AppNavigator')}>
                            <LinearGradient
                                colors={[
                                    theme.purpleLightLinearGradient,
                                    theme.purpleDarkLinearGradient,
                                ]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                useAngle={true}
                                angle={160}
                                style={styles.SigninLinearView}>
                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                    Sign in
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.bottomTextView}>
                            <Text style={styles.notUserView}>Not a user?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Signup')}>
                                <Text style={styles.signUpTextButton}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    </View>
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoView: {
        width: '100%',
        height: '37%',
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: theme.gray,
        paddingVertical: 12,
        paddingLeft: 19,
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailText: {
        width: '80%',
        padding: 0,
        opacity: 0.7,
        fontSize: 15,
        color: FontColor.white,
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
    forgetPassView: {
        alignItems: 'flex-end',
        marginTop: 3,
        marginBottom: 15,
    },
    forgetPassText: {
        color: FontColor.white,
        fontSize: 18,
        // fontFamily: Fonts.regular,
    },
    SigninLinearView: {
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 15,
    },
    bottomTextView: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    notUserView: {
        color: FontColor.white,
        opacity: 0.5,
        fontSize: 16,
        marginRight: 12,
    },
    signUpTextButton: {
        color: FontColor.white,
        fontSize: 16,
        // fontFamily: Fonts.regular,
    },
})








