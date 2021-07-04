import React from 'react'
import { Image } from 'react-native';
import { Text, View } from "react-native";
import fonts from '../../../fonts';
const List_obj_companies = ({ data }) => {
    const { name, image} = data;
    return (
        <View style={{flexDirection: "row", alignItems: "center", marginBottom: 25, paddingLeft: 40}}>
     
        <Image source={{uri: image}} width={40} height={40} style={{width: 50, height: 50,marginRight: 15, resizeMode: "contain"}}></Image>

     


            <View style={{flexDirection: "row", alignItems: "center",}}>
                <Text style={{fontFamily: fonts[600], color: "black", fontSize: 15, marginRight: 4}}>{name}</Text> 
                
              
        </View>
        </View>
      
    )
}

export default List_obj_companies;