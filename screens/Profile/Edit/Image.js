import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react'
import { TouchableOpacity, View } from 'react-native';
import Btn_auth from '../../../components/auth/Btn_auth';
import Input_auth from '../../../components/auth/Input_auth';
import Header_goBack from '../../../components/Header_goBack';
import update from '../../../query_updates/update_p_users/function';
import update_email from '../../../query_updates/update_email/function';
import { AuthContext } from '../../../routes/AuthProvider';
import update_p_users from '../../../query_updates/update_p_users/function';

const Image = ({refresh}) => {

    const { user, setUser } = useContext(AuthContext);

    
    const phone_numberRef = useRef("");
    const navigation = useNavigation();
 

    const updateImage = async () => {
          if (phone_numberRef.current !== ""){
                  
                      const response = await update_p_users(user.uid, {phone_number: phone_numberRef.current})
                     
                      if (response === "done"){
                          navigation.goBack()
                          console.log(refresh)
                          refresh()
                      }
                      else {
                          alert("Något gick fel")
                      }               
              }
          
          else if (phone_numberRef.current === ""){
              alert("Du måste fylla i fältet")
          }
    }


    return (

        <View>
            <Header_goBack title={"Ändra bild"}></Header_goBack>
            <View style={{marginTop: 100, width: "90%", alignSelf: "center"}}>

            <TouchableOpacity onPress={updateImage}>
                  <Btn_auth title={"Uppdatera"}></Btn_auth>
            </TouchableOpacity>

            </View>
        </View>
    )
}

export default Image;