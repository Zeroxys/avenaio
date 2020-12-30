import React from "react"
import {TextInput, StyleSheet, View} from 'react-native' 

export default function CustomInput() {
  return (
    <View style={styles.mainContent}>
      <TextInput    
        multiline
        numberOfLines={4}
        //onChangeText={text => onChangeText(text)}
        value={"Yep"}></TextInput>
    </View>
  )
}

const styles =  StyleSheet.create({
  mainContent : {
    borderWidth:1
  }
})
