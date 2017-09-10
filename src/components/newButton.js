import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Button'
    }
  }

  render(){
    let buttonStyle = this.props.hasOwnProperty('buttonStyle') ? this.props.buttonStyle:styles.button
    let textStyle = this.props.hasOwnProperty('textStyle') ? this.props.textStyle:styles.title
    return(
      <TouchableOpacity
        activeOpacity={0.8}
        style={buttonStyle}>

        <Text
          style={textStyle}>
          {this.props.title}
        </Text>

      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
  },
  title: {
    color:'rgb(255,255,255)',
  }
})
