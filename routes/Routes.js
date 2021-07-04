import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';


export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    
   
    // Handle user state changes
    function onAuthStateChanged(user) {
        console.log(user)
      setUser(user);
     
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    return (
      <NavigationContainer>
    
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }