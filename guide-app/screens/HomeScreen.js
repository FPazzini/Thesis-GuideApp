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
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { WebBrowser, Icon, Constants } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import QRReader from './QRReader';
import PathItem from '../components/PathItem';
import PathItemRow from '../components/PathItemRow'
import AppleStyleSwipeableRow from '../components/Example/AppleStyleSwipeableRow';
import GmailStyleSwipeableRow from '../components/Example/GmailStyleSwipeableRow';

const numCols = 1
let idxItemToFind = 0

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Avventura',
  };

  state = {
    showInstrMsg: true,
    qrPlot: 'introduction', // captured by the QR code reader
    currentPlot: '',
    plotCounter: 0,
    phases: {
      'introduction' : 'Inizia cosi\' la nostra avventura...',
      'diet' : 'The diet is made of ...'
    },
    addOutline: true,
    pathElements: [
      
    ],
    steps: [
      {
        id: '1',
        avatar: require('../assets/images/squalo-bianco.jpg'), 
        description: 'Riproduzione'
      },
      {
        id: '2',
        avatar: require('../assets/images/gws.jpg'),
        description: 'Secondo'
      }
    ],
    showExplanation: true,

  }
 
  showExplanationText () {
    if (this.state.showExplanation) {
      return (
        <Text style={styles.intrTextStyle}>
          Cattura il codice QR
        </Text>
      )
    } else {
      return null
    }
  }

  showInstructionMessage () {
    if (this.state.showInstrMsg) {
      return (
        <View>
          {this.showExplanationText()}
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.intrTextStyle}>
            Variabile e' false
          </Text>
        </View> 
      )
    }
  }

  showPlot () {
    /*if (this.state.qrPlot ===  Object.keys(this.state.phases)[this.state.plotCounter]) {
      return (
        <Text style={styles.plotStyle}>
          {Object.values(this.state.phases)[this.state.plotCounter]}
        </Text>
      )
    }*/
  }

  buttonClicked () {
    this.props.navigation.navigate('QRReader', {
      evaluateLevel: this.evaluateLevel,
      idx: idxItemToFind
    })
  }

  evaluateLevel = (value) => {
    var lev = value
    var item;
    if (lev === this.state.steps[idxItemToFind].id) {
      item = this.state.steps[idxItemToFind]
      idxItemToFind += 1
      var levelsList = [...this.state.pathElements, item] 
      this.setState({ 
        pathElements: levelsList,
        showExplanation: this.state.showExplanation ? false : this.state.showExplanation
      })
    } else {
      // Show alert or something saying the focused QR code is not the right one, at this particular time. 
    }
  }

  infoClicked = (item) => {
    this.props.navigation.navigate('InfoScreen', {
      cardID: item.id
    })
  }

  openQRSwiping (item) {
    this.props.navigation.navigate('InfoScreen', {
      cardID: item.id
    })
  }

  renderList = ({ item }) => {
    return (
      <GmailStyleSwipeableRow launchOnSwipe={() => this.openQRSwiping(item)}>
        <View>
          <PathItem item={item} infoButtonClicked={card => this.infoClicked(card)} /> 
        </View>
      </GmailStyleSwipeableRow>
    );
  }

  showList () {
    return (
      <FlatList
        data={this.state.pathElements}
        renderItem={this.renderList}
        numColumns={numCols}
        keyExtractor={item => item.id}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ width: '100%' }}>
          {this.showList()}
        </View>
        <View style={styles.viewInstrStyle}>
          {this.showInstructionMessage()}
        </View>
        
        <View style={styles.viewWrappingQRButton}>
          <TouchableOpacity 
            onPress={this.buttonClicked.bind(this)}
            activeOpacity={0.7}
            style={styles.qrCodeButtonStyle}
          >
            <View style={{ width: '100%', height: '100%' }}>
              <TabBarIcon
                focused={true}
                name={
                  Platform.OS === 'ios'
                    ? 'ios-add-circle-outline'
                    : 'md-add'
                }
                size={100}
                
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewPlotStyle}>
          {this.showPlot()}
        </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  viewWrappingQRButton: {
    alignItems: 'center',
    marginTop: 40,
  },
  viewInstrStyle: {
    padding: 8,
    alignItems: 'center',
    marginTop: 25,
  },
  intrTextStyle: {
    fontSize: 25,
  },
  viewPlotStyle: {
    width: '100%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    
  },
  plotStyle: {
    fontSize: 17,
    fontStyle: 'italic',
  },
  qrCodeButtonStyle: {

  },
  descriptionRowStyle: {
    width: '60%',
  },
  textViewStyle: {
    alignItems: 'flex-start'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  innerViewStyle: {
      width: '100%',
      height: '80%'
  },
  rowDescriptionStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  descriptionStyle: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    padding: 10
  },
  iconViewStyle: {
    alignSelf: 'flex-end',
    marginRight: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  
  
});
