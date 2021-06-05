import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme, FontColor, Fonts} from '../components/constant/theme';
import LinearGradient from 'expo-linear-gradient';

export default class ProfileFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Home', 'People', 'Pics', 'Music', 'Events'],
      userList: [
        {
          name: 'Andreea Weber',
          img: require('../../assets/images/follow1.png'),
        },
        {
          name: 'Randy Banks',
          img: require('../../assets/images/follow2.png'),
        },
        {
          name: 'Janet Bailey',
          img: require('../../assets/images/follow3.png'),
        },
        {
          name: 'Michelle Brewer',
          img: require('../../assets/images/follow4.png'),
        },
        {
          name: 'Christine Barnett',
          img: require('../../assets/images/follow5.png'),
        },
        {
          name: 'Benjamin Jones',
          img: require('../../assets/images/follow2.png'),
        },
        {
          name: 'Timothy Holland',
          img: require('../../assets/images/Ellipse.png'),
        },
      ],
    };
  }

  onScroll = e => {
    var pos = e.nativeEvent.contentOffset;
    console.log('pos', pos);
    this.setState({items: this.state.items.concat(this.state.items)});
  };
  render() {
    return (
      <View style={style.container}>
        <ScrollView>
          <View style={{width: '100%', alignSelf: 'center'}}>
            {/* ======= User List View ======= */}
            <View style={{marginVertical: 10, alignItems: 'center'}}>
              {this.state.userList.map((item, index) => {
                return (
                  <View style={{width: '95%'}}>
                    <View
                      style={{
                        margin: 5,
                        // backgroundColor: 'red',
                        height: 65,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={item.img}
                          style={{height: 52, width: 52, marginLeft: 5}}
                          resizeMode={'contain'}
                        />
                        <Text
                          style={{
                            fontSize: 15,
                            color: theme.white,
                            marginLeft: 15,
                            opacity: 0.7,
                            fontFamily: Fonts.light,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.screenProps.rootNavigation.navigate(
                            'ProfileNavigator',
                          );
                        }}
                        style={{borderColor: '#fff', marginRight: 5}}>
                        <Text
                          style={{
                            color: theme.white,
                            opacity: 0.7,
                            fontSize: 15,
                            fontFamily: Fonts.light,
                          }}>
                          View
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        borderColor: theme.white,
                        borderWidth: 0.6,
                        opacity: 0.2,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
