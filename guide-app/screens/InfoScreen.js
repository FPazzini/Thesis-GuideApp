import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import {
  Header,
  Button,
  Input,
  Spinner,
  Card,
  CardSection,
  AdvancedCard,
} from '../components/common'
import { WebBrowser, Icon, Constants } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import PathItem from '../components/PathItem';

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Scheda',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <Text>Ciao!</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
