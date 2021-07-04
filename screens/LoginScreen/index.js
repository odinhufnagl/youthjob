import { useNavigation } from '@react-navigation/native'
import React, { useContext, useRef } from 'react'
import { View, Text, TouchableOpacity }from "react-native"
import Btn_auth from '../../components/auth/Btn_auth'
import Input_auth from '../../components/auth/Input_auth'
import Other_login_auth from '../../components/auth/Other_login_auth'
import { AuthContext } from "../../routes/AuthProvider"
import styles from "./styles";

const LoginScreen = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useContext(AuthContext);
    const navigation = useNavigation();


    const loginUser = async (email, password) => {
        console.log(email, password)
        try {
            var response = await login(email, password);
            if (response && response.user){
                console.log(response)
            }
            else {
                alert("Not succesful")
            }
        }
        catch (e) 
            {
                console.log(e)
                alert("Following error occured:", e)
            }
    }

    return (
        <View style={styles.container}>

                <View style={styles.smallBall}></View>
                <View style={styles.bigBall}></View>


                <Text style={styles.header}>Youthjob</Text>
            <View style={styles.containerInner}>
                <Input_auth placeholder={"Epost"} onChangeText={(text) => {emailRef.current = text}}></Input_auth>
                <Input_auth placeholder={"Lösenord"} onChangeText={(text) => {passwordRef.current = text}}></Input_auth>
                <TouchableOpacity onPress={() => {loginUser(emailRef.current, passwordRef.current)}} style={{width: "100%"}}>
                        <Btn_auth title={"Logga in"}></Btn_auth>
                </TouchableOpacity>
                <Text style={styles.glomtLosenord}>Glömt lösenord?</Text>
                <Other_login_auth></Other_login_auth>
                <TouchableOpacity style={styles.signUpText} onPress={() => {navigation.navigate("Signup")}}>
                        <Text style={styles.signUpText1}>Har du inte ett konto? </Text>
                        <Text style={styles.signUpText2}>Skapa ett konto</Text>
                </TouchableOpacity>


                
            </View>
        </View>
    )
}

export default LoginScreen;