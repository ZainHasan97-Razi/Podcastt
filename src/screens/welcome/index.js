import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {
    theme,
    FontColor,
    BottonHeight,
    InputHeight,
} from '../../constants/Theme';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('../../assets/images/backgroundimage2.png')}
                    style={{ width: '100%', height: '100%' }}
                // resizeMode={"stretch"}
                >
                    <View style={{ marginTop: '25%' }}>
                        <Image
                            source={require('../../assets/images/swimage.png')}
                            style={{ width: 120, height: 120, alignSelf: 'center' }}
                        // resizeMode={"stretch"}
                        />

                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 30,
                                alignSelf: 'center',
                                marginTop: 80,
                            }}>
                            Welcome
              </Text>
                        <Text style={styles.textPara}>
                            Integer at faucibus urna. Nullam condimentum leo id elit
                            sagittis
              </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={styles.buttonStyles}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#B565F3', '#563671']}
                                style={styles.linearGradientStyles}>
                                <Text style={{ color: '#fff', fontSize: 15 }}>Sign in</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                            style={styles.buttonStyles2}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#6C88E1', '#364471']}
                                style={styles.linearGradientStyles}>
                                <Text style={{ color: '#fff', fontSize: 15 }}>Sign up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010020',
    },
    textPara: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        opacity: 0.5,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
    },
    buttonStyles: {
        width: '86%',
        alignSelf: 'center',
        marginTop: 20,
        borderColor: '#fff',
        height: BottonHeight.height,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    buttonStyles2: {
        width: '86%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60,
        borderColor: '#fff',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    linearGradientStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
