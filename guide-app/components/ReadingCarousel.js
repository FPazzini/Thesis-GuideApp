import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { FontStyleEval } from './FontSizeEval';
import { ModalHeader, ExpandingCard, Card } from './common/'
import { ScrollView } from 'react-native-gesture-handler';
import GLOBALS from '../constants/GlobalVars'


export default class ReadingCarousel extends Component {

  constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.state = {
      cardsContent: props.cardsContent
    }
    console.log("Cards Content: "+this.state.cardsContent)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  getContentSized (text) {
    return (
        <View style={{ alignSelf: 'flex-start' }}>
          <FontStyleEval 
              style={{ lineHeight: 20, color: 'white', padding: 5, }}
              text={text}
              textAlign="justify"
              textType="section"
          />
        </View>
    )
  }

  getTitleSized (text) {
    return (
        <View style={{ alignSelf: 'flex-start' }}>
          <FontStyleEval 
              style={{ color: 'white', marginLeft: 3, padding: 5, }}
              text={text}
              textAlign="justify"
              textType="supertitle"
          />
        </View>
    )
  }

  _renderItem = ( item ) => {
    var mItem = item.item
    console.log("Item: "+mItem)
    return (
      <View style={{ 
        height: '85%',
      }}>
        <Card>
          <View style={{ borderBottomColor: '#053FA9', borderBottomWidth: 1 }}>
            {this.getTitleSized(mItem.title)}
          </View>
            <View style={{ flex: 1 }}>
              
              {this.getContentSized(mItem.content)}
            </View>
        </Card>
      </View>
    );
  }

  render = () => {
    return (
      <View style={styles.rootView}>
        <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.cardsContent}
          renderItem={ dat => this._renderItem(dat)}
          sliderWidth={GLOBALS.DEVICE_WIDTH}
          itemWidth={320}
          layout={'default'}
          
          firstItem={0}
        />
      </View>
    );
  }
}

const styles = {
  rootView: {
    height: '100%'
  },
  cardStyle: {
    width: '100%', 
    height: '100%', 
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: '#2e2b29',
    shadowOffset: { height: 2, width: 0 },
  },
  cardHeaderView: {
    alignSelf: 'flex-start', 
    width: '100%', 
    marginTop: 5,
    padding: 5, 
    height: '15%', 
    alignItems: 'center', 
    justifyContent: 'center',
    
  }

}

//<Image 
//style={{ 
//    width: 300, 
//    height: '100%', 
//    resizeMode: 'cover',
//    borderRadius: 10, 
//    borderTopRightRadius: 10,
//    borderTopLeftRadius: 10,
//    borderBottomRightRadius: 10,
//    borderBottomLeftRadius: 10,
//}} 
//source={{ uri: item.thumbnail }} 
///>