import React from "react"
import {View, Text, StyleSheet, FlatList} from "react-native"
import {xmlHome, xmlHomeShadow} from "../../helpers/index"
import { SvgXml } from "react-native-svg";
import ActivityCard from "../../Components/ActivityCard"
import {ActivityCardSource} from "../../helpers/datasources"
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment"


const Home = () => {
  let date = `Today, ${moment().format('MMMM DD YYYY')}`
  return (
    <View style={styles.mainContent}>

      <View style={styles.svgTopContent}>
        <SvgXml xml={xmlHome} width="100%" height="80" />
        <SvgXml xml={xmlHomeShadow} width="100%" height="95" style={{position:"absolute"}}/>
      </View>

      <View style={{ width:"100%", paddingHorizontal:20, height:300}}>
        
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
          <View style={{flexDirection:"row", alignItems:"center", width:90, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Activity</Text>
            <Icon name={'chevron-up'} />
          </View>

          <View>
            <Text style={{fontSize:12}}>{date}</Text>
          </View>

        </View>

        
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          data={ActivityCardSource}
          renderItem={ ({item, i}) => <ActivityCard keys={`${i}_${item.name}`} {...item}/> }
          />

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
  }
})

export default Home
