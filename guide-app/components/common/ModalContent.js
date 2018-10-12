import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    ScrollView,
} from 'react-native'
import { Button } from 'react-native-elements'
import { FontStyleEval } from '../FontSizeEval'
import {
    ModalHeader,
} from './'

const ModalContent = ({ onPress, bodyText }) => {

    const {
        viewStyle,
        backButtonStyle,
        headerStyle,
        bodyStyle,
    } = styles

    return (
        <View style={viewStyle}>
            <ModalHeader>
                <FontStyleEval 
                    style={headerStyle}
                    text={'Testo Audio'}
                    textType="title"
                />
            </ModalHeader>
            
            <View style={{flex: 1, marginBottom: 10,}}>
                <ScrollView>
                    <FontStyleEval 
                        style={bodyStyle}
                        text={bodyText}
                        textAlign="justify"
                        textType='section'
                    />
                </ScrollView>
            </View>
            <View style={backButtonStyle}>
                <View style={{ bottom: 5, padding: 5, }}>
                    <Button 
                        raised 
                        icon={{name: 'arrow-back'}} 
                        title='Indietro' 
                        onPress={() => onPress(false)}
                        backgroundColor='#053FA9'
                    />
                </View>
            </View>
            
        </View>
    )
}

const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: '#2D2C2C',

        // Shadow
        shadowColor: '#F5F5F5',
        shadowOffset: { width: 2, height: 4},
        shadowOpacity: 0.15,
        shadowRadius: 3,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    backButtonStyle: {
    },
    headerStyle: {
        color: 'white',
        fontWeight: '600',
        padding: 15,
    },
    bodyStyle: {
        marginTop: 10,
        padding: 5,
        color: 'white',
        marginLeft: 5,
        marginRight: 5,
    },
}

export { ModalContent }