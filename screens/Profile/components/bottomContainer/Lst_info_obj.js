import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import fonts from '../../../../fonts';
import FeatherIcon from "react-native-vector-icons/Feather";
import colors from '../../../../colors';
import { useNavigation } from '@react-navigation/native';
const Lst_info_obj = ({ data, refresh, bio }) => {
    const title = data[0];
    const answer = data[1];
    const navigation = useNavigation()
   
    return (
        <View style={{width: "100%", alignItems: "center", }}>

          
         <View style={title === "Bio" ? {width: "90%", marginTop: 10} : {borderBottomColor: "#dbdbdb", borderBottomWidth: 1, width: "90%", marginTop: 20}}>
             {title !== "Bio" ? 
             <View style={{flexDirection: "row", alignItems: "center"}}>

                 <Text style={{fontFamily: fonts[500], color: "#c9c9c9"}}>{title}</Text>
                 <TouchableOpacity onPress={() => {navigation.navigate("Edit", {title: title, refresh: refresh})}}>

                 <FeatherIcon name={"edit"} style={{color: colors.main, marginBottom: 4, marginLeft: 8}} size={17}></FeatherIcon>
                 </TouchableOpacity>
                 </View>  : null}
             <Text style={title === "Bio" ? {fontFamily: fonts[600], color: "black"} : {fontFamily: fonts[600], color: "black"}}>{answer}</Text>
             {title === "Bio" ? 
             <TouchableOpacity onPress={() => {navigation.navigate("Edit", {title: title, refresh: refresh})}} style={{justifyContent: "center", width: 60}}>
                   <Text style={{fontFamily: fonts[500], fontSize: 11, color: colors.main}}>Ändra bio</Text>
             </TouchableOpacity> : null}
         </View>    
        </View>
    )
}

export default Lst_info_obj