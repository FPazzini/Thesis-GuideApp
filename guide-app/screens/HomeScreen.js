import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
} from 'react-native';
import {
  Clue,
  Win,
  ScanButton,
} from '../components/common'
import Modal from 'react-native-modal'
import { FlatList } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { WebBrowser } from 'expo';
import PathItem from '../components/PathItem';
import GmailStyleSwipeableRow from '../components/Example/GmailStyleSwipeableRow';
import CardsPath from '../components/CardsPath'
import GLOBALS from '../constants/GlobalVars';
import { FontStyleEval } from '../components/FontSizeEval';

const numCols = 1
let idxItemToFind = 0

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Caccia al QR',
  };

  state = {
    showInstrMsg: true,
    addOutline: true,
    // PathELements represents the set of cards that are visible / must be shown.
    pathElements: [],
    // Steps contains the collection of all the step of the treasure hunt.
    steps: [
      {
        id: '1',
        avatar: require('../assets/images/uova1.png'), 
        description: 'Riproduzione',
        readingSection: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          content: "Le uova di squali e razze sono composte da un guscio esterno che al tatto è ruvido e sembra di cuoio. In realtà il guscio è di collagene, cioè di tessuto connettivo.\nLe uova hanno dei filamenti o delle “corna” che servono ad ancorarle al fondo. All’interno dell’uovo si sviluppa il piccolo, nutrendosi del tuorlo.",
          title: "Guscio"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          content: "Lo sviluppo dell’embrione può durare anche diversi mesi e, di solito, dopo alcune settimane dalla deposizione delle uova, sul guscio si aprono due sottili fessure per permettere la circolazione dell’acqua, che viene favorita anche dal movimento dell’embrione. Alla schiusa il piccolo è come un adulto in miniatura.",
          title: "Sviluppo"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          content: "Le uova possono avere forme molto diverse e dalle uova si può riconoscere la specie di appartenenza! Le uova possono essere allungate come quelle del gattuccio, oppure più larghe come quelle delle torpedini. In alcuni casi possono anche avere un guscio spiralato, per ancorare l’uovo meglio al fondo e rendere più difficile la rimozione da parte di predatori.",
          title: "Aspetto"
        }, {
          id: "PXRUhtdlI2U",
          thumbail: "",
          content: "Le uova di squali e razze si possono trovare attaccate sul fondo.\nLe tegnúe di Chioggia sono un ambiente dove il gattopardo, Scyliorhinus stellaris, spesso depone le uova. Le uova possono trovarsi attaccate alle rocce o alle gorgonie.\nI gusci vuoti possono trovarsi anche sulle spiagge, specialmente dopo le mareggiate.",
          title: "Luogo"
        }, {
          id: "jskRYhlStOy",
          thumbail: "",
          content: "Le uova di squali e razze vengono comunemente chiamate borsette o borsellini delle sirene.\nSpesso le uova vuote, dopo che il piccolo ne è uscito, vengono infatti trovate sulle spiagge e sembrano proprio delle piccole borsette.",
          title: "Lo sapevi?"
        }],
      },
      {
        id: '2',
        avatar: require('../assets/images/tooth.jpg'),
        description: 'Dieta',
        readingSection: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          content: "I denti degli squali e dei loro parenti, le razze, sono molto vari. Ci sono specie con denti aguzzi, adatti ad addentare prede dal corpo molle. In altre specie, i denti sono più simili a piastre, più o meno fuse fra di loro, adatte a triturare organismi dal corpo duro, spesso dotati di un guscio. Infine i filtratori, come lo squalo elefante e lo squalo balena, hanno denti ridottissimi.",
          title: "Denti"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          content: " Il palombo ha una dieta varia. Anche se mangia soprattutto crostacei, negli stomaci si possono trovare pannocchie, granchi, vermi, e persino pesci.",
          title: "Dieta"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          content: "La pannocchia (detta anche canocchia o cicala di mare) è un crostaceo che vive sui fondali sabbiosi. Sulla parte terminale del corpo, detta telson, ha due macchie a forma di occhio, utili per spaventare i predatori. Ha due potenti chele che usa ome dei martelli: con le chele è in grado di spaccare i gusci dei molluschi bivalvi!!",
          title: "La pannocchia"
        }],
        gallerySection: [
          {
            id: '1',
            img: require('../assets/images/tooth.jpg')
          },
          {
            id: '2',
            img: require('../assets/images/tooth.jpg')
          },
          {
            id: '3',
            img: require('../assets/images/tooth.jpg')
          },
          {
            id: '4',
            img: require('../assets/images/tooth.jpg')
          },
        ],
      }
    ],
    clues: [
      'Alcune specie di squali e dei loro parenti fanno uova che attaccano attraverso filamenti al fondo: trova le uova delle torpedini e dei gattucci, attenzione quelle delle torpedini sono scure',
      'Gli squali che hanno denti fatti come delle piastre mangiano animali con il corpo duro. Trova la preda del palombo, attenzione, non è un pesce, ha il corpo duro, due potenti chele e due macchie simili a occhi sulla coda',
    ],
    showExplanation: true,
    showErrorMessage: false,
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
      this.setState({
        showErrorMessage: true,
      })
    }
  }

  infoClicked = (item) => {
    console.log("Clicked element: ",item)
    this.props.navigation.navigate('InfoScreen', {
      cardID: item.id,
      card: item,
    })
  }

  openQRSwiping (item) {
    this.props.navigation.navigate('InfoScreen', {
      cardID: item.id,
    })
  }
  
  showClue () {
    if (idxItemToFind !== this.state.clues.length) {
      var clue = this.state.clues[idxItemToFind]
      return (
        <View>
          <Clue clueTitle={"Indizio"} clue={clue}/>
          <View style={{alignItems: 'center'}}>
            <ScanButton onPress={() => this.buttonClicked()} />
          </View>
        </View>
      )
    } else {
      return (
        <View>
          <Win />
        </View>
      )
    }
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
      <View style={{ height: '90%', alignItems: 'center' }}>
        <CardsPath item={item} infoButtonClicked={card => this.infoClicked(card)} />
      </View>
    );
  }

  wp (percentage) {
    const value = (percentage * GLOBALS.DEVICE_HEIGHT) / 100
    return Math.round(value)
  }
  
  showCards () {
    const slideWidth = this.wp(75)
    const itemHorizontalMargin = this.wp(2)
    const sliderWidth = GLOBALS.DEVICE_WIDTH
    const itemWidth = slideWidth + itemHorizontalMargin * 2
    if (this.state.pathElements.length === 0) {
      return (
        <View style={{ flex: 1, height: GLOBALS.DEVICE_HEIGHT / 2, alignItems: 'center', justifyContent: 'center' }}>
          <Image 
            source={require('../assets/images/instructions.png')}
            style={{width: '100%', height: '100%', resizeMode: 'contain' }} 
          />
        </View>
      )
    } else {
      return (
        <View style={{flex: 1, height: GLOBALS.DEVICE_HEIGHT / 2}}>
          <Carousel
            ref={ (c) => { this._carousel = c; } }
            data={this.state.pathElements}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth/2}
            layout={'default'}
            firstItem={0}
          />
        </View>
      )
    }
  }

  showWrongQrMessage () {
    console.log("arrivato errore")
    if (this.state.showErrorMessage) {
      setTimeout(() => {
        this.setState({
          showErrorMessage: false
        })
      }, 3000)
    
      return ( 
        <View>
          <Modal
            isVisible={true}
            onSwipe={() => this.setState({ showErrorMessage: false })}
            swipeDirection="down">
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <FontStyleEval
                text="QR errato!"
                textType="supertitle"
                style={{ fontWeight: '600', color: 'white' }}
              />
            </View>
          </Modal>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          {this.showCards()}
          
          {this.showClue()}
          
          {this.showWrongQrMessage()}
        
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
