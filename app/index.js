import React, {Component} from "react"
import NavigationRoutes from "./Router/"

class AvenaIO extends Component {
  async componentDidMount() {
    console.log("Mounted")
  }

  render() {
    return <NavigationRoutes/>  
  }
}

export default AvenaIO