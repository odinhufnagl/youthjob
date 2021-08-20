import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonDefault from '../../components/Buttons/ButtonDefault';
import SocialMediaAuth from '../../components/SocialMediaAuth/SocialMediaAuth';
import { default as InputDefault } from '../../components/TextFields/InputDefault';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { AuthContext } from '../../providers/AuthProvider';

const LoginScreen = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const loginUser = async (email, password) => {
    console.log(email, password);
    try {
      var response = await login(email, password);
      if (response && response.user) {
        console.log(response);
      } else {
        alert('Not succesful');
      }
    } catch (e) {
      console.log(e);
      alert('Following error occured:', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.smallBall}></View>
      <View style={styles.bigBall}></View>

      <Text style={styles.header}>Youthjob</Text>
      <View style={styles.containerInner}>
        <InputDefault
          placeholder={'Epost'}
          onChangeText={(text) => {
            emailRef.current = text;
          }}
        />
        <InputDefault
          placeholder={'Lösenord'}
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
          secureTextEntry
        />

        <ButtonDefault
          title={'Logga in'}
          onPress={() => {
            loginUser(emailRef.current, passwordRef.current);
          }}
        />

        <Text style={styles.glomtLosenord}>Glömt lösenord?</Text>
        <SocialMediaAuth />
        <TouchableOpacity
          style={styles.signUpText}
          onPress={() => {
            navigation.navigate('Signup');
          }}
        >
          <Text style={styles.signUpText1}>Har du inte ett konto? </Text>
          <Text style={styles.signUpText2}>Skapa ett konto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  smallBall: {
    backgroundColor: 'rgba(70, 136, 212, 0.8)',
    height: 150,
    width: 150,
    position: 'absolute',
    borderRadius: 500,
    bottom: -100,
    left: -50,
  },
  bigBall: {
    backgroundColor: 'rgba(70, 136, 212, 0.5)',
    height: 250,
    width: 250,
    position: 'absolute',
    borderRadius: 500,
    bottom: -140,
    right: -130,
  },
  header: {
    fontFamily: fonts[700],
    fontSize: 25,
    color: '#4688D4',
    position: 'absolute',
    top: 30,
  },
  containerInner: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  glomtLosenord: {
    marginTop: 30,
    fontFamily: fonts[500],
    color: colors.main,
    fontSize: 13,
  },
  signUpText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },
  signUpText1: {
    fontFamily: fonts[500],
    color: '#b3b3b3',
    fontSize: 13,
    marginRight: 4,
  },
  signUpText2: {
    fontFamily: fonts[600],
    color: colors.main,
    fontSize: 13.5,
  },
});

export default LoginScreen;
