import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'expo-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './feed';
import {Fonts, FontColor, theme} from './constant/theme';
import HomeEvent from '../screens/HomeEvent';
import HomeMusic from '../screens/HomeMusic';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Posts', 'Videos', 'Events', 'Music'],
      activeItem: 'Posts',
    };
  }
  navs = {
    Home: 'Posts',
  };
  render() {
    return (
      <View
        style={[
          styles.Container,
          {
            width: this.props.width ? this.props.width : '100%',
            alignSelf: 'center',
          },
        ]}>
        <Text
          style={{
            color: '#fff',
            fontSize: 28,
            fontFamily: Fonts.medium,
            // top: 20,
          }}>
          Latest Feeds
        </Text>
        <View
          style={{
            height: 400,
            flexDirection: 'row',
            width: '100%',
            flex: 1,
          }}>
          <View
            style={{
              flex: 0.1,
              width: '100%',
              justifyContent: 'center',
              height: '100%',
              // justifyContent: 'center',
              // alignItems: 'center',
              // width: 400,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                height: '100%',
                flex: 1,
                width: '100%',
                // flexDirection: 'row',
              }}>
              {this.state.items.map(v => (
                <TouchableOpacity
                  onPress={() => this.setState({activeItem: v})}
                  style={{
                    flex: 0.25,
                    justifyContent: 'space-around',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      flex: 0.35,
                      width: 70,
                      // height: 40,
                      // backgroundColor: 'red',
                      textAlign: 'center',
                      borderBottomColor:
                        this.state.activeItem == v ? 'white' : 'transparent',
                      borderBottomWidth: 2,
                      transform: [{rotateZ: '-90deg'}],
                      color: FontColor.white,
                      fontSize: 21,
                      // marginLeft: 4,
                    }}>
                    {v}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={{
              flex: 0.9,
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'space-between',
                marginVertical: 20,
                // backgroundColor: 'red',
                flex: 1,
                width: '95%',
                height: '100%',
              }}>
              <LinearGradient
                colors={['#667fd4', '#3e4e82']}
                style={{
                  padding: 8,
                  borderRadius: 18,
                  flex: 0.3,
                  // flex: 0.9,
                  width: '100%',
                }}>
                <TextInput
                  style={{
                    flex: 0.5,
                    color: '#fff',
                    backgroundColor: '#89a0e6',
                    borderRadius: 12,
                    overflow: 'hidden',
                    paddingHorizontal: 10,
                    width: '100%',
                    height: 45,
                  }}
                  placeholder="Have say to something"
                  placeholderTextColor="#c8cee0"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 0.5,
                    width: '60%',
                    marginTop: 12,
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity style={{flex: 0.2}}>
                    <EvilIcons name="camera" size={29} color="#c8cee0" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 0.2}}>
                    <Fontisto name="photograph" size={23} color="#c8cee0" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex: 0.2}}>
                    <EvilIcons name="location" size={29} color="#c8cee0" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      left: '92%',
                      flex: 1,
                      top: 5,
                      zIndex: 1,
                      borderRadius: 13,
                      width: '70%',
                    }}>
                    <LinearGradient
                      style={{
                        justifyContent: 'center',
                        borderRadius: 13,
                        zIndex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
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
              <View
                style={{
                  overflow: 'hidden',
                  flex: 0.4,
                  // flex: 0.33,
                  justifyContent: 'center',
                  marginTop: 30,
                  height: 100,
                  width: '97%',
                  alignSelf: 'center',
                }}>
                <Text style={{color: FontColor.white, fontSize: 16}}>
                  Integer at faucibus urna. Nullam condimentum leo id elit
                  sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec
                  elementum.
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  flex: 0.2,
                  // flex: 0.33,
                  marginLeft: 12,
                  width: 220,
                  zIndex: 1,
                  borderRadius: 13,
                }}>
                <LinearGradient
                  style={{
                    justifyContent: 'center',
                    borderRadius: 13,
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%',
                    height: 50,
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#ae6ce1', '#5b3978']}>
                  <MaterialCommunityIcons
                    name="mailbox-outline"
                    size={24}
                    color={'#fff'}
                  />
                  <Text
                    style={{
                      color: '#fff',
                      marginLeft: 8,
                      fontFamily: Fonts.light,
                      fontSize: 16,
                    }}>
                    The quickundefined
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.state.activeItem == 'Posts' && (
          <Feed screenProps={this.props.screenProps} />
        )}
        {this.state.activeItem == 'Videos' && (
          <View>
            {[
              require('../../assets/images/Group260.png'),
              require('../../assets/images/Group260.png'),
            ].map((value, index) => {
              return (
                <View
                  style={{
                    marginTop: 10,
                    width: this.props.width ? this.props.width : '100%',
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        // this.props.navigation.navigate('PostView');
                        // console.log(
                        //   'Prop',
                        //   this.props.screenProps.rootNavigation,
                        // );
                        this.props.screenProps.rootNavigation.navigate(
                          'ProfileNavigator',
                        );
                      }}
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <View style={{width: 55, height: 55}}>
                        {/* {this.props.activeItem == "Posts" &&  */}
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={require('../../assets/images/emo.png')}
                          resizeMode={'stretch'}
                        />
                        {/* } */}
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text style={{color: FontColor.white, fontSize: 18}}>
                          Lil Nas X
                        </Text>
                        <Text style={{color: FontColor.gray, fontSize: 13}}>
                          Post Sep 5, 2020
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          drop: !this.state.drop,
                        });
                      }}
                      style={{
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                      }}>
                      <Feather
                        name="more-vertical"
                        size={32}
                        color={FontColor.white}
                        style={{alignSelf: 'flex-end'}}
                      />
                    </TouchableOpacity>
                    {this.state.drop && (
                      <View
                        style={{
                          backgroundColor: FontColor.blue,
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 100,
                          top: 23,
                          zIndex: 1565,
                          right: 13,
                          borderRadius: 4,
                          position: 'absolute',
                        }}>
                        {['Hide this', 'Report'].map((v, i) => {
                          return (
                            <TouchableOpacity
                              onPress={() => {
                                this.setState({
                                  drop: false,
                                });
                              }}
                              style={{
                                width: '90%',
                                borderBottomWidth: 1,
                                borderColor: 'black',
                                height: 35,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Text
                                style={{
                                  width: '90%',
                                  // height: 30,
                                  fontFamily: Fonts.medium,
                                  textAlign: 'center',
                                  color: FontColor.white,
                                }}>
                                {v}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      marginVertical: 10,
                    }}>
                    <Text
                      style={{
                        color: FontColor.white,
                        fontSize: 16,
                        width: '95%',
                        alignSelf: 'center',
                      }}>
                      Integer at faucibus urna. Nullam condimentum leo id elit
                      sagittis auctor.
                    </Text>
                    <View style={{width: '100%', alignSelf: 'center'}}>
                      {/* ====== Post card ====== */}
                      <View style={{marginVertical: 10}}>
                        <TouchableOpacity
                          // onPress={() => {
                          //   this.props.screenProps.rootNavigation.navigate(
                          //     'PostView1',
                          //   );
                          // }}
                          onPress={() => {
                            // this.props.navigation.navigate('PostView');
                            // console.log(
                            //   'Prop',
                            //   this.props.screenProps.rootNavigation,
                            // );
                            this.props.screenProps.rootNavigation.navigate(
                              value.active ? 'PostView1' : 'PostView',
                            );
                          }}>
                          <Image
                            source={value}
                            style={styles.cardImgStyle}
                            resizeMode={value.active ? 'stretch' : 'cover'}
                          />
                        </TouchableOpacity>
                        {/* yaha sa Linear Gradient wala masla start ha */}
                        <View style={styles.view2postCard}>
                          <LinearGradient
                            colors={['#637DCF', '#3C4C7E']}
                            style={styles.linearGradientStyle}>
                            <View style={styles.view3postCard}>
                              <View style={styles.view4postCard}>
                                <TouchableOpacity
                                  style={{flexDirection: 'row'}}
                                  onPress={() => {
                                    this.setState(function() {
                                      return (value.like = !value.like);
                                    });
                                  }}>
                                  <Image
                                    source={require('../../assets/icons/thumbsUp.png')}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      tintColor: value.like
                                        ? FontColor.green
                                        : FontColor.white,
                                      alignSelf: 'center',
                                    }}
                                  />
                                  <Text style={styles.likeText}>751k</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.view5postCard}>
                                <TouchableOpacity
                                  style={{flexDirection: 'row'}}>
                                  <Image
                                    source={require('../../assets/icons/thumbsDown.png')}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      alignSelf: 'center',
                                      marginTop: 8,
                                    }}
                                  />
                                  <Text style={styles.dislikeText}>16k</Text>
                                </TouchableOpacity>
                              </View>
                              <TouchableOpacity
                                onPress={() =>
                                  this.setState(function() {
                                    return (value.comment = !value.comment);
                                  })
                                }
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                {/* <TouchableOpacity> */}
                                <Image
                                  source={require('../../assets/icons/comment.png')}
                                  style={{
                                    width: 25,
                                    height: 24,
                                    alignSelf: 'center',
                                  }}
                                />
                                {/* </TouchableOpacity> */}
                                <Text style={styles.commentStyle}>Comment</Text>
                              </TouchableOpacity>
                            </View>

                            {/* == Comment section here == */}
                            {value.comment ? (
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
                      {/* === Post Card Ended here === */}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
        {this.state.activeItem == 'Events' && (
          <View>
            <HomeEvent screenProps={this.props.screenProps} />
          </View>
        )}
        {this.state.activeItem == 'Music' && (
          <View>
            <HomeMusic screenProps={this.props.screenProps} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDECED',
  },
  tabbar: {
    backgroundColor: '#205493',
  },
  tab: {
    width: 110,
    height: 80,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  indicator: {
    width: 110,
    height: 80,
    backgroundColor: '#F6F7F8',
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Source Sans Pro',
    paddingTop: 5,
    color: '#F6F7F8',
    backgroundColor: 'transparent',
  },
  cardImgStyle: {
    width: '100%',
    height: 270,
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
