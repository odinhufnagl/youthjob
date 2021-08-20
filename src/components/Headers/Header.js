import React from 'react';
import { Text, View } from 'react-native';
import fonts from '../../constants/fonts';

const Header = ({ title, Icon }) => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}
    >
      <Text style={{ fontFamily: fonts[700], fontSize: 23, color: 'black' }}>
        {title}
      </Text>
      <Icon></Icon>
    </View>
  );
};

export default Header;
