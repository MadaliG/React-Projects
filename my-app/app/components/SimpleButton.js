import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import React from 'react';

export default class SimpleButton extends React.Component{
	
	constructor (props) {
		super(props);
		this.state = { // Set Initial State
			appendText: ' '
		};
	}
		
	render(){
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View>
					<Text>{this.props.customText || 'Simple Button'}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

SimpleButton.propTypes = {
	onPress: React.PropTypes.func.isRequired,
	customText: 'HELLO kitty!'
};