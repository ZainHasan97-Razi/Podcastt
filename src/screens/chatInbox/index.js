import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme, FontColor, Fonts} from '../../constants/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import imageOne from '../../assets/Ellipse10.png';
import imageTwo from '../../assets/Ellipse13.png';
import imageThree from '../../assets/Ellipse14.png';
import imageFourth from '../../assets/Ellipse15.png';
import imageFive from '../../assets/Ellipse19.png';
import imageSix from '../../assets/Ellipse18.png';
import imageSeven from '../../assets/Ellipse16.png';
import imageEight from '../../assets/Ellipse17.png';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';

const ChatInbox = ({navigation}) => {
   const [users, setUsers] = useState([
            {
              pic: imageOne,
              name: 'Christine Lee',
              msg: 'Eros condimentum mauris',
              scenceMessage: true,
            },
            {
              pic: imageTwo,
              name: 'Carolyn Reynolds',
              msg: 'Quis consectetur',
              scenceMessage: false,
            },
            {
              pic: imageThree,
              name: 'Aaron Riley',
              msg: 'Eget eget',
              scenceMessage: true,
            },
            {
              pic: imageFourth,
              name: 'Jose Griffin',
              msg: 'Elit imperdiet vestibulum',
              scenceMessage: false,
            },
            {
              pic: imageFive,
              name: 'Natasha Carpenter',
              msg: 'Tristique eros',
              scenceMessage: true,
            },
            {
              pic: imageSix,
              name: 'Bruce Wells',
              msg: 'Tellus tincidunt',
              scenceMessage: true,
            },
            {
              pic: imageSeven,
              name: 'Steve Diaz',
              msg: 'Mauris mollis dapibus',
              scenceMessage: true,
            },
            {
              pic: imageEight,
              name: 'Rachel Gibson',
              msg: 'Maximus curabitur purus',
              scenceMessage: false,
            },
          ])
    return (
      <View style={style.container}>
        <ImageBackground
          source={require('../../assets/bakcgroundimage2.png')}
          style={{width: '100%', height: '100%'}}>
          <GlobalHeaderNew
            // leftArrow={true}
            HeadingText="Messages"
            navigation={navigation}
          />

          <ScrollView>
            <View
              style={{
                marginVertical: 16,
                width: '90%',
                alignSelf: 'center',
                backgroundColor: 'rgba(255,255,255, 0.2)',
                borderRadius: 10,
                paddingVertical: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="search"
                size={16}
                color={FontColor.white}
                style={{marginLeft: 20}}
              />
              <TextInput
                placeholder="Search"
                placeholderTextColor={FontColor.white}
                style={{
                  // borderWidth:1,
                  width: '90%',
                  padding: 0,
                  color: FontColor.white,
                  fontSize: 16,
                  marginLeft: 20,
                }}
              />
            </View>
            <View style={{marginBottom: 30}}>
              {users.map((value, i) => (
                <TouchableOpacity
                key={i}
                  onPress={() => navigation.navigate('ChatScreen')}
                  style={{
                    backgroundColor: value.scenceMessage
                      ? 'rgba(255,255,255, 0.1)'
                      : null,
                  }}>
                  <View
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      paddingLeft: 10,
                      paddingRight: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomWidth: 1,
                      paddingVertical: 10,
                      borderBottomColor: '#999',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <View style={{width: 52, height: 52}}>
                        <Image
                          source={value.pic}
                          style={{width: 52, height: 52, borderRadius: 360}}
                        />
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text style={{color: FontColor.white, fontSize: 14}}>
                          {value.name}
                        </Text>
                        <Text style={{color: FontColor.white, fontSize: 12}}>
                          {value.msg}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{color: FontColor.white, fontSize: 14}}>
                        View
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
// }
export default ChatInbox;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
