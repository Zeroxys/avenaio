import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import {useSelector} from 'react-redux'
//import DrawerComponent from '../components/Drawer'
import LoginScreen from '../Screens/Login'
import HomeScreen from '../Screens/Home'
import FoodDetails from '../Screens/FoodDetails'

// function DrawerNavigator ()  {
//   const Drawer = createDrawerNavigator()

//   return(
//       <Drawer.Navigator 
//         initialRouteName={ userToken ? "Home" : "Login"} 
//         drawerContent={ props => <DrawerComponent {...props}/>} 
//         drawerStyle={{width:200}}>
//         <Drawer.Screen name="Home" component={HomeScreen}/>
//         <Drawer.Screen name="Map" component={MapScreen}/>
//         <Drawer.Screen name="Pricing" component={PricingScreen}/>
//       </Drawer.Navigator>
//   )
// }

function ButtonTabNavigator () {
  const ButtonTab = createBottomTabNavigator()
  const options = {
    initialRouteName : "Login"
  }

  return (
    <ButtonTab.Navigator {...options}>
      <ButtonTab.Screen name="Home" component={HomeScreen}/>
      <ButtonTab.Screen name="LoginScreen" component={LoginScreen}/>
    </ButtonTab.Navigator>
  )
}

export default function NavigationRoutes() {

  //const {userToken} = useSelector((store) => store.app)
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
