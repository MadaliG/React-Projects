import ChatScreen from './ChatScreen';
import HomeScreen from './App.js';
import { StackNavigator } from 'react-navigation';

const ThisScreen = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});