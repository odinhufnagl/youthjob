import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import colors from '../../../constants/colors';
import Earlier_jobs from './Earlier_jobs';
import Education from './Education';

const Add = () => {
  const route = useRoute();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
      }}
    >
      <Add1 refresh={route.params.refresh} title={route.params.title}></Add1>
    </View>
  );
};

const Add1 = ({ refresh, title }) => {
  switch (title) {
    case 'Tidigare jobb':
      return <Earlier_jobs refresh={refresh}></Earlier_jobs>;
    case 'Senast avklarade utbildning':
      return (
        <Education
          refresh={refresh}
          curEducation={false}
          title={'Senaste utbildning'}
        ></Education>
      );
    case 'Pågående utbildning':
      return (
        <Education
          refresh={refresh}
          curEducation={true}
          title={'Pågående utbildning'}
        ></Education>
      );
  }
};

export default Add;
