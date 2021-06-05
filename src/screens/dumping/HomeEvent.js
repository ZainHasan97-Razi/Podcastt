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
import GlobalButton from '../components/GlobalButton';
import EventPro from '../components/EventPro';
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeMain from '../components/HomeMain';
import LatestFeeds from '../components/latestfeed';
import Feed from '../components/feed';
import HomePic from './HomePic';
import ProfileNavigator from './ProfileNavigator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Pages} from 'react-native-pages';
import GlobalHeaderNew from '../components/GlobalHeaderNew';
import InfiniteScroll from 'react-native-infinite-looping-scroll';
import {Fonts, FontColor, theme} from '../components/constant/theme';
import PeopleMain from '../components/peopleMain';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeMusic from './HomeMusic';
import HomeEvent from './HomeEvent';
import Venues from './VenueScreen';

export class HomeFirst extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'Posts',
    };
  }
  render() {
    // console.log('HomeFirst PROPS', this.props.activeItem);
    return (
      <ScrollView style={{width: '100%', alignSelf: 'center'}}>
        <HomeMain screenProps={this.props.screenProps} />
        <LatestFeeds width={'95%'} screenProps={this.props.screenProps} />
      </ScrollView>
    );
  }
}

const TopContent = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeFirst,
      navigationOptions: () => ({
        header: null,
      }),
    },
    People: {
      screen: PeopleMain,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Pics: {
      screen: HomePic,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Music: {
      screen: HomeMusic,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Events: {
      screen: HomeEvent,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Venues: {
      screen: Venues,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },

  {
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      tabStyle: {
        width: 85,
      },
      activeTintColor: FontColor.white,
      inactiveTintColor: FontColor.white,
      activeBackgroundColor: '#000000',
      inactiveBackgroundColor: '#000000',
      indicatorStyle: {
        backgroundColor: FontColor.purple,
        height: 4,
        width: 40,
        left: 12,
        bottom: 10,
        borderRadius: 360,
      },

      labelStyle: {
        fontFamily: Fonts.medium,
        fontSize: 17,
        width: '140%',
      },
      keyboardHidesTabBar: true,

      style: {
        backgroundColor: 'transparent',
        height: 60,
        // marginBottom: 10,
        // justifyContent:"flex-start"
        // alignItems:"flex-end"
      },
    },
  },
);
const TopContainer = createAppContainer(TopContent);

// function HomeFirst() {
//   return (

//   );
// }

export default class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Home', 'People', 'Pics', 'Music', 'Events'],
      activeItem: 'Home',
    };
  }

  navs = {
    Home: 'Home',
  };

  onScroll = e => {
    this.setState({items: this.state.items.concat(this.state.items)});
  };

  render() {
    console.log('HEllo', this.props);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/bakcgroundimage2.png')}
          style={{width: '100%', height: '100%'}}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={600}
            duration={500}
            customStyles={{
              container: {},
            }}>
            <EventPro close={() => this.RBSheet.close()} />
          </RBSheet>
          <TouchableOpacity
            onPress={() => this.RBSheet.open()}
            style={{
              bottom: 10,
              position: 'absolute',
              width: 60,
              right: 10,
              zIndex: 400000000000,
              borderRadius: 180,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              backgroundColor: theme.purple,
            }}>
            <FontAwesome5 color={FontColor.white} name="feather" size={22} />
          </TouchableOpacity>
          <GlobalHeaderNew
            twoWords={1}
            leftMenu={true}
            search={true}
            // left={'flex-end'}
            chat={true}
            bell={true}
            profile={true}
            backgroundColor={'transparent'}
            navigation={this.props.navigation}
          />
          <TopContainer
            // navigation = {this.props.navigation}
            screenProps={{rootNavigation: this.props.navigation}}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
