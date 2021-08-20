import auth from '@react-native-firebase/auth';
import React, { createContext, useState } from 'react';
import p_users_get from '../graphql/queries_read/p_user_get.js/function';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUserInfo, setCurrentUserInfo] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            var response = await auth().signInWithEmailAndPassword(
              email,
              password
            );
            return response;
          } catch (e) {
            console.log(e);
          }
        },
        signup: async (email, password) => {
          try {
            var response = await auth().createUserWithEmailAndPassword(
              email,
              password
            );
            return response;
          } catch (e) {
            console.log(e);
          }
        },

        currentUser: async () => {
          try {
            var user = await auth().currentUser;
            return user;
          } catch (e) {
            console.log(e);
          }
        },
        currentUserInfo,
        setCurrentUserInfo: async (firebase_uid) => {
          try {
            const userInfo = await p_users_get(firebase_uid);
            setCurrentUserInfo(userInfo);
            return userInfo;
          } catch (e) {
            console.log(e);
          }
        },

        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
