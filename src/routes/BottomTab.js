import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Explore from '../screens/Explore';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      headerMode={false}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          const size = 28;

          const color = props.color;

          if (route.name === 'Home') {
            return <FeatherIcon name={'home'} size={size} color={color} />;
          }
          if (route.name === 'Messages') {
            return (
              <FeatherIcon name={'message-circle'} size={size} color={color} />
            );
          }

          if (route.name === 'Explore') {
            return <FeatherIcon name={'compass'} size={size} color={color} />;
          }
          if (route.name === 'Search') {
            return <FeatherIcon name={'search'} size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <FeatherIcon name={'user'} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,

        style: {
          elevation: 0,
          borderTopColor: '#e8e8e8',
          borderTopWidth: 1,
          height: 55,
        },
        activeTintColor: '#000000',
        inactiveTintColor: '#bebebe',
      }}
    >
      <Tab.Screen name="Explore" component={Explore}></Tab.Screen>
      <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
      <Tab.Screen name="Search" component={Search}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;
