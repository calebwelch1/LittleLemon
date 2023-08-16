import * as React from 'react';
import { View, StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  });

export default function Header() {
    return (
      <View style={styles.container}>
        <Header>MainPage</Header>
      </View>
    )
}