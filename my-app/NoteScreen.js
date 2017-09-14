import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

export default class NoteScreen extends React.Component {
	 static navigationOptions = ({ navigation }) => ({
		title: `Create a note with ${navigation.state.params.note_title}`,
	  });
	  
	constructor (props) {
		super(props)
		this.state = {
		note_data: this.props.navigation.state.params
		}
	};
	
	
	
	//update notes
	updateNote(title, body){
		var note = Object.assign(this.state.note_data, {note_title:title, note_body:body});
		//this.props.onChangeNote(note);
		this.setState(note);
	}

	  render() {
		const { params } = this.props.navigation.state
		
		
		
		return (
		<View style={styles.note_container}>
			<Text>{params.note_title} will help you create a note</Text>
			<TextInput
				ref="title"
				placeholder="Untitled"
				style={styles.title}
				onEndEditing={(text) => {this.refs.body.focus()}}
				value={this.state.note_data.note_title}
				onChangeText={(note_title) => this.updateNote(note_title, this.state.note_data.note_body)}
				/>
			<TextInput
				ref="body"
				multiline={true}
				placeholder="Start typing"
				style={styles.body}
				value={this.state.note_data.note_body}
				onChangeText={(note_body) => this.updateNote( this.state.note_data.note_title, note_body)}
			/>
		  </View>
		);
	  }
}

var styles = StyleSheet.create({
	note_container: {
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