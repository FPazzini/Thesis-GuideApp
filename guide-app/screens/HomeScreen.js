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
import { WebBrowser, Icon } from 'expo';
import { MonoText } from '../components/StyledText';
import TabBarIcon from '../components/TabBarIcon';
import QRReader from './QRReader';

const numCols = 1

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
    pathElements: [
      
    ],
    addOutline: true,
  }

  componentWillMount () {
    //this.evaluateLevel('primo')
  }

  showInstructionMessage () {
    if (this.state.showInstrMsg) {
      return (
        <View>
          <Text style={styles.intrTextStyle}>
            Cattura il primo codice QR
          </Text>
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
      evaluateLevel: this.evaluateLevel
    })
  }

  evaluateLevel = (value) => {
    var lev = value
    alert(lev)
    var item;
    if (lev === 'primo') {
      item = {
        id: '1',
        avatar: require('../assets/images/squalo-bianco.jpg'), 
        description: 'primo'
      }
    } else if (lev === 'secondo') {
      item = {
        id: '2',
        avatar: require('../assets/images/squalo-toro.jpg'),
        description: 'secondo'
      }
    }
    var levelsList = [...this.state.pathElements, item] 
      this.setState({ pathElements: levelsList })
  }

  renderList = ({ item }) => {
    return (
      <View>
        <AdvancedCard>
          <TouchableHighlight
            style={{ width: '100%', height: '100%' }}
            underlayColor='lightgrey'
          >
            <View>
              <View style={styles.innerViewStyle}>
                <Image style={styles.image} source={item.avatar} />
              </View>
              <View style={styles.textViewStyle}>
                <Text style={styles.descriptionStyle}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </AdvancedCard>
      </View>
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
                    : 'plus-circle'
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

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  innerViewStyle: {
      width: '100%',
      height: '80%'
  },
  descriptionStyle: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  textViewStyle: {
      alignItems: 'flex-start'
  },
});
