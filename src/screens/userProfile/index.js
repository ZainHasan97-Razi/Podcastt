import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, ImageBackground, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {theme, FontColor, Fonts} from '../../constants/Theme';
import {LinearGradient} from 'expo-linear-gradient';


const UserProfile = ({navigation}) => {
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [items, setItems] = useState(['Home', 'People', 'Pics', 'Music', 'Events'])

    const handlePressComment = () => {
        setComment(!comment)
    }
    const handlePressLike = () => {
        setLike(!like)
    }

    const onScroll = e => {
        var pos = e.nativeEvent.contentOffset;
        console.log('pos', pos);
        setItems(items.concat(items));
      };
        return(
            <View style={styles.container}>
                <ImageBackground 
                source={require('../../assets/bakcgroundimage2.png')}
                style={{width:"100%", height:"100%"}}
                >
                <ScrollView>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:30,marginBottom:30}}>
                        <Image 
                        source={require('../../assets/images/Ellipse27.png')}
                        style={{width:104, height:104,borderRadius:24,marginLeft:30}}
                        />
                        <View style={{marginLeft:12}}>
                            <Text style={{fontSize:21, color:theme.white}}>
                                Dan Sanders
                            </Text>
                            <TouchableOpacity style={{width:113, height:50, borderRadius:14}}>
                                <LinearGradient
                                 colors={['#AE6CE1', '#563671']}
                                 style={{width:113, height:50, flexDirection:"row", alignItems:"center", justifyContent:"center", borderRadius:14}}
                                >
                                    <Image
                                     source={require('../../assets/icons/userIcon.png')}
                                     style={{width:13, height:16,marginBottom:3}}
                                    />
                                    <Text style={{fontSize:15, color:theme.white, marginLeft:5}}>
                                        Follow
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                <View style={{width:"95%", alignSelf:"center"}}>

                {/* ====== Post card ====== */}
                <View style={{marginBottom:5}}>
                    <View style={styles.view1postCard}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Image 
                            source={require('../../assets/images/Ellipse.png')}
                            style={{width:48, height:48,borderRadius:24,marginLeft:15}}
                            />
                            <View style={{marginLeft:12}}>
                                <Text style={{fontSize:13, color:theme.white}}>
                                    Matthew Matthews
                                </Text>
                                <Text style={{fontSize:10, color:theme.white, opacity:0.9}}>
                                    Premiered Sep 5, 2019
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity>
                            <Image 
                             source={require('../../assets/icons/more.png')}
                             style={{width:8, height:25, marginRight:15}}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.postCardText}>
                        Integer at faucibus urna. Nullam 
                        condimentum leo id elit sagittis auctor.
                    </Text>

                    <View style={{marginTop:10}}>
                        <Image
                         source={require('../../assets/MaskGroup3.png')}
                         style={styles.cardImgStyle}
                        />
                        
                {/* yaha sa Linear Gradient wala masla start ha */}
                        <View style={styles.view2postCard}>
                            <LinearGradient
                            colors={['#637DCF', '#3C4C7E']}
                            style={styles.linearGradientStyle}
                            >
                                <View style={styles.view3postCard}>
                                    <View style={styles.view4postCard}>
                                        <TouchableOpacity onPress={handlePressLike}>
                                            <Image
                                                source={require('../../assets/icons/thumbsUp.png')}
                                                style={{
                                                width: 25, 
                                                height: 25, 
                                                alignSelf: 'center', 
                                                tintColor:like? '#000AFF': null
                                                }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.likeText}>
                                            751k
                                        </Text>
                                    </View>
                                    <View style={styles.view5postCard}>
                                        <TouchableOpacity>
                                            <Image
                                            source={require('../../assets/icons/thumbsDown.png')}
                                            style={{width:25, height:25,alignSelf:"center",marginTop:8}}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.dislikeText}>
                                            16k
                                        </Text>
                                    </View>
                                    <TouchableOpacity 
                                    onPress={handlePressComment}
                                    style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}
                                    >
                                        {/* <TouchableOpacity> */}
                                            <Image
                                            source={require('../../assets/icons/comment.png')}
                                            style={{width:25, height:24,alignSelf:"center"}}
                                            />
                                        {/* </TouchableOpacity> */}
                                        <Text style={styles.commentStyle}>
                                            Comment
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            {/* == Comment section here == */}
                                {
                                    comment ? 
                                    <View style={styles.viewComment1}>
                                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                                            <View style={{flex:1}}>
                                                <Image
                                                source={require('../../assets/images/Ellipse.png')}
                                                style={styles.commentedUserImg}
                                                />
                                            </View>
                                            <View style={styles.viewComment2}>
                                                {/* <ScrollView> */}
                                                    <Text style={styles.commentText}>
                                                       Praesent eu dolor eu orci vehicula 
                                                    </Text>
                                                {/* </ScrollView> */}
                                            </View>
                                        </View>

                                        <View style={styles.viewComment3}>
                                            <TextInput
                                            style={styles.commentTextInput}
                                            placeholder="Type a comment"
                                            placeholderTextColor="#ffffff"
                                            />
                                            <TouchableOpacity style={styles.sendButton}>
                                                <Image
                                                source={require('../../assets/icons/paperPlane.png')}
                                                style={{width:20, height:21,borderWidth:2,marginTop:12}}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                     : null
                                }
                            </LinearGradient>
                        </View>
                    </View>
                    
                </View>
                {/* === Post Card Ended here === */}

              </View>
            </ScrollView>
            </ImageBackground>
          </View>
        )
    }
// }
export default UserProfile;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    viewOnImg : {
        width:"90%",
        height:"100%",
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    textOnImg1 : {
        fontSize:22, color:theme.white, marginLeft:25
    },
    textOnImg2 : {
        fontSize:18, color:theme.white, marginLeft:25, marginBottom:10, opacity:0.7
    },
    postText: {
        fontSize:30, color:theme.white, marginLeft:10, marginTop:20
    },
    view1postCard: {
        flexDirection:"row", marginTop:10, alignItems:"center", justifyContent:"space-between"
    },
    postCardText: {
        fontSize:15, color:theme.white, marginLeft:20, marginTop:10, opacity:0.9
    },
    cardImgStyle: {
        width:"100%", height:210, alignSelf:"center", borderTopLeftRadius:12, borderTopRightRadius:12
    }, 

    // **** Yaha pa masla ha height wala ******
    view2postCard :{
        width:"100%", alignSelf:"center", borderBottomLeftRadius:16, borderBottomRightRadius:16
    },
    linearGradientStyle : {
        width:"100%", borderBottomLeftRadius:12, borderBottomRightRadius:12, 
        flexDirection:"column", alignContent:"center"
    },
    view3postCard: {
        height:60, flexDirection:"row", alignContent:"center",
        justifyContent:"space-around"
    },
    view4postCard: {
        flexDirection:"row",alignItems:"center",justifyContent:"center"
    },
    likeText: {
        color:theme.white, fontSize:15, opacity:0.7, marginTop:12, marginLeft:5
    },
    view5postCard: {
        flexDirection:"row",alignItems:"center",justifyContent:"center"
    },
    dislikeText: {
        color:theme.white, fontSize:15, opacity:0.7, marginTop:12, marginLeft:5
    },
    commentStyle: {
        color:theme.white, fontSize:15, marginTop:6, marginLeft:5
    },
    viewComment1: {
        flexDirection:"column", marginTop:5, backgroundColor:"#6D7DAD", borderBottomRightRadius:16, 
        borderBottomLeftRadius:16, marginLeft:7, marginRight:7,marginBottom:10
    },
    commentedUserImg: {
        width:44, height:44, marginTop:10, alignSelf:"center", borderRadius:22
    },
    viewComment2: {
        margin:2, flex:4, margin:10, marginLeft:0, backgroundColor:"#8D9AC2",
        borderTopLeftRadius:12, borderTopRightRadius:12, borderBottomRightRadius:12
    },
    commentText: {
        margin:5, fontSize:13, color:"#fff", margin:10
    },
    viewComment3: {
        flexDirection:"row", height:45, justifyContent:"center", alignItems:"center",
        borderBottomLeftRadius:16, borderBottomRightRadius:16
    },
    commentTextInput : {
        width:"80%", paddingLeft:20, color:"#fff", backgroundColor:"#8590B2",
        borderBottomLeftRadius:16, fontSize:14, justifyContent:"center"
    },
    sendButton: {
        width:"20%", alignItems:"center", borderBottomRightRadius:16, backgroundColor:"#9EA7C3", height:"100%"
    }
})