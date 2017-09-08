import React from 'react';
import {
  StyleSheet,
  AppRegistry,
  View,
  Button,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class HomeScreen extends React.Component {
  static navigationOptions = (({ navigation }) => ({
        title: 'Expense'
  }));
    
  render() {
  const {navigate} = this.props.navigation; 
  return (
     <View style={styles.container}>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={()=>{ navigate('Chat')}}
          title="Chat with Lucy"
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

