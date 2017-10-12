import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, Image, Text, StyleSheet, View } from 'react-native';

export default class NoteList extends Component {
  
   
   constructor (props) {
		super(props)
		this.state = {
		note_data: this.props.notes,
		}

       if(this.props.navigation.state.params) {
           this.modifyNote(this.props.navigation.state.params)
       }
	};
   

   alertItemName = (item) => {
      alert(item.title)
   }

   //modify edited notes
    modifyNote(note){
       for(var i=0; i<this.state.note_data.length; i++) {
       //    print('a intrat in for..');
       //    print('params id: ' + this.state.params[i].id);
        //   print('note id: ' + note.id);
           if (this.state.note_data[i].id === note.note_id) {
               var edited_note = Object.assign(this.state.note_data[i], {note_title: note.note_title, note_body: note.note_body});
               this.setState(edited_note);
           }
       }
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
		title = this.state.note_data.note_title;
	}
	
	/*updateTitle(id){
		console.log('id: ' + id);
		return id
	}*/

	console.log('notes ');
	console.log(this.props.notes);

      return (
         <View> 
            {
               this.state.note_data.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={()=> navigate('Note', { note_title: item.note_title, note_body: item.note_body, note_id: item.id })}>

					  <Text style = {styles.text}>
						  {item.note_title}
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