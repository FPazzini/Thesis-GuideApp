import React from 'react'
import {
    View,
    TouchableOpacity,
    Platform,
} from 'react-native'
import TabBarIcon from '../TabBarIcon'

const ScanButton = ({ onPress }) => {
    return (
        <View>
            <TouchableOpacity 
              onPress={onPress}
              activeOpacity={0.7}
            >
              <View style={{ width: '100%', height: '100%', padding: 10, }}>
                <TabBarIcon
                  focused={true}
                  name={
                    Platform.OS === 'ios'
                      ? 'ios-add-circle-outline'
                      : 'md-add'
                  }
                  size={100}
                />
              </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = { 

}

export { ScanButton }