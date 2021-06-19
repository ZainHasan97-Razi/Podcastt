import React, { useEffect, useState } from 'react';
import {
    View, Text, ImageBackground, StyleSheet, ActivityIndicator,
    ScrollView, Image, TextInput, TouchableOpacity,
} from 'react-native';
import { theme, FontColor, BottonHeight, InputHeight } from '../../constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';

import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { baseURL } from '../../config/BaseURL';

const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
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

    const SignupHandler = async (event) => {
        event.preventDefault();
        if(name !== '' || email !== '' || password !== '') {
            setLoading(true)
     

            try {
                axios.post(`${baseURL}/auth/signup`,{email,password,name})
                .then(res => {
                    alert('Creatin user is success')
                    navigation.navigate('Login')
                    setLoading(false);
                    // return res.json();
                })
            } catch (err) {
                if (err.status === 422) {
                    setError('Email may already exist!')
                    alert(error)
                    // console.log('Error msg 422',res.status.message)
                }
                if (err.status !== 200 && res.status !== 201) {
                    setError('Creating a user failed!')
                    alert(error)
                    // console.log('Error msg 200 or 201',res.data.message)
                }
                setLoading(false)
            }
        }
        else {
            setError("Fields shoundn't be empty");
            alert(error)
            setLoading(false)
        }
        
    }

    return (
        <View style={style.container}>
            <ImageBackground
                source={require('../../assets/bakcgroundimage2.png')}
                style={{ width: '100%', height: '100%' }}>

                <ScrollView>
                    <View style={{ width: '84%', alignSelf: 'center' }}>
                        <View style={{ marginTop: 36 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ width: 51, height: 50 }}>
                                    <Image
                                        source={require('../../assets/swimage.png')}
                                        style={{ width: 51, height: 50 }}
                                    />
                                </View>
                                <View style={{ marginLeft: '20%' }}>
                                    <Text style={style.signupMainHeadingText}>Sign up</Text>
                                </View>
                            </View>


                            <View style={style.mainFormView}>
                                <Text style={style.newPassText}>Full Name</Text>
                                <View style={style.fullNameTextInputView}>
                                    <TextInput
                                        value={name}
                                        onChangeText={(text)=> setName(text)}
                                        placeholder={'Enter Full Name'}
                                        style={style.fullNameTextInput}
                                        placeholderTextColor={FontColor.white}
                                    />
                                </View>
                                <Text style={style.newPassText}>Email</Text>
                                <View style={style.fullNameTextInputView}>
                                    <TextInput
                                        value={email}
                                        onChangeText={(text)=> setEmail(text)}
                                        placeholder={'Enter Email'}
                                        style={style.fullNameTextInput}
                                        placeholderTextColor={FontColor.white}
                                    />
                                </View>

                                <Text style={style.newPassText}>Password</Text>
                                <View style={style.passTextView}>
                                    <View
                                        style={{
                                            width: '83%',
                                        }}>
                                        <TextInput
                                            value={password}
                                            onChangeText={(text)=> setPassword(text)}
                                            style={style.fullNameTextInput}
                                            placeholder="Enter Password"
                                            placeholderTextColor={FontColor.white}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={(e) => SignupHandler(e)}
                                    style={{ marginTop: 24 }}>
                                    <LinearGradient
                                        colors={[
                                            theme.purpleLightLinearGradient,
                                            theme.purpleDarkLinearGradient,
                                        ]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        useAngle={true}
                                        angle={160}
                                        style={style.SigninLinearView}>
                                        {isLoading ? 
                                            <ActivityIndicator color="#fff"/>
                                            :
                                            <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                                Sign up
                                            </Text>
                                        }
                                    </LinearGradient>
                                </TouchableOpacity>
                                <View style={style.bottomTextView}>
                                    <Text style={style.notUserView}>Already a user?</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Login')}>
                                        <Text style={style.signUpTextButton}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center', marginTop: 26 }}>
                                    <Text
                                        style={[{ color: FontColor.white }, style.bottomTwoTexts]}>
                                        By creating an account you agree to our
                                        </Text>
                                    <TouchableOpacity onPress={()=> navigation.navigate('TermsConditions')}>
                                        <Text
                                            style={[{ color: FontColor.blue }, style.bottomTwoTexts]}>
                                            terms of service
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}
export default Signup;

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    signupMainHeadingText: {
        color: FontColor.white,
        fontSize: 27,
        // fontFamily: Fonts.medium,
    },
    mainFormView: {
        width: '97%',
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: '25%'
    },
    fullNameText: {
        color: FontColor.white,
        opacity: 0.7,
        fontSize: 15,
    },
    fullNameTextInputView: {
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderRadius: 15,
        // paddingVertical: 5,
        height: InputHeight.height,
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 20
    },
    fullNameTextInput: {
        color: FontColor.white,
        opacity: 0.7,
        marginLeft: 19,
        fontSize: 15,
        padding: 0,
    },
    emailTextView: {
        borderRadius: 15,
        backgroundColor: theme.gray,
        // paddingVertical:12,
        paddingLeft: 19,
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailText: {
        width: '80%',
        padding: 0,
        // opacity:.7,
        fontSize: 15,
        color: FontColor.white,
    },
    newPassText: {
        color: FontColor.white,
        opacity: 0.7,
        marginLeft: 19,
        fontSize: 15,
        marginBottom: 4,
    },
    passTextView: {
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        // paddingVertical: 5,
        // paddingLeft:19,
        height: InputHeight.height,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SigninLinearView: {
        alignItems: 'center',
        // paddingVertical: 10,
        height: BottonHeight.height,
        justifyContent: 'center',
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
    bottomTwoTexts: {
        opacity: 0.5,
        fontSize: 12,
        // fontFamily: Fonts.regular,
    },
});
