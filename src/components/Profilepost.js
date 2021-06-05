import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme, FontColor, Fonts} from './constant/theme';
import LinearGradient from 'expo-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Followers from '../screens/ProfileFollowers';
// import Gallery from '../screens/ProfileGallery';

export default class Profilepost extends Component {
  constructor() {
    super();
    this.state = {
      eye: true,
      comment: false,
      like: false,
    };
  }
  handlePressComment = () => {
    this.setState({comment: !this.state.comment});
  };
  handlePressLike = () => {
    this.setState({like: !this.state.like});
  };
  render() {
    return (
      <View>
        <ScrollView>
          <View
            style={{
              alignSelf: 'center',
              width: '90%',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <LinearGradient
              colors={['#667fd4', '#3e4e82']}
              style={{
                padding: 8,
                borderRadius: 18,
                width: '100%',
              }}>
              <TextInput
                style={{
                  color: '#fff',
                  backgroundColor: '#89a0e6',
                  borderRadius: 12,
                  overflow: 'hidden',
                  paddingHorizontal: 10,
                  width: '100%',
                  height: 45,
                }}
                placeholder="Have Something to Say?"
                placeholderTextColor="#c8cee0"
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '60%',
                  marginTop: 12,
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity>
                  <EvilIcons name="camera" size={29} color="#c8cee0" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Fontisto name="photograph" size={23} color="#c8cee0" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <EvilIcons name="location" size={29} color="#c8cee0" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '100%',
                    // alignSelf:"flex-end",
                    bottom: -24,
                    zIndex: 1,
                    borderRadius: 13,
                  }}>
                  <LinearGradient
                    style={{
                      justifyContent: 'center',
                      borderRadius: 13,
                      zIndex: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: 110,
                      height: 45,
                    }}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ae6ce1', '#603c7e']}>
                    <FontAwesome5
                      // style={{flex: 0.4}}
                      name="pen"
                      size={15}
                      color={'#fff'}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        // flex: 0.6,
                        marginLeft: 12,
                        fontFamily: Fonts.light,
                        fontSize: 17,
                      }}>
                      Post
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
          {/* ====== Post Ended here ====== */}

          {/* ====== Post card ====== */}
          <View
            style={{
              marginBottom: 10,
              width: '100%',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <View style={styles.view1postCard}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/Ellipse.png')}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    marginLeft: 15,
                  }}
                />
                <View style={{marginLeft: 12}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: theme.white,
                      fontFamily: Fonts.medium,
                    }}>
                    Matthew Matthews
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: theme.white,
                      opacity: 0.9,
                      fontFamily: Fonts.light,
                    }}>
                    Premiered Sep 5, 2019
                  </Text>
                </View>
              </View>

              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/more.png')}
                  style={{width: 8, height: 25, marginRight: 10}}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.postCardText}>
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis
              auctor.
            </Text>

            <View style={{marginTop: 10, width: '95%', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/MaskGroup3.png')}
                style={styles.cardImgStyle}
              />

              {/* yaha sa Linear Gradient wala masla start ha */}
              <View style={styles.view2postCard}>
                <LinearGradient
                  colors={['#637DCF', '#3C4C7E']}
                  style={styles.linearGradientStyle}>
                  <View style={styles.view3postCard}>
                    <View style={styles.view4postCard}>
                      <TouchableOpacity onPress={this.handlePressLike}>
                          <Image
                            source={require('../../assets/icons/thumbsUp.png')}
                            style={{
                              width: 25, 
                              height: 25, 
                              alignSelf: 'center', 
                              tintColor:this.state.like? '#000AFF': null
                            }}
                          />
                      </TouchableOpacity>
                      
                      <Text style={styles.likeText}>751k</Text>
                    </View>
                    <View style={styles.view5postCard}>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/icons/thumbsDown.png')}
                          style={{
                            width: 25,
                            height: 25,
                            alignSelf: 'center',
                            marginTop: 8,
                          }}
                        />
                      </TouchableOpacity>
                      <Text style={styles.dislikeText}>16k</Text>
                    </View>
                    <TouchableOpacity
                      onPress={this.handlePressComment}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {/* <TouchableOpacity> */}
                      <Image
                        source={require('../../assets/icons/comment.png')}
                        style={{width: 25, height: 24, alignSelf: 'center'}}
                      />
                      {/* </TouchableOpacity> */}
                      <Text style={styles.commentStyle}>Comment</Text>
                    </TouchableOpacity>
                  </View>

                  {/* == Comment section here == */}
                  {this.state.comment ? (
                    <View style={styles.viewComment1}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                        }}>
                        <View style={{flex: 1}}>
                          <Image
                            source={require('../../assets/images/Ellipse.png')}
                            style={styles.commentedUserImg}
                          />
                        </View>
                        <View style={styles.viewComment2}>
                          {/* <ScrollView> */}
                          <Text style={styles.commentText}>
                            Praesent eu dolor eu orci vehicula
                          </Text>
                          {/* </ScrollView> */}
                        </View>
                      </View>

                      <View style={styles.viewComment3}>
                        <TextInput
                          style={styles.commentTextInput}
                          placeholder="Type a comment"
                          placeholderTextColor="#ffffff"
                        />
                        <TouchableOpacity style={styles.sendButton}>
                          <Image
                            source={require('../../assets/icons/paperPlane.png')}
                            style={{
                              width: 20,
                              height: 21,
                              borderWidth: 2,
                              marginTop: 12,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : null}
                </LinearGradient>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container:{
  //     flex:1
  // },
  postText: {
    fontSize: 30,
    fontFamily: Fonts.medium,
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
    fontFamily: Fonts.light,
    marginLeft: 20,
    marginTop: 10,
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
    fontFamily: Fonts.light,
    fontSize: 15,
    opacity: 0.7,
    marginTop: 12,
    marginLeft: 5,
  },
  view5postCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dislikeText: {
    color: theme.white,
    fontFamily: Fonts.light,
    fontSize: 15,
    opacity: 0.7,
    marginTop: 12,
    marginLeft: 5,
  },
  commentStyle: {
    color: theme.white,
    fontFamily: Fonts.light,
    fontSize: 15,
    marginTop: 6,
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
    width: 44,
    height: 44,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 22,
  },
  viewComment2: {
    margin: 2,
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
    fontFamily: Fonts.light,
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
    fontFamily: Fonts.medium,
    fontSize: 14,
    justifyContent: 'center',
  },
  sendButton: {
    width: '20%',
    alignItems: 'center',
    borderBottomRightRadius: 16,
    backgroundColor: '#9EA7C3',
    height: '100%',
  },
});
