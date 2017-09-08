import React from 'react';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
import NoteScreen from './NoteScreen';
import { StackNavigator } from 'react-navigation';


export default class demoApp extends React.Component {
  render() {
    return (
      <SimpleNavigation/>
    );
  }
}

export const SimpleNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Note: { screen: NoteScreen },
  Chat: { screen: ChatScreen },
});

