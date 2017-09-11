import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import React from 'react';

export default class SimpleButton extends React.Component{
		
	render(){
	 const {navigate} = this.props.navigation; 

		return (
			<TouchableOpacity onPress={()=> navigate('Note', { user: 'Mark' })}>
				<View>
					<Text>{this.props.customText || 'Create a note!'}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

/* SimpleButton.propTypes = {
	onPress: React.PropTypes.func.isRequired,
	customText: 'HELLO kitty!'
};
*/