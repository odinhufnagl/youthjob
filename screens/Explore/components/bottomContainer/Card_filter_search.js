import React from 'react'
import { View, Text } from "react-native"
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";

const Card_filter_search = ({ title, marked }) => {
    return (
        <View style={{...{backgroundColor: marked ? "#8c8c8c" : "#e4e2e0"}, ...{height: 40, borderRadius: 14, marginLeft: 10, justifyContent: "center", flexDirection: "row", alignItems: "center"}}}>
            <View style={{flexDirection: "row", marginHorizontal: 10, alignItems: "center"}}>

            <Text style={{...{color: marked ? "white" : "black"}, ...{fontFamily: "Poppins_600SemiBold", fontSize: 12, marginRight: 5}}}>{title}</Text>
            {marked ? 
            <FeatherIcon name={"x"} size={20} style={{color: "white"}}></FeatherIcon>
            :
            <AntDesignIcon name={"caretdown"} style={{marginBottom: 2}}></AntDesignIcon>}
            </View>
        </View>
    )
}

export default Card_filter_search;