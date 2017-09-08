import React from 'react';
import {StyleSheet, Text, View, Component } from 'react-native';
import SimpleButton from './app/components/SimpleButton';

export default class App extends React.Component {
	
	render () {
		return (
			<View style={styles.container}>
				<SimpleButton />
			</View>
		);
	}
	
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

