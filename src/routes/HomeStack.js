import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import BottomTab from './BottomTab';
import Job from '../screens/Job';
import Edit from '../screens/Profile/Edit';
import Add from '../screens/Profile/Add';
import Update_earlier_job from '../screens/Profile/Edit/Update_earlier_job';
const Stack = createStackNavigator();


const HomeStack = () => {
    return (
       <Stack.Navigator headerMode={false}>
         <Stack.Screen name="BottomTab" component={BottomTab}></Stack.Screen>
         <Stack.Screen name="Job" component={Job}></Stack.Screen>
         <Stack.Screen name="Edit" component={Edit}></Stack.Screen>
         <Stack.Screen name="Update_earlier_job" component={Update_earlier_job}></Stack.Screen>
         <Stack.Screen name="Add" component={Add}></Stack.Screen>
       </Stack.Navigator>
    )
}

export default HomeStack;