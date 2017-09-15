import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, Image, Text, StyleSheet, View } from 'react-native';

export default class NoteList extends Component {
  
   
   constructor (props) {
		super(props)
		this.state = {
		params: [
         {
            id: 0,
            note_title: 'Ben',
			note_body: 'Test 1'
         },
         {
            id: 1,
            note_title: 'Susan',
			note_body: 'Test 2'
         },
         {
            id: 2,
            note_title: 'Robert',
			note_body: 'Test 3'
         },
         {
            id: 3,
            note_title: 'Mary',
			note_body: 'Test 4'
         }
      ]
		}
	};
   

   alertItemName = (item) => {
      alert(item.title)
   }
   render() {
   const {navigate} = this.props.navigation; 
	console.log('PROPS');
	console.log(this.props.navigation);
	var title;
	if(this.props.navigation.state.params){
		title = this.props.navigation.state.params.note_title;
	} else {
		//TODO: who is item? the default value should have an index
		title = this.state.params.note_title;
	}

      return (
         <View> 
            {
               this.state.params.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=> navigate('Note', { note_title: item.note_title, note_body: item.note_body })}>

					  <Text style = {styles.text}>
						  {title}
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