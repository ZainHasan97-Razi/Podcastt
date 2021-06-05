import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {theme, FontColor, Fonts} from '../components/constant/theme';
import LinearGradient from 'expo-linear-gradient';
import Dialog, { DialogContent } from "react-native-popup-dialog";
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-datepicker';



export default class ProfileInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: ['Home', 'People', 'Pics', 'Music', 'Events'],
          data : "19/04/1951",
          visibleGender:false, 
          Gender:"Male",
          visibleCity:false, 
          city:"City",
          visibleState:false, 
          stateCity:"State",
          visible:false, 
          country:"Country",
          college : "Texas A&M University - Commerce",
          visibleCollege : false,
          talent : "Model",
          visibleTalent : false,
        };
      }


    onScroll = e => {
        var pos = e.nativeEvent.contentOffset;
        console.log('pos', pos);
        this.setState({items: this.state.items.concat(this.state.items)});
      };
    render(){
        return(
            <View style={style.container}>
                <ScrollView>
                <View style={{width:"100%", alignSelf:"center"}}>
                    <View style={{width:"90%", alignSelf:"center", marginBottom:30}}>
                        <View style={{marginLeft:19, marginTop:25}}>
                                <Text style={style.fullNameText}>Full Name</Text>
                        </View>
                    <View style={style.fullNameTextInputView}>
                        <TextInput 
                        placeholder="Matthew Matthews"
                        placeholderTextColor={FontColor.white}
                        style={style.fullNameTextInput}
                        />
                    </View>
                    <View style={{marginLeft:19, marginTop:10}}>
                                <Text style={style.fullNameText}>Date of Birth</Text>
                        </View>
                    <View style={style.fullNameTextInputView}>
                    <DatePicker
                    style={{width:"100%", height:30, justifyContent:"center"}}
                    date={this.state.date}
                    mode="date"
                    placeholder="09/04/1951"
                    format="DD/MM/YYYY"
                    //  is24Hour={false}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    // minuteInterval={10}
                    iconComponent={
                    // <FontAwesome5
                    //     size={17}
                    //     color={theme.white}
                    //     name="calendar-week"
                    //     style={{position: "absolute", right: 15 }}
                    // />
                    <Image 
                    source={require('../../assets/calendar3x.png')}
                    style={{width:17, height:17, position: "absolute", bottom:14, right: 0 }}
                    />
                    }
                    customStyles={{
                    dateIcon: {
                        // position: "absolute",
                        // left: 0,
                        // top: 8,
                        // marginLeft: 12,
                        // width: 25,
                        // height: 25,
                        // borderRadius:1
                    },

                    dateInput: {
                    // marginLeft: 19,
                    borderWidth: 0,
                    alignItems: "flex-start"
                },
                placeholderText: {
                    fontSize: 15,
                    borderWidth: 0,
                    color: FontColor.white,
                    opacity:.7
                },
                dateText: {
                fontSize: 14,
                color: FontColor.white,
                opacity:.7
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                this.setState({ date: date });
                }}
                />
                    </View>
                    <View style={{marginLeft:19, marginTop:10}}>
                        <Text style={style.fullNameText}>Gender</Text>
                    </View>
                    <TouchableOpacity 
                            onPress={()=>this.setState({visibleGender : true})}
                            style={style.genderCountryView}>
                                <Dialog
                                visible = {this.state.visibleGender}
                                height={300}
                                onTouchOutside={() => {
                                this.setState({ visibleGender: false });
                                }}
                                >
                                    <ScrollView>
                                <DialogContent style={style.dialogGender}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>this.setState({visibleGender : false})}
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
                                                    this.setState({visibleGender:false, Gender:"Male"})
                                                }}
                                                style={style.popopGenderMale}>
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
                                                    this.setState({visibleGender:false, Gender:"Female"})
                                                }}
                                                style={style.popopGenderFemale}>
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
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{this.state.Gender}</Text>
                                <View style={{width:13, height:21}}>
                                    <AntDesign name="caretdown" size={22} color={FontColor.white} />
                                </View>
                            </TouchableOpacity>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={{width:"48%"}}>
                            <View style={{marginTop:9}}>
                                <Text style={style.cityText}>City</Text>
                            </View>
                            <TouchableOpacity
                            onPress = {()=>this.setState({visibleCity : true})}
                            style={style.cityStateBothView}
                            >
                            <Dialog
                            visible = {this.state.visibleCity}
                            onTouchOutside={() => {
                            this.setState({ visibleCity: false });
                            }}
                            >
                                <ScrollView
                                showsVerticalScrollIndicator = {false}
                                >
                                <DialogContent style={style.anotherPopop}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>this.setState({visibleCity:false})}
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
                                                    this.setState({visibleCity:false, city:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleCity:false, city:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleCity:false, city:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleCity:false, city:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleCity:false, city:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleCity:false, city:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{this.state.city}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"48%"}}>
                            <View style={{marginTop:9}}>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15, marginLeft:19}}>State</Text>
                            </View>
                            <TouchableOpacity
                            onPress = {()=>this.setState({visibleState : true})}
                            style={style.cityStateBothView}
                            >
                            <Dialog
                            visible = {this.state.visibleState}
                            onTouchOutside={() => {
                            this.setState({ visibleState: false });
                            }}
                            >
                                <ScrollView
                                showsVerticalScrollIndicator = {false}
                                >
                                <DialogContent style={style.anotherPopop}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>this.setState({visibleState:false})}
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
                                                    this.setState({visibleState:false, stateCity:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleState:false, stateCity:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleState:false, stateCity:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleState:false, stateCity:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleState:false, stateCity:"Madrid"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                                    this.setState({visibleState:false, stateCity:"Barcelona"})
                                                }}
                                                style={style.popopOpenCityItemView}>
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
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{this.state.stateCity}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:9}}>
                        <Text style={style.countryText}>Country
                        </Text>
                    </View>
                    <TouchableOpacity
                            onPress={()=>
                                {this.setState({visible:true})
                                // console.warn('Warning')
                            }}
                        style={style.genderCountryView}>
                                        <Dialog
                                        visible = {this.state.visible}
                                    onTouchOutside={() => {
                                      this.setState({ visible: false });
                                    }}
                                  >
                                      <ScrollView
                                      showsVerticalScrollIndicator = {false}
                                      >
                                    <DialogContent style={style.countryPopopContent}>
                                        <View>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                    <View style={{paddingVertical:20, flexDirection:"row"}}>
                        <TouchableOpacity
                        onPress={()=>this.setState({visible:false})}
                        >
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
                    onPress={()=>{
                        this.setState({visible:false, country:"Spain"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Ethiopia"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Jamaica"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"United States of America"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Spain"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Ethiopia"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Jamaica"})
                    }}                    
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"United States of America"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Spain"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Ethiopia"})
                    }}
                    style={style.countryPopopItemView}>
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
                        this.setState({visible:false, country:"Jamaica"})
                    }}                    
                    style={style.countryPopopItemView}>
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
                                    {this.state.country}
                            </Text>
                            <View style={{width:13, height:21}}>
                                <Image 
                                source={require('../../assets/caret-down.png')}
                                style={{width:13, height:21}}
                                />
                            </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:19, marginTop:10}}>
                        <Text style={style.fullNameText}>College</Text>
                    </View>
                    <TouchableOpacity 
                            onPress={()=>this.setState({visibleCollege : true})}
                            style={style.collegeView}>
                                <Dialog
                                visible = {this.state.visibleCollege}
                                onTouchOutside={() => {
                                this.setState({ visibleCollege: false });
                                }}
                                >
                                    <ScrollView>
                                <DialogContent style={style.anotherPopop}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>this.setState({visibleCollege : false})}
                                                >
                                                    <AntDesign
                                                    name = "left" 
                                                    size = {20}
                                                    color = "black"
                                                    />
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:"35%", fontSize:15}}>College</Text>
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
                                                    this.setState({visibleCollege:false, college:"Texas A&M University - Commerce"})
                                                }}
                                                style={style.popopOpenCityItemView}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/spain.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>Texas A&M University - Commerce</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    this.setState({visibleCollege:false, college:"Engineering College"})
                                                }}
                                                style={style.popopOpenCityItemView}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/spain.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>Engineering College</Text>
                                                </TouchableOpacity>
                                                </View>
                                            </View>
                                </DialogContent>
                                </ScrollView>
                                </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{this.state.college}</Text>
                            </TouchableOpacity>
                    <View style={{marginTop:9}}>
                        <Text style={{
                        color:FontColor.white, 
                        opacity:.7, 
                        fontSize:15, 
                        marginLeft:19
                        }}>Talent
                        </Text>
                    </View>
                    <TouchableOpacity 
                            onPress={()=>this.setState({visibleTalent : true})}
                            style={style.talentView}>
                                <Dialog
                                visible = {this.state.visibleTalent}
                                onTouchOutside={() => {
                                this.setState({ visibleTalent: false });
                                }}
                                >
                                    <ScrollView>
                                <DialogContent style={style.anotherPopop}>
                                        <View style={{}}>
                                            <View style={{marginHorizontal:-5, backgroundColor:"#CDD4E9"}}>
                                                <View style={{paddingVertical:20, flexDirection:"row"}}>
                                                <TouchableOpacity
                                                onPress={()=>this.setState({visibleTalent : false})}
                                                >
                                                    <AntDesign
                                                    name = "left" 
                                                    size = {20}
                                                    color = "black"
                                                    />
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:"35%", fontSize:15}}>Talent</Text>
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
                                                    this.setState({visibleTalent:false, talent:"Model"})
                                                }}
                                                style={style.popopOpenCityItemView}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/spain.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>Model</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity 
                                                onPress={()=>{
                                                    this.setState({visibleTalent:false, talent:"ModelTwo"})
                                                }}
                                                style={style.popopOpenCityItemView}>
                                                    <View style={{width:20, height:20, marginLeft:25}}>
                                                        <Image 
                                                        source={(require('../../assets/spain.png'))}
                                                        style={{width:20, height:20}}
                                                        />
                                                    </View>
                                                    <Text style={{fontSize:15, marginLeft:10}}>ModelTwo</Text>
                                                </TouchableOpacity>
                                                </View>
                                            </View>
                                </DialogContent>
                                </ScrollView>
                                </Dialog>
                                <Text style={{color:FontColor.white, opacity:.7, fontSize:15}}>{this.state.talent}</Text>
                                <View style={{width:13, height:21}}>
                                    <Image 
                                    source={require('../../assets/caret-down.png')}
                                    style={{width:13, height:21}}
                                    />
                                </View>
                            </TouchableOpacity>
                    <TouchableOpacity 
                    style={{marginTop:30}}
                    onPress={()=>this.props.navigation.navigate('Home')}>
                        <LinearGradient 
                        colors={[theme.purpleLightLinearGradient,theme.purpleDarkLinearGradient]}
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        useAngle = {true}
                        angle={160}
                        style={style.SigninLinearView}>
                            <Text style={{color:FontColor.white, fontSize:15}}>Save Changes</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>
            </ScrollView>
          </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    fullNameTextInputView:{
        // flexDirection:"row",
        // justifyContent:"center",
        // alignItems:"center",
        // paddingHorizontal:15,
        backgroundColor:"rgba(255,255,255, 0.2)",  
        borderRadius:15, 
        // paddingVertical:5, 
        height: 50,
        paddingHorizontal: 12,
        justifyContent :"center",
        marginTop:4
    },
    fullNameTextInput:{
        color:FontColor.white, 
        opacity:.7, 
        // marginLeft:19, 
        fontSize:15, 
        padding:0
    },
    fullNameText:{
        color:FontColor.white, 
        opacity:.7, 
        fontSize:15,
    
        
    },
    SigninLinearView:{
        alignItems:"center", 
        // paddingVertical:10, 
        height: 50,
        justifyContent: "center",
        borderRadius:15
    },
    genderCountryView:{
        marginTop:6,
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center",
        height: 50,
        paddingHorizontal:15,
        borderRadius:15,
        backgroundColor:"rgba(255,255,255,0.2)",
    },
    dialogGender:{
        width: 300, 
        height: 300, 
        backgroundColor:"#CDD4E9", 
        paddingHorizontal:-10
    },
    popopGenderMale:{
        marginTop:10,
        marginHorizontal:-5, 
        flexDirection:"row", 
        alignItems:"center", 
        paddingBottom:8, 
        borderBottomWidth:1,
        borderBottomColor:"#b7bccd"
    },
    popopGenderFemale:{
        marginTop:10,
        marginHorizontal:-5, 
        flexDirection:"row", 
        alignItems:"center", 
        paddingBottom:8, 
        borderBottomWidth:1,
        borderBottomColor:"#b7bccd"
    },
    cityText:{
        color:FontColor.white, 
        opacity:.7, 
        fontSize:15, 
        marginLeft:19
    },
    cityStateBothView:{
        marginTop:6,
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:9,
        paddingHorizontal:15,
        borderRadius:15,
        backgroundColor:"rgba(255,255,255,0.2)"                                
    },
    popopOpenCityItemView:{
        marginTop:10,
        marginHorizontal:-5, 
        flexDirection:"row", 
        alignItems:"center", 
        paddingBottom:8, 
        borderBottomWidth:1,
        borderBottomColor:"#b7bccd"
        },
    countryText:{
        color:FontColor.white, 
        opacity:.7, 
        fontSize:15, 
        marginLeft:19
    },
    countryPopopContent:{ 
        width: 300, 
        height: 800, 
        backgroundColor:"#CDD4E9", 
        paddingHorizontal:-10,
    },
    countryPopopItemView:{
        marginTop:10,
        marginHorizontal:-5, 
        flexDirection:"row", 
        alignItems:"center", 
        paddingBottom:8, 
        borderBottomWidth:1,
        borderBottomColor:"#b7bccd"
    },
    collegeView:{
        marginTop:6,
        height: 50,
        justifyContent : "center",
        paddingHorizontal:15,
        borderRadius:15,
        backgroundColor:"rgba(255,255,255,0.2)"
    },
    anotherPopop:{ 
        width: 300, 
        height: 800, 
        backgroundColor:"#CDD4E9", 
        paddingHorizontal:-10
    },
    talentView:{
        marginTop:6,
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:9,
        paddingHorizontal:15,
        borderRadius:15,
        backgroundColor:"rgba(255,255,255,0.2)"
    },
})