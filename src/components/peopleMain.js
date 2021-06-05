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
import LinearGradient from 'expo-linear-gradient';
import GlobalButton from './GlobalButton';
import RNPickerSelect from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Peoples from './peoples';
import LatestFeeds from './latestfeed';
import Feed from './feed';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Pages} from 'react-native-pages';
import GlobalHeader from './GlobalHeader';
import InfiniteScroll from 'react-native-infinite-looping-scroll';
import {Fonts, FontColor, theme} from './constant/theme';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationActions} from 'react-navigation';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   items: ['Post to', 'Event', 'Profile'],
      mark: false,
      profile: false,
      activeHead: '',
      activeItem: 0,
      people: [
        {
          name: 'Andreea Weber',
          pic: require('../../assets/images/Ellipse.png'),
        },
        {
          name: 'Randy Banks',
          pic: require('../../assets/images/Ellipse27.png'),
        },
        {
          name: 'Janet Bailey',
          pic: require('../../assets/images/girl.png'),
        },
      ],
      pictures: [
        {
          name: 'Andreea Weber',
          pic: require('../../assets/images/Ellipse.png'),
        },
        {
          name: 'Randy Banks',
          pic: require('../../assets/images/Ellipse27.png'),
        },
        {
          name: 'Janet Bailey',
          pic: require('../../assets/images/girl.png'),
        },
      ],
      items: [
        {
          name: 'Den Starda',
          color: true,
          pic: require('../../assets/images/Ellipse27.png'),
          notification: '319 Friends',
          image: <AntDesign name="like1" size={21} color={FontColor.purple} />,
        },
        {
          name: 'Kelly Starda',
          color: true,
          pic: require('../../assets/images/whitegirl.png'),
          notification: '214 Friends',
          image: (
            <FontAwesome name="picture-o" size={17} color={FontColor.white} />
          ),
        },
        {
          name: 'Den Starda',
          color: true,
          pic: require('../../assets/images/Ellipse.png'),
          notification: '114 Friends',
          image: <AntDesign name="dislike1" size={21} color={FontColor.red} />,
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{marginTop: 12, alignSelf: 'center', width: '90%'}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.regular,
                fontSize: 22,
              }}>
              Find People
            </Text>
            <View
              style={{
                marginTop: 10,
              }}>
              <View
                style={{
                  height: 50,
                  position: 'absolute',
                  width: '100%',
                  alignSelf: 'center',
                  borderRadius: 12,
                  backgroundColor: '#fff',
                  opacity: 0.3,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 50,
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: 30,
                    marginHorizontal: 8,
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Fontisto
                    name="search"
                    size={22}
                    color={FontColor.white}
                    style={{}}
                  />
                </View>
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={FontColor.white}
                  style={{
                    width: '85%',
                    height: '100%',
                    top: 2,
                    color: '#fff',
                    fontSize: 18,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {['Gender', 'City', 'Talent'].map((v, i) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      width:
                        ['Gender', 'City', 'Talent'].length - 1 === i
                          ? '100%'
                          : '50%',

                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 15,
                        // width: 100,

                        fontFamily: Fonts.regular,
                      }}>
                      {v}
                    </Text>
                    <RNPickerSelect
                      Icon={() => {
                        return (
                          <AntDesign
                            name="caretdown"
                            size={13}
                            color={FontColor.white}
                          />
                        );
                      }}
                      placeholder={{
                        label: 'Select',
                        value: null,
                      }}
                      style={{
                        inputAndroid: {
                          width: 110,
                          top: -2,
                        },
                        iconContainer: {top: 14, right: 15},
                      }}
                      onValueChange={value =>
                        this.setState({
                          value,
                        })
                      }
                      items={
                        v == 'Talent'
                          ? [
                              {label: 'Singer', value: 'football'},
                              {label: 'Dancer', value: 'baseball'},
                              {label: 'Stripper', value: 'hockey'},
                            ]
                          : v == 'Gender'
                          ? [
                              {label: 'Male', value: 'football'},
                              {label: 'Female', value: 'baseball'},
                              {label: 'Other', value: 'hockey'},
                            ]
                          : [
                              {label: 'Roma', value: 'football'},
                              {label: 'Milan', value: 'baseball'},
                              {label: 'Imperia', value: 'hockey'},
                            ]
                      }
                    />
                  </View>
                );
              })}
            </View>
          </View>
          {['Hottest Talent', 'New Talent'].map((head, ind) => {
            return (
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    marginTop: 10,
                    color: '#fff',
                    marginLeft: 20,
                    fontFamily: Fonts.medium,
                    fontSize: 30,
                  }}>
                  {head}
                </Text>
                <ScrollView style={{}} horizontal={true}>
                  {this.state.items.map((v, i) => {
                    return (
                      <View
                        style={{marginBottom: 60, marginLeft: 20, height: 240}}>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.screenProps.rootNavigation.navigate(
                              'ProfileNavigator',
                            );
                            // this.props.navigation.dispatch({
                            //   type: 'Navigation/BACK',
                            // });
                            // const navigateAction = NavigationActions.navigate({
                            //   routeName: 'Posts',
                            //   params: {},
                            //   action: NavigationActions.navigate({
                            //     routeName: 'ProfileNavigator',
                            //   }),
                            // });

                            // this.props.navigation.dispatch(navigateAction);
                            // console.log('this.state.items');
                            // this.props.navigation.navigate('ProfileNavigator');
                            // NavigationActions.
                          }}
                          style={{
                            marginRight: 10,
                            marginVertical: 12,
                            height: 230,
                          }}>
                          <LinearGradient
                            colors={['#6984da', '#43548c']}
                            style={{
                              height: '100%',
                              width: 160,
                              flex: 1,
                              paddingVertical: 10,
                              alignItems: 'center',
                              justifyContent: 'center',
                              // paddingHorizontal: 10,
                              borderRadius: 10,
                            }}>
                            <View
                              style={{
                                flex: 0.65,
                                width: '100%',
                                height: '100%',
                                alignSelf: 'center',
                                justifyContent: 'center',
                              }}>
                              <Image
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  flex: 0.8,
                                }}
                                resizeMode={'contain'}
                                source={v.pic}
                              />
                            </View>
                            <View style={{flex: 0.35}}>
                              <Text
                                style={{
                                  fontFamily: Fonts.medium,
                                  fontSize: 18,
                                  color: '#fff',
                                }}>
                                {v.name}
                              </Text>
                              <Text
                                style={{
                                  // fontFamily: Fonts.medium,
                                  fontSize: 15,
                                  color: FontColor.white,
                                  marginTop: -7,
                                  marginBottom: 10,
                                }}>
                                {v.notification}
                              </Text>
                            </View>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({activeHead: head}, function() {
                              return (v.color = !v.color);
                            });
                            // this.props.screenProps.rootNavigation.navigate(
                            //   'ProfileNavigator',
                            // );
                          }}
                          style={{
                            position: 'absolute',
                            bottom: -20,
                            left: 11.5,
                            alignSelf: 'center',
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
                              width: 140,
                              height: 50,
                            }}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={
                              v.color
                                ? ['#ae6ce1', '#5b3978']
                                : [FontColor.white, FontColor.gray]
                            }>
                            <FontAwesome
                              name="user"
                              size={v.color ? 22 : 18}
                              color={'#fff'}
                            />
                            <Text
                              style={{
                                color: '#fff',
                                marginLeft: 8,
                                fontFamily: Fonts.light,
                                fontSize: v.color ? 15 : 12,
                              }}>
                              {v.color ? 'Add Friend' : 'Request Sended'}
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            );
          })}
          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.regular,
                fontSize: 19,
              }}>
              Featured Talent
            </Text>
            {this.state.people.map(v => {
              return (
                <TouchableOpacity
                  style={{
                    height: 75,
                    borderBottomWidth: 0.2,
                    borderColor: FontColor.white,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.props.screenProps.rootNavigation.navigate(
                      'ProfileNavigator',
                    );
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 52, height: 52, marginRight: 14}}
                      source={v.pic}
                      resizeMode={'contain'}
                    />
                    <Text style={{color: '#fff', opacity: 0.7, fontSize: 15}}>
                      {v.name}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        opacity: 0.7,
                        fontSize: 15,
                        right: 10,
                      }}>
                      View
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity style={{alignSelf: 'center', marginVertical: 6}}>
              <Text
                style={{
                  fontFamily: Fonts.regular,
                  color: FontColor.white,
                  fontSize: 19,
                  marginVertical: 10,
                  // textDecorationLine: 'underline',
                }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
