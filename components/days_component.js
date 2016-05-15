import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

class DaysComponent extends Component {
  render() {
    return (
      <Text style={this.componentStyle()} key={this.props.i}>
        {this.props.day}
      </Text>
    );
  }
  
  componentStyle(){
    return{
      color:  this.color(),
      fontSize: this.fontSize(),
      fontWeight: this.fontWeight(),
     lineHeight: this.lineHeight()
    }
  }
  color(){
    var opacity = 1 / (this.props.daysUntil + 1);
    return 'rgba(100, 0, 200, ' + opacity + ')';
  }
  
  fontSize(){
    return 60 - 6 * (this.props.daysUntil + 1);
  }
  
  lineHeight(){
    return 70 - 3 * (this.props.daysUntil + 1);
  }
  
  fontWeight(){
    var weight = 7 - this.props.daysUntil;
    return String(weight * 100);
  }
};

module.exports = DaysComponent;