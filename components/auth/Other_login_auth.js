import React from 'react'
import { TextInput, TouchableOpacity, Text, View , Image} from "react-native"
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon'
import Facebook from "../../icons8-facebook.svg"
import Google from "../../icons8-google.svg"
const Other_login_auth = (props) => {
    return (
        <View style={{display: "flex", width: "100%", marginTop: 25, flexDirection: "row", justifyContent: "center"}}>
            <View style={{borderRadius: 20, borderColor: "#e6e6e6", borderWidth: 1, height:45, width: 120,display: "flex", alignItems: "center", paddingLeft: 10, flexDirection: "row", paddingRight: 10, marginHorizontal: 10}}>

            <Google height={100} width={25}></Google>
            <Text style={{fontFamily: "Poppins_600SemiBold", marginLeft: 5, fontSize: 13}}>Google</Text>

            </View>
            <View style={{borderRadius: 20, borderColor: "#e6e6e6", borderWidth: 1,width: 120, height:45, display: "flex", alignItems: "center", paddingLeft: 10, flexDirection: "row", paddingRight: 10, marginHorizontal: 10}}>

<Facebook height={100} width={29}></Facebook>
<Text style={{fontFamily: "Poppins_600SemiBold", marginLeft: 5, fontSize: 13}}>Facebook</Text>

</View>
         

        </View>
        

      
    )
}

export default Other_login_auth;