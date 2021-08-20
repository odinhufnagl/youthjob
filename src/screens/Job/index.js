import { useRoute } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import HeaderGoBack from '../../components/Headers/HeaderGoBack';
import colors from '../../constants/colors';
import ImageTop from '../Explore/components/ImageTop';
import BottomContainer from './components/BottomContainer';

const Job = () => {
  const headerOpacity = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            opacity: headerOpacity.interpolate({
              inputRange: [200, 240],
              outputRange: [0, 1],
            }),
          },
          styles.animatedView,
        ]}
      ></Animated.View>
      <HeaderGoBack
        title={data.company.name}
        Icon={() => null}
        color={headerOpacity.interpolate({
          inputRange: [200, 240],
          outputRange: ['white', 'black'],
        })}
      />
      <Animated.View
        style={{
          opacity: headerOpacity.interpolate({
            inputRange: [0, 220],
            outputRange: [1, 0],
          }),
        }}
      >
        <ImageTop
          source={
            'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80'
          }
        ></ImageTop>
      </Animated.View>

      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: headerOpacity } } }],
          { useNativeDriver: false }
        )}
        ListHeaderComponent={
          <View style={{ alignItems: 'center' }}>
            <View style={styles.bottomContainer}>
              <BottomContainer data={data} />
            </View>
          </View>
        }
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  bottomContainer: {
    marginTop: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 60,
  },
  animatedView: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    width: '100%',
    height: 60,
  },
});

export default Job;
