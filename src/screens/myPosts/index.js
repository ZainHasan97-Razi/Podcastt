import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Audio } from 'expo-av';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import PostCard from '../../components/PostCard'

import axios from 'axios';
import { baseURL } from '../../config/BaseURL'
import AsyncStorage from '@react-native-community/async-storage'

const MyPosts = ({ navigation }) => {
  const [getPodcastList, setPodcastList] = useState([]);

  useEffect(() => {
    (async () => {
      let user = await AsyncStorage.getItem('uid')
      console.log('This is userIddddd', user)
      GetPodcastList(user);
    })()
  }, [])

  const GetPodcastList = async (userId) => {
    try {
      const response = await axios.get(`${baseURL}/podcast/get-mypodcast?uid=${userId}`)
      // console.log(response.data, 'This is get api respnse');
      setPodcastList([...response.data.result]);
    } catch (err) {
      console.log('Api failed get-podcasts', err);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bakcgroundimage2.png')}
        style={{ width: '100%', height: '100%' }}>
        <GlobalHeaderNew
          // leftArrow={true}
          navigation={navigation}
          HeadingText='My Posts'
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '95%', alignSelf: 'center' }}>

            <Text style={styles.postText}>Posts</Text>

            {/* ====== Post card ====== */}
            {getPodcastList.map((v, i) => {
              return <PostCard
                key={i}
                title={v.title}
                description={v.description}
              />
            })}
            {/* === Post Card Ended here === */}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
// }
export default MyPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
