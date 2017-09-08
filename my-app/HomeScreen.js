import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = (({ navigation }) => ({
        title: 'Welcome'
  }));
    
  render() {
  const {navigate} = this.props.navigation; 
  return (
     <View style={styles.container}>
        <Text>Hello, Notes App!</Text>
        <Button
          onPress={()=> navigate('Note', { user: 'Mark' })}
          title="Create a note!"
        />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

