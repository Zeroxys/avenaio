import React from "react"
import {View,Text, StyleSheet} from "react-native"
import { color } from "react-native-reanimated"

export default function NutritionalCard () {
  return (
    <View style={style.mainContent}>
      <Text style={{textAlign:"center", color:"#002149", fontSize:22, marginVertical:10}}>Nutritional Information</Text>

      <View style={style.nutritionalInfo}>

        <View style={style.nutritionalInfoContent}>
          <Text style={{color:"#c68487", fontSize:20, fontWeight:"bold"}}>243</Text>
          <Text>Calorias</Text>
        </View>

        <View style={style.nutritionalInfoContent}>
          <Text style={{color:"#002149", fontSize:20, fontWeight:"bold"}}>2,3g</Text>
          <Text>grasas</Text>
        </View>

        <View style={style.nutritionalInfoContent}>
          <Text style={{color:"#002149", fontSize:20, fontWeight:"bold"}}>2,4g</Text>
          <Text>carbohidratos</Text>
        </View>

        <View style={style.nutritionalInfoContent}>
          <Text style={{color:"#002149", fontSize:20, fontWeight:"bold"}}>9,8g</Text>
          <Text>proteinas</Text>
        </View>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  mainContent : {
    borderRadius:5,
    justifyContent:"center",
  },
  nutritionalInfo : {
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  nutritionalInfoContent : {
    justifyContent:"center",
    alignItems:"center"
  }
})

