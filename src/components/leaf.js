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

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Signin extends Component {
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
    var pos = e.nativeEvent.contentOffset;
    console.log('pos', pos);
    this.setState({items: this.state.items.concat(this.state.items)});
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#7e4fa4',
          width: 60,
          position: 'absolute',
          height: 60,
          top: -10,
          right: -70,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          borderRadius: 90,
        }}>
        <FontAwesome name="leaf" size={28} color={'#fff'} />
      </View>
    );
  }
}
