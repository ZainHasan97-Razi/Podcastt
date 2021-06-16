import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import PostCard from '../../components/PostCard'
import axios from 'axios';
import { baseURL } from '../../config/BaseURL'

const NewsFeed = ({ navigation }) => {
  const [getPodcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    GetPodcastList();
  }, []);

  const GetPodcastList = async (page) => {
    try {
      setLoading(true)
      const response = await axios.get(`${baseURL}/podcast/get-podcast`)
      console.log(response.data.paginateResult, 'This is get api respnse');
      setPodcastList([...response.data.paginateResult]);
    } catch (err) {
      console.log('Api failed get-podcasts', err);
    } finally {
      setLoading(false)
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
          HeadingText='Feeds'
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '95%', alignSelf: 'center' }}>

            <Text style={styles.postText}>Posts</Text>
            {loading ?
              <ActivityIndicator style={{marginTop: '50%'}} color={'#fff'} size={40} /> :
              getPodcastList.map((v, i) => {
                return <PostCard
                  key={i}
                  title={v.title}
                  description={v.description}
                  audioUrl={v.audioUrl}
                />
              })
            }

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
// }
export default NewsFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
