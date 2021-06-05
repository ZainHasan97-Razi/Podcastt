import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    Dimensions,
    ImageBackground
} from 'react-native';
import { FontColor } from '../../constants/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Profile = ({ navigation }) => {
    //   const {user} = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [editProfile, setEditProfile] = useState(true);

    const updateHandler = () => {
        setEditProfile(!editProfile);
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/bakcgroundimage2.png')}
                style={{ width: "100%", height: "100%" }}
            >
                <GlobalHeaderNew
                    // leftArrow={true}
                    HeadingText="Add a podcast"
                    navigation={navigation}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.txtTitle}>Title</Text>
                    <TextInput style={styles.inputStyle}/>

                    <Text style={styles.txtTitle}>Video/Podcast url</Text>
                    <TextInput style={styles.inputStyle}/>

                    <Text style={styles.txtTitle}>Description</Text>
                    <TextInput 
                        multiline={true}
                        style={{...styles.inputStyle,minHeight:100}}
                    />

                    <TouchableOpacity style={styles.btnPost}>
                        <Text style={styles.txtPost}>
                            POST
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Color.purple,
    },
    txtPost:{
        color:"#fff", fontWeight:"bold", alignSelf:"center",
        fontSize:16
    },
    btnPost:{
        width: WIDTH*0.9, alignSelf:"center", backgroundColor:FontColor.purple,
        height:55, borderRadius:5, marginVertical: 30, alignSelf:"center",
        justifyContent:"center"
    },
    inputStyle:{
        width: WIDTH*0.9, minHeight: 55, backgroundColor:"rgba(255,255,255, 0.4)",
        alignSelf:"center", marginTop:5, borderRadius:4,
        paddingVertical:0,paddingHorizontal:10
    },
    txtTitle:{
        width:WIDTH*0.9, alignSelf:"center", fontSize:16, color: FontColor.white,
        marginTop:20, fontWeight:"bold"
    }
});
