import React, {Component, useEffect} from "react"
import {StatusBar} from "react-native"
import NavigationRoutes from "./Router/"

class AvenaIO extends Component {
  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationRoutes/> 
      </>
    ) 
  }
}

export default AvenaIO