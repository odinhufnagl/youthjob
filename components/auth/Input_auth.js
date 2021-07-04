import React from 'react'
import { TextInput } from "react-native"
import fonts from '../../fonts'

const Input_auth = (props) => {
    return (
        <TextInput editable={props.editable} defaultValue={props.defaultValue} onChangeText={(text) => {props.onChangeText(text)}} style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, fontFamily: fonts[600], paddingLeft: 10, fontSize: 15, fontWeight: "normal", color: "black"}} placeholder={props.placeholder} secureTextEntry={props.placeholder === "Lösenord" || props.placeholder === "Ditt lösenord"}></TextInput>    
    )
}

export default Input_auth;