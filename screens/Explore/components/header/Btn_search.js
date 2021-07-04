import React from 'react'
import { View, Text } from "react-native";
const Btn_search = () => {
    return (
        <View style={{width: "100%", height: "100%", backgroundColor: "#4688D4", alignItems: "center", justifyContent: "center", borderRadius: 20, maxHeight: 30}}>
            <Text style={{fontFamily: "Poppins_700Bold", fontSize: 13, color: "white", marginTop: 3}}>Sök jobb</Text>
        </View>
    )
}

export default Btn_search;