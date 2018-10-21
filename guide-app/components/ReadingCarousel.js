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
import { ModalHeader, ExpandingCard } from './common/'

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
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
      <View style={{ height: '60%', marginTop: '20%', backgroundColor: 'green'}}>
        <ExpandingCard>
          <Text>{item.title}</Text>
        </ExpandingCard>
      </View>
    );
  }

  render = () => {
    return (
      <View style={styles.rootView}>
        <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.cardsContent}
          renderItem={this._renderItem.bind(this)}
          onSnapToItem={this.handleSnapToItem.bind(this)}
          sliderWidth={360}
          itemWidth={256}
          layout={'default'}
          firstItem={0}
        />
      </View>
    );
  }
}

const styles = {
  rootView: {
    height: '100%', 
    marginTop: 15,
  },
  cardStyle: {
    width: '100%', 
    height: '100%', 
    backgroundColor: '#fcfbf9', 
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