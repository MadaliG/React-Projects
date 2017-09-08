import React from 'react';
import ChatScreen from './ChatScreen';
import HomeScreen from './HomeScreen';
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
  Chat: { screen: ChatScreen },
});

