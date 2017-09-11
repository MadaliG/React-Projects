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
  return (
     <View style={styles.container}>
        <Text>Hello, Notes App!</Text>
        <SimpleButton navigation={this.props.navigation}/>
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

