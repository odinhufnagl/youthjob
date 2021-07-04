import React from 'react'
import { View, ImageBackground } from 'react-native';
const Img_top = ({source}) => {
    return (
        <View>
            <ImageBackground source={{uri: source}} style={{position: "absolute", 
           left: 0,
           right: 0,
           bottom: 0,
           top: 0,
            opacity: 0.40,
            height: 280,
            width: "100%",}}></ImageBackground>
        </View>
    )
}

export default Img_top;