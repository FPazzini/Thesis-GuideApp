import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import Carousel from 'react-native-snap-carousel'; // 3.6.0
import { FontStyleEval } from './FontSizeEval';
import { ModalHeader } from './common/'

export default class ReadingCarousel extends Component {

  constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }

  init(){
    this.state = {
      videos: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://img.youtube.com/vi/D9ioyEvdggk/hqdefault.jpg",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://img.youtube.com/vi/sNPnbI1arSE/hqdefault.jpg",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://img.youtube.com/vi/VOgFZfRVaww/hqdefault.jpg",
          title: "Rap Devil"
        }
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
        <View style={styles.cardStyle}>
            <View style={styles.cardHeaderView}>
              <FontStyleEval 
                  style={{ color: '#1a1816', fontWeight: '600' }}
                  text={item.title}
                  textType="subtitle"
              />
            </View>
        </View>
    );
  }

  render = () => {
    return (
      <View style={styles.rootView}>
        <Carousel
          ref={ (c) => { this._carousel = c; } }
          data={this.state.videos}
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
    height: '60%', 
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
  },
  cardHeaderView: {
    alignSelf: 'flex-start', 
    width: '100%', 
    marginTop: 5,
    padding: 5, 
    height: '15%', 
    alignItems: 'center', 
    justifyContent: 'center',
    
    shadowColor: '#1a1816',
        shadowOffset: { width: 0, height: 2 },
        borderBottomWidth: 0.2,
        shadowOpacity: 0.4,
        elevation: 2,
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