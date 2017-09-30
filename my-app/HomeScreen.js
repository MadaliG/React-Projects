import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends React.Component {
  static navigationOptions = (({ navigation }) => ({
        title: 'Welcome'
  }));
    
  render() {
  console.log('proPRIETATI');
  console.log(this.props.navigation.state);
  return (
	<View>
		<NoteList 
		navigation={this.props.navigation}
        notes={[{note_title:"Note 1", note_body:"body", id:0},
            {note_title:"Note 2", note_body:"body", id:1}]}
		/>
		<View style={styles.container}>
		<Text>Hello, Notes App!</Text>
		
		</View>
		<SimpleButton navigation={this.props.navigation}/>
	
	</View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 20
  },

});



