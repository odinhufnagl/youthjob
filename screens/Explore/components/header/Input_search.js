import React from 'react'
import { View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
const Input_search = ({ setSearchphrase, placeholder }) => {
    return (
        <View style={{width: "70%", height: 45, backgroundColor: "white", borderRadius: 20, flexDirection: "row", alignItems: "center"}}>
            <TextInput onChangeText={setSearchphrase} style={{width: "88%", height: "100%", paddingLeft: 10, fontFamily: "Poppins_400Regular", marginTop: 5}} placeholder={placeholder}></TextInput>
            <FeatherIcon name={"search"} size={20} style={{marginRight: 20}}></FeatherIcon>
        </View>
    )
}

export default Input_search;