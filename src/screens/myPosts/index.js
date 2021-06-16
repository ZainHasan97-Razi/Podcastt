import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Audio } from 'expo-av';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import PostCard from '../../components/PostCard'

import axios from 'axios';
import { baseURL } from '../../config/BaseURL'
import AsyncStorage from '@react-native-community/async-storage'

const MyPosts = ({ navigation }) => {
  const [getPodcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      let user = await AsyncStorage.getItem('uid');
      // userId = user;
      console.log('This is userIddddd', user)
      GetPodcastList(user);
    })()
  }, [])

  const GetPodcastList = async (userId) => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseURL}/podcast/get-mypodcast?uid=${userId}`)
      // console.log(response.data, 'This is get api respnse');
      setPodcastList([...response.data.result]);
    } catch (err) {
      console.log('Api failed get-podcasts', err);
    } finally {
      setLoading(false)
    }
  };
  const deletePodcast = async (id) => {
    // console.log('Deleteeeeeeeeeeeeeeee id', id);
    let user = await AsyncStorage.getItem('uid');
    axios
      .delete(`${baseURL}/podcast/delete-podcast`, {
        data: {
          post_id: id,
        }
      })
      .then((res) => {
        // console.log('Api called delete success', res);
        alert('Deleted sucessfully');
        GetPodcastList(user)
      })
      .catch((err) => {
        console.log('Api failed /delete-todo', err);
        alert("Couldn't Delete");
      });
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
            {loading ?
              <ActivityIndicator style={{ marginTop: '50%' }} color={'#fff'} size={40} />
              :
              getPodcastList.map((v, i) => {
                return <PostCard
                  key={i}
                  // postId={v._id}
                  title={v.title}
                  description={v.description}
                  deleteIcon={true}
                  deletePodcast={() => deletePodcast(v._id)}
                />
              })
            }
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
