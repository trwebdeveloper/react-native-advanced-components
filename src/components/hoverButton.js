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
    this.getStyle = this.getStyle.bind(this)
    this.state = {
      title: 'Button',
    }
  }

  getStyle(styleName){
    return this.props.hasOwnProperty(styleName) ? this.props[styleName]: styles[styleName]
  }

  render(){
    let style=[this.getStyle('buttonStyle')];
    if(this.props.active) style.push(this.getStyle('hoverStyle'))

    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={(this.props.activeOpacity) ? this.props.activeOpacity:0.8}
        style={style}>

        <Text
          style={this.getStyle('textStyle')}
          >
          {this.props.title}
        </Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  textStyle: {
    color:'rgb(255,255,255)',
  },
  hoverStyle: {
    borderBottomWidth: 5,
    borderColor: '#1AAD5B',
  }
})
