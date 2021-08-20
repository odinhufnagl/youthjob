import CheckBox from '@react-native-community/checkbox';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import Loading from '../../../components/Loading/Loading';
import { default as InputDefault } from '../../../components/TextFields/InputDefault';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import query_insert from '../../../graphql/query_insert/insert/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Earlier_jobs = () => {
  const { user, setUser, currentUserInfo } = useContext(AuthContext);

  const route = useRoute();
  const { refresh, title } = route.params;

  const company_nameRef = useRef('');
  const short_infoRef = useRef('');
  const [currentEmployer, setCurrentEmployer] = useState(false);
  const roleRef = useRef('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [curDateToEdit, setCurDatetoEdit] = useState([startDate, setStartDate]);
  const navigation = useNavigation();
  const didMount = useRef(false);
  const [loading, setLoading] = useState(false);

  BackHandler.addEventListener('hardwareBackPress', () => {
    if (showCalendar) {
      setShowCalendar(false);
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  });

  const convertDateToString = (date) => {
    return date.toDateString().split(' ').slice(1).join(' ');
  };

  const insertJob = async () => {
    console.log(company_nameRef.current);
    if (
      company_nameRef.current !== '' &&
      roleRef.current !== '' &&
      short_infoRef.current != ''
    ) {
      setLoading(true);
      const response = await query_insert('job', [
        {
          p_user_uid: user.uid,
          company_name: company_nameRef.current,
          role: roleRef.current,
          start_date: startDate,
          end_date: currentEmployer ? null : endDate,
          current_employer: currentEmployer,
          short_info: short_infoRef.current,
        },
      ]);
      console.log(response);
      if (response === 'done') {
        refresh('Lägger till jobb');
      } else {
        alert('Något gick fel');
      }
    } else if (
      company_nameRef.current === '' ||
      (roleRef.current === '' && short_infoRef.current !== '')
    ) {
      alert('Du måste fylla i fälten');
    }
  };

  useEffect(() => {
    if (didMount.current) {
      navigation.navigate('Edit', {
        title: title,
        curUserInfo: currentUserInfo,
        refresh: refresh,
      });
    } else {
      didMount.current = true;
    }
  }, [currentUserInfo]);

  if (loading) {
    return <Loading title={'Lägger till jobb'}></Loading>;
  }

  if (showCalendar) {
    return (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DatePicker
          style={{ width: Dimensions.get('window').width, height: 200 }}
          date={curDateToEdit[0]}
          onDateChange={curDateToEdit[1]}
          mode={'date'}
        ></DatePicker>
        <TouchableOpacity
          onPress={() => {
            setShowCalendar(false);
          }}
          style={{
            width: 100,
            height: 35,
            backgroundColor: colors.main,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 30,
          }}
        >
          <Text style={{ fontFamily: fonts[600], color: 'white' }}>Klar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ height: '100%' }}>
      <HeaderGoBack title={'Lägg till jobb'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 60 }}
        ListFooterComponent={() => (
          <View style={{ height: '100%' }}>
            <View
              style={{
                marginTop: 10,
                width: '90%',
                alignSelf: 'center',
                height: '100%',
              }}
            >
              <Text style={{ fontFamily: fonts[600] }}>Företagsnamn</Text>
              <InputDefault
                defaultValue={company_nameRef.current}
                onChangeText={(text) => {
                  company_nameRef.current = text;
                }}
                placeholder={'Företagsnamn'}
              />

              <Text style={{ fontFamily: fonts[600] }}>Roll</Text>
              <InputDefault
                defaultValue={roleRef.current}
                onChangeText={(text) => {
                  roleRef.current = text;
                }}
                placeholder={'Roll'}
              />

              <Text style={{ fontFamily: fonts[600] }}>Kort information</Text>
              <TextInput
                defaultValue={short_infoRef.current}
                onChangeText={(text) => {
                  short_infoRef.current = text;
                }}
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
                  minHeight: 55,
                }}
                placeholder={'Kort information'}
              ></TextInput>

              <Text style={{ fontFamily: fonts[600] }}>Startdatum</Text>
              <TouchableOpacity
                onPress={() => {
                  setCurDatetoEdit([startDate, setStartDate]);
                  setShowCalendar(true);
                }}
                style={{
                  width: '100%',
                  height: 55,
                  borderRadius: 15,
                  backgroundColor: '#e6e7eb',
                  marginBottom: 15,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: fonts[600],
                    fontSize: 15,
                    color: 'black',
                  }}
                >
                  {convertDateToString(startDate)}
                </Text>
              </TouchableOpacity>

              {!currentEmployer ? (
                <View>
                  <Text style={{ fontFamily: fonts[600] }}>Slutdatum</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setCurDatetoEdit([endDate, setEndDate]);
                      setShowCalendar(true);
                    }}
                    style={{
                      width: '100%',
                      height: 55,
                      borderRadius: 15,
                      backgroundColor: '#e6e7eb',
                      marginBottom: 15,
                      paddingLeft: 10,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: fonts[600],
                        fontSize: 15,
                        color: 'black',
                      }}
                    >
                      {convertDateToString(endDate)}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                  marginTop: 8,
                }}
              >
                <Text style={{ fontFamily: fonts[600] }}>
                  Nuvarande arbetsgivare?
                </Text>
                <CheckBox
                  value={currentEmployer}
                  onValueChange={setCurrentEmployer}
                  onFillColor={colors.main}
                  tintColors={{ true: colors.main, false: colors.main }}
                  lineWidth={4}
                ></CheckBox>
              </View>

              <View style={{ height: 20 }}></View>
              <ButtonDefault title={'Lägg till'} onPress={insertJob} />
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Earlier_jobs;
