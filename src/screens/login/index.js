import React, { useState, useEffect } from 'react';
import {
    View, TouchableOpacity, StyleSheet, ScrollView, Text,
    TextInput, Image, ImageBackground, ActivityIndicator
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { theme, FontColor } from '../../constants/Theme';

import axios from 'axios'
import { baseURL } from '../../config/BaseURL'
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=> {
        (async () => {
            let user = await AsyncStorage.getItem('uid')
            console.log('CHecking tokenn', user)
            if(user !== undefined && user !== null) {
                navigation.navigate('AppNavigator') 
            }
        })() 
    },[])

    const LoginHandler = (event) => {
        event.preventDefault();
        if(email !== '' || password !== '') {
            setLoading(true)
            let formdata = new FormData();
            formdata.append('email', email);
            formdata.append('password', password);
            try {
                axios.post(`${baseURL}/auth/login`, formdata, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(res => {
                    const {token, userId} = res.data;
                    console.log(res.data,'res.dataaaaaaaaaaaaaaaaaaa')
                    console.log('New res dataaaaaaa',token, userId)
                    AsyncStorage.setItem('uid', JSON.stringify(userId))
                    AsyncStorage.setItem('token', JSON.stringify(token));

                    navigation.navigate('AppNavigator')
                    console.log(res)
                  
                    alert('Logging in user is success')
                    // return res.json();
                    setLoading(false);
                })
               
            } catch (err) {
                console.log(err)
                if (err.status === 402) {
                    setError('Email may already exist!')
                    alert(error)
                }
                alert(err)
                setLoading(false)
            }
        }
        else {
            setError("Fields shoundn't be empty");
            alert(error)
            setLoading(false)
        }
    }

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
                                    value={email}
                                    onChangeText={(text)=> setEmail(text)}                                    placeholder="user@gmail.com"
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
                                        value={password}
                                        onChangeText={(text)=> setPassword(text)}
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
                            onPress={(e)=> LoginHandler(e) }
                            // onPress={() => navigation.navigate('AppNavigator')}
                            >
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
                                {isLoading ? 
                                    <ActivityIndicator color='#fff' /> :
                                    <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                        Sign in
                                    </Text>
                                }
                                
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








