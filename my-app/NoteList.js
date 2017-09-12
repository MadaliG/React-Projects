import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, Image, Text, StyleSheet, View } from 'react-native';

export default class NoteList extends Component {
  state = {
      notes: [
         {
            id: 0,
            title: 'Ben',
			note_body: 'Test 1'
         },
         {
            id: 1,
            title: 'Susan',
			note_body: 'Test 2'
         },
         {
            id: 2,
            title: 'Robert',
			note_body: 'Test 3'
         },
         {
            id: 3,
            title: 'Mary',
			note_body: 'Test 4'
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.title)
   }
   render() {
      return (
         <View> 
            {
               this.state.notes.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <Text style = {styles.text}>
                        {item.title}
                     </Text>
					 <View style = {styles.hr}></View>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      padding: 10,
      marginTop: 3
   },
   text: {
    padding: 10,
    color: '#4f603c'
   },
   hr: {
   borderBottomColor: '#5B29C1',
    borderBottomWidth: 1,
	marginTop: 3
   }
   
})