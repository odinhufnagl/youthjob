import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user);
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
