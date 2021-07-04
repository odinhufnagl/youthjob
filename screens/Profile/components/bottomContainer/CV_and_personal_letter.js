import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import colors from '../../../../colors'
import fonts from '../../../../fonts'

const CV_and_personal_letter = () => {
    return (
        <View style={{width: "100%", alignItems: "center", marginTop: 25}}>

        <View style={{flexDirection: "row", width: "90%", alignItems: "center", justifyContent: 'space-between'}}>
            {["CV", "Personligt brev"].map(  (title) => 
            <TouchableOpacity style={{width: 130,height: 40, backgroundColor: colors.main, alignItems: "center", justifyContent: "center", borderRadius: 10}}>
                <Text style={{fontFamily: fonts[500], color: "white"}}>
                   {title}
                </Text>
            </TouchableOpacity>
            )
}
        </View>

        </View>
    )
}

export default CV_and_personal_letter;