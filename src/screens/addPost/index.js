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
import { Audio } from 'expo-av';

const WIDTH = Dimensions.get('window').width;

const AddPost = ({ navigation }) => {
  //   const {user} = route.params;
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [userId, setUserId] = useState('')
  const [recording, setRecording] = useState();
  const [audioUrl, setAudioUrl] = useState('')

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
      console.log('CHecking tokenn', user)
      setUserId(user)
    })()
  }, [])

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
      formData.append('audio', { uri: localUri, name: filename, type });
      // const config = {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // }
      console.log('formdataaaaaaa', formData);
      axios
        .post(`${baseURL}/podcast/add-podcast`, formData)
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
            style={styles.inputStyle} />

          <Text style={styles.txtTitle}>Video/Podcast url</Text>
          <TextInput
            // onChangeText={(text) => setImgUrl(text)}
            value={audioUrl}
            editable={false}
            style={styles.inputStyle} />

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
