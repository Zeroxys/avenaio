import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Button} from 'react-native-elements'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#d7f4e5'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#f2f2f2',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textSmallSize : {
    color: '#f2f2f2',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default function SwiperComponent (props) {

    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          
          <Image style={{width:"100%", height:"100%", resizeMode:"cover", position:"absolute", top:0, zIndex:-9}} source={{uri : "https://www.thespruceeats.com/thmb/-PRqKVOQOLYYIYFuqLj_WWhf0Z0=/1280x960/filters:fill(auto,1)/eggpizzas5-568e859a3df78ccc1574b6be-5b2a7b38a474be00377ecb70.jpg"}}/>
          
          <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,33,73,0.5)"}}>

            <View style={{ justifyContent:"center", alignItems:"center"}}>
              <Text style={[styles.text, {textAlign:"center"}]}>Best tips for your diet</Text>
              <Text style={[styles.textSmallSize, {marginTop:10, textAlign:"center"}]}>Vestibulum in tellus ac lacus aliquet mollis. Nulla gravida sem in ornare pulvinar. Nam egestas urna quis erat molestie, eget vulputate dolor fringilla.</Text>
            </View>
          </View>

        </View>
        <View style={styles.slide2}>
          
          <Image style={{width:"100%", height:"100%", resizeMode:"cover", position:"absolute", top:0, zIndex:-9}} source={{uri : "https://cdn.aarp.net/content/dam/aarp/research/surveys_statistics/health/2016/Images/1140-healthy-lifestyle-beliefs-behaviors.web.jpg"}}/>
          
          <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,33,73,0.5)"}}>

            <View style={{justifyContent:"center", alignItems:"center"}}>
              <Text style={[styles.text, {textAlign:"center"}]}>One must eat to live, not live to eat. ...</Text>
              <Text style={[styles.textSmallSize, {marginTop:10, textAlign:"center"}]}>Vestibulum in tellus ac lacus aliquet mollis. Nulla gravida sem in ornare pulvinar. Nam egestas urna quis erat molestie, eget vulputate dolor fringilla.</Text>
            </View>
          </View>

        </View>
        <View style={styles.slide3}>

          <Image style={{width:"100%", height:"100%", resizeMode:"cover", position:"absolute", top:0, zIndex:-9}} source={{uri : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/09/18/healthy-eating.jpg?width=982&height=726"}}/>
          
          <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"rgba(0,33,73,0.5)"}}>

            <View style={{justifyContent:"center", alignItems:"center"}}>
              <Text style={[styles.text, {textAlign:"center"}]}>It takes five minutes to consume 500 calories.</Text>
              <Text style={[styles.textSmallSize, {marginTop:10, textAlign:"center"}]}>Vestibulum in tellus ac lacus aliquet mollis. Nulla gravida sem in ornare pulvinar. Nam egestas urna quis erat molestie, eget vulputate dolor fringilla.</Text>
            </View>

            <View style={{alignSelf:"center", marginTop:10}}>
              <Button
                titleStyle={{color:"white"}}
                buttonStyle={{backgroundColor:"#6ac57b", width:100}}
                title="Go Back"
                onPress={() => props.navigation.goBack()}
              />
            </View>

          </View>

        </View>
      </Swiper>
    )
  
}