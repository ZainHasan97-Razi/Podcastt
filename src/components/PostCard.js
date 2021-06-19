import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, TextInput, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { theme, FontColor } from '../constants/Theme';
import { Audio } from 'expo-av';
import { baseURL } from '../config/BaseURL'

const PostCard = ({ title, description, audioUrl, deleteIcon,
  postId, name, deletePodcast }) => {
  const [like, setLike] = useState(false)
  const [sound, setSound] = useState();
  const [comment, setComment] = useState('')
  const [toggleComment, setToggleComment] = useState(false)
  const [commentArr, setCommentArr] = useState([
    {
      id: 123,
      text: 'Praesent eu dolor eu orci vehicula',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F11%2F17%2Fmichael-b-jordan-horizontal.jpg'
    },
    {
      id: 123,
      text: 'Lorem Epsum eu dolor eu orci vehicula is a lu very eu dolor eu orci vehicula',
      img: 'https://api.time.com/wp-content/uploads/2014/05/166259035.jpg?w=824&quality=70'
    },
  ])

  const PostComment = () => {
    setCommentArr([...commentArr, {
      id: 1,
      img: 'https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg',
      text: comment
    }])
    setComment('')
  }

  const handlePressComment = () => {
    setToggleComment(!toggleComment)
  };
  const handlePressLike = () => {
    setLike(!like)
  };
  async function playSound() {
    console.log('Loading Sound');
    console.log('This is audio url', `${baseURL}/${audioUrl}`)
    const { sound } = await Audio.Sound.createAsync(
      { uri: `${baseURL}/${audioUrl}` }
      // { uri: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.m4a" }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  async function stopSound() {
    console.log('Unloading Sound');
    // sound.unloadAsync();
    setSound(undefined)
  }
  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  return <View style={{ marginBottom: 5 }}>
    <View style={styles.view1postCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{uri: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'}}
          style={styles.imgAvatar}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.txtName}>
            {name}
          </Text>
          <Text style={styles.txtPremiered}>
            Premiered Sep 5, 2019
            </Text>
        </View>
      </View>

      {deleteIcon ?
        <TouchableOpacity
          onPress={() => deletePodcast()}
          style={{ paddingHorizontal: 5 }}
        >
          <MaterialIcons size={28} name="delete" color='#bbb' />
        </TouchableOpacity>
        :
        <TouchableOpacity>
          <Image
            source={require('../assets/icons/more.png')}
            style={{ width: 8, height: 25, marginRight: 15 }}
          />
        </TouchableOpacity>
      }
    </View>

    <Text style={{ ...styles.postCardText, fontSize: 17, fontWeight: "bold" }}>
      {title}
    </Text>
    <Text style={styles.postCardText}>
      {description}
    </Text>

    <View style={{ marginTop: 10 }}>
      {/* <Image
				source={require('../assets/MaskGroup3.png')}
				style={styles.cardImgStyle}
			/> */}
      <TouchableOpacity
        onPress={sound ? stopSound : playSound}
        style={{ ...styles.btnPlay, backgroundColor: sound ? '#cf142b' : '#fff' }}>
        <Text style={{ fontWeight: "bold", color: sound ? '#fff' : '#000' }}>
          {sound ? 'STOP' : 'PLAY'}
        </Text>
      </TouchableOpacity>

      {/* yaha sa Linear Gradient wala masla start ha */}
      <View style={styles.view2postCard}>
        <LinearGradient
          colors={['#637DCF', '#3C4C7E']}
          style={styles.linearGradientStyle}>
          <View style={styles.view3postCard}>
            <View style={styles.view4postCard}>
              <TouchableOpacity onPress={handlePressLike}>
                <Image
                  source={require('../assets/icons/thumbsUp.png')}
                  style={{ ...styles.imgThumb, tintColor: like ? FontColor.purple : '#fff' }} />
              </TouchableOpacity>
              <Text style={styles.likeText}>Like</Text>
            </View>
            <TouchableOpacity
              onPress={handlePressComment}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/comment.png')}
                style={{ width: 25, height: 24, alignSelf: 'center' }}
              />
              <Text style={styles.commentStyle}>Comment</Text>
            </TouchableOpacity>
          </View>

          {/* == Comment section here == */}
          {toggleComment ? (
            <View style={styles.viewComment1}>
              {commentArr.map((v, i) => {
                return <View key={i} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <View style={{ flex: 1 }}>
                    {v.id != 1 ?
                      <Image
                        source={{ uri: v.img }}
                        style={styles.commentedUserImg}
                      /> : null
                    }
                  </View>
                  <View style={v.id == 1 ? styles.myComment : styles.viewComment2}>
                    <Text style={styles.commentText}>
                      {v.text}
                    </Text>
                  </View>
                </View>
              })}
              <View style={styles.viewComment3}>
                <TextInput
                  value={comment}
                  onChangeText={(txt) => setComment(txt)}
                  style={styles.commentTextInput}
                  placeholder="Type a comment"
                  placeholderTextColor="#ffffff"
                />
                <TouchableOpacity onPress={PostComment} style={styles.sendButton}>
                  <Image
                    source={require('../assets/icons/paperPlane.png')}
                    style={styles.imgPaperplane}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </LinearGradient>
      </View>
    </View>
  </View>
}
export default PostCard;

const styles = StyleSheet.create({
  imgThumb: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  myComment: {
    margin: 2,
    flex: 9,
    margin: 10,
    marginLeft: 0,
    backgroundColor: '#bbb',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 12
  },
  btnPlay: {
    height: 40,
    alignSelf: "center",
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 30
  },
  imgPaperplane: {
    width: 20,
    height: 21,
    borderWidth: 2,
    marginTop: 12,
  },
  txtName: {
    fontSize: 13,
    color: theme.white,
  },
  txtPremiered: {
    fontSize: 10,
    color: theme.white,
    opacity: 0.9,
  },
  imgAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 15,
  },
  viewOnImg: {
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textOnImg1: {
    fontSize: 22,
    color: theme.white,
    marginLeft: 25,
  },
  textOnImg2: {
    fontSize: 18,
    color: theme.white,
    marginLeft: 25,
    marginBottom: 10,
    opacity: 0.7,
  },
  postText: {
    fontSize: 30,
    color: theme.white,
    marginLeft: 10,
    marginTop: 20,
  },
  view1postCard: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postCardText: {
    fontSize: 15,
    color: theme.white,
    marginLeft: 20,
    marginTop: 5,
    opacity: 0.9,
  },
  cardImgStyle: {
    width: '100%',
    height: 210,
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  // **** Yaha pa masla ha height wala ******
  view2postCard: {
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  linearGradientStyle: {
    width: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: 'column',
    alignContent: 'center',
  },
  view3postCard: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  view4postCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeText: {
    color: theme.white,
    fontSize: 15,
    opacity: 0.7,
    // marginTop: 12,
    marginLeft: 5,
  },
  view5postCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dislikeText: {
    color: theme.white,
    fontSize: 15,
    opacity: 0.7,
    // marginTop: 12,
    marginLeft: 5,
  },
  commentStyle: {
    color: theme.white,
    fontSize: 15,
    // marginTop: 6,
    marginLeft: 5,
  },
  viewComment1: {
    flexDirection: 'column',
    marginTop: 5,
    backgroundColor: '#6D7DAD',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 10,
  },
  commentedUserImg: {
    width: 40,
    height: 40,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 22,
  },
  viewComment2: {
    // margin: 2,
    flex: 4,
    margin: 10,
    marginLeft: 0,
    backgroundColor: '#8D9AC2',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  commentText: {
    margin: 5,
    fontSize: 13,
    color: '#fff',
    margin: 10,
  },
  viewComment3: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  commentTextInput: {
    height: 50,
    width: '80%',
    paddingLeft: 20,
    color: '#fff',
    backgroundColor: '#8590B2',
    borderBottomLeftRadius: 16,
    fontSize: 14,
    justifyContent: 'center',
  },
  sendButton: {
    width: '20%',
    alignItems: 'center',
    borderBottomRightRadius: 16,
    backgroundColor: '#9EA7C3',
    height: '100%',
  }
})