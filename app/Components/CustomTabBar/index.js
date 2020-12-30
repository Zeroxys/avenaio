import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, Platform} from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome';
export default function CustomTabBar ({state, navigation, descriptors}) {

  console.log(state.routes)

  return (
    <View style={style.mainContent}>
      {state.routes.map( (route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        return (
          <View key={index} style={{borderRadius:10,height:28, justifyContent:"center", backgroundColor: isFocused ? "#69d39e" : "transparent"}}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flexDirection:"row", width:80, justifyContent:"space-around"}}
            >
              <Text style={{ color: isFocused ? 'white' : '#222', fontWeight:"bold" }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );

      })}
    </View>
  )
}

const style = StyleSheet.create({
  mainContent : {
    height:50,
    borderWidth: Platform.OS == "ios" ? 1 : 0,
    borderColor:"lightgray",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    elevation:3,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row"
  }
})
