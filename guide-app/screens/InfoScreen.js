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
  Close,
} from '../components/common'
import { WebBrowser, Icon, Constants } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import PathItem from '../components/PathItem';
import Details from '../components/Details'
import DetailsUpgrade from '../components/DetailsUpgrade'
import MenuItems from '../components/MenuItems'
import GLOBALS from '../constants/GlobalVars'

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
        
        this.menu = React.createRef();

    } 

    // Calling getData in componentWillMount.
    componentWillMount () {
        {this.getData(this.state.cardID)}
    }

    componentDidMount () {
    }

    // Function that verifies and sets the current item based on the cardID value received. 
    getData (id) {
        console.log('options: ', this.state.menuOptions)
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
                animated: true,
            });
        }
    }

    // Method used to evaluate the scroll in order to update the style of the menu options.
    evaluateScroll (event) { 
        this.yOffset = event.nativeEvent.contentOffset.y
        if (this.yOffset >= 0) {
            this.menu.activate(0)
        } if (this.yOffset >= GLOBALS.DEVICE_HEIGHT) {
            this.menu.activate(1)
        } if (this.yOffset >= GLOBALS.DEVICE_HEIGHT * 2) {
            this.menu.activate(2)
        } if (this.yOffset >= GLOBALS.DEVICE_HEIGHT * 3) {
            this.menu.activate(3)
        }
    }

    closeDetails () {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <Close imgPath={require('../assets/icons/close.png')} onPress={this.closeDetails.bind(this)} />
                <MenuItems onRef={ref => (this.menu = ref)} doScroll={section => this.scrollToSection(section)} />
                <ScrollView 
                    ref={scrollView => this.scrollView = scrollView}
                    onScroll={event => this.evaluateScroll(event)}
                    scrollEventThrottle={16}
                >
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
        alignItems: 'center',
        marginRight: 30,
        padding: 10,
        zIndex: 1,
    }
});
