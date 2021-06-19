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
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import axios from 'axios'
import { baseURL } from '../../config/BaseURL'
import AsyncStorage from '@react-native-community/async-storage'
import { Audio } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';

const WIDTH = Dimensions.get('window').width;

const AddPost = ({ navigation }) => {
  //   const {user} = route.params;
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('')
  const [recording, setRecording] = useState();
  const [audioUrl, setAudioUrl] = useState('')

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
    let localUri = result.uri;
    let fileFormat = localUri.split('.').pop();
    if(fileFormat == 'mp3' || fileFormat == 'm4a') {
      setAudioUrl(result.uri)
      alert('File is selected!')
    } else {
      alert('Only mp3 and m4a formats are supported!')
    }
    console.log('fileFormattt', fileFormat)
  }

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    setAudioUrl(uri)
  }

  useEffect(() => {
    (async () => {
      let user = await AsyncStorage.getItem('uid')
      // console.log('CHecking tokenn', user)
      setUserId(user)
			GetUserDetail(user)
    })()
  }, [])

  const GetUserDetail = async (userId) => {
		try {
			const response = await axios.get(`${baseURL}/auth/userdata?uid=${userId}`)
			console.log(response.data.userData, 'GetUserdetail responseeeeeee')
			setName(response.data.userData.name)
			// setEmail(response.data.userData.email)
		} catch (err) {
			console.log(err, 'Get user detail api failed')
		}
	}

  const addPost = () => {
    if (title !== '' || description !== '') {
      setLoading(true);
      let localUri = audioUrl;
      let filename = localUri.split('/').pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `audioUrl/${match[1]}` : `audioUrl`;

      const formData = new FormData();
      formData.append('title', title)
      formData.append('description', description)
      formData.append('uid', userId)
      formData.append('name', name)
      formData.append('audio', { uri: localUri, name: filename, type });

      console.log('formdataaaaaaa', formData);
      axios
        .post(`${baseURL}/podcast/add-podcast`, formData)
        .then((res) => {
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
            style={styles.inputStyle} 
          />

          <Text style={styles.txtTitle}>Video/Podcast url</Text>
          <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center"}}>
          <TextInput
            // onChangeText={(text) => setImgUrl(text)}
            value={audioUrl}
            multiline={true}
            editable={false}
            style={{...styles.inputStyle, width: WIDTH*0.9-60}} 
            />
            <TouchableOpacity onPress={_pickDocument} style={styles.btnPickFile}>
              <FontAwesome name="file" color="#fff" size={20} />
              <Text style={{color:"#fff", marginTop:1,fontSize:10}}>MP3</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtTitle}>Description</Text>
          <TextInput
            onChangeText={(text) => setDescription(text)}
            value={description}
            multiline={true}
            style={{ ...styles.inputStyle, minHeight: 100 }}
          />
          <TouchableOpacity 
            onPress={recording ? stopRecording : startRecording}
            style={styles.btnRecord}
          >
            <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold' }}>
              {recording ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>

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
  btnPickFile:{
    width:50,
    height:50, borderWidth:2, borderColor:"#bbb",
    marginLeft:10, marginTop:5,
    borderRadius:30, alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"rgba(255,255,255,0.2)"
  },
  btnRecord: {
    height: 60, borderRadius: 30, paddingHorizontal: 40,
    backgroundColor: '#cf142b', alignSelf: "center",
    alignItems: "center", justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  txtPost: {
    color: "#fff", fontWeight: "bold", alignSelf: "center",
    fontSize: 16
  },
  btnPost: {
    width: WIDTH * 0.9, alignSelf: "center", backgroundColor: FontColor.purple,
    height: 55, borderRadius: 5, marginVertical: 30, alignSelf: "center",
    justifyContent: "center"
  },
  inputStyle: {
    width: WIDTH * 0.9, minHeight: 55, backgroundColor: "rgba(255,255,255, 0.4)",
    alignSelf: "center", marginTop: 5, borderRadius: 4,
    paddingVertical: 0, paddingHorizontal: 10
  },
  txtTitle: {
    width: WIDTH * 0.9, alignSelf: "center", fontSize: 16, color: FontColor.white,
    marginTop: 20, fontWeight: "bold"
  }
});
