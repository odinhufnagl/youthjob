import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import fonts from '../../constants/fonts';

const InputDefault = ({
  editable,
  defaultValue,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}) => {
  return (
    <TextInput
      editable={editable}
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      style={[styles.textInput, style]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 55,
    borderRadius: 15,
    backgroundColor: '#e6e7eb',
    marginBottom: 15,
    fontFamily: fonts[600],
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },
});

export default InputDefault;
