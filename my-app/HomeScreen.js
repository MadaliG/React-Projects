import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import SimpleButton from './SimpleButton';

export default class HomeScreen extends React.Component {
  static navigationOptions = (({ navigation }) => ({
        title: 'Welcome'
  }));
    
  render() {
  const {navigate} = this.props.navigation; 
  return (
     <View style={styles.container}>
		<Text style={styles.noNotesText}>You haven't created any notes!</Text>
        <Text>Hello, Notes App!</Text>
        <SimpleButton
			onPress={() => this.props.navigator.push({
			name: 'createNote'
			})}
			customText="Create Note"
			style={styles.simpleButton}
			textStyle={styles.simpleButtonText}
		/>
      </View>
    );
  }
}




var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	noNotesText: {
		color: '#48209A', //#778899
		marginBottom: 10
	},
	simpleButton: {
		backgroundColor: '#5B29C1', //#B0C4DE
		borderColor: '#48209A', //#778899
		borderWidth: 1,
		borderRadius: 4,
		paddingHorizontal: 20,
		paddingVertical: 15,
		shadowColor: 'darkgrey',
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 0.8,
		shadowRadius: 1,
	},
	simpleButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16
	}
});

