import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {xmlHome, xmlHomeShadow} from "../../helpers/index"
import { SvgXml } from 'react-native-svg';

const Home = () => {
  return (
    <View style={styles.mainContent}>

      <View style={styles.svgTopContent}>
        <SvgXml xml={xmlHome} width="100%" height="80" />
        <SvgXml xml={xmlHomeShadow} width="100%" height="95" style={{position:"absolute"}}/>
      </View>

      <View style={{ width:"100%", paddingHorizontal:20}}>
        <Text>Activity</Text>
        
        <View style={styles.activityCard}>
            <Text style={{paddingLeft:10}}>Results of the week</Text>
            <View style={styles.activityCardColumns}>
              <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"gray", fontWeight:"600"}}>you have lost</Text>
                <Text style={{color:"#6ac57b", fontWeight:"bold"}}>-4KG</Text>
              </View>
              <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text style={{color:"gray", fontWeight:"600"}}>you level up</Text>
                <Text style={{color:"#6ac57b", fontWeight:"bold"}}>Level 8</Text>          
              </View>
              <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text>circle</Text>
              </View>
            </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContent : {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  svgTopContent:{
    width:"100%",
    position:"absolute",
    top:0
  },
  activityCard : {
    width:"80%",
    borderRadius:10,
    height:110,
    backgroundColor:"white",
    elevation:7
  },
  activityCardColumns : {
    flexDirection:"row",
    justifyContent:"space-around"
  }
})

export default Home
