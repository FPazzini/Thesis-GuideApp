import React from 'react'
import {
    View,
} from 'react-native'
import { MonoText } from './StyledText'
import GLOBALS from '../constants/GlobalVars'
import TEXT_CLASSES from '../constants/TextClasses'

export const FontStyleEval = ({ style, textAlign, text, textType }) => {

    const {
        DEVICE_HEIGHT,
    } = GLOBALS

    function chooseTextType () {
        let size = 12
        switch (textType) {
            case TEXT_CLASSES.TITLE:
                size = evaluateSize(25)
                break;
            case TEXT_CLASSES.SUBTITLE:
                size = evaluateSize(20)
                break
            case TEXT_CLASSES.SECTION:
                console.log('section')
                size = evaluateSize(18)
                break
            default:
                break;
        }
        return size
    }

    function evaluateSize (defaultSize) {
        if (DEVICE_HEIGHT > 400) {
            console.log('> 400')
            return defaultSize
        } else if (DEVICE_HEIGHT > 250) {
            console.log('> 250')
            return defaultSize - 4
        } else {
            console.log('else')
            return defaultSize - 6
        }
    }

    function fontSizeEvaluation () {
        let size = chooseTextType()
        return (
            <MonoText style={[style, { fontSize: size, textAlign: textAlign }]}>
                {text}
            </MonoText>
        )
    }

    return (
        <View>
            {fontSizeEvaluation()}
        </View>
    )
}