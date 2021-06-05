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

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Profile = ({ navigation, route }) => {
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
                    HeadingText="Profile"
                    navigation={navigation}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {/* <View style={styles.viewLine} /> */}
                    <View
                        style={{ ...styles.viewImgStyle, marginBottom: editProfile ? 30 : 20 }}>
                        <Text style={{ fontSize: 45, color: '#fff', fontWeight: 'bold' }}>
                            {/* {name.slice(0, 1)} */}U
                        </Text>
                    </View>
                    {editProfile ? (
                        <View style={styles.viewDetail}>
                            <Text style={styles.txtHead}>Name :</Text>
                            <Text numberOfLines={1} style={styles.textName}>
                                {/* {name} */}User user123
                        </Text>
                        </View>
                    ) : (
                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(text) => setName(text)}
                                style={styles.inputStyle}
                                placeholder="Name"
                                value={name}
                            />
                        </View>
                    )}
                    {editProfile ? (
                        <View style={styles.viewDetail}>
                            <Text style={styles.txtHead}>Email :</Text>
                            <Text numberOfLines={1} style={styles.textName}>
                                {/* {email} */}user@gmail.com
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(text) => setEmail(text)}
                                style={styles.inputStyle}
                                placeholder="Email"
                                value={email}
                            />
                        </View>
                    )}
                    {editProfile ? (
                        <View style={styles.viewDetail}>
                            <Text style={styles.txtHead}>Contact :</Text>
                            <Text numberOfLines={1} style={styles.textName}>
                                {contact}
                            </Text>
                        </View>
                    ) : (
                        <View style={styles.viewInput}>
                            <TextInput
                                onChangeText={(text) => setContact(text)}
                                style={styles.inputStyle}
                                placeholder="Contact"
                                value={contact}
                            />
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={updateHandler}
                        style={{ ...styles.btnEdit, marginBottom: -5 }}
                    >
                        <Text style={{ color: '#fff', fontSize: 17 }}>
                            {editProfile ? 'Edit' : 'Update'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyPosts')}
                        style={styles.btnEdit}
                    >
                        <Text style={{ color: '#fff', fontSize: 17 }}>
                            View my posts
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
    viewInput: {
        width: WIDTH * 0.9,
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        alignSelf: 'center',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'rgba(209, 110, 243, 0.3)',
    },
    inputStyle: {
        flex: 1,
        // backgroundColor: 'red',
        paddingVertical: 0,
        fontSize: 16,
    },
    btnEdit: {
        paddingHorizontal: 35,
        paddingVertical: 10,
        alignSelf: 'center',
        backgroundColor: FontColor.purple,
        borderRadius: 5,
        marginVertical: 30,
    },
    Linear: {
        flex: 1,
    },
    viewDetail: {
        width: WIDTH * 0.85,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    txtHead: {
        fontSize: 19,
        color: FontColor.purple,
        fontWeight: 'bold',
    },
    viewLine: {
        height: 1,
        width: '100%',
        backgroundColor: FontColor.purple,
        marginVertical: 15,
    },
    viewImgStyle: {
        width: 110,
        height: 110,
        borderRadius: 60,
        backgroundColor: 'grey',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textName: {
        color: FontColor.white,
        fontSize: 18,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});
