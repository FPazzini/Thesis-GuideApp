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
import Details from '../components/Details'

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
                img: require('../assets/images/squalo-bianco.jpg'),
            },
            {
                id: 2,
                img: require('../assets/images/squalo-bianco.jpg'),
            },
          ],
          currentItem: {},
        }
    } 

    // Calling getData in componentWillMount.
    componentWillMount () {
        {this.getData(this.state.cardID)}
    }

    // Function that verifies and sets the current item based on the cardID value received. 
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
                    <Details item={this.state.currentItem} />
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
