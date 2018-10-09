import React, { Component } from 'react'
import {
    View,
    Text,
    Modal,
    TouchableHighlight,
    Alert, 
} from 'react-native'
import { FontStyleEval } from './FontSizeEval'

class InfoPopup extends Component {
    state = {
        modalVisible: false
    }

    setModalVisible (visible) {
        this.setState({
            modalVisible: visible
        })
    }

    render () {
        return (
            <View style={{ marginTop: 25 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                    }}>
                    
                    <View style={{ marginTop: 22, backgroundColor: 'blue' }}>
                        <FontStyleEval 
                            text={'Hello World!'}
                            textType="section"
                        />

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Indietro</Text>
                        </TouchableHighlight>    
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true)
                    }}>
                        <FontStyleEval 
                            style={styles.learnMoreStyle}
                            text={'Maggiori Informazioni...'}
                            textType="section"
                        />
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = {
    learnMoreStyle: {
        color: 'white',
        fontWeight: '400',
        padding: 5,
        textDecorationLine: 'underline',
    }
}


export default InfoPopup