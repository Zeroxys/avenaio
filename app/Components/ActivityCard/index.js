import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ActivityCard (props) {
  return (
    <View style={styles.activityCard}>
        <Text style={{paddingLeft:10, fontWeight:"bold"}}>Results of the week</Text>
        <View style={styles.activityCardColumns}>
          <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"gray", fontWeight:"600"}}>you have lost</Text>
            <Text style={{color:"#6ac57b", fontWeight:"bold"}}>{`${props.lostWeight}kg`}</Text>
          </View>
          <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"gray", fontWeight:"600"}}>you level up</Text>
            <Text style={{color:"#6ac57b", fontWeight:"bold"}}>{`Level ${props.levelUp}`}</Text>          
          </View>
          <View style={{justifyContent:"center", alignItems:"center"}}>
            <View>
              <AnimatedCircularProgress
                size={50}
                width={3}
                fill={70}
                tintColor="#6ac57b"
                backgroundColor="gray" />
                <Text style={{fontSize:9, position:"absolute", top:20, left:5}}>{`${props.progress} Kcal`}</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection:"row", justifyContent:"center"}}>
          <Text style={{fontSize:12}}>Never give up. </Text>
          <Text style={{fontSize:12, color:"#6ac57b"}}>Know more</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  activityCard : {
    width:300,
    marginVertical:10,
    marginHorizontal:5,
    borderRadius:10,
    height:110,
    backgroundColor:"white",
    justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activityCardColumns : {
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  }
})
