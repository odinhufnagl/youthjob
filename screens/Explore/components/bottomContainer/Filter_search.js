import React, { useEffect, useRef, useState } from 'react'
import { View, FlatList, TouchableOpacity } from "react-native"
import Card_filter_search from './Card_filter_search'
import Filter_modal from './Filter_modal'

const Filter_search = ({tags, setTags}) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalCurFilter, setModalCurFilter] = useState("")


    const changeTagValue = (name, value, marked) => {
        const tagsCopy = [...tags]
        tagsCopy.forEach(element => {
            if (element.name == name) {
                element.value = value;
                element.marked = marked;
            }
            
        });
        setTags(tagsCopy)
    }

    const applyFilter = (curFilter, tagName) => {
        changeTagValue(curFilter, tagName, true)   
    }
    
    const resetTag = (name) => {
        changeTagValue(name, name, false);
    }


    const showModal = (title) => {

        setModalCurFilter(title)
        
        switch(title){
            case "Anställningstyp":
                setModalData(["Deltid", "Heltid", "Sommarjobb", "Flexibelt"]) 
                break;

            case "Ort":
                setModalData(["Göteborg", "Stockholm", "Malmö"])
                break;

            case "Publiceringsdatum":
                setModalData(["Senaste 24 timmarna", "Senaste 3 dagarna", "Senaste 7 dagarna", "Senaste 14 dagarna"])
                break;
            case "Företag":
                setModalData(["Burger King", "McDonalds", "Odins business"])
                break;

            case "Språk":
                setModalData(["Svenska", "Engelska"])
                break;
        
        }

        setModalVisible(true)
        
    }




    return (
        <View style={{width: "100%", height: 80, marginBottom: 10, borderTopLeftRadius: 13, borderTopRightRadius: 13, flexDirection: "row", justifyContent: "center",  }}>

            <Filter_modal modalVisible={modalVisible} setModalVisible={setModalVisible} data={modalData} applyFilter={applyFilter} curFilter={modalCurFilter}></Filter_modal>

            <FlatList
            keyExtractor={(item, index) => 'key:'+index}
        
            contentContainerStyle={{alignItems:"center"}}
            horizontal
            showsHorizontalScrollIndicator={false}
            
            data={tags}
            renderItem={({item}) =>
            
            //item.name = name of the filter for example, "Anställningstyp",
            //item.value = current name of tag for example , "Anställningstyp" or "deltid"
              
                <TouchableOpacity onPress={() => {item.marked ? resetTag(item.name) : showModal(item.name)}}>
                    <Card_filter_search title={item.value} marked={item.marked}></Card_filter_search>
                </TouchableOpacity> 
             }
        
            >
               

            </FlatList>
           
        </View>
    )
}

export default Filter_search;