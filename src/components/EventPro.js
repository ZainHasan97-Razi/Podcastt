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
import {Container, Content} from 'native-base';
import {LinearGradient} from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts, FontColor, theme} from './constant/theme';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   items: ['Post to', 'Event', 'Profile'],
      mark: false,
      profile: false,
      activeItem: 1,
      items: [
        {
          name: 'Post to',
          color: false,
          pic: require('../assets/images/Ellipse.png'),
          notification: 'Liked Your Post',
          image: <AntDesign name="like1" size={21} color={FontColor.purple} />,
        },
        {
          name: 'Event',
          color: true,
          pic: require('../assets/images/Ellipse27.png'),
          notification: 'Liked Your Post',
          image: <AntDesign name="dislike1" size={21} color={FontColor.red} />,
        },
        {
          name: 'Profile',
          color: true,
          pic: require('../assets/images/girl.png'),
          notification: 'Posted a new photo',
          image: (
            <FontAwesome name="picture-o" size={17} color={FontColor.white} />
          ),
        },
      ],
    };
  }

  navs = {
    Home: 'Home',
  };

  onScroll = e => {
    var pos = e.nativeEvent.contentOffset;
    console.log('pos', pos);
    this.setState({items: this.state.items.concat(this.state.items)});
  };

  render() {
    console.log('active', this.state.activeItem);
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={require('../assets/bakcgroundimage2.png')}
          style={{width: '100%', height: '100%'}}>
          <Content>
            <View
              style={{
                flex: 1,
                width: '85%',
                marginTop: 6,
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {this.state.items.map((v, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        activeItem: i,
                      }),
                        v.color == false && this.props.close();
                    }}
                    style={{
                      flex: v.color ? 0.33 : 0.22,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      zIndex: 112312,
                      backgroundColor: v.color
                        ? this.state.activeItem == i
                          ? 'rgba(95,119,197,1)'
                          : 'rgba(95,119,197,0.4)'
                        : 'transparent',
                      height: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: Fonts.medium,
                        fontSize: 17,
                      }}>
                      {v.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  this.props.close();
                }}
                style={{
                  flex: 0.07,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  height: '100%',
                  width: '100%',
                }}>
                <Entypo name="cross" size={22} color={FontColor.white} />
              </TouchableOpacity>
            </View>
            {[1, 2].map((v, i) => {
              return (
                <View>
                  {this.state.activeItem == v && (
                    <View
                      style={{
                        backgroundColor: FontColor.blue,
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 18,
                      }}>
                      <View
                        style={{
                          width: '90%',
                          marginTop: 10,
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            marginVertical: 6,
                            width: '96%',
                            alignSelf: 'center',
                            color: '#fff',
                            fontFamily: Fonts.regular,
                            fontSize: 21,
                          }}>
                          Create a Post
                        </Text>
                        {this.state.activeItem == 1 && (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 16,
                                fontFamily: Fonts.medium,
                              }}>
                              Event
                            </Text>
                            <RNPickerSelect
                              Icon={() => {
                                return (
                                  <AntDesign
                                    name="caretdown"
                                    size={15}
                                    color={FontColor.white}
                                  />
                                );
                              }}
                              placeholder={{
                                label: 'Wild Out',
                                value: null,
                              }}
                              style={{
                                inputAndroid: {
                                  width: 100,
                                  top: -2,
                                },
                                iconContainer: {top: 14, right: 10},
                              }}
                              onValueChange={value => console.log(value)}
                              items={[
                                {label: 'Football', value: 'football'},
                                {label: 'Baseball', value: 'baseball'},
                                {label: 'Hockey', value: 'hockey'},
                              ]}
                            />
                          </View>
                        )}
                        <View style={{justifyContent: 'center'}}>
                          <View
                            style={{
                              width: '100%',
                              backgroundColor: '#fff',
                              height: 45,
                              borderRadius: 8,
                              opacity: 0.2,
                              position: 'absolute',
                            }}></View>
                          <TextInput
                            placeholderTextColor={FontColor.white}
                            placeholder={'Share Your thoughts'}
                            style={{
                              width: '90%',
                              height: 45,
                              top: 3,
                              paddingHorizontal: 12,
                              fontSize: 17,
                            }}
                          />
                        </View>
                        <View
                          style={{
                            marginVertical: 8,
                            paddingVertical: 10,
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomWidth: 1,
                            borderColor: FontColor.white,
                          }}>
                          <TouchableOpacity
                            style={{
                              flex: 0.3,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRightWidth: 1,
                              borderColor: FontColor.white,
                            }}>
                            <EvilIcons
                              name="camera"
                              size={52}
                              color={FontColor.white}
                            />
                            <Text
                              style={{color: FontColor.white, fontSize: 15}}>
                              Capture
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              flex: 0.3,
                              justifyContent: 'center',
                              borderRightWidth: 1,
                              borderColor: FontColor.white,
                              alignItems: 'center',
                            }}>
                            <FontAwesome
                              name="picture-o"
                              size={42}
                              color={FontColor.white}
                            />
                            <Text
                              style={{color: FontColor.white, fontSize: 15}}>
                              Upload
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              flex: 0.3,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <FontAwesome
                              name="music"
                              size={42}
                              color={FontColor.white}
                            />
                            <Text
                              style={{color: FontColor.white, fontSize: 15}}>
                              Music
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 12,
                          }}>
                          <Feather
                            name="calendar"
                            size={42}
                            color={FontColor.white}
                            style={{top: -3}}
                          />
                          <Text
                            style={{
                              fontSize: 19,
                              marginLeft: 10,
                              color: FontColor.white,
                            }}>
                            Create a new Event
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </Content>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              justifyContent: 'flex-end',
              width: '90%',
              marginBottom: 10,
              borderRadius: 13,
            }}>
            <LinearGradient
              style={{
                justifyContent: 'center',
                borderRadius: 13,
                zIndex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                height: 45,
              }}
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
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
});
