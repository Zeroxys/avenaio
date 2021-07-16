import React, {useState} from "react"
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native"
import {xmlHome, xmlHomeShadow} from "../../helpers/index"
import { SvgXml } from "react-native-svg";
import ActivityCard from "../../Components/ActivityCard"
import {ActivityCardSource, foodsDataSource, dinnerDataSource, breakfastDataSource} from "../../helpers/datasources"
import FoodCard from "../../Components/foodCard/index.js"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import moment from "moment"
Icon.loadFont();

const Home = (props) => {
  let date = `Today, ${moment().format('MMMM DD YYYY')}`
  let [showActivity, setShowActivity] = useState(true)
  let [dataSource, setDataSource] = useState(breakfastDataSource)

  const selectSource = (source) => {
    setDataSource(source)
  }

  return (
    <View style={styles.mainContent}>

      <View style={styles.svgTopContent}>
        <SvgXml xml={xmlHome} width="100%" height="80" />
        <SvgXml xml={xmlHomeShadow} width="100%" height="95" style={{position:"absolute"}}/>
      </View>

      <View style={{justifyContent:"center", flex:1, paddingHorizontal:20}}>

        <View style={{ width:"100%"}}>
          <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>

            <View style={{flexDirection:"row", alignItems:"center", width:90, justifyContent:"space-between"}}>
              <Text style={{fontSize:20, fontWeight:"bold"}}>Activity</Text>

              <TouchableOpacity onPress={() => setShowActivity(!showActivity)}>
                <Icon name={showActivity ? 'chevron-up': 'chevron-down'} size={18}/>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{fontSize:12}}>{date}</Text>
            </View>
          </View>

          <FlatList
            style={{display:showActivity ? 'flex' : 'none'}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={ActivityCardSource}
            renderItem={ ({item, i}) => <ActivityCard key={`${i}_${item.name}`} {...item}/> }
            />
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%", marginVertical:20}}>
          <Button
            titleStyle={{color:"white"}}
            buttonStyle={{backgroundColor:"#6ac57b", width:100}}
            title="Breakfast"
            onPress={() => selectSource(breakfastDataSource)}
          />

          <Button
            titleStyle={{color:"#002149"}}
            buttonStyle={{backgroundColor:"transparent", width:100}}
            title="Foods"
            onPress={() => selectSource(foodsDataSource)}
          />
          <Button
            titleStyle={{color:"#002149"}}
            buttonStyle={{backgroundColor:"transparent", width:100}}
            title="Dinner"
            onPress={() => selectSource(dinnerDataSource)}
          />
        </View>


        <View style={{maxHeight:300}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            data={dataSource}
            renderItem={ ({item, i}) => <FoodCard key={`${i}_${item.name}`} { ...item} navigation={props.navigation}/> }
            />
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
  }
})

export default Home
