import React from "react"
import {View, StyleSheet, Text} from "react-native"
import { SvgXml } from 'react-native-svg';
import {xmlTop, xmlBottom} from '../../helpers'
import CustomInput from '../../Components/CustomInput/index'
import { SocialIcon, Input, Button } from 'react-native-elements'

const Login = () => {
  return (
    <View style={styles.mainContent}>
      <SvgXml xml={xmlTop} width="100%" height="100" />

      <View style={{width:300}}>
        <Text style={{fontSize:28, fontWeight:"bold", textAlign:"center"}}>Welcome</Text>
        
        <Input
          placeholder='Email'
          rightIcon={{ type: 'font-awesome', name: 'check-circle', color:'#6ac57d'}}
        />
        <Input
          placeholder='password'
          rightIcon={{ type: 'font-awesome', name: 'eye', color:'lightgray' }}
        />

          <Text style={{textAlign:"center", color:"#23233a", fontWeight:"bold"}}>Forgot your password?</Text>

          <Button
            buttonStyle={{backgroundColor:"#23233a", marginTop:10}}
            title="Login"
          />


        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
          <SocialIcon
            light
            type='facebook'
          />
          
          <SocialIcon
            light
            type='google'
          />
        </View>

      </View>

      <SvgXml xml={xmlBottom} width="100%" height="100" />
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

  formContainer : {
    backgroundColor:"#444",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    width:"98%",
    height:"60%",
    alignItems:"center",
    justifyContent:"space-around"
  }
})

export default Login
