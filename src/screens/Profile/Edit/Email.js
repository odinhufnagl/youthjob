import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { View } from 'react-native';
import { default as ButtonDefault } from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import Loading from '../../../components/Loading/Loading';
import { default as InputDefault } from '../../../components/TextFields/InputDefault';
import update_email from '../../../graphql/query_updates/update_email/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Email = () => {
  const { user, setUser } = useContext(AuthContext);

  const passwordRef = useRef('');
  const emailRef = useRef('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const updateEmail = async () => {
    if (emailRef.current !== '' && passwordRef.current !== '') {
      setLoading(true);
      const response = await update_email(
        user.email,
        emailRef.current,
        passwordRef.current,
        setUser
      );

      console.log(response);
      if (response === 'done') {
        navigation.goBack();
        r;
      } else {
        alert('Något gick fel');
      }
    } else if (emailRef.current === '' || passwordRef.current === '') {
      alert('Du måste fylla i fältet');
    }
  };
  if (loading) {
    return <Loading title={'Uppdaterar email'}></Loading>;
  }

  return (
    <View>
      <HeaderGoBack title={'Ändra email'}></HeaderGoBack>
      <View style={{ marginTop: 100, width: '90%', alignSelf: 'center' }}>
        <InputDefault
          placeholder={'Ditt lösenord'}
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
        />
        <InputDefault
          placeholder={'Ny email'}
          onChangeText={(text) => {
            emailRef.current = text;
          }}
        />

        <ButtonDefault title={'Uppdatera'} onPress={updateEmail} />
      </View>
    </View>
  );
};

export default Email;
