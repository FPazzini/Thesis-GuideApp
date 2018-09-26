import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors.js'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/SharksList';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator(
{
  Home: HomeScreen,
  Links: LinksScreen
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: Colors.noticeText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

HomeStack.navigationOptions = {
  title: 'title',
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
      size={26}
    />
  ),
  
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
      size={26}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
      size={26} 
    />
  ),
};

const PippoStack = createStackNavigator({
  Pippo: SettingsScreen
})

PippoStack.navigationOptions = {
  tabBarLabel: 'Pippo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'} 
      size={26}
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  PippoStack
});
