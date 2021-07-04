import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import fonts from '../../../../fonts';
import colors from '../../../../colors';
import FeatherIcon from "react-native-vector-icons/Feather";

const CompanyModal = ({ company }) => {
    return (
        <View style={{width: "100%", height: "100%", paddingTop: 20, marginLeft: 20}}>

        <View style={{flexDirection: "row", alignItems: "center", marginBottom: 32}}>
            <Image source={{uri: company.image}} style={{width: 50, height: 50}}></Image>
            <View style={{marginLeft: 10}}>
                <Text style={{fontFamily: fonts[700], color: "black", fontSize: 18}}>{company.name}</Text>

                <View style={{flexDirection: "row", alignItems: "center"}}>


                    <View style={{width: 60, height: 24, backgroundColor: colors.main, justifyContent: "center", borderRadius: 7, flexDirection: "row", alignItems: "center", marginRight: 5}}>
                        <FeatherIcon name={"user-check"} color="white" size={16}></FeatherIcon>
                        <Text style={{color: "white", fontFamily: fonts[600], fontSize: 11, marginLeft: 4}}>Följer</Text>
                    </View>
                    {["phone", "mail", "message-circle"].map((name) => 
                        <TouchableOpacity style={{marginHorizontal: 8}}>
                            <FeatherIcon name={name} size={21} color={colors.main}></FeatherIcon>
                        </TouchableOpacity>)}
                </View>
            </View>
        </View>

        <View style={{flexDirection: "row", alignItems: "center"}}>


        <TouchableOpacity style={{width: 120, height: 30, borderColor: colors.main, borderWidth: 2, borderRadius: 10, alignItems: "center", justifyContent: "center", elevation: 2, backgroundColor: "white", marginRight: 10}}>
            <Text style={{fontFamily: fonts[700], color: colors.main}}>Visa annonser</Text>

        </TouchableOpacity>
           
        </View>
        </View>
    )
}

export default CompanyModal;