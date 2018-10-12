import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    Alert, 
} from 'react-native'
import Modal from 'react-native-modal'
import { FontStyleEval } from './FontSizeEval'
import { ModalContent } from './common';

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
                    animationIn='slideInUp'
                    isVisible={this.state.modalVisible}>
                    
                    <ModalContent onPress={visibile => this.setModalVisible(visibile)} />
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