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
        gallerySection: [
          {
            id: '1',
            img: require('../assets/images/uova2mod.png'),
            itemTitle: 'La "Borsetta di Sirena" di una razza'
          },
          {
            id: '2',
            img: require('../assets/images/uova3.png'),
            itemTitle: 'Uova'
          },
        ],
      },
      {
        id: '2',
        avatar: require('../assets/images/tooth.jpg'),
        description: 'Dieta',
        readingSection: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          content: "La pannocchia (detta anche canocchia o cicala di mare) è un crostaceo che vive sui fondali sabbiosi. Sulla parte terminale del corpo, detta telson, ha due macchie a forma di occhio, utili per spaventare i predatori. Ha due potenti chele che usa ome dei martelli: con le chele è in grado di spaccare i gusci dei molluschi bivalvi!!",
          title: "La pannocchia"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          content: "Il palombo ha una dieta varia. Anche se mangia soprattutto crostacei, negli stomaci si possono trovare pannocchie, granchi, vermi, e persino pesci.",
          title: "Dieta"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          content: "I denti degli squali e dei loro parenti, le razze, sono molto vari. Ci sono specie con denti aguzzi, adatti ad addentare prede dal corpo molle. In altre specie, i denti sono più simili a piastre, più o meno fuse fra di loro, adatte a triturare organismi dal corpo duro, spesso dotati di un guscio. Infine i filtratori, come lo squalo elefante e lo squalo balena, hanno denti ridottissimi.",
          title: "Denti"
        }],
        gallerySection: [
          {
            id: '1',
            img: require('../assets/images/piastremod.png'),
            itemTitle: 'Piastre Aquila di Mare: piastre per triturare prede con corpi duri'
          },
          {
            id: '2',
            img: require('../assets/images/granchiomod.png'),
            itemTitle: 'Granchio: parte della dieta della pannocchia'
          },
          {
            id: '3',
            img: require('../assets/images/verme.png'),
            itemTitle: 'Verme: come il granchio, parte della dieta della pannocchia'
          },
        ],
      },
      {
        id: '3',
        avatar: require('../assets/images/predazione1.png'),
        description: 'Predazione',
        readingSection: [
        {
          id: "WpIAc9by5iU",
          content: "Alcuni pesci sono in grado di produrre, grazie a dei particolari organi, delle vere e proprie scariche elettriche e per questo vengono anche chiamati “pesci elettrici”. Tra questi c’è anche la torpedine, un parente stretto degli squali, con una forma piatta molto simile a quella delle razze ma più arrotondata e con la coda molto più corta.",
          title: "Introduzione"
        }, {
          id: "sNPnbI1arSE",
          content: "Nella torpedine ci sono due organi che producono le scariche elettriche, ognuno dei quali si trova ai lati del corpo, a partire dagli occhi. Ognuno di questi organi è costituito da tanti dischetti impilati a formare delle colonne che sembrano tanti nidi d’ape. Queste colonnine, il cui numero può arrivare fino a 600, sono direttamente collegate con il cervello della torpedine attraverso dei nervi.  Ogni colonnina funziona come una pila in cui la corrente passa dal polo negativo, che si trova in basso sul ventre dell’animale, verso il polo positivo, che si trova in alto verso il dorso dell’animale. E’ il cervello a mandare a queste pile, attraverso i nervi, il segnale che è il momento di produrre una scarica elettrica. Proprio come le normali pile anche gli organi elettrici della torpedine dopo che hanno rilasciato una scarica elettrica hanno bisogno di un po’ di tempo per potersi ricaricare. ",
          title: "Come"
        }, {
          id: "VOgFZfRVaww",
          content: "Le scariche elettriche prodotte dalle torpedini possono essere anche molto forti. Nelle specie più grandi e potenti possono arrivare a 200 volt, la stessa pericolosa scarica elettrica che sentireste se infilaste le dita nella presa della corrente. Nella maggior parte dei casi però le scariche sono molto meno potenti e, in ogni caso, non sono mortali per l’essere umano, ma sono sufficienti per stordire le prede.",
          title: "Forza"
        }, {
          id: "3LEE844ThaU",
          content: "Le torpedini stanno spesso nascoste sotto la sabbia e catturano le loro prede soprattutto di notte. Grazie alle le scariche elettriche riescono a stordire piccoli pesci che sono molto più veloci di loro e che altrimenti non riuscirebbero a catturare.",
          title: "Utilizzo"
        }, {
          id: "kAdIZR0CkqF",
          content: "Pensate che Alessandro Volta quando ha inventato la pila si è ispirato proprio agli organi elettrici della torpedine e ha chiamato la sua prima pila “organo elettrico artificiale” perché era una ricostruzione dell’organo elettrico naturale della torpedine.",
          title: "Lo sapevi?",
        }],
        gallerySection: [
          {
            id: '1',
            img: require('../assets/images/razza1.png'),
            itemTitle: 'Razza'
          },
          {
            id: '2',
            img: require('../assets/images/razza2mod.png'),
            itemTitle: 'Razza'
          },
        ],
      },
      {
        id: '4',
        avatar: require('../assets/images/conservazione1.png'),
        description: 'Predazione',
        readingSection: [
        {
          id: "WpIAc9by5iU",
          content: "L'Unione Internazionale per la Conservazione della Natura è un’organizzazione internazionale fondata con la missione di assistere e incoraggiare la conservazione dell'integrità e della diversità della natura e di assicurare che l’utilizzo delle risorse naturali sia ecologicamente sostenibile. Questa organizzazione oggi raggruppa oltre 1000 membri tra cui anche organizzazioni ed enti di ricerca italiani. Tra le attività più importanti dell'Unione Internazionale per la Conservazione della Natura c’è quella di capire quali sono le specie in pericolo di estinzione. Queste specie vengono inserite nella cosiddetta “Lista Rossa”. Ci sono diverse categorie di pericolo e quando ad una specie viene assegnato il bollino rosso, la categoria più grave, significa che si tratta di una specie in Pericolo o in Pericolo Critico di Estinzione. Più di 60 specie che si trovano nel nostro Mar Mediterraneo sono incluse in questa lista e la maggior parte sono proprio squali e razze. Tra queste ci sono anche il cetorino o squalo elefante e lo squalo angelo.",
          title: "IUCN"
        }, {
          id: "sNPnbI1arSE",
          content: "Lo squalo angelo è uno squalo dalla forma molto particolare, piatta e con grandi pinne pettorali a forma di ali. Potrebbe sembrare una razza ma se osservate bene, a differenza della razza, le sue branchie non si trovano nel ventre ma ai lati della testa, come in tutti gli altri squali. Può arrivare a raggiungere anche i 2,5 metri di lunghezza e gli 80 Kg di peso. Può vivere fino a 35 anni d’età, che per un pesce non è poco.",
          title: "Squalo Angelo - Caratteristiche"
        }, {
          id: "VOgFZfRVaww",
          content: "Durante il giorno lo squalo angelo rimane quasi sempre sepolto sotto la sabbia, immobile. Di notte diventa più attivo ma rimane sempre nelle vicinanze del fondale. Per nutrirsi riesce a catturare anche pesci di discrete dimensioni, grazie alla sua abilità di mimetizzarsi sotto la sabbia, lasciando scoperti solo gli occhi, che si trovano in posizione dorsale e gli permettono di vedere le prede e catturarle grazie all’effetto sorpresa. Ha una grande bocca dotata di denti a rasoio e due bargigli sulle narici che lo aiutano a percepire la presenza delle prede. Come molti squali anche lo squalo angelo conduce prevalentemente una vita solitaria. Gruppi più numerosi si trovano solo in aree ricche di cibo o adatte alla riproduzione e alla nascita dei piccoli, momenti delicati in cui un numero ancora maggiore di individui vengono esposti al pericolo della cattura da parte dei pescatori.",
          title: "Squalo Angelo - Ecologia"
        }, {
          id: "3LEE844ThaU",
          content: "Nel corso dei secoli questa specie è stata molto pescata per la prelibatezza delle sue carni ma anche per utilizzare l’olio presente nel suo fegato come un rimedio della medicina popolare. Questo ha purtroppo causato la sua quasi totale scomparsa dai nostri mari e gli avvistamenti sono diventati molto rari. Oggi la sua pesca è vietata e se viene accidentalmente catturato deve essere trattato con la massima cura e rilasciato subito in mare, con la speranza che sopravviva.",
          title: "Squalo Angelo - Pesca"
        }, {
          id: "kAdIZR0CkqF",
          content: "Nel passato lo squalo angelo era molto frequente anche nel Mare Adriatico, oggi è invece una specie rarissima.",
          title: "Lo sapevi?",
        }],
        gallerySection: [
          {
            id: '1',
            img: require('../assets/images/squaloangelo1.png'),
            itemTitle: 'Squalo Angelo'
          },
          {
            id: '2',
            img: require('../assets/images/squaloangelo2.png'),
            itemTitle: 'Squalo Angelo'
          },
          {
            id: '3',
            img: require('../assets/images/squaloangelo3.png'),
            itemTitle: 'Squalo Angelo'
          },
        ],
      }
    ],
    clues: [
      'Alcune specie di squali e dei loro parenti fanno uova che attaccano attraverso filamenti al fondo: trova le uova delle torpedini e dei gattucci, attenzione quelle delle torpedini sono scure',
      'Gli squali che hanno denti fatti come delle piastre mangiano animali con il corpo duro. Trova la preda del palombo, attenzione, non è un pesce, ha il corpo duro, due potenti chele e due macchie simili a occhi sulla coda',
      'Gli squali e i loro parenti usano diverse strategie per catturare le loro prede. Alcuni le attaccano in velocità, altri le aspettano mimetizzandosi sul fondo, altri ancora producono potenti scosse elettriche. Trova un pesce che stordisce le sue prede con le scosse elettriche. Attenzione, è piatto come una razza, ma ha il corpo più arrotondato e la coda più corta.',
      'Trova la specie contrassegnate con il bollino rosso (in pericolo di estinzione) secondo la Lista Rossa dell’Unione Internazionale per la conservazione della natura',
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
    // Checking if the current counter is lower than the length of array
    if (idxItemToFind < this.state.clues.length) {
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
    if (idxItemToFind < this.state.clues.length) {
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

  _renderItem = ( inf ) => {
    var item = inf.item
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
            renderItem={ inf => this._renderItem(inf) }
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