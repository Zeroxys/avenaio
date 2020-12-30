import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../Components/CustomTabBar"
import LoginScreen from '../Screens/Login'
import HomeScreen from '../Screens/Home'
import FoodDetails from '../Screens/FoodDetails'
import SwipeScreen from '../Screens/SwipeScreen'


function ButtonTabNavigator () {
  const ButtonTab = createBottomTabNavigator()
  const options = {
    initialRouteName : "Login"
  }

  return (
    <ButtonTab.Navigator {...options} tabBar={ props => <CustomTabBar {...props}/> }>
      <ButtonTab.Screen name="Home" component={HomeScreen}/>
      <ButtonTab.Screen name="Swipe" component={SwipeScreen} />
    </ButtonTab.Navigator>
  )
}

export default function NavigationRoutes() {

  const Stack = createStackNavigator()
  const options = {
    screenOptions : {
      headerShown:false,
    },
    initialRouteName:"LoginScreen"
  }

  return (
    <NavigationContainer>
      <Stack.Navigator {...options}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={ButtonTabNavigator}/>
        <Stack.Screen name="FoodDetails" component={FoodDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
