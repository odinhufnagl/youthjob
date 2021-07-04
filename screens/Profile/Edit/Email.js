import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native';
import Btn_auth from '../../../components/auth/Btn_auth';
import Input_auth from '../../../components/auth/Input_auth';
import Header_goBack from '../../../components/Header_goBack';
import Loading from '../../../components/Loading';
import update_email from '../../../query_updates/update_email/function';
import { AuthContext } from '../../../routes/AuthProvider';

const Email = () => {

    const { user, setUser } = useContext(AuthContext);


    const passwordRef = useRef("");
    const emailRef = useRef("");
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const updateEmail = async () => {
          if (emailRef.current !== "" && passwordRef.current !== ""){
                      setLoading(true)
                      const response = await update_email(user.email, emailRef.current, passwordRef.current, setUser)
                    
                      console.log(response)
                      if (response === "done"){
                          navigation.goBack()
                          
                          
                      }
                      else {
                          alert("Något gick fel")
                      }               
              }
          
          else if (emailRef.current === "" || passwordRef.current === ""){
              alert("Du måste fylla i fältet")
          }
    }
    if (loading) {
        return <Loading title={"Uppdaterar email"}></Loading>
    }

    return (

        <View>
            <Header_goBack title={"Ändra email"}></Header_goBack>
            <View style={{marginTop: 100, width: "90%", alignSelf: "center"}}>


             <Input_auth placeholder={"Ditt lösenord"} onChangeText={(text) => {passwordRef.current = text}}></Input_auth>
            <Input_auth placeholder={"Ny email"} onChangeText={(text) => {emailRef.current = text}}></Input_auth>
            <TouchableOpacity onPress={updateEmail}>
                  <Btn_auth title={"Uppdatera"}></Btn_auth>
            </TouchableOpacity>

            </View>
        </View>
    )
}

export default Email;