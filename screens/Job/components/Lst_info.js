import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather"
import colors from '../../../colors';
import fonts from '../../../fonts';

const Lst_info = ({ data }) => {

    console.log(data)
    const { title, company, location, employment_type_name, tags, description } = data;
    
    return (
        <View style={{width: "100%", minHeight: 400}}>       
                <View style={{ borderBottomColor: "#e6e6e6", borderBottomWidth: 1, paddingHorizontal: 20, marginTop: 20, paddingBottom: 20}}>

                    <View style={{flexDirection: "row", alignItems: "center",paddingBottom: 20, justifyContent: "space-between"}}>
                            <Text style={{fontFamily: fonts[500], fontSize: 18, color: "black",width: "80%",}}>{title}</Text>
                            <Image source={{uri: company.image}} style={{height: 50, width: 50,resizeMode: "contain"}}></Image>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity>
                            <View style={{width: 150, height: 40, backgroundColor: colors.main, justifyContent: "center", alignItems: "center",borderRadius: 10}}>
                                <Text style={{fontFamily: fonts[600], color: "white"}}>Ansök nu</Text>
                            </View>
                        </TouchableOpacity>
                        {["phone", "mail", "message-circle"].map((name) => 
                            <TouchableOpacity>
                            <View style={{justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 18}}>
                                <FeatherIcon name={name} size={22} color={colors.main}></FeatherIcon>
                            </View>
                        </TouchableOpacity>
                        )}
                    
                    </View>
                </View>
                <View style={{width: "100%",paddingHorizontal: 20, marginTop: 15}}>
                    <Text style={{fontFamily: fonts[700], fontSize: 12, color: "#2D2D2D", marginRight: 10 }}>{company.name}</Text>
                    <View style={{flexDirection: "row", alignItems: "center", marginBottom: 8, marginTop: 4}}>
                            <FeatherIcon name={"map-pin"} style={{marginBottom: 4}} size={15}></FeatherIcon>
                            <Text style={{fontFamily: fonts[700], fontSize: 12, color: "#2D2D2D", marginRight: 10, marginLeft: 5 }}>{location.address}</Text>
                            <FeatherIcon name={"briefcase"} style={{marginBottom: 4}} size={15}></FeatherIcon>
                            <Text style={{fontFamily: fonts[700], fontSize: 12, marginLeft: 5, color: "#2D2D2D"}}>{employment_type_name}</Text>
                    </View>

                    <FlatList data={tags.slice(0, 3)} renderItem={({item}) =>  <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{item.tag.name}</Text></View>} horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false} ListFooterComponent={() => <Text style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161", textDecorationLine: "underline", marginTop: 3}}>Fler</Text>}></FlatList>
                    {/*tags.map((tag) => <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{tag}</Text></View>)*/}
                    <Text style={{marginTop: 10, fontFamily: fonts[400], fontSize: 13, flexGrow: 1}}>{description}</Text>
                </View> 
       </View>
    )
}

export default Lst_info;