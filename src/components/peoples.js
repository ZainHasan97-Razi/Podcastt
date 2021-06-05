import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'expo-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Fonts} from './constant/theme';

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
      <View style={{width: '95%', alignSelf: 'center'}}>
        <Text style={{color: '#fff', fontSize: 42, fontFamily: Fonts.bold}}>
          People
        </Text>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: 320,
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
            style={{flex: 0.7, width: '100%', height: '100%'}}
            source={require('../../assets/images/panini.png')}
            resizeMode={'stretch'}
          />
          <LinearGradient
            colors={['#667fd4', '#3e4e82']}
            style={{
              flex: 0.3,
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
                  paddingVertical: 4,
                  fontSize: 19,
                  fontFamily: Fonts.bold,
                  color: '#fff',
                }}>
                Lil Nas X - Panini (Official Video)
              </Text>
              <Text
                style={{
                  flex: 0.3,
                  paddingVertical: 4,
                  fontSize: 19,
                  color: '#94a4d4',
                }}>
                Official video for "Panini" by Lil Nas X.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 4,
                  flex: 0.4,
                  alignItems: 'flex-end',
                }}>
                <EvilIcons name="eye" size={32} color={'#c8cee0'} />
                <Text style={{color: '#94a4d4'}}>169,771,986 views</Text>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: -20,
                    bottom: -20,
                    zIndex: 1,
                    borderRadius: 13,
                  }}>
                  <LinearGradient
                    style={{
                      justifyContent: 'center',
                      borderRadius: 13,
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: 160,
                      height: 50,
                    }}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ae6ce1', '#5b3978']}>
                    <FontAwesome name="caret-right" size={32} color={'#fff'} />
                    <Text
                      style={{
                        color: '#fff',
                        marginLeft: 8,
                        fontFamily: Fonts.bold,
                        fontSize: 22,
                      }}>
                      Watch Now
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View>
          <Text style={{color: '#717182', marginLeft: 10, marginTop: 6}}>
            Premiered Sep 2019
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
