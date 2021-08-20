import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FeatherIcon from 'react-native-vector-icons/Feather';
import fonts from '../../constants/fonts';
const AnimatableIcon = Animatable.createAnimatableComponent(FeatherIcon);

const HeaderGoBack = ({ title, color, border }) => {
  const navigation = useNavigation();

  return (
    <Animated.View
      style={{
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        marginBottom: 20,
        position: 'absolute',
        zIndex: 200,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AnimatableIcon
          name={'arrow-left'}
          size={28}
          style={{ color: color, marginBottom: 3 }}
        ></AnimatableIcon>
      </TouchableOpacity>

      <Animated.Text
        style={{
          fontFamily: fonts[700],
          fontSize: 23,
          color: color,
          marginLeft: 10,
        }}
      >
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

export default HeaderGoBack;
