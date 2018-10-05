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
  FlatList,
  Dimensions,
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

const deviceHeight = Dimensions.get('window').height;
const tabBarHeight = 49

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
        this.scrollView = null;
        this.scrollToSection = this.scrollToSection.bind(this);
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

    scrollToSection (whereTo) {
        if (this.scrollView) {
            this.scrollView.scrollTo({
                y: whereTo,
                animated: true
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTextStyle}>
                    <TouchableOpacity onPress={() => this.scrollToSection(0)}>
                        <MonoText style={styles.textStyle}>
                            Inizio
                        </MonoText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.scrollToSection((deviceHeight-tabBarHeight))}>
                        <MonoText style={styles.textStyle}>
                            Ascolta
                        </MonoText>
                    </TouchableOpacity>
                    <MonoText style={styles.textStyle}>
                        Leggi
                    </MonoText>
                    <MonoText style={styles.textStyle}>
                        Guarda
                    </MonoText>
                </View>
                <ScrollView ref={scrollView => this.scrollView = scrollView}>
                    <DetailsUpgrade item={this.state.currentItem} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 40,
        color: 'white',
        padding: 7,
        fontWeight: '200',
    },
    viewTextStyle: {
        flex: 1,
        position: 'absolute',
        bottom: 50,
        alignSelf:'flex-end',
        marginRight: 30,
        padding: 10,
        zIndex: 1,
    }
});
