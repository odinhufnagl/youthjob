import React from 'react';
import { Image, Text, View } from 'react-native';
import fonts from '../../../../constants/fonts';
import getAge from '../../../../global_functions/getAge';

const Profile_top = ({ curUserInfo }) => {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', width: '90%' }}
      >
        <Image
          source={{ uri: curUserInfo.profile_picture }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        ></Image>
        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
          <Text
            style={{ fontFamily: fonts[700], color: 'black', fontSize: 20 }}
          >
            {curUserInfo.first_name} {curUserInfo.last_name}
          </Text>
          <Text
            style={{
              fontFamily: fonts[500],
              fontSize: 12,
              color: '#7a7a7a',
              marginTop: -7,
            }}
          >
            {getAge(curUserInfo.date_of_birth)} år
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile_top;
