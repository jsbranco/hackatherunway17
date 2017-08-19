import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './src/screens/Home'
import NewProductScreen from './src/screens/NewProduct'
const MyApp = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    NewProduct: {
        screen: NewProductScreen,
    },
});
export default MyApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
