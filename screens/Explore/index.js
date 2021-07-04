import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Animated, Modal } from "react-native";

import Btn_search from './components/header/Btn_search';

import Filter_search from './components/bottomContainer/Filter_search';
import Img_top from './components/Img_top';
import Input_search from './components/header/Input_search';
import Lst_jobs from './components/bottomContainer/Lst_jobs';
import styles from "./styles";

import youthjob_jobs_filtering from '../../queries/youthjob_jobs_filtering/function';

const Explore = () => {

    const headerOpacity = useRef(new Animated.Value(0)).current;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchphrase, setSearchphrase] = useState("");

    const [sokJobbButtonPressed, setSokJobbButtonPressed] = useState(searchphrase)
    
    const [tags, setTags] = useState([
        {name: "Anställningstyp", value:"Anställningstyp", marked: false},
        {name: "Ort", value: "Ort", marked: false},
        {name: "Publiceringsdatum", value: "Publiceringsdatum", marked: false},
        {name: "Företag", value: "Företag", marked: false},
        {name: "Språk", value: "Språk", marked: false},
    ]);

    
    const fetchData = async (tags, searchphrase) => {
        setLoading(true)
    
        const data = await youthjob_jobs_filtering(tags, searchphrase)
        setJobs(data);
        setLoading(false)
    }

    
    useEffect(() => {
        console.log(tags)
        
        fetchData(tags, searchphrase)
        
    }, [tags, sokJobbButtonPressed])
    

    


    return (
        <View style={styles.container}>
            <Animated.View style={{opacity: headerOpacity.interpolate({inputRange: [0, 220], outputRange: [1, 0]})}}>
                 <Img_top source={"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}></Img_top>
            </Animated.View>

            <FlatList showsVerticalScrollIndicator={false} scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: headerOpacity } } }],
                    { useNativeDriver: false } )}
                keyExtractor={(item, index) => 'key:'+index}
                ListHeaderComponent={
                    <View style={{alignItems: "center"}}>
                        <Animated.View style={{
                            ...styles.header,
                            width: headerOpacity.interpolate({inputRange: [0, 100], outputRange: ["100%", "90%"]}),
                            height: headerOpacity.interpolate({inputRange: [0, 100], outputRange: [250, 220]}), 
                            opacity: headerOpacity.interpolate({inputRange: [0, 150], outputRange: [1, 0]})}}>
                         
                            <Text style={styles.headerText}>Hitta Jobb</Text>
                            <Input_search placeholder={"Sökord"} setSearchphrase={setSearchphrase}></Input_search>
                            <TouchableOpacity onPress={() => {setSokJobbButtonPressed(searchphrase)}} style={{width: "30%", height: "12%", marginTop: 20}}>
                                <Btn_search></Btn_search>
                            </TouchableOpacity>

                        </Animated.View>
            
                        <View style={styles.bottomContainer}>
                            <Filter_search tags={tags} setTags={setTags}></Filter_search>
                            <Lst_jobs data={jobs} loading={loading}></Lst_jobs>
                        </View>    
                    </View>
                    }
            ></FlatList>
        </View>
    )
    
}

export default Explore;