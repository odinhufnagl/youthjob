import React from 'react'
import { View } from "react-native";
import Header from '../../components/Header';
import Search_list from './components/List_results';
import FeatherIcon from "react-native-vector-icons/Feather"
import Search_menu from './components/Tabs';
import Tabs from './components/Tabs';
const Search = () => {
    return (
        
        <View>
                 <Header title={"Sök"} Icon={() => null}></Header>
                 <Tabs></Tabs>

        </View>
    )
}

export default Search;