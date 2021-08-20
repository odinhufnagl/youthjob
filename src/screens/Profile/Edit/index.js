import { useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import colors from '../../../constants/colors';
import { AuthContext } from '../../../providers/AuthProvider';
import Add from '../Add';
import Bio from './Bio';
import Earlier_jobs from './Earlier_jobs';
import Education from './Education';
import Email from './Email';
import Image from './Image';
import Phone_number from './Phone_number';

const Edit = () => {
  const { currentUserInfo } = useContext(AuthContext);
  const route = useRoute();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
      }}
    >
      <Edit1
        title={route.params.title}
        refresh={route.params.refresh}
        curUserInfo={currentUserInfo}
      ></Edit1>
    </View>
  );
};

const Edit1 = ({ title, refresh, curUserInfo }) => {
  const {
    current_education,
    latest_education,
    phone_number,
    bio,
    earlier_jobs,
  } = curUserInfo;

  if (
    title === 'Pågående utbildning' &&
    (current_education === undefined || current_education === null)
  ) {
    return (
      <Add
        title={title}
        curEducation
        education={current_education}
        refresh={refresh}
      ></Add>
    );
  }
  if (
    title === 'Senast avklarade utbildning' &&
    (latest_education === undefined || latest_education === null)
  ) {
    return (
      <Add
        title={title}
        curEducation={false}
        education={latest_education}
        refresh={refresh}
      ></Add>
    );
  }
  if (title === 'Tidigare jobb' && earlier_jobs.length == 0) {
    return <Add title={title} refresh={refresh}></Add>;
  }
  switch (title) {
    case 'Email':
      return <Email refresh={refresh}></Email>;
    case 'Telefonnummer':
      return (
        <Phone_number
          refresh={refresh}
          phone_number={phone_number}
        ></Phone_number>
      );
    case 'Bio':
      return <Bio refresh={refresh} bio={bio}></Bio>;
    case 'Bild':
      return <Image refresh={refresh}></Image>;
    case 'Pågående utbildning':
      return (
        <Education
          refresh={refresh}
          education={current_education}
          curEducation={true}
          title={'Pågående utbildning'}
        ></Education>
      );
    case 'Senast avklarade utbildning':
      return (
        <Education
          refresh={refresh}
          education={latest_education}
          curEducation={false}
          title={'Senaste utbildning'}
        ></Education>
      );
    case 'Tidigare jobb':
      return (
        <Earlier_jobs
          refresh={refresh}
          jobs={earlier_jobs}
          title={title}
        ></Earlier_jobs>
      );
  }
};

export default Edit;
