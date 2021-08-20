import React from 'react';
import { TextInput, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import fonts from '../../../constants/fonts';
const InputSearch = ({ placeholder }) => {
  return (
    <View
      style={{
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        justifyContent: 'space-between',
      }}
    >
      <TextInput
        style={{
          width: '90%',
          height: '100%',
          paddingLeft: 15,
          fontFamily: fonts[400],
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        placeholder={placeholder}
      ></TextInput>
      <FeatherIcon
        name={'search'}
        size={25}
        style={{ color: 'black' }}
      ></FeatherIcon>
    </View>
  );
};

export default InputSearch;
