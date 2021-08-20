import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { View } from 'react-native';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import update_p_users from '../../../graphql/query_updates/update_p_users/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Image = ({ refresh }) => {
  const { user, setUser } = useContext(AuthContext);

  const phone_numberRef = useRef('');
  const navigation = useNavigation();

  const updateImage = async () => {
    if (phone_numberRef.current !== '') {
      const response = await update_p_users(user.uid, {
        phone_number: phone_numberRef.current,
      });

      if (response === 'done') {
        navigation.goBack();
        console.log(refresh);
        refresh();
      } else {
        alert('Något gick fel');
      }
    } else if (phone_numberRef.current === '') {
      alert('Du måste fylla i fältet');
    }
  };

  return (
    <View>
      <HeaderGoBack title={'Ändra bild'}></HeaderGoBack>
      <View style={{ marginTop: 100, width: '90%', alignSelf: 'center' }}>
        <ButtonDefault
          title={'Uppdatera'}
          onPress={updateImage}
        ></ButtonDefault>
      </View>
    </View>
  );
};

export default Image;
