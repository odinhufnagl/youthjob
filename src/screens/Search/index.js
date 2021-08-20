import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Headers/Header';
import Tabs from './components/Tabs';
const Search = () => {
  return (
    <View>
      <Header title={'Sök'} Icon={() => null}></Header>
      <Tabs></Tabs>
    </View>
  );
};

export default Search;
