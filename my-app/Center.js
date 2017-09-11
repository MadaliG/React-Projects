import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Center extends React.Component {
render () {
	
return (
	<View style={styles.container}>
		<View style={[styles.item, styles.one]}>
			<Text style={styles.itemText}>1</Text>
		</View>
		<View style={[styles.item, styles.two]}>
			<Text style={styles.itemText}>2</Text>
		</View>
		<View style={[styles.item, styles.three]}>
			<Text style={styles.itemText}>3</Text>
		</View>
	</View>
);
}
}

var styles = StyleSheet.create({
	container: {
		borderWidth: 10,
		borderColor: 'purple',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
		},
	item: {
		backgroundColor: '#EEE',
		padding: 25
	},
	one: {
		backgroundColor: 'red'
	},
	two: {
		backgroundColor: 'green'
	},
	three: {
		backgroundColor: 'blue'
	},
	itemText: {
		color: 'white',
		fontSize: 40,
	}
});