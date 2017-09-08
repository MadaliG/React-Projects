import React from 'react';
import {StyleSheet, Text, View, Component } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Setup Tab"
        onPress={() => navigate('Setup')}
      />
    );
  }
}