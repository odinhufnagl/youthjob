import React from 'react'
import { View, FlatList, Text, TextInput } from "react-native";
import { messages } from '../../../dummydata/messages';
import Input_search from './Input_search';
import List_obj from './List_obj';

const List_messages = () => {
    return (
        <View>
        
            <FlatList
            keyExtractor={(item, index) => 'key:'+index}
            data={messages}
            renderItem={({item}) => <List_obj data={item}></List_obj>}
            ListHeaderComponent={
                    <View style={{width: "100%", alignItems: "center", marginBottom: 20}}>
                        <Input_search placeholder={"Sök bland meddelanden"}></Input_search>
                    </View>

            }          
            ></FlatList>

        </View>
    )
}

export default List_messages;