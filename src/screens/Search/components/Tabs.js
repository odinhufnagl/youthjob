import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import InputSearch from '../../../components/TextFields/InputSearch';
import fonts from '../../../constants/fonts';
import { companies } from '../../../dummydata/companies';
import { users } from '../../../dummydata/users';
import List_results from './List_results';

const Tabs = () => {
  const pagerRef = useRef();
  const [curPage, setCurPage] = useState(0);

  return (
    <View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginBottom: 20,
          borderBottomColor: '#e4e2e0',
          borderBottomWidth: 1,
        }}
      >
        <InputSearch
          placeholder={'Sök'}
          style={{ width: '90%' }}
          inputStyle={{ paddingLeft: 15 }}
          iconStyle={{ marginRight: 15 }}
          iconSize={22}
        ></InputSearch>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: 50,
            width: '100%',
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              pagerRef.current.setPage(0);
              setCurPage(0);
            }}
          >
            <Text
              style={
                curPage === 0
                  ? { fontSize: 15, fontFamily: fonts[700], color: 'black' }
                  : { fontSize: 15, fontFamily: fonts[400], color: 'black' }
              }
            >
              Användare
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              pagerRef.current.setPage(1);
              setCurPage(1);
            }}
          >
            <Text
              style={
                curPage === 1
                  ? { fontSize: 15, fontFamily: fonts[700], color: 'black' }
                  : { fontSize: 15, fontFamily: fonts[400], color: 'black' }
              }
            >
              Företag
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <PagerView
        style={{ width: '100%', height: '100%' }}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => {
          setCurPage(e.nativeEvent.position);
        }}
      >
        <View key="1">
          <List_results data={users} dataName={'users'}></List_results>
        </View>
        <View key="2">
          <List_results data={companies} dataName={'companies'}></List_results>
        </View>
      </PagerView>
    </View>
  );
};

export default Tabs;
