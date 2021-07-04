import React, { useEffect, useRef } from 'react'
import { View, Animated, Image, FlatList, Text } from "react-native";
import { cur_user } from '../../dummydata/cur_user';
import Img_top from '../Explore/components/Img_top';
import styles from "./styles";
import Header_goBack from '../../components/Header_goBack';
import { useRoute } from '@react-navigation/native';
import Lst_info from './components/Lst_info';

const Job = () => {

    const headerOpacity = useRef(new Animated.Value(0)).current;
    const route = useRoute()
    const { data } = route.params;

    
    return (
        <View style={styles.container}>

            <Animated.View style={{width: "100%", height: 60, opacity: headerOpacity.interpolate({inputRange: [200, 240], outputRange: [0, 1]}), position: "absolute", zIndex: 99, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#e8e8e8"}}>
            </Animated.View>
            <Header_goBack title={data.company.name} Icon={() => null} color={headerOpacity.interpolate({inputRange: [200, 240], outputRange: ["white", "black"]})}></Header_goBack>
            <Animated.View style={{opacity: headerOpacity.interpolate({inputRange: [0, 220], outputRange: [1, 0]})}}>
                 <Img_top source={"https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1116&q=80"}></Img_top>
            </Animated.View>

            <FlatList
            showsVerticalScrollIndicator={false} scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: headerOpacity } } }],
                { useNativeDriver: false } )}
            ListHeaderComponent={
                <View style={{alignItems: "center"}}>
                        <View style={styles.bottomContainer}>
                            <Lst_info data={data}></Lst_info>
                        </View>
                </View>

            }
            >
            </FlatList>
        </View>
    )
}

export default Job;