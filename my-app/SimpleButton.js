import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import React from 'react';

export default class SimpleButton extends React.Component{
		
	render(){
	 const {navigate} = this.props.navigation; 

		return (
			<TouchableOpacity onPress={()=> navigate('Note', { user: 'Mark' })}>
				<View style={styles.simpleButton}>
					<Text style={styles.simpleButtonText}>{'Create a note!'}</Text>
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

const styles = StyleSheet.create({
	simpleButton: {
		flex: 1,
		margin:20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#5B29C1',
		paddingHorizontal: 10,
		paddingVertical: 15,
		shadowColor: 'darkgrey',
		shadowOffset: {
			width: 1,
			height: 1
		},
		borderColor: '#48209A',
		borderWidth: 1,
		borderRadius: 4,
		shadowOpacity: 0.8,
		shadowRadius: 1,
	},
	simpleButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	}
});

