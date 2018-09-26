import React, { Component } from 'react'
import { View, Text, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native'
import { Header, Card, CardSection, Button } from '../components/common'

const numCols = 2

class SharksList extends Component {
    // navigationOptions corresponds to the bar located at the top of the screen. Set it to null to make it invisible.
    static navigationOptions = {
        title: 'Home',
        
    };

    state = {
        cardColor: 'grey'
    }

    // Method called whenever a card is clicked. Item is the reference to the card the user's clicked.
    cardClicked(item) {
        // alert(item.id)
        this.props.navigation.navigate('Links', {
            title: 'LLIIINKKKK'
        })
    }


    renderList = ({ item }) => {
        return (
            <View>
                <Card>
                    <TouchableHighlight
                        style={{ width: '100%', height: '100%' }}
                        onPress={() => this.cardClicked(item)}
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
                </Card>
            </View>

        );
    
    }
    render() {
        return (
            <View>
                <FlatList
                data={
                    [
                        {
                            id: '1',
                            avatar: require('../assets/images/squalo-bianco.jpg'), 
                            description: 'primo'
                        }, 
                        {
                            id: '2',
                            avatar: require('../assets/images/icebridge.jpg'),
                            description: 'secondo'
                        }, 
                        {
                            id: '3',
                            avatar: require('../assets/images/squalo-bianco.jpg'),
                            description: 'terzo'
                        }, 
                        {
                            id: '4',
                            avatar: require('../assets/images/squalo-toro.jpg'),
                            description: 'quarto'
                        }, 
                        {
                            id: '5',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'quinto'
                        }, 
                        {
                            id: '6',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'sesto'
                        }, 
                        {
                            id: '7',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'settimo'
                        }, 
                        {
                            id: '8',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'ottavo'
                        }, 
                        {
                            id: '9',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'nono'
                        }, 
                        {
                            id: '10',
                            avatar: require('../assets/images/paris.jpg'),
                            description: 'decimo'
                        }
                    ]
                }
                renderItem={this.renderList}
                numColumns={numCols}
                keyExtractor={item => item.id}
            />

            </View>
        )
    }
}

const styles = {
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
    }
}

export default SharksList
