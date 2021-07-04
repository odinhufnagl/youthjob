import React from 'react'
import { TextInput, TouchableOpacity, Text, View } from "react-native"

const Btn_auth = (props) => {
    return (
        <View style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#4688D4", marginBottom: 15, display: "flex", justifyContent: "center", alignItems: "center", elevation: 5}} placeholder={props.placeholder}>
            <Text style={{fontFamily: "Poppins_700Bold",fontSize: 17, color: "white" }}>{props.title}</Text>
        </View>
        

      
    )
}

export default Btn_auth;