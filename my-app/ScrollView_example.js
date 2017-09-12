import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, StyleSheet } from 'react-native';

export default class NoteList extends Component {
  render() {
    return (
     <ScrollView>
          <Text style={{fontSize:12}}>Scroll me plz</Text>
          <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
          <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
          <Text style={{fontSize:12}}>If you like</Text>
          <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
          <Text style={{fontSize:12}}>Scrolling down</Text>
          <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
          <Text style={{fontSize:12}}>What's the best</Text>
          <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}} source={require('./img/dog.jpg')} />
		  <Image style={{width: 66, height: 58}}source={require('./img/dog.jpg')} />
          <Text style={{fontSize:12}}>Framework around?</Text>
          <Text style={{fontSize:12}}>React Native</Text>
        </ScrollView>
 ); 
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})