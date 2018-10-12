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

const ModalContent = ({ onPress }) => {

    const {
        viewStyle,
        backButtonStyle,
        headerStyle,
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
            
            <View style={{ backgroundColor: 'orange'}}>
                
            </View>
            <View style={{flex: 1,}}>
            <Text style={{padding: 5}}>
                Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao 
                Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao 
                Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao Ciao ciao ciao 
            </Text>
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
}

export { ModalContent }