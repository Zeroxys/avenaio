import React from "react"
import {View, Text, StyleSheet, Image, Dimensions} from "react-native"
import {xmlHome, xmlHomeShadow} from "../../helpers/index"
import { SvgXml } from "react-native-svg";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
//import { Icon } from 'react-native-elements';
import NutritionalCard from "../../Components/NutritionalCard"
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
Icon.loadFont();
export default function FoodDetails (props) {
  let data = props.route.params
  return (
    <View style={styles.mainContent}>
      
      <View style={styles.svgTopContent}>
        <SvgXml xml={xmlHome} width="100%" height="80" />
        <SvgXml xml={xmlHomeShadow} width="100%" height="155" style={{position:"absolute"}}/>
        <Image style={{width:windowWidth, resizeMode:"cover", height:windowHeight/4, position:"absolute", zIndex:-2, top:40}} source={{uri : data.imgUrl}}/>
      
        <Icon
            raised
            style={{position:"absolute", bottom:0, left:10}}
            size={40}
            name='arrow-circle-left'
            type='fontawesome'
            color='white'
            onPress={() => props.navigation.goBack()}/>
      
      </View>

      <View style={{ justifyContent:"space-around",alignItems:"center", paddingHorizontal:10, height:135}}>
        <Text style={{color:"#002149", fontSize:20, fontWeight:"bold"}}>{data.title}</Text>
        <Text style={{color:"#002149", fontSize:12, fontWeight:"bold"}}>{data.description}</Text>
      </View>

      <View style={{width:"100%", paddingHorizontal:10} }>
        <NutritionalCard/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  svgTopContent:{
    width:"100%",
    position:"absolute",
    top:0
  },
  mainContent : {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
})
