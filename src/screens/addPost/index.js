import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Dimensions,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { FontColor } from '../../constants/Theme';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';

import axios from 'axios'
import { baseURL } from '../../config/BaseURL'
import AsyncStorage from '@react-native-community/async-storage'

const WIDTH = Dimensions.get('window').width;

const AddPost = ({ navigation }) => {
    //   const {user} = route.params;
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('');
    const [userId, setUserId] = useState('')

    useEffect(()=> {
        (async () => {
            let user = await AsyncStorage.getItem('uid')
            console.log('CHecking tokenn', user)
            setUserId(user)
        })() 
    },[])

    const addPost = () => {
        if (title !== '' || description !== '') {
          setLoading(true);
          axios
            .post(`${baseURL}/podcast/add-podcast`, {
                title : title,
                description: description,
                image: imgUrl,
                uid: userId
              }
            )
            .then((res) => {
              // console.log('add-todo API responseeeeee', res.data);
            //   setMyTodo('');
              setLoading(false);
              alert('Succesfully added');
            })
            .catch((err) => {
              console.log('Api failed add-podcast', err);
              setLoading(false);
            });
        } else {
          alert('Your fieled is empty');
        }
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
                    <TextInput
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    style={styles.inputStyle}/>

                    <Text style={styles.txtTitle}>Video/Podcast url</Text>
                    <TextInput 
                    onChangeText={(text) => setImgUrl(text)}
                    value={imgUrl}
                    style={styles.inputStyle}/>

                    <Text style={styles.txtTitle}>Description</Text>
                    <TextInput 
                        onChangeText={(text) => setDescription(text)}
                        value={description}
                        multiline={true}
                        style={{...styles.inputStyle,minHeight:100}}
                    />

                    <TouchableOpacity onPress={addPost} style={styles.btnPost}>
                        {loading ? 
                        <ActivityIndicator color="#fff" /> :
                        <Text style={styles.txtPost}>
                            POST
                        </Text>
                        }
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default AddPost;

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
