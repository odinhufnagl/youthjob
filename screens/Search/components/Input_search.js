import React from 'react'
import { View, TextInput } from "react-native"
import FeatherIcon from "react-native-vector-icons/Feather"
const Input_search = ({ placeholder }) => {
    return (
        <View style={{height: 45, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between"}}>
        <TextInput style={{width: "90%", height: "100%", paddingLeft: 15, fontFamily: "Poppins_400Regular",backgroundColor: "white", borderRadius: 20}} placeholder={placeholder}></TextInput>
        <FeatherIcon name={"search"} size={25} style={{color: "black"}}></FeatherIcon>
    </View>
    )
}

export default Input_search;
