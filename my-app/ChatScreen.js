import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class ChatScreen extends React.Component {
	 static navigationOptions = ({ navigation }) => ({
		title: `Create a note with ${navigation.state.params.user}`,
	  });
	  render() {
		const { params } = this.props.navigation.state;
		return (
		<View>
			<Text>{params.user} will help you create a note</Text>
		  </View>
		);
	  }
}

//AppRegistry.registerComponent('Chat', () => ChatScreen);