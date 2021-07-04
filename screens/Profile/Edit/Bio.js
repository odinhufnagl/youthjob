import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react'
import { TouchableOpacity, View, TextInput } from 'react-native';
import Btn_auth from '../../../components/auth/Btn_auth';
import Input_auth from '../../../components/auth/Input_auth';
import Header_goBack from '../../../components/Header_goBack';
import fonts from '../../../fonts';
import update from '../../../query_updates/update_p_users/function';
import update_email from '../../../query_updates/update_email/function';
import { AuthContext } from '../../../routes/AuthProvider';
import update_p_users from '../../../query_updates/update_p_users/function';
import Loading from '../../../components/Loading';

const Bio = ({refresh, bio}) => {

    const { user, setUser } = useContext(AuthContext);

    
    const bioRef = useRef(bio);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
 

    const updateBio = async () => {
          if (bioRef.current !== ""){
                      setLoading(true)
                      const response = await update_p_users(user.uid, {bio: bioRef.current})
                     
                      if (response === "done"){
                          navigation.goBack()
                          refresh("Uppdaterar bio")
                      }
                      else {
                          alert("Något gick fel")
                      }               
              }
          
          else if (bioRef.current === ""){
              alert("Du måste fylla i fältet")
          }
    }

    if (loading) {
        return <Loading title={"Uppdaterar bio"}></Loading>
    }
    return (

        <View>
            <Header_goBack title={"Ändra bio"}></Header_goBack>
            <View style={{marginTop: 100, width: "90%", alignSelf: "center"}}>


          
            <TextInput onChangeText={(text) => {bioRef.current = text}} defaultValue={bioRef.current} multiline style={{width: "100%", borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, fontFamily: fonts[600], paddingLeft: 10, fontSize: 15, paddingTop: 10, paddingBottom: 10, fontWeight: "normal"}}></TextInput>    
            <TouchableOpacity onPress={updateBio}>
                  <Btn_auth title={"Uppdatera"}></Btn_auth>
            </TouchableOpacity>

            </View>
        </View>
    )
}

export default Bio;