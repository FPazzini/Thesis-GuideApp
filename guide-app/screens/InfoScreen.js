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
import DetailsUpgrade from '../components/DetailsUpgrade'

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor (props) {
        super (props)
        this.state = {
            cardID: props.navigation.state.params.cardID,
            data: [{
                id: 1,
                img: require('../assets/images/whaleshark.jpg'),
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
                <View style={styles.viewTextStyle}>
                    <Text style={styles.textStyle}>
                        Opzione 1
                    </Text>
                    <Text style={styles.textStyle}>
                        Opzione 2
                    </Text>
                    <Text style={styles.textStyle}>
                        Opzione 3
                    </Text>
                </View>
                <ScrollView>
                    <DetailsUpgrade item={this.state.currentItem} />
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
    textStyle: {
        fontSize: 25,
        color: 'blue',
    },
    viewTextStyle: {
        flex: 1,
        position: 'absolute',
        bottom:0,
        alignSelf:'flex-end',
        padding: 10,
        zIndex: 1,
    }
});
