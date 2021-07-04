import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native';
import Btn_auth from '../../../components/auth/Btn_auth';
import Input_auth from '../../../components/auth/Input_auth';
import Header_goBack from '../../../components/Header_goBack';
import update from '../../../query_updates/update_p_users/function';
import update_email from '../../../query_updates/update_email/function';
import { AuthContext } from '../../../routes/AuthProvider';
import update_p_users from '../../../query_updates/update_p_users/function';
import Loading from '../../../components/Loading';

const Phone_number = ({refresh, phone_number}) => {

    const { user, setUser } = useContext(AuthContext);

    
    const phone_numberRef = useRef(phone_number);
    console.log(phone_numberRef.current)
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
 

    const updatePhone_number = async () => {
          if (phone_numberRef.current !== ""){
                      setLoading(true)
                      const response = await update_p_users(user.uid, {phone_number: phone_numberRef.current})

                      
                      if (response === "done"){
                          navigation.goBack()
                          refresh("Uppdaterar telefonnummer")
                        }
                    else {
                            alert("Något gick fel")
                        }               
              }
          
          else if (phone_numberRef.current === ""){
              alert("Du måste fylla i fältet")
          }
    }
    
    if (loading) {
        return <Loading title={"Uppdaterar telefonnummer"}></Loading>
    }
    return (

        <View>
            <Header_goBack title={"Ändra telefonnummer"}></Header_goBack>
            <View style={{marginTop: 100, width: "90%", alignSelf: "center"}}>


          
            <Input_auth defaultValue={phone_numberRef.current} placeholder={"Nytt telefonnummer"} onChangeText={(text) => {phone_numberRef.current = text}}></Input_auth>
            <TouchableOpacity onPress={updatePhone_number}>
                  <Btn_auth title={"Uppdatera"}></Btn_auth>
            </TouchableOpacity>

            </View>
        </View>
    )
}

export default Phone_number;