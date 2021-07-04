import React, { useEffect, useRef } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import colors from '../colors';
import fonts from '../fonts';



const Loading = ({ title }) => {
    
    return (
        <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
            <ActivityIndicator color={colors.main} size={"large"} style={{marginBottom: 10}}></ActivityIndicator>
        
            <Text style={{fontFamily: fonts[600], color: "black", fontSize: 15}}>{title !== undefined ? title + "..." : null}</Text>
        </View>
    )
}

export default Loading;