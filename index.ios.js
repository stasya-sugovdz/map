/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import MapContainer from './src/MapContainer/MapContainer'

export default class map extends Component {
  render() {
    return (
        <View style={styles.container}>
          <MapContainer/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width
  }
});

AppRegistry.registerComponent('map', () => map);
