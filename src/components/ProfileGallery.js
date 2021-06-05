import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Modal,
} from 'react-native';
import {theme, FontColor, Fonts} from '../components/constant/theme';
import LinearGradient from 'expo-linear-gradient';
import ImageViewer from 'react-native-image-zoom-viewer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const images = [
  {
    // url:
    //   'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
      // headers: ...
      source: require('../../assets/images/1.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/2.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/3.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/4.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/5.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/6.jpg'),
    },
  },
  {
    props: {
      source: require('../../assets/images/7.jpg'),
    },
  },
];

export default class ProfileGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleV: false,
      items: ['Home', 'People', 'Pics', 'Music', 'Events'],
      imageList: [
        {
          img: require('../../assets/images/1.jpg'),
        },
        {
          img: require('../../assets/images/2.jpg'),
        },
        {
          img: require('../../assets/images/3.jpg'),
        },
        {
          img: require('../../assets/images/4.jpg'),
        },
        {
          img: require('../../assets/images/5.jpg'),
        },
        {
          img: require('../../assets/images/6.jpg'),
        },
        {
          img: require('../../assets/images/7.jpg'),
        },
      ],

      videoList: [
        {
          img: require('../../assets/images/1.jpg'),
        },
        {
          img: require('../../assets/images/2.jpg'),
        },
        {
          img: require('../../assets/images/3.jpg'),
        },
        {
          img: require('../../assets/images/4.jpg'),
        },
        {
          img: require('../../assets/images/5.jpg'),
        },
        {
          img: require('../../assets/images/6.jpg'),
        },
        {
          img: require('../../assets/images/7.jpg'),
        },
        {
          img: require('../../assets/images/8.png'),
        },
        {
          img: require('../../assets/images/9.png'),
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
      <View style={styles.container}>
        <Modal visible={this.state.visible} transparent={false}>
          <View style={{backgroundColor: 'black'}}>
            <TouchableOpacity
              style={{
                padding: 10,
                width: 60,
                alignSelf: 'flex-end',
              }}
              onPress={() => this.setState({visible: false})}>
              <MaterialIcons name={'close'} color={'white'} size={28} />
            </TouchableOpacity>
          </View>
          <ImageViewer imageUrls={images} />
        </Modal>
        <ScrollView>
          <View style={{width: '92%', alignSelf: 'center'}}>
            <Text style={styles.imgText}>Pictures</Text>
            <View style={styles.imgView}>
              {this.state.imageList.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{width: '33%', height: 125}}
                    onPress={() => this.setState({visible: true})}>
                    <Image
                      source={item.img}
                      style={{width: '100%', height: '100%'}}
                      resizeMode={'cover'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* ======= User Video View ======= */}
            <Text style={styles.imgText}>Videos</Text>

            <View style={styles.imgView}>
              <Modal visible={this.state.visible} transparent={false}>
                <View style={{backgroundColor: 'black'}}>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      width: 60,
                      alignSelf: 'flex-end',
                    }}
                    onPress={() => this.setState({visible: false})}>
                    <MaterialIcons name={'close'} color={'white'} size={28} />
                  </TouchableOpacity>
                </View>
                <ImageViewer imageUrls={images} />
              </Modal>
              {this.state.videoList.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{width: '33%', height: 125}}
                    onPress={() => this.setState({visible: true})}>
                    <Image
                      source={item.img}
                      style={{width: '100%', height: '100%'}}
                      resizeMode={'cover'}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgText: {
    fontFamily: Fonts.medium,
    color: theme.white,
    fontSize: 21,
    alignSelf: 'center',
    marginTop: 16,
  },
  imgView: {
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});
