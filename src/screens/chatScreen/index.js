import React, {useState, useRef} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
 
} from 'react-native';
import { Content } from "native-base";
import {LinearGradient} from 'expo-linear-gradient';
import GlobalHeaderNew from '../../components/GlobalHeaderNew';
import {
  theme,
  FontColor,
  Fonts,
  BottonHeight,
  InputHeight,
} from '../../constants/Theme';

const Chat = ({navigation}) => {
    const [chatMsg, setChatMsg] = useState('')
    const [msgArray, setMsgArray] = useState(
    [
                  {
                      msgId: 1,
                      msgText: " Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse"
                  },
                  {
                      msgId: 2,
                      msgText: "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit."
                  },
                  {
                    msgId: 1,
                    msgText: "I am seriously interested in this work !!"
                }
    ])

      const sendMsg = () => {
        //   let {msgArray, chatMsg} = this.state;
        let msgs = msgArray;
        let msg = chatMsg;
          msgs.push({msgId:2, msgText: msg})

        setMsgArray(msgs)
        setChatMsg("")
      }

      const ScrollRef = useRef()

    return (
      <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/backgroundimage2.png')}
            style={{width: '100%', height: '100%'}}
            // resizeMode={"stretch"}
          >
              <GlobalHeaderNew
              leftArrow={true}
              HeadingText="Chat"
              navigation={navigation}
            />
            <Content contentContainerStyle={{flex:1}}>
            <View style={{width:"100%" , flex:1 }}>
            <ScrollView 
                style={{flex:1}}
                ref={ScrollRef}
                onContentSizeChange={(contentWidth, contentHeight)=>{        
                    ScrollRef.current.scrollToEnd({animated: true});
                }}
            >
            {/* <View style={{width:"100%"}}> */}
                {msgArray.map((obj, idx) => {
                if(obj.msgId == 1) {
                    {/* Grey chat text box */}
                    return(
                        <View style={{flexDirection:"column",marginVertical:-10}}>
                            <View key={idx} style={{width:"85%",margin:5, flexDirection:"row"}}>
                                <View style={{width:44, height:44, borderRadius:22,margin:5,alignSelf:"flex-end"}}>
                                    <Image
                                    source={require('../../assets/images/Ellipse.png')}
                                    style={{width: '100%', height: '100%'}}
                                    />
                                </View>
                                <View style={styles.viewComment2}>
                                    <Text style={styles.commentText}>
                                    {obj.msgText}
                                    </Text>
                                </View>
                            </View>
                            <Text style={{color:"#fff",fontSize:11,width:"82%",top:-15,textAlign:"right",opacity:0.5}}>1 hour</Text>
                        </View>
                    )
                } 
                else if (obj.msgId == 2) {
                    {/* Blue chat text box */}
                    return(
                    <View style={{flexDirection:"column",marginVertical:-10}}>
                        <View key={idx} style={{width:"80%",margin:5, flexDirection:"row", alignSelf:"flex-end"}}>
                            <View style={styles.viewComment2blue}>
                                <LinearGradient 
                                style={{
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    borderBottomLeftRadius: 12
                                }}
                                colors={["#637DCF","#3C4C7E"]}
                                useAngle={true}
                                angle={180}
                                >
                                    <Text style={styles.commentText}>
                                        {obj.msgText}
                                    </Text>
                                </LinearGradient>
                            </View>
                        </View>
                        <Text style={{color:"#fff",fontSize:11,alignSelf:"flex-end",width:"79%",top:-15,textAlign:"left",opacity:0.5}}>1 hour</Text>
                    </View>
                )}
            })
            }
            {/* </View> */}
            </ScrollView>
            </View>
            {/* </ScrollView> */}
           
                <View style={styles.viewComment3}>
                    <TextInput
                        // value={"d"}
                        onChangeText={(Text) => setChatMsg(Text)}
                        value={chatMsg}
                      style={styles.commentTextInput}
                      placeholder="Type a message"
                      placeholderTextColor="rgba(255,255,255, 0.5)"
                    />
                    <TouchableOpacity 
                    onPress={sendMsg}
                    style={styles.sendButton}>
                      <Image
                        source={require('../../assets/icons/paperPlane.png')}
                        style={{
                          width: 20,
                          height: 21,
                          borderWidth: 2,
                          marginTop: 12,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  </Content>
          </ImageBackground>
        {/* </ScrollView> */}
      </View>
    );
  }
export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010020',
  },
  commentText: {
    margin: 5,
    fontSize: 13,
    color: '#fff',
    margin: 10,
  },
  viewComment2: {
    margin: 2,
    flex: 4,
    margin: 10,
    marginLeft: 0,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  viewComment2blue: {
    margin: 2,
    flex: 4,
    margin: 10,
    marginLeft: 0,
    backgroundColor: '#5D5C71',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  viewComment3: {
    flexDirection: 'row',
    height: 62,
    alignItems: 'flex-end',
  },
  commentTextInput: {
    width: '80%',
    height: 50,
    paddingLeft: 20,
    color: '#fff',
    backgroundColor: '#5D5C71',
    // borderBottomLeftRadius: 16,
    paddingVertical:0, marginVertical:0,
    fontSize: 14,
  },
  sendButton: {
    width: '20%',
    alignItems: 'center',
    backgroundColor: '#7D7D8D',
    height: 50,
  },
});
