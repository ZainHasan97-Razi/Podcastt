import React, { useState } from 'react';
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
import { Container, Content } from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import { Fonts, FontColor, theme } from '../../constants/Theme';

const Notification = ({ navigation }) => {
    const [items, setItems] = useState(['People', 'Music', 'Picture', 'Videos', 'Venues'])
    const [marked, setMarked] = useState(true)
    const [people, setPeople] = useState(
        [
            {
                name: 'Andreea Weber',
                active: false,
                pic: require('../../assets/images/Notific1.png'),
                notification: 'Liked Your Post',
                image: <AntDesign name="like1" size={21} color={FontColor.purple} />,
            },
            {
                name: 'Randy Banks',
                active: false,
                pic: require('../../assets/images/Notific2.png'),
                notification: 'Liked Your Post',
                image: <AntDesign name="dislike1" size={21} color={FontColor.red} />,
            },
            {
                name: 'Janet Bailey',
                active: false,
                pic: require('../../assets/images/Notific3.png'),
                notification: 'Posted a new photo',
                image: (
                    <FontAwesome name="picture-o" size={17} color={FontColor.white} />
                ),
            },
            {
                name: 'Jons Griffin',
                pic: require('../../assets/images/Notific4.png'),
                notification: 'Wants to be friend',
                req: (
                    <View
                        style={{
                            width: 80,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity>
                            <Feather name="check" size={19} color={FontColor.green} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="cross" size={19} color={FontColor.red} />
                        </TouchableOpacity>
                    </View>
                ),
                image: <FontAwesome name="user" size={21} color={FontColor.white} />,
                active: false,
            },
            {
                name: 'Randy Banks',
                pic: require('../../assets/images/Ellipse27.png'),
                notification: 'Liked Your Post',
                active: false,
                image: <AntDesign name="like1" size={21} color={FontColor.purple} />,
            },
            {
                name: 'Janet Bailey',
                pic: require('../../assets/images/girl.png'),
                notification: 'Liked Your Post',
                active: false,
                image: <AntDesign name="dislike1" size={17} color={FontColor.red} />,
            },
            {
                name: 'Randy Banks',
                pic: require('../../assets/images/Ellipse27.png'),
                notification: 'Wants to be friend',
                active: false,
                image: <FontAwesome name="user" size={21} color={FontColor.white} />,
            },
            {
                name: 'Janet Bailey',
                pic: require('../../assets/images/girl.png'),
                notification: 'Comment on your post',
                image: (
                    <FontAwesome name="comment" size={17} color={FontColor.white} />
                ),
                active: false,
            },
        ]
    )
    return (
        <Container style={styles.container}>
            <ImageBackground
                source={require('../../assets/bakcgroundimage2.png')}
                style={{ width: '100%', height: '100%' }}>
                <GlobalHeaderNew
                    // leftArrow={true}
                    HeadingText="Notifications"
                    navigation={navigation}
                />
                <ScrollView>
                    <View style={{ marginBottom: 10 }}>
                        <TouchableOpacity
                            onPress={() => setMarked(!marked)}
                            style={{
                                marginVertical: 16,
                            }}>
                            <View
                                style={{
                                    height: 50,
                                    position: 'absolute',
                                    width: '90%',
                                    alignSelf: 'center',
                                    borderRadius: 12,
                                    backgroundColor: marked
                                        ? FontColor.purple
                                        : '#fff',
                                    opacity: marked ? 1 : 0.3,
                                }}></View>
                            <View
                                style={styles.viewCheck1}>
                                <View
                                    style={styles.viewCheck2}>
                                    <Feather name="check" size={22} color={FontColor.white} />
                                </View>
                                <Text
                                    style={styles.txtMarkAll}>
                                    Mark All as read
                  </Text>
                            </View>
                        </TouchableOpacity>
                        {people.map((v, i) => {
                            return (
                                <View key={i} style={{ justifyContent: 'center' }}>
                                    <View
                                        style={{ ...styles.viewCard1, backgroundColor: v.active ? null : '#fff', opacity: v.active ? 1 : 0.2 }}></View>
                                    <View
                                        style={styles.viewCard2}>
                                        <View
                                            style={styles.viewImg}>
                                            <Image
                                                style={{ width: 55, height: 55, marginRight: 14 }}
                                                source={v.pic}
                                                resizeMode={'contain'}
                                            />
                                            <View>
                                                <Text style={{ color: FontColor.white, fontSize: 15 }}>
                                                    {v.name}
                                                </Text>
                                                <View
                                                    style={styles.viewImg}>
                                                    {v.image}
                                                    <Text
                                                        style={{
                                                            color: FontColor.white,
                                                            fontSize: 12,
                                                            marginLeft: 6,
                                                        }}>
                                                        {v.notification}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        {/* <View>
                        {v.req ? (
                          v.req
                        ) : (
                          <TouchableOpacity
                            onPress={() =>
                              this.setState(function(state, props) {
                                return (v.active = true);
                              })
                            }>
                            <Text
                              style={{color: FontColor.white, fontSize: 15}}>
                              View
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View> */}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </ImageBackground>
        </Container>
    );
}
export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    viewCheck2: {
        flex: 0.1,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCheck1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: '90%',
        alignSelf: 'center',
    },
    txtMarkAll: {
        flex: 0.9,
        textAlign: 'center',
        left: '-50%',
        color: '#fff',
        fontSize: 15,
    },
    viewCard2: {
        width: '95%',
        alignSelf: 'center',
        height: 75,
        borderBottomWidth: 0.2,
        borderColor: FontColor.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewImg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCard1: {
        position: 'absolute',
        height: 75,
        width: '100%',
    }
});
