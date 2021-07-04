import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, FlatList, Image, TouchableWithoutFeedback } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import fonts from '../../../../fonts';
const Card_job = ({data}) => {
    const navigation = useNavigation();
    const {title, location, employment_type_name, tags, company, description} = data;
    
    

  
    return (
        <View style={{width: "90%", marginBottom: 20, backgroundColor: "#ffffff", borderRadius: 20,paddingLeft: 20, paddingBottom: 20, borderColor: "#4688D4", borderWidth: 1, elevation: 4}}>
         <TouchableWithoutFeedback onPress={() => {navigation.navigate("Job", {data: data})}}>


             <View style={{flexDirection: "row",marginBottom: 8}}>

            <View style={{width: "100%", paddingRight: 20}}>

            <Text style={{fontFamily: fonts[500], fontSize: 18,marginTop: 18, color: "black",width: "80%"}}>{title}</Text>
             <Text style={{fontFamily: fonts[700], fontSize: 12, color: "#2D2D2D", marginRight: 10 }}>{company.name}</Text>
            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 8, marginTop: 4}}>
            <FeatherIcon name={"map-pin"} style={{marginBottom: 4}} size={15}></FeatherIcon>
            <Text style={{fontFamily: fonts[700], fontSize: 12, color: "#2D2D2D", marginRight: 10, marginLeft: 5 }}>{location.city}</Text>
            <FeatherIcon name={"briefcase"} style={{marginBottom: 4}} size={15}></FeatherIcon>
            <Text style={{fontFamily: fonts[700], fontSize: 12, marginLeft: 5, color: "#2D2D2D"}}>{employment_type_name}</Text>
            </View>

                <FlatList data={tags.slice(0, 3)} keyExtractor={(item, index) => 'key:'+index} renderItem={({item}) =>  <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{item.tag.name}</Text></View>} horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false} ListFooterComponent={() => <Text style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161", textDecorationLine: "underline", marginTop: 3}}>Fler</Text>}></FlatList>
                {/*tags.map((tag) => <View style={{marginRight: 7, backgroundColor: "#ededed", borderRadius: 40, paddingHorizontal: 7, paddingVertical: 3, marginBottom: 7}}><Text  style={{fontFamily: "Poppins_400Regular", fontSize: 11, color: "#616161"}}>{tag}</Text></View>)*/}
                <Text style={{marginTop: 10, fontFamily: "Poppins_400Regular", fontSize: 13, flexGrow: 1}} numberOfLines={6}>{description}</Text>
             </View>
       
            <Image source={{uri: company.image}} style={{height: 40, width: 40, position: "absolute", right: 18, top:18, resizeMode: "cover"}}></Image>
            </View>
   
         </TouchableWithoutFeedback>
            
        </View>
    )
}

export default Card_job;