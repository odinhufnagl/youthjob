import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Loginscreen from '../screens/LoginScreen';
import Signupscreen from '../screens/SignupScreen';


const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode={false}>
            <Stack.Screen name="Login" component={Loginscreen}></Stack.Screen>
            <Stack.Screen name="Signup" component={Signupscreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStack;