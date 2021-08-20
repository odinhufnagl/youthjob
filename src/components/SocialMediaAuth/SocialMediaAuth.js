import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from '../../../icons8-facebook.svg';
import Google from '../../../icons8-google.svg';
import fonts from '../../constants/fonts';
const SocialMediaAuth = () => {
  return (
    <View style={styles.container}>
      <View style={styles.googleContainer}>
        <Google height={100} width={25}></Google>
        <Text style={styles.text}>Google</Text>
      </View>
      <View style={styles.facebookContainer}>
        <Facebook height={100} width={29}></Facebook>
        <Text style={styles.text}>Facebook</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleContainer: {
    borderRadius: 20,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    height: 45,
    width: 120,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingRight: 10,
    marginHorizontal: 10,
  },
  facebookContainer: {
    borderRadius: 20,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    width: 120,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    paddingRight: 10,
    marginHorizontal: 10,
  },
  text: {
    fontFamily: fonts[600],
    marginLeft: 5,
    fontSize: 13,
  },
});

export default SocialMediaAuth;
