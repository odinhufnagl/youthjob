import React from 'react';
import { StyleSheet, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Headers/Header';
import List_messages from './components/List_messages';

const Messages = () => {
  return (
    <View>
      <Header
        title={'Meddelanden'}
        Icon={() => (
          <FeatherIcon
            name={'edit'}
            size={24}
            style={styles.headerIcon}
          ></FeatherIcon>
        )}
      ></Header>
      <List_messages></List_messages>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    color: 'black',
    marginRight: 15,
    marginBottom: 5,
  },
});

export default Messages;
