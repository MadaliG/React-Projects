import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends React.Component {
  static navigationOptions = (({ navigation }) => ({
        title: 'Welcome'
  }));
    
  render() {
  return (
	<View style={styles.container}>
		<NoteList/>
		<Text>Hello, Notes App!</Text>
		<SimpleButton navigation={this.props.navigation} style={styles.simpleButton}/>
	</View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 60
  }
});



