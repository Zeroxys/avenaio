import React, {useState} from "react"
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"
import { SvgXml } from 'react-native-svg';
import {xmlTop, xmlBottom, xmlTopShadow, xmlBottomShadow, xmlLargeTop, xmlLargeBottom} from '../../helpers'
import { SocialIcon, Input, Button } from 'react-native-elements'
import { Alert } from "react-native";

const Login = (props) => {
  return (
    <View style={styles.mainContent}>
      <SvgXml xml={xmlTop} width="100%" height="80" />
      <SvgXml xml={xmlTopShadow} width="100%" height="95" style={{position:"absolute"}}/>
      <SvgXml xml={xmlLargeTop} width="100%" height="115" style={{position:"absolute"}}/>

      <View style={{width:300}}>
        <Text style={{fontSize:28, fontWeight:"bold", textAlign:"center"}}>Welcome</Text>
        
        <Input
          placeholder='Email'
          rightIcon={{ type: 'font-awesome', name: 'check-circle', color:'#6ac57d'}}
        />
        <Input
          placeholder='password'
          secureTextEntry={true}
          rightIcon={{ type: 'font-awesome', name: 'eye', color:'lightgray'}}
        />

          <TouchableOpacity onPress={() => Alert.alert("","Service Not available")}>
           <Text style={{textAlign:"center", color:"#23233a", fontWeight:"bold"}}>Forgot your password?</Text>
          </TouchableOpacity>

          <Button
            buttonStyle={{backgroundColor:"#23233a", marginTop:10}}
            title="Login"
            onPress={() => console.log(props.navigation.navigate("HomeScreen"))}
          />


          <Text style={{textAlign:"center", color:"#23233a", fontWeight:"bold"}}>Don't have an account ? Sign Up</Text>

        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
          <SocialIcon
            light
            type='facebook'
            onPress={() => Alert.alert("","Something was wrong, try again later")}
          />
          
          <SocialIcon
            light
            type='google'
            onPress={() => Alert.alert("","Something was wrong, try again later")}
          />
        </View>

      </View>

      <SvgXml xml={xmlLargeBottom} width="100%" height="80" style={{position:"absolute", bottom:20}}/>
      <SvgXml xml={xmlBottomShadow} width="100%" height="80" style={{position:"absolute", bottom:0}}/>
      <SvgXml xml={xmlBottom} width="100%" height="80" />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent : {
    alignItems: 'center',
    justifyContent:"space-between",
    alignItems:"center",
    height:"100%"
  },
})

export default Login
