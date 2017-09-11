import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default class ChatScreen extends React.Component {
	 static navigationOptions = ({ navigation }) => ({
		title: `Create a note with ${navigation.state.params.user}`,
	  });
	  render() {
		const { params } = this.props.navigation.state;
		return (
		<View style={styles.chat_container}>
			<Text>{params.user} will help you create a note</Text>
			<TextInput
				ref="title"
				placeholder="Untitled"
				style={styles.title}
				onEndEditing={(text) => {this.refs.body.focus()}}
				/>
			<TextInput
				ref="body"
				multiline={true}
				placeholder="Start typing"
				style={styles.body}
			/>
		  </View>
		);
	  }
}

var styles = StyleSheet.create({
	chat_container: {
		justifyContent: 'center',
		marginTop: 20
	},
	title: {
		height: 40
	},
	body: {
		height: 40
	}
});