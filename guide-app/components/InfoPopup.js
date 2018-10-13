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

    constructor (props) {
        super (props)
        this.state = {
            modalVisible: false,
            modalBody: props.text
        }
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
                    
                    <ModalContent 
                        onPress={visibile => this.setModalVisible(visibile)} 
                        bodyText={this.state.modalBody}
                    />
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