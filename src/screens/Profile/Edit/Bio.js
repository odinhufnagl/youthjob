import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import Loading from '../../../components/Loading/Loading';
import fonts from '../../../constants/fonts';
import update_p_users from '../../../graphql/query_updates/update_p_users/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Bio = ({ refresh, bio }) => {
  const { user, setUser } = useContext(AuthContext);

  const bioRef = useRef(bio);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const updateBio = async () => {
    if (bioRef.current !== '') {
      setLoading(true);
      const response = await update_p_users(user.uid, { bio: bioRef.current });

      if (response === 'done') {
        navigation.goBack();
        refresh('Uppdaterar bio');
      } else {
        alert('Något gick fel');
      }
    } else if (bioRef.current === '') {
      alert('Du måste fylla i fältet');
    }
  };

  if (loading) {
    return <Loading title={'Uppdaterar bio'}></Loading>;
  }
  return (
    <View>
      <HeaderGoBack title={'Ändra bio'} />
      <View style={{ marginTop: 100, width: '90%', alignSelf: 'center' }}>
        <TextInput
          onChangeText={(text) => {
            bioRef.current = text;
          }}
          defaultValue={bioRef.current}
          multiline
          style={{
            width: '100%',
            borderRadius: 15,
            backgroundColor: '#e6e7eb',
            marginBottom: 15,
            fontFamily: fonts[600],
            paddingLeft: 10,
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
            fontWeight: 'normal',
          }}
        ></TextInput>

        <ButtonDefault title={'Uppdatera'} onPress={updateBio}></ButtonDefault>
      </View>
    </View>
  );
};

export default Bio;
