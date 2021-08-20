import React from 'react';
import { FlatList, View } from 'react-native';
import InputSearch from '../../../components/TextFields/InputSearch';
import { messages } from '../../../dummydata/messages';
import List_obj from './List_obj';

const List_messages = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => 'key:' + index}
        data={messages}
        renderItem={({ item }) => <List_obj data={item}></List_obj>}
        ListHeaderComponent={
          <View
            style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}
          >
            <InputSearch
              placeholder={'Sök bland meddelanden'}
              style={{ width: '95%' }}
              inputStyle={{ paddingLeft: 15 }}
              iconStyle={{ marginRight: 15 }}
              iconSize={22}
            ></InputSearch>
          </View>
        }
      ></FlatList>
    </View>
  );
};

export default List_messages;
