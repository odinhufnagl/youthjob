import React, { useState } from 'react'
import { View, Modal, FlatList, Text, TouchableOpacity } from "react-native";
import fonts from '../../../../fonts';


const Filter_modal = ( { data, modalVisible, setModalVisible, applyFilter, curFilter }) => {

    return (
        <View>
            <Modal
            animationType={"fade"}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(false)}}
            
            >
                <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)"}}>

                <View style={{width: 300,backgroundColor: "white", borderRadius: 20, elevation: 4, paddingTop: 12.5, paddingBottom:12.5}}>
                    <FlatList data={data} keyExtractor={(item, index) => 'key:'+index} renderItem={({ item }) =>

                    <TouchableOpacity onPress={() => {applyFilter(curFilter, item); setModalVisible(false)}}>
                        <View style={{width: "100%", height: 50, justifyContent: "center", borderBottomColor: "#e0e0e0", borderBottomWidth: 0, paddingLeft: 20}}>
                            <Text style={{fontFamily: fonts[400], fontSize: 20, color: "black"}}>
                                {item}
                            </Text>
                        </View> 
                    </TouchableOpacity>

                    }></FlatList>
            
                </View>
                </View>

            </Modal>

        </View>
    )
}

export default Filter_modal;