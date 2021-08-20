import React from 'react'
import { View, FlatList, Text, TextInput } from "react-native";
import { messages } from '../../../dummydata/messages';
import List_obj_users from './List_obj_users';
import List_obj_companies from './List_obj_companies';

const List_results = ({ data, dataName }) => {
    return (
        <View>
           <FlatList
           keyExtractor={(item, index) => 'key:'+index}
            data={data}
            renderItem={({item}) => dataName === "users" ? <List_obj_users data={item}></List_obj_users> : <List_obj_companies data={item}></List_obj_companies>}
           
        
            
        ></FlatList>
        </View>
    )
}

export default List_results;