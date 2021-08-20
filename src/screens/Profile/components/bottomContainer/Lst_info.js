import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../../../../constants/fonts';
import CV_and_personal_letter from './CV_and_personal_letter';
import Following from './Following';
import Lst_info_obj from './Lst_info_obj';
import Profile_top from './Profile_top';

const Lst_info = ({ curUserInfo, email, refresh, showCompanyModal }) => {
  console.log(curUserInfo);
  const { phone_number, bio, following, following_aggregate } = curUserInfo;
  const navigation = useNavigation();
  const lst = [
    ['Email', email],
    ['Telefonnummer', phone_number],
  ];

  return (
    <View style={{ width: '90%', marginTop: 20 }}>
      <Profile_top curUserInfo={curUserInfo} email={email}></Profile_top>

      <Lst_info_obj
        data={['Bio', bio]}
        refresh={refresh}
        bio={bio}
      ></Lst_info_obj>

      <CV_and_personal_letter></CV_and_personal_letter>

      <Following
        following={following}
        countFollowing={following_aggregate.aggregate.count}
        showCompanyModal={showCompanyModal}
      ></Following>

      <FlatList
        data={lst}
        keyExtractor={(item, index) => 'key:' + index}
        renderItem={({ item }) => (
          <Lst_info_obj data={item} refresh={refresh}></Lst_info_obj>
        )}
      ></FlatList>
      <View style={{ height: 30 }}></View>
      <View style={{ width: '90%', marginTop: 0, alignSelf: 'center' }}>
        {[
          'Visa Pågående utbildning',
          'Visa Senast avklarade utbildning',
          'Visa Tidigare jobb',
        ].map((title) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit', {
                title: title.split(' ').slice(1).join(' '),
                refresh: refresh,
              });
            }}
            style={{ width: 270 }}
          >
            <Text
              style={{
                fontFamily: fonts[700],
                color: 'rgba(0, 0, 0, 0.8)',
                fontSize: 15,
                marginTop: 16,
              }}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <Education title={"pågående utbildning"} data={current_education}></Education>
            <Education title={"senast avklarad utbildning"} data={current_education}></Education>
    <Earlier_jobs data={earlier_jobs[0]}></Earlier_jobs>*/}
    </View>
  );
};

export default Lst_info;
