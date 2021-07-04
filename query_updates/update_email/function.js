import React from 'react';
import auth from '@react-native-firebase/auth';


const update_email = async (oldEmail, newEmail, password, setUser) => {
    
    try {
        
        return auth().signInWithEmailAndPassword(oldEmail, password).then(  //måste logga in först för security
             async () => {
            
                await auth().currentUser.updateEmail(newEmail) //updatera email
                await setUser(await auth().currentUser) //setUser igen för mailen har ju ändras
                return "done" //return done om allt gick som det skulle
             }
             
        ).catch((e) => {
            return e
        })
    }
    catch (e) {
      
        return e

    }   
}

export default update_email;