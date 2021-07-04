import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useRef } from 'react'
import { View } from "react-native";

import Earlier_jobs from './Earlier_jobs';
import { clockRunning } from 'react-native-reanimated';
import colors from '../../../colors';
import Education from './Education';


const Add = () => {
    
    const route = useRoute();

    return (
    <View style={{backgroundColor: colors.background, width: "100%", height: "100%"}}>
            <Add1 refresh={route.params.refresh} title={route.params.title}></Add1>
        
    </View>
    )
}

const Add1 = ({ refresh, title }) => {
  
   
    switch (title) {
        case "Tidigare jobb":
            return <Earlier_jobs refresh={refresh}></Earlier_jobs>
        case "Senast avklarade utbildning":
            return <Education refresh={refresh} curEducation={false} title={"Senaste utbildning"}></Education>
        case "Pågående utbildning":
            return <Education refresh={refresh} curEducation={true} title={"Pågående utbildning"} ></Education>


    }
    
}

export default Add;