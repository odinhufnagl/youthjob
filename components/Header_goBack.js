import React from 'react'
import { View, Text, TouchableOpacity, Animated } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const AnimatableIcon = Animatable.createAnimatableComponent(FeatherIcon);

const Header_goBack = ({ title, color, border }) => {
    const navigation = useNavigation()
    
    return (
        <Animated.View style={{width: "100%", height: 60,alignItems: "center", flexDirection: "row", paddingLeft: 15,marginBottom: 20, position: "absolute", zIndex: 200}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
               <AnimatableIcon name={"arrow-left"} size={28} style={{color: color, marginBottom: 3}}></AnimatableIcon>
            </TouchableOpacity>
            <Animated.Text style={{fontFamily: "Poppins_700Bold", fontSize: 23, color: color, marginLeft: 10}}>{title}</Animated.Text>
        </Animated.View>
    )
}

export default Header_goBack;
