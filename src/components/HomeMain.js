import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Pages} from 'react-native-pages';
import {Fonts, FontColor, theme} from './constant/theme';

export default class Homes extends Component {
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
          pic: require('../../assets/images/Ellipse.png'),
          notification: 'Liked Your Post',
          image: <AntDesign name="like1" size={21} color={FontColor.purple} />,
        },
        {
          name: 'Event',
          color: true,
          pic: require('../../assets/images/Ellipse27.png'),
          notification: 'Liked Your Post',
          image: <AntDesign name="dislike1" size={21} color={FontColor.red} />,
        },
        {
          name: 'Profile',
          color: true,
          pic: require('../../assets/images/girl.png'),
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
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: '#fff',
            fontSize: 28,
            fontFamily: Fonts.medium,
            width: '90%',
            alignSelf: 'center',
          }}>
          What's Hot
        </Text>
        <Pages indicatorColor={FontColor.purple} style={{height: 360}}>
          {[
            require('../../assets/images/panini.png'),
            require('../../assets/images/jump.png'),
          ].map(val => {
            return (
              <View style={{width: '100%', height: '100%'}}>
                <View
                  style={{
                    flex: 1,
                    width: '90%',
                    alignSelf: 'center',
                    height: '100%',
                    borderRadius: 13,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}>
                  <Image
                    style={{
                      flex: 0.7,
                      width: '100%',
                      height: '100%',
                      borderTopLeftRadius: 13,
                      borderTopRightRadius: 13,
                    }}
                    source={val}
                    resizeMode={'cover'}
                  />
                  <LinearGradient
                    colors={['#667fd4', '#3e4e82']}
                    style={{
                      flex: 0.3,
                      justifyContent: 'center',
                      borderBottomLeftRadius: 13,
                      borderBottomRightRadius: 13,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        width: '95%',
                        alignSelf: 'center',
                      }}>
                      <Text
                        style={{
                          flex: 0.3,
                          marginVertical: 2,
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: '#fff',
                        }}>
                        Lil Nas X - Panini (Official Video)
                      </Text>
                      <Text
                        style={{
                          flex: 0.3,
                          marginVertical: 2,

                          fontSize: 16,
                          color: '#94a4d4',
                        }}>
                        Official video for "Panini" by Lil Nas X.
                      </Text>
                      <View
                        style={{
                          marginVertical: 2,
                          flex: 0.4,
                          flexDirection: 'row',
                          alignItems: 'flex-end',
                        }}>
                        <EvilIcons name="eye" size={30} color={'#c8cee0'} />
                        <Text style={{color: '#94a4d4', marginTop: 10}}>
                          169,771,986 views
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.screenProps.rootNavigation.navigate(
                          'PostView1',
                        );
                      }}
                      style={{
                        position: 'absolute',
                        right: '-15%',
                        bottom: -20,
                        zIndex: 1231,
                        borderRadius: 13,
                      }}>
                      <LinearGradient
                        style={{
                          justifyContent: 'center',
                          borderRadius: 13,
                          zIndex: 1,
                          alignItems: 'center',
                          flexDirection: 'row',
                          width: '80%',
                          height: 55,
                        }}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#ae6ce1', '#5b3978']}>
                        <FontAwesome
                          name="caret-right"
                          size={32}
                          color={'#fff'}
                        />
                        <Text
                          style={{
                            color: '#fff',
                            marginLeft: 8,
                            fontFamily: Fonts.light,
                            fontSize: 18,
                          }}>
                          Watch Now
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </LinearGradient>
                  <Text
                    style={{
                      color: '#717182',
                      marginLeft: 10,
                      marginTop: 4,
                      fontfamily: Fonts.regular,
                      fontSize: 12,
                    }}>
                    Post Sep 5,ss 2019
                  </Text>
                </View>
              </View>
            );
          })}
        </Pages>
        <View
          style={{
            marginTop: 50,
          }}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});
