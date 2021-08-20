import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
const ImageTop = ({ source }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: source }}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    opacity: 0.4,
    height: 280,
    width: '100%',
  },
});

export default ImageTop;
