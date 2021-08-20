import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { View } from 'react-native';
import { default as ButtonDefault } from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import Loading from '../../../components/Loading/Loading';
import InputDefault from '../../../components/TextFields/InputDefault';
import update_p_users from '../../../graphql/query_updates/update_p_users/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Phone_number = ({ refresh, phone_number }) => {
  const { user, setUser } = useContext(AuthContext);

  const phone_numberRef = useRef(phone_number);
  console.log(phone_numberRef.current);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const updatePhone_number = async () => {
    if (phone_numberRef.current !== '') {
      setLoading(true);
      const response = await update_p_users(user.uid, {
        phone_number: phone_numberRef.current,
      });

      if (response === 'done') {
        navigation.goBack();
        refresh('Uppdaterar telefonnummer');
      } else {
        alert('Något gick fel');
      }
    } else if (phone_numberRef.current === '') {
      alert('Du måste fylla i fältet');
    }
  };

  if (loading) {
    return <Loading title={'Uppdaterar telefonnummer'}></Loading>;
  }
  return (
    <View>
      <HeaderGoBack title={'Ändra telefonnummer'}></HeaderGoBack>
      <View style={{ marginTop: 100, width: '90%', alignSelf: 'center' }}>
        <InputDefault
          defaultValue={phone_numberRef.current}
          placeholder={'Nytt telefonnummer'}
          onChangeText={(text) => {
            phone_numberRef.current = text;
          }}
        />

        <ButtonDefault
          onPress={updatePhone_number}
          title={'Uppdatera'}
        ></ButtonDefault>
      </View>
    </View>
  );
};

export default Phone_number;
