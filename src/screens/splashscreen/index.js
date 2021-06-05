import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    StatusBar,
    Text,
    ImageBackground
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import LOGO from '../../assets/images/swimage.png';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SplashScreen = (props) => {
    const delayedNavigation = (name) => {
        setTimeout(() => {
            props.navigation.navigate(name)
        }, 2600);
    };

    useEffect(() => {
        delayedNavigation('AuthNavigator');
    }, []);

    return <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
                source={require('../../assets/bakcgroundimage2.png')}
                style={{ width: '100%', height: '100%', justifyContent:"center", alignItems:"center" }}>
            <Image
                source={LOGO}
                style={{ width: WIDTH * 0.4, height: WIDTH * 0.4 }}
                resizeMode="contain"
            />
            <Text style={{color:"#fff", fontSize:32, marginTop:20, fontWeight:"bold"}}>
                Podcastt
            </Text>
        </ImageBackground>
    </View>
    // return <View>
    //     <Text>Hello splashscreen</Text>
    // </View>
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center", justifyContent:"center",
        backgroundColor:'indigo'
    },
});