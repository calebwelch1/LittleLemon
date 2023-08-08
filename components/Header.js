import * as React from 'react';
import { View, Text } from 'react-native'

export default function Header() {
    return (
        <View style={{flex: 0.2, justifyContent: 'flex-start', padding: 0, backgroundColor: 'yellow', width: '100%',}}>
        <Text>Header Baby!</Text>
        </View>
    )
}