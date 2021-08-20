import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const Loading = ({ title }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator
        color={colors.main}
        size={'large'}
        style={{ marginBottom: 10 }}
      ></ActivityIndicator>

      <Text style={{ fontFamily: fonts[600], color: 'black', fontSize: 15 }}>
        {title !== undefined ? title + '...' : null}
      </Text>
    </View>
  );
};

export default Loading;
