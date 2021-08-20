import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import fonts from '../../constants/fonts';
const InputSearch = ({
  setSearchphrase,
  placeholder,
  style,
  inputStyle,
  iconStyle,
  iconSize,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        onChangeText={setSearchphrase}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
      ></TextInput>
      <FeatherIcon
        name={'search'}
        size={iconSize || 20}
        style={[{ marginRight: 20 }, iconStyle]}
      ></FeatherIcon>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '88%',
    height: '100%',
    paddingLeft: 10,
    fontFamily: fonts[400],
    marginTop: 5,
  },
});

export default InputSearch;
