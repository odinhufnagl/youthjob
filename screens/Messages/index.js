import React from 'react'
import { View } from "react-native"
import Header from '../../components/Header'
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from './styles';
import Input_search from './components/Input_search';
import List_messages from './components/List_messages';

const Messages = () => {
    return (
        <View>
            <Header title={"Meddelanden"} Icon={() => <FeatherIcon name={"edit"} size={24} style={styles.headerIcon}></FeatherIcon>}></Header>
            <List_messages></List_messages>
              
        </View>
    )
}

export default Messages;
