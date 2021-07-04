import React from 'react'
import { View, Text } from "react-native";

const Header = ({title, Icon}) => {
    return (
        <View style={{width: "100%", height: 60,borderBottomColor: "#e8e8e8", borderBottomWidth: 1, alignItems: "center", flexDirection: "row", paddingLeft: 15, backgroundColor: "white", justifyContent: "space-between", marginBottom: 20}}>
            <Text style={{fontFamily: "Poppins_700Bold", fontSize: 23, color: "black"}}>{title}</Text>
            <Icon></Icon>
        </View>
    )
}

export default Header;
