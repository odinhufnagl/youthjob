import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  Text,
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

const Education = ({ refresh, curEducation, title }) => {
  const { user, setUser } = useContext(AuthContext);
  const schoolRef = useRef('');
  const programRef = useRef('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [curDateToEdit, setCurDatetoEdit] = useState([startDate, setStartDate]);
  const navigation = useNavigation();
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

  const insertEducation = async () => {
    if (schoolRef.current !== '' && programRef.current !== '') {
      setLoading(true);
      const response = await query_insert('education', {
        p_user_current_uid: curEducation ? user.uid : null,
        p_user_latest_uid: curEducation ? null : user.uid,
        school: schoolRef.current,
        program: programRef.current,
        start_date: startDate,
        end_date: curEducation ? null : endDate,
      });
      console.log(response);
      if (response === 'done') {
        navigation.navigate('Profile');
        refresh('Lägger till utbildning');
      } else {
        alert('Något gick fel');
      }
    } else if (schoolRef.current === '' || programRef.current === '') {
      alert('Du måste fylla i fälten');
    }
  };

  if (loading) {
    return <Loading title={'Lägger till utbildning'}></Loading>;
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
      <HeaderGoBack title={title} />
      <View
        style={{
          marginTop: 100,
          width: '90%',
          alignSelf: 'center',
          height: '100%',
        }}
      >
        <Text style={{ fontFamily: fonts[600] }}>Skola</Text>
        <InputDefault
          defaultValue={schoolRef.current}
          placeholder={'Skola'}
          onChangeText={(text) => {
            schoolRef.current = text;
          }}
        />

        <Text style={{ fontFamily: fonts[600] }}>Program</Text>
        <InputDefault
          defaultValue={programRef.current}
          placeholder={'Program'}
          onChangeText={(text) => {
            programRef.current = text;
          }}
        />

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
            style={{ fontFamily: fonts[600], fontSize: 15, color: 'black' }}
          >
            {convertDateToString(startDate)}
          </Text>
        </TouchableOpacity>

        {!curEducation && (
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
                style={{ fontFamily: fonts[600], fontSize: 15, color: 'black' }}
              >
                {convertDateToString(endDate)}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ height: 20 }}></View>
        <ButtonDefault
          title={'Lägg till'}
          onPress={insertEducation}
        ></ButtonDefault>
      </View>
    </View>
  );
};

export default Education;
