import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
//import SimpleButton from './SimpleButton';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = { // Set Initial State
			appendText: ' '
		};
	}
	
	render () {
		return (
			<View style={styles.container}>
				<Text onPress={() => this.setState({appendText: ' hello '})}>
				{this.props.text + this.state.appendText}</Text>
			//	<SimpleButton />
			</View>
		);
	}
	
}

App.defaultProps = {text: "Default Text!"};
<App text="Hello React"/>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
