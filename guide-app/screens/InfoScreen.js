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
    
    constructor (props) {
        super (props)
        this.state = {
            cardID: props.navigation.state.params.cardID,
            data: [{
                id: 1,
                img: 'squalo-bianco.jpg',
            },
            {
                id: 2,
                img: 'squalo-toro.jpg',
            },
          ],
          currentItem: {},
        }
    } 

    componentDidMount () {
        this.getData(this.state.cardID)
    }

    getData (id) {
        // Parsing string to int.
        switch (parseInt(id)) {
            case 1:
                this.setState({ 
                    currentItem: this.state.data[0]
                 })
                break
            default:
                break
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
                alert({this.state.currentItem.id})
                <Text>{this.state.currentItem.img}</Text>
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
