import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors.js'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QRReaderScreen from '../screens/QRReader'
import InfoSchedaScreen from '../screens/InfoScreen'

const HomeStack = createStackNavigator(
{
  Home: {
    screen: HomeScreen
  },
  Links: {
    screen: LinksScreen
  },
  QRReader: {
    screen: QRReaderScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  InfoScreen: {
    screen: InfoSchedaScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
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

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
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

const QRReaderStack = createStackNavigator({
  QRReader: QRReaderScreen,
});

QRReaderStack.navigationOptions = {
  tabBarLabel: 'QRReader',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
      size={26}
    />
  ),
};

const InfoScreenStack = createStackNavigator({
  InfoScreen: InfoSchedaScreen,
});

InfoScreenStack.navigationOptions = {
  tabBarLabel: 'SchedaScreen',
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


export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});
