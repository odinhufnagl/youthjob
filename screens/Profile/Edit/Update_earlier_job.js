import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Dimensions, SafeAreaView, TouchableOpacity, View, Text, BackHandler, TextInput, FlatList } from 'react-native';
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
import CheckBox from '@react-native-community/checkbox';
import Loading from '../../../components/Loading';

const Update_earlier_job = () => {
    const { user, setUser, setCurrentUserInfo, currentUserInfo } = useContext(AuthContext);
    const route = useRoute()
    const { refresh, job, title } = route.params; 
    const { company_name, current_employer, role, short_info, start_date, end_date } = job;
    const company_nameRef = useRef(company_name);
    const short_infoRef = useRef(short_info)
    const [currentEmployer, setCurrentEmployer]  = useState(current_employer);
    const roleRef = useRef(role);
    const [startDate, setStartDate] = useState(new Date(start_date));
    const [endDate, setEndDate] = useState(new Date(end_date));
    const [showCalendar, setShowCalendar] = useState(false);
    const [curDateToEdit, setCurDatetoEdit] = useState([startDate, setStartDate])
    const navigation = useNavigation();
    const didMount = useRef(false);
    const [loading, setLoading] = useState(false)
    const [removing, setRemoving] = useState(false)

    
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
        if (date == null) {
            return null
        }
        return date.toDateString().split(' ').slice(1).join(' ')
    }

    const updateJob = async () => {
          if (company_nameRef.current !== "" && roleRef.current !== "" && short_infoRef.current != ""){
                      setLoading(true)
                      const response = await query_update('job', job.id, {company_name: company_nameRef.current, role: roleRef.current, start_date: startDate, end_date: currentEmployer  ? null : endDate, current_employer: currentEmployer, short_info: short_infoRef.current})
                      console.log(response)
                      if (response === "done"){
                          refresh("Uppdaterar jobb")
                          
                      }
                      else {
                          alert("Något gick fel")
                      }               
              }
          
          else if (emailRef.current === "" || passwordRef.current === ""){
              alert(" Du måste fylla i fältet")
          }
    }

    const deleteJob = async () => {
        setRemoving(true)
        setLoading(true)
        const response = await query_delete('job', job.id)
        console.log(response)
        if (response === "done") {
            refresh("Tar bort jobb");
           
        }
        else {
            alert("Något gick fel")
        }
    }
    

    useEffect(() => {
        if (didMount.current) {
        navigation.navigate("Edit", {title: title, curUserInfo: currentUserInfo, refresh: refresh})
        }
        else {
            didMount.current = true;
        }
        
    }, [currentUserInfo])

    if (loading) {
        return <Loading title={removing ? "Tar bort jobb" : "Uppdaterar jobb"}></Loading>
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

            <Header_goBack title={"Ändra jobb"}></Header_goBack>
       <FlatList
       style={{marginTop: 60}}
       showsVerticalScrollIndicator={false}
       ListFooterComponent={() =>
    
    
        <View style={{height: "100%"}}>

        
            <View style={{marginTop: 10, width: "90%", alignSelf: "center", height: "100%"}}>

            <Text style={{fontFamily: fonts[600]}}>Företagsnamn</Text>
             <Input_auth defaultValue={company_nameRef.current} onChangeText={(text) => {company_nameRef.current = text}}></Input_auth>

             <Text style={{fontFamily: fonts[600]}}>Roll</Text>
            <Input_auth defaultValue={roleRef.current} onChangeText={(text) => {roleRef.current = text}}></Input_auth>


            <Text style={{fontFamily: fonts[600]}}>Kort information</Text>
            <TextInput defaultValue={short_infoRef.current} onChangeText={(text) => {short_infoRef.current = text}}  multiline style={{width: "100%", borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, fontFamily: fonts[600], paddingLeft: 10, fontSize: 15, paddingTop: 10, paddingBottom: 10, fontWeight: "normal", minHeight: 55}}></TextInput>


            <Text style={{fontFamily: fonts[600]}}>Startdatum</Text>
            <TouchableOpacity onPress={() => {setCurDatetoEdit([startDate, setStartDate]); setShowCalendar(true)}} style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, paddingLeft: 10, justifyContent: "center"}}>
                <Text style={{fontFamily: fonts[600], fontSize: 15, color: "black"}}>{convertDateToString(startDate)}</Text>
            </TouchableOpacity>
        

            {!currentEmployer ?  
            <View>

                <Text style={{fontFamily: fonts[600]}}>Slutdatum</Text>
                <TouchableOpacity onPress={() => {setCurDatetoEdit([endDate, setEndDate]); setShowCalendar(true)}} style={{width: "100%", height: 55, borderRadius: 15, backgroundColor: "#e6e7eb", marginBottom: 15, paddingLeft: 10, justifyContent: "center"}}>
                    <Text style={{fontFamily: fonts[600], fontSize: 15, color: "black"}}>{convertDateToString(endDate)}</Text>
                </TouchableOpacity>
            </View>
            :
            null
            }
          
            <View style={{flexDirection: "row", alignItems:"center", marginBottom: 8, marginTop: 8}}>
            <Text style={{fontFamily: fonts[600]}}>Nuvarande arbetsgivare?</Text>
            <CheckBox value={currentEmployer} onValueChange={setCurrentEmployer} onFillColor={colors.main} tintColors={{true: colors.main, false: colors.main}} lineWidth={4}></CheckBox>
            </View>
            
            <TouchableOpacity onPress={() => {updateJob()}} style={{marginTop: 20}}>
                  <Btn_auth title={"Uppdatera"}></Btn_auth>
            </TouchableOpacity>
           

            </View>
         
        </View>
    
    
    }
       >



       </FlatList>
          <TouchableOpacity onPress={() => {deleteJob()}} style={{width: 45, height: 45, backgroundColor: "#ff0033", alignItems: "center", justifyContent: "center", borderRadius: 22.5, alignSelf: "center", elevation: 4, position: "absolute", right: 15, bottom: 15}}>
          <FeatherIcon name={"trash"} size={20}></FeatherIcon>
         {/* <Text style={{fontFamily: fonts[600], color: "black", fontSize: 12}}>Ta bort utbildning</Text>*/ }
      </TouchableOpacity>
        </View>
    )
}

export default Update_earlier_job;