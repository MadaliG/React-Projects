import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation'

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
		this.setState(note);
	}

	  render() {
		const { params } = this.props.navigation.state
		const {navigate} = this.props.navigation; 
	/*	const setParamsAction = NavigationActions.setParams({
		  params: { note_title:  this.state.note_data.note_title},
		  key: "id-1505476189718-1",
	})  */
	
	//	this.props.navigation.dispatch(setParamsAction)
	
	
		
		//console.log('props new');
		//console.log(this.props.navigation);
		//try to make a callback 
		
		
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
			<TouchableOpacity onPress={()=> navigate('Home', { note_title: this.state.note_data.note_title, note_body: this.state.note_data.note_body, note_id: this.state.note_data.note_id })}>
				<Text style={styles.simpleButtonText}>{'Go back to HomeScreen!'}</Text>
			</TouchableOpacity>
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