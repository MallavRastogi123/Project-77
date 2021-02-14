import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}
const AppNavigator=createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
})
const AppContainer=createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
