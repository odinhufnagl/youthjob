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
import FeatherIcon from 'react-native-vector-icons/Feather';
import ButtonDefault from '../../../components/Buttons/ButtonDefault';
import HeaderGoBack from '../../../components/Headers/HeaderGoBack';
import Loading from '../../../components/Loading/Loading';
import { default as InputDefault } from '../../../components/TextFields/InputDefault';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import query_delete from '../../../graphql/query_delete/delete/function';
import update from '../../../graphql/query_updates/update/function';
import { AuthContext } from '../../../providers/AuthProvider';

const Education = ({ refresh, education, curEducation, title }) => {
  const { school, program, start_date, end_date } = education || 0;
  const { user, setUser, setCurrentUserInfoWithData } = useContext(AuthContext);
  const schoolRef = useRef(school);
  const programRef = useRef(program);
  const [startDate, setStartDate] = useState(new Date(start_date));
  const [endDate, setEndDate] = useState(new Date(end_date));
  const [showCalendar, setShowCalendar] = useState(false);
  const [curDateToEdit, setCurDatetoEdit] = useState([startDate, setStartDate]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [removing, setRemoving] = useState(false);

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

  const updateEducation = async () => {
    if (schoolRef.current !== '' && programRef.current !== '') {
      setLoading(true);
      const response = await update('education', education.id, {
        school: schoolRef.current,
        program: programRef.current,
        start_date: startDate,
        end_date: end_date,
      });

      if (response === 'done') {
        navigation.goBack();
        refresh('Uppdaterar ' + title);
      } else {
        alert('Något gick fel');
      }
    } else if (emailRef.current === '' || passwordRef.current === '') {
      alert('Du måste fylla i fältet');
    }
  };

  const deleteEducation = async () => {
    setRemoving(true);
    setLoading(true);
    const response = await query_delete('education', education.id);
    console.log(response);
    if (response === 'done') {
      navigation.goBack();
      refresh('Tar bort ' + title);
    } else {
      alert('Något gick fel');
    }
  };

  if (loading) {
    return (
      <Loading
        title={removing ? 'Tar bort ' + title : 'Uppdaterar ' + title}
      ></Loading>
    );
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
      <HeaderGoBack title={title}></HeaderGoBack>
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
          onChangeText={(text) => {
            schoolRef.current = text;
          }}
        />

        <Text style={{ fontFamily: fonts[600] }}>Program</Text>
        <InputDefault
          defaultValue={programRef.current}
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
          title={'Uppdatera'}
          onPress={updateEducation}
        ></ButtonDefault>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteEducation();
        }}
        style={{
          width: 45,
          height: 45,
          backgroundColor: '#ff0033',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 22.5,
          alignSelf: 'center',
          elevation: 4,
          position: 'absolute',
          right: 15,
          bottom: 15,
        }}
      >
        <FeatherIcon name={'trash'} size={20}></FeatherIcon>
        {/* <Text style={{fontFamily: fonts[600], color: "black", fontSize: 12}}>Ta bort utbildning</Text>*/}
      </TouchableOpacity>
    </View>
  );
};

export default Education;
