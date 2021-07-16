import React from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Image} from "react-native"
Icon.loadFont();
export default function FoodCard (props) {
  return (
    <View style={{marginHorizontal:10, paddingVertical:10}}>
      <Image style={{width:180, resizeMode:"cover", flex:1}} source={{uri: props.imgUrl}}/>
      <Icon
        raised
        style={{position:"absolute", bottom:20, right:5}}
        size={40}
        name='arrow-circle-right'
        type='fontawesome'
        color='white'
        onPress={() => props.navigation.navigate("FoodDetails", {
          ...props
        })}
          />
    </View>
  )
}
