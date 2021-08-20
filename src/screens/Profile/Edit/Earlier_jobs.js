import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const Earlier_jobs = ({ refresh, jobs, title }) => {
  const navigation = useNavigation();

  return (
    <View style={{ height: '100%' }}>
      <HeaderGoBack title={'Tidigare jobb'}></HeaderGoBack>
      <View style={{ marginTop: 60, width: '100%', alignSelf: 'center' }}>
        <FlatList
          data={jobs}
          showsVerticalScrollIndicator={false}
          style={{ width: '100%' }}
          renderItem={({ item }) => {
            const {
              company_name,
              role,
              short_info,
              start_date,
              end_date,
              current_employer,
            } = item;
            return (
              <View
                style={{
                  width: '80%',
                  borderRadius: 20,
                  alignItems: 'center',
                  paddingBottom: 20,
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: colors.main,
                  elevation: 4,
                  alignSelf: 'center',
                  marginBottom: 20,
                  borderBottomColor: colors.main,
                  borderBottomWidth: 40,
                  marginTop: 20,
                }}
              >
                {[
                  ['Företag', company_name],
                  ['Roll', role],
                  [
                    'Tidsperiod',
                    !current_employer
                      ? start_date + ' till ' + end_date
                      : 'från ' + start_date + ' (nuvarande)',
                  ],
                ].map((obj) => (
                  <View
                    style={{
                      borderBottomColor: '#dbdbdb',
                      borderBottomWidth: 1,
                      width: '80%',
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: fonts[500],
                        color: '#c9c9c9',
                        fontSize: 11,
                      }}
                    >
                      {obj[0]}
                    </Text>

                    <Text
                      style={{
                        fontFamily: fonts[600],
                        color: 'black',
                        fontSize: 11,
                      }}
                    >
                      {obj[1]}
                    </Text>
                  </View>
                ))}
                <View style={{ width: '80%', marginTop: 10, marginBottom: 20 }}>
                  <Text
                    style={{
                      fontFamily: fonts[500],
                      color: '#c9c9c9',
                      fontSize: 11,
                    }}
                  >
                    Övrig information
                  </Text>
                  <Text
                    style={{
                      fontFamily: fonts[600],
                      color: 'black',
                      fontSize: 11,
                    }}
                  >
                    {short_info}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Update_earlier_job', {
                      refresh: refresh,
                      job: item,
                      title: title,
                    });
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: colors.background,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: -25,
                    borderWidth: 2,
                    borderColor: colors.main,
                    elevation: 18,
                  }}
                >
                  <FeatherIcon
                    name={'edit'}
                    size={24}
                    style={{ color: colors.main }}
                  ></FeatherIcon>
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Add', {
            title: 'Tidigare jobb',
            refresh: refresh,
          });
        }}
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          right: 18,
          bottom: 18,
          backgroundColor: colors.main,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 20,
        }}
      >
        <FeatherIcon name={'plus'} color={'white'} size={30}></FeatherIcon>
      </TouchableOpacity>
    </View>
  );
};

export default Earlier_jobs;
