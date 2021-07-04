import { useNavigation } from '@react-navigation/native'
import React, { useContext, useRef } from 'react'
import { View, Text, TouchableOpacity }from "react-native"
import Btn_auth from '../../components/auth/Btn_auth'
import Input_auth from '../../components/auth/Input_auth'
import Other_login_auth from '../../components/auth/Other_login_auth'
import { AuthContext } from "../../routes/AuthProvider"
import styles from "./styles";

const SignupScreen = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
  
    const {signup} = useContext(AuthContext);
    

    const signupUser = async (email, password) => {
        console.log(email, password)
        try {
        var response = await signup(email, password)
        
        console.log(response)

        if (response && response.user){
            
            console.log(response)
            

        }
        else {
            alert("not succesful")
        }


        }
        catch {
            alert("something went wrong")
        }



    }
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

                <View style={styles.smallBall}></View>
                <View style={styles.bigBall}></View>


                <Text style={styles.header}>Youthjob</Text>
            <View style={styles.containerInner}>
                <Input_auth placeholder={"Epost"} onChangeText={(text) => {emailRef.current = text}}></Input_auth>
                <Input_auth placeholder={"Lösenord"} onChangeText={(text) => {passwordRef.current = text}}></Input_auth>
                <TouchableOpacity onPress={() => {signupUser(emailRef.current, passwordRef.current)}} style={{width: "100%"}}>
                
                <Btn_auth title={"Skapa ett konto"}></Btn_auth>
                </TouchableOpacity>

                <Other_login_auth></Other_login_auth>
                <TouchableOpacity style={styles.logInText} onPress={() => {navigation.navigate("Login")}}>
                    <Text style={styles.logInText1}>Har du redan ett konto? </Text>
                    <Text style={styles.logInText2}>Logga in</Text>
                </TouchableOpacity>
                


                
            </View>
        </View>
    )
}

export default SignupScreen;