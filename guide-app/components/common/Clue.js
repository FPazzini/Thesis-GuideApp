import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import { FontStyleEval } from '../FontSizeEval'

const Clue = (props) => {
    return (
        <View style={{ flex: 1 }}>
        <View style={{ flex: 1, width: '100%',}}>
          <FontStyleEval
            text={props.clueTitle}
            textType="supertitle"
            style={{ marginLeft: 5, fontWeight: '600' }}
          />
        </View>
        <View style={{ flex: 1, width: '100%', marginTop: 4 }}>
          <FontStyleEval 
            text={props.clue}
            textAlign="justify"
            textType="section"
            style={{ marginLeft: 5, marginRight: 5, lineHeight: 25 }}
          />
        </View>
      </View>
    )
}

export { Clue }