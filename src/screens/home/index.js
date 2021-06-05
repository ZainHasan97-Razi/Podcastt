import React, { Component, useState } from 'react';
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
// import {Container, Content} from 'native-base';
// import LinearGradient from 'expo-linear-gradient';
// import GlobalButton from '../components/GlobalButton';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import LatestFeeds from '../components/latestfeed';
// import Feed from '../components/feed';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Pages} from 'react-native-pages';
// import GlobalHeader from '../components/GlobalHeader';
// import InfiniteScroll from 'react-native-infinite-looping-scroll';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Fonts, FontColor, theme } from '../../constants/Theme';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
import Home from '../../components/EventPro';

const HomeEvent = ({ navigation }) => {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       items: ['Home', 'People', 'Pics', 'Music', 'Events'],
    //       activeItem: 'Home',
    //       handleFilter: false,
    //       events: [
    //         {
    //           img: require('../../assets/images/event1.png'),
    //           name: 'Curabitur auctor',
    //           place: 'Houston, Texas',
    //           date: '15/Feb 2019',
    //         },
    //         {
    //           img: require('../../assets/images/event2.png'),
    //           name: 'Wild Out',
    //           place: 'Houston, Texas',
    //           date: '13/Jan 2019',
    //         },
    //       ],
    //     };
    //   }
    const [toggleFilter, setToggleFilter] = (false)
    const [items, setItems] = useState(['Home', 'People', 'Pics', 'Music', 'Events'])
    const [events, setEvents] = useState([
        {
            img: require('../../assets/images/event1.png'),
            name: 'Curabitur auctor',
            place: 'Houston, Texas',
            date: '15/Feb 2019',
        },
        {
            img: require('../../assets/images/event2.png'),
            name: 'Wild Out',
            place: 'Houston, Texas',
            date: '13/Jan 2019',
        },
    ])

    navs = {
        Home: 'Home',
    };

    openFilter = () => {
        setToggleFilter(!toggleFilter)
    };
    onScroll = e => {
        var pos = e.nativeEvent.contentOffset;
        console.log('pos', pos);
        setItems(items.concat(items));
    };

    //   render() {
    let data = [
        {
            value: 'Banana',
        },
        {
            value: 'Mango',
        },
        {
            value: 'Pear',
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ marginTop: 10, width: '90%', alignSelf: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 12,
                            height: 50,
                            backgroundColor: 'rgba(255,255,255,0.2)',
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
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15,
                        marginBottom: 5,
                        width: '90%',
                    }}>
                    <Text
                        style={{
                            fontSize: 30,
                            color: theme.white,
                        }}>
                        Events
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/icons/Filter.png')}
                            style={{ width: 17, height: 17, opacity: 0.8, right: 7 }}
                        />
                        <TouchableOpacity onPress={openFilter}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: theme.white,
                                }}>
                                Filter
                </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ===== Open View Component ===== */}
                {handleFilter ? (
                    <View
                        style={{
                            width: '86%',
                            alignSelf: 'center',
                            marginTop: 10,
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        {['Date', 'Genre', 'Location'].map((v, i) => {
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '45%',
                                        left: v == 'Location' ? 14 : null,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontSize: 15,
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
                                            iconContainer: { top: 14, right: 15 },
                                        }}
                                        // onValueChange={value =>
                                        // this.setState({
                                        //     value,
                                        // })
                                        // }
                                        items={[
                                            { label: 'College1', value: 'football' },
                                            { label: 'College2', value: 'baseball' },
                                            { label: 'College3', value: 'hockey' },
                                        ]}
                                    />
                                </View>
                            );
                        })}
                    </View>
                ) : null}

                {/* ======== Bring Events ======= */}
                {events.map((value, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: '95%',
                                alignSelf: 'center',
                                marginVertical: 20,
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('EventsProfile');
                                }}
                                style={{
                                    width: '100%',
                                    height: 330,
                                    flex: 1,
                                    backgroundColor: '#000',
                                }}>
                                <Image
                                    source={value.img}
                                    style={{ width: '100%', height: '100%', flex: 1 }}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            color: theme.white,
                                        }}>
                                        {value.name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            opacity: 0.7,
                                            color: theme.white,
                                        }}>
                                        {value.place}
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 18,
                                        color: theme.white,
                                        width: 70,
                                    }}>
                                    {value.date}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
export default Home;

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
    emailTextView: {
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 10,
        paddingLeft: 19,
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailText: {
        width: '80%',
        paddingLeft: 20,
        padding: 0,
        opacity: 0.7,
        fontSize: 16,
        color: '#fff',
    },
});
