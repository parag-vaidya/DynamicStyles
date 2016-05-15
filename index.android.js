/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'; 
import DaysComponent from './components/days_component';
import Moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class DynamicStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
       {this.days()}
      </View>
    );
  }
  
  days() {
    var daysComponents = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysComponents.push(
       <DaysComponent day={day} daysUntil={i} key={i} /> 
      )
    } 
    return daysComponents;
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('DynamicStyles', () => DynamicStyles);
