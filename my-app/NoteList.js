import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class NoteList extends React.Component {
   constructor (props) {
   	super(props);
   	this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   }
	
   render() {
   	
   	return (
   		<ListView
			dataSource={
				this.ds.cloneWithRows( [
					{title:"Note 1", body:"Body 1", id:1},
					{title:"Note 2", body:"Body 2", id:2}
				])
			}
			renderRow={(rowData) => {
				return (
					<Text>{rowData.title}</Text>
				)
			}}
   		renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
		/>
   	)
   }
}

const styles = StyleSheet.create({
  /*
   * Removed for brevity
   */
   container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
   },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});