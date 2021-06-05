import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {theme, FontColor, Fonts, BottonHeight, InputHeight} from '../../../constants/Theme';
import {LinearGradient} from 'expo-linear-gradient';
import GlobalHeaderNew from '../../../components/GlobalHeaderNew';
import Dialog, { DialogContent } from "react-native-popup-dialog";
import AntDesign from 'react-native-vector-icons/AntDesign';

const GettingStarted = ({navigation}) => {
    const [country, setcountry] = useState("country")
    const [city, setcity] = useState("city")
    const [gender, setGender] = useState("Gender")
    const [stateCity, setstateCity] = useState("stateCity")
    const [visible, setvisible] = useState(false)
    const [visibleCity, setvisibleCity] = useState(false)
    const [visibleGender, setvisibleGender] = useState(false)
    const [visibleState, setvisibleState] = useState(false)
    const [openDilogBox, setopenDilogBox] = useState(false)

        return(
            <View style={style.container}>
                <ImageBackground
                    source={require('../../assets/bakcgroundimage2.png')}
                    style={{width:"100%", height:"100%"}}
                    >
                <ScrollView>
                   <GlobalHeaderNew
                    leftMenu={true}
                    HeadingText="Getting Started"
                    fontSize={28}
                    backgroundColor={'transparent'}
                    navigation={navigation}
                    />
                        <View style={{width:"90%", alignSelf:"center", marginBottom:20}}>
                            <View style={{marginTop:25, alignItems:"center"}}>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>Profile Picture</Text>
                            </View>
                            <View style={style.profileView}>
                                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
                                <View style={{height:70, justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <View 
                                    style={{width:20, height:21}}
                                    >
                                        <Image 
                                        source={require('../../assets/image3x.png')}
                                        style={{width:20, height:21}}
                                        />
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:15}}>Upload</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <View 
                                    style={{width:20, height:21}}
                                    >
                                        <Image 
                                        source={require('../../assets/Camera.png')}
                                        style={{width:20, height:21}}
                                        />
                                    </View>
                                    <TouchableOpacity>
                                        <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:15}}>Capture</Text>
                                    </TouchableOpacity>
                                </View>                                    
                                </View>
                                <View
                                style={{width:88, height:88}}
                                >
                                    <Image 
                                    source={require('../../assets/profile.png')}
                                    style={{width:88, height:88}}
                                    />
                                </View>                 
                                </View>
                            </View>
                            <View style={{width:"90%", alignSelf:"center"}}>
                            <View style={{marginTop:6}}>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:19}}>Gender</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=> setvisibleGender(true)}
                            style={style.maleCityStateCountryView}>
                                <Dialog
                                visible = {visibleGender}
                                height={300}
                                onTouchOutside={() => {
                                setvisibleGender(false);
                                }}
                                >
                                    <ScrollView>
                                <DialogContent style={{ 
                                    width: 300, 
                                    height: 300, 
                                    backgroundColor:"#CDD4E9", 
                                    paddingHorizontal:-10
                                    }}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=> setvisibleGender(false)}
                                                >
                                                    <AntDesign
                                                    name = "left" 
                                                    size = {20}
                                                    color = "black"
                                                    />
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:"35%", fontSize:15}}>Gender</Text>
                                                </View>
                                            </View>
                                            <View style={{marginTop:18}}>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleGender(false),
                                                    setGender('Male')
                                                }}
                                                style={style.popopOpenItem}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/Group261.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>Male</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleGender(false),
                                                    setGender('Female')                                                }}
                                                style={style.popopOpenItem}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/Group262.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>Female</Text>
                                                </TouchableOpacity>
                                                </View>
                                            </View>
                                </DialogContent>
                                </ScrollView>
                                </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{gender}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <View style={{width:"45%"}}>
                                <View style={{marginTop:6}}>
                                    <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:19}}>City</Text>
                                </View>
                            <TouchableOpacity
                            onPress = {()=> setvisibleCity(true)}
                            style={{
                                marginTop:6,
                                flexDirection:"row", 
                                justifyContent:"space-between",
                                alignItems:"center",
                                // paddingVertical:9,
                                height:InputHeight.height,
                                paddingHorizontal:15,
                                borderRadius:15,
                                backgroundColor:"rgba(255,255,255,0.2)"                                
                            }}
                            >
                            <Dialog
                            visible = {visibleCity}
                            onTouchOutside={() => {
                                setvisibleCity(false)
                            }}
                            >
                                <ScrollView
                                showsVerticalScrollIndicator = {false}
                                >
                                <DialogContent style={{ 
                                    width: 300, 
                                    height: 800, 
                                    backgroundColor:"#CDD4E9", 
                                    paddingHorizontal:-10
                                    }}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>setvisibleCity(false)}
                                                >
                                                    <AntDesign
                                                    name = "left" 
                                                    size = {20}
                                                    color = "black"
                                                    />
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:"35%", fontSize:15}}>City</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                marginHorizontal:-5, 
                                                backgroundColor:"#d7dded", 
                                                flexDirection:"row", 
                                                alignItems:"center",
                                                paddingVertical:10,
                                                borderRadius:20
                                                }}>
                                                <AntDesign 
                                                name="search1"
                                                size={20}
                                                color="gray"
                                                style={{marginLeft:20}}
                                                />
                                                <TextInput 
                                                placeholder="Search"
                                                placeholderTextColor="#CDD4E9"
                                                style={{color:"#CDD4E9", width:"70%", padding:0, marginLeft:10}}
                                                />
                                            </View>
                                            <View style={{marginTop:18}}>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                </DialogContent>
                                        </ScrollView>
                            </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{city}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                            </View>
                            <View style={{width:"45%", borderWidth:1}}>
                            <View style={{marginTop:6}}>
                                    <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:19}}>State</Text>
                                </View>

                            <TouchableOpacity
                            onPress = {()=> setvisibleCity(true)}
                            style={{
                                marginTop:6,
                                flexDirection:"row", 
                                justifyContent:"space-between",
                                alignItems:"center",
                                // paddingVertical:9,
                                height:InputHeight.height,
                                paddingHorizontal:15,
                                borderRadius:15,
                                backgroundColor:"rgba(255,255,255,0.2)"                                
                            }}
                            >
                            <Dialog
                            visible = {visibleState}
                            onTouchOutside={() => setvisibleCity(false)}>
                                <ScrollView
                                showsVerticalScrollIndicator = {false}
                                >
                                <DialogContent style={{ 
                                    width: 300, 
                                    height: 800, 
                                    backgroundColor:"#CDD4E9", 
                                    paddingHorizontal:-10
                                    }}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=> setvisibleCity(false)}
                                                >
                                                    <AntDesign
                                                    name = "left" 
                                                    size = {20}
                                                    color = "black"
                                                    />
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:"35%", fontSize:15}}>State</Text>
                                                </View>
                                            </View>
                                            <View style={{
                                                marginHorizontal:-5, 
                                                backgroundColor:"#d7dded", 
                                                flexDirection:"row", 
                                                alignItems:"center",
                                                paddingVertical:10,
                                                borderRadius:20
                                                }}>
                                                <AntDesign 
                                                name="search1"
                                                size={20}
                                                color="gray"
                                                style={{marginLeft:20}}
                                                />
                                                <TextInput 
                                                placeholder="Search"
                                                placeholderTextColor="#CDD4E9"
                                                style={{color:"#CDD4E9", width:"70%", padding:0, marginLeft:10}}
                                                />
                                            </View>
                                            <View style={{marginTop:18}}>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Madrid')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Madrid</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    setvisibleCity(true),
                                                    setcity('Barcelona')                                                 }}
                                                style={style.popopOpenItem}>
                                                <View style={{width:20, height:20, marginLeft:25}}>
                                                    <Image 
                                                    source={(require('../../assets/spain.png'))}
                                                    style={{width:20, height:20}}
                                                    />
                                                </View>
                                                <Text style={{fontSize:15, marginLeft:10}}>Barcelona</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                </DialogContent>
                                        </ScrollView>
                            </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{stateCity}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                            </View>
                            </View>
                            <View style={{marginTop:6}}>
                                <Text style={{
                                    color:FontColor.white, 
                                    opacity:.7, 
                                    fontSize:15, 
                                    marginLeft:19
                                    }}>Country
                                </Text>
                            </View>
                            <TouchableOpacity 
                            onPress={()=> setvisible(true)}
                            style={style.maleCityStateCountryView}>
                                        <Dialog
                                        visible = {visible}
                                    onTouchOutside={() => setvisible(false)}>
                                      <ScrollView
                                      showsVerticalScrollIndicator = {false}
                                      >
                                    <DialogContent style={{ 
                                        width: 300, 
                                        height: 800, 
                                        backgroundColor:"#CDD4E9", 
                                        paddingHorizontal:-10,
                                        // paddingBottom:-20
                                        }}>
                                        <View style={{
                                        }}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                    <View style={{paddingVertical:20, flexDirection:"row"}}>
                        <TouchableOpacity
                        onPress={()=> setvisible(false)}>
                            <AntDesign
                            name = "left" 
                            size = {20}
                            color = "black"
                            />
                        </TouchableOpacity>
                        <Text style={{marginLeft:"35%", fontSize:15}}>Country</Text>
                    </View>
                    </View>
                    <View style={{
                        marginHorizontal:-5, 
                        backgroundColor:"#d7dded", 
                        flexDirection:"row", 
                        alignItems:"center",
                        paddingVertical:10,
                        borderRadius:20
                        }}>
                        <AntDesign 
                        name="search1"
                        size={20}
                        color="gray"
                        style={{marginLeft:20}}
                        />
                        <TextInput 
                        placeholder="Search"
                        placeholderTextColor="#CDD4E9"
                        style={{color:"#CDD4E9", width:"70%", padding:0, marginLeft:10}}
                        />
                    </View>
                    <View style={{marginTop:18}}>
                    <TouchableOpacity 
                    onPress={()=>
                        setvisible(true),
                        setcountry('Spain')}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Spain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Pakistan')}}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/jamaica.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Ethiopia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Egypt')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/ethiopia.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Jamaica</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('USA')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>United States of America</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Canada')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Spain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('India')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/ethiopia.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Ethiopia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Jamica')                    }}                    
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Jamaica</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Pakistan')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>United States of America</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Pakistan')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:20, height:20}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Spain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Pakistan')                    }}
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/ethiopia.png'))}
                            style={{width:23, height:23}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Ethiopia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{
                        setvisible(true),
                        setcountry('Pakistan')                    }}                    
                    style={{
                        marginTop:10,
                        marginHorizontal:-5, 
                        flexDirection:"row", 
                        alignItems:"center", 
                        paddingBottom:8, 
                        borderBottomWidth:1,
                        borderBottomColor:"#b7bccd"
                        }}>
                        <View style={{width:20, height:20, marginLeft:25}}>
                            <Image 
                            source={(require('../../assets/spain.png'))}
                            style={{width:23, height:23}}
                            />
                        </View>
                        <Text style={{fontSize:15, marginLeft:10}}>Jamaica</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                                    </DialogContent>
                    </ScrollView>
                                  </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>
                                    {country}
                                </Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('Almostdone')}
                            style={{marginTop:38}}>
                                <LinearGradient 
                                colors={[theme.purpleLightLinearGradient,theme.purpleDarkLinearGradient]}
                                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                useAngle = {true}
                                angle={160}
                                style={style.SigninLinearView}>
                                    <Text style={{color:FontColor.white, fontSize:15}}>Next</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={{alignItems:"center", marginTop:18}}>
                                <Text style={{color:FontColor.white, opacity:.5, fontSize:12, fontFamily:Fonts.regular}}>These can be changed from your profile</Text>
                                <TouchableOpacity 
                                onPress={()=> navigation.navigate('Almostdone')}
                                >
                                    <Text style={{color:FontColor.white, fontSize:18, fontFamily:Fonts.regular}}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                        </ScrollView>
                </ImageBackground>
            </View>
        )
    }
export default GettingStarted;

const style = StyleSheet.create({
    container : {
        flex :1
    },
    SigninLinearView:{
        alignItems:"center", 
        // paddingVertical:10, 
        justifyContent:"center",
        height:BottonHeight.height,
        borderRadius:15
    },
    profileView:{
        marginTop:6,
        width:"80%", 
        alignSelf:"center", 
        paddingVertical:10, 
        paddingHorizontal:10, 
        backgroundColor:"rgba(255,255,255, 0.2)",
        borderRadius:15
    },
    maleCityStateCountryView:{
        marginTop:6,
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center",
        // paddingVertical:9,
        height:InputHeight.height,
        paddingHorizontal:15,
        borderRadius:15,
        backgroundColor:"rgba(255,255,255,0.2)"
    },
    popopOpenItem:{
        marginTop:10,
        marginHorizontal:-5, 
        flexDirection:"row", 
        alignItems:"center", 
        paddingBottom:8, 
        borderBottomWidth:1,
        borderBottomColor:"#b7bccd"
        },
})