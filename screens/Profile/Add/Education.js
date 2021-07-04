import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef, useState } from 'react'
import { Dimensions, SafeAreaView, TouchableOpacity, View, Text, BackHandler } from 'react-native';
import Btn_auth from '../../../components/auth/Btn_auth';
import Input_auth from '../../../components/auth/Input_auth';
import Header_goBack from '../../../components/Header_goBack';
import { AuthContext } from '../../../routes/AuthProvider';
import DatePicker from 'react-native-date-picker';
import fonts from '../../../fonts';
import colors from '../../../colors';
import FeatherIcon from "react-native-vector-icons/Feather";
import query_update from '../../../query_updates/update/function';
import query_delete from '../../../query_delete/delete/function';
import query_insert from '../../../query_insert/insert/function';
import Loading from '../../../components/Loading';

const Education = ({ refresh, curEducation, title }) => {
   
    const { user, setUser } = useContext(AuthContext);
    const schoolRef = useRef("");
    const programRef = useRef("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [curDateToEdit, setCurDatetoEdit] = useState([startDate, setStartDate])
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)


    BackHandler.addEventListener('hardwareBackPress', () => {
        if (showCalendar) {
            setShowCalendar(false)
            return true
        }
        else {
            navigation.goBack()
            return true
        }
    })


    const convertDateToString = (date) => {
        return date.toDateString().split(' ').slice(1).join(' ')
    }

    const insertEducation = async () => {
          if (schoolRef.current !== "" && programRef.current !== ""){
                      setLoading(true)
                      const response = await query_insert('education', {p_user_current_uid: curEducation ? user.uid : null, p_user_latest_uid: curEducation ? null : user.uid ,school: schoolRef.current, program: programRef.current, start_date: startDate, end_date: (curEducation ? null : endDate)})
                      console.log(response)
                      if (response === "done"){
                          navigation.navigate("Profile")
                          refresh("Lägger till utbildning")
                          
                          
                          
                      }
                      else {
                          alert("Något gick fel")
                      }               
              }
          
          else if (schoolRef.current === "" || programRef.current === ""){
              alert("Du måste fylla i fälten")
          }
    }

    if (loading) {
        return <Loading title={"Lägger till utbildning"}></Loading>
    }

   
    if (showCalendar) {
        return(
            <View style={{height: "100%", justifyContent: "center", alignItems: "center"}}>


                <DatePicker
                style={{width: Dimensions.get("window").width, height: 200, }}
                date={curDateToEdit[0]}
                onDateChange={curDateToEdit[1]}
                mode={"date"}
                ></DatePicker>
                <TouchableOpacity onPress={() => {setShowCalendar(false)}} style={{width: 100, height: 35, backgroundColor: colors.main, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 30}}>
                    <Text style={{fontFamily: fonts[600], color: "white"}}>Klar</Text>
                </TouchableOpacity>
            </View>
        )
    }

 
    return (

        <View style={{height: "100%"}}>
          
        
            <Header_goBack title={title}></Header_goBack>
            <View style={{marginTop: 100, width: "90%", alignSelf: "center", height: "100%"}}>

            <Text style={{fontFamily: fonts[600]}}>Skola</Text>
             <Input_auth defaultValue={schoolRef.current} placeholder={"Skola"} onChangeText={(text) => {schoolRef.current = text}}></Input_auth>

             <Text style={{fontFamily: fonts[600]}}>Program</Text>
            <Input_auth defaultValue={programRef.current} placeholder={"Program"} onChangeText={(text) => {programRef.current = text}}></Input_auth>

            <Text style={{fontFamily: fonts[600]}}>Startdatum</Text>
            <TouchableOpacity onPress={() => {setCurDatetoEdit([startDate, setStartDate]); setShowCalendar(true)}} style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, paddingLeft: 10, justifyContent: "center"}}>
                <Text style={{fontFamily: fonts[600], fontSize: 15, color: "black"}}>{convertDateToString(startDate)}</Text>
            </TouchableOpacity>

            {!curEducation ? 
            <View>
            <Text style={{fontFamily: fonts[600]}}>Slutdatum</Text>
            <TouchableOpacity onPress={() => {setCurDatetoEdit([endDate, setEndDate]); setShowCalendar(true)}} style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, paddingLeft: 10, justifyContent: "center"}}>
                <Text style={{fontFamily: fonts[600], fontSize: 15, color: "black"}}>{convertDateToString(endDate)}</Text>
            </TouchableOpacity>
            </View>
            :
            null
            }




            <TouchableOpacity onPress={() => {insertEducation()}} style={{marginTop: 20}}>
                  <Btn_auth title={"Lägg till"}></Btn_auth>
            </TouchableOpacity>
           

            </View>
          
        </View>
    )
}

export default Education;