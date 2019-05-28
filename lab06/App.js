/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from "react-navigation"
import HomeScreen from './src/Home';
import DetailsScreen from './src/Details';
import ProfileScreen from './src/Profile';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home/',
    navigationOptions: {
      title: 'Esta es la home'
    }
  },
  Details: DetailsScreen,
  Profile: ProfileScreen,
},
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: 'Un titulo generico',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);


export default createAppContainer(AppNavigator);
