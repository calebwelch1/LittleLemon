// import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import {
  // KeyboardAvoidingView,
  StyleSheet,
  // Text,
  // TextInput,
  View,
  // Pressable,
  // ScrollView
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
// import Main from './components/Main';
// import MenuItems from './components/MenuItems'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

// const appNotes = () => {
//   return (
//     <KeyboardAvoidingView>
//     <View style={styles.container}>
//       <Header></Header>
//       {/* <FlatList style={{background: 'black',}} data={menuData} renderItem={renderItem} /> */}
//       <Pressable onPressin={()=>console.log('pressed')}>
//         <Text>Clickme!</Text>
//       </Pressable>
//       <Text style={{color: 'blue', fontSize: 20, flex: 0.7,}}>Hello World!</Text>
//       <TextInput
//       value={firstName}
//       onChangeText={onChangeFirstName}
//       style={{width: '200px', backgroundColor: 'red', height: '20px', }}
//       />
//       <ScrollView keyboardDismissMode="on-drag"></ScrollView>
//       <MenuItems />
//       <StatusBar style="auto" />
//       {/* how you render conditional in react native what u want true && (<Component />) */}
//       {/* {showMenu && (
//         <SectionList
//           keyExtractor={(item, index) => item + index}
//           sections={menuItemsToDisplay}
//           renderItem={renderItem}
//           renderSectionHeader={renderSectionHeader}
//           ListFooterComponent={Footer}
//           ItemSeparatorComponent={Separator}></SectionList>
//       )} */}
//       {/* <Image
//       resizeMode="contain"
//       style={width: 100px, height: 100px}
//       source={require('../img/imagepath.png')} */}
//     </View>
//     </KeyboardAvoidingView>
//   )
// }

export default function App() {
  // const [firstName, onChangeFirstName] = React.useState('');

  // const renderItem = ({item}) => <Item name={item.name} />

  return (
    // <NavigationContainer>
    //   <Welcome />
    // </NavigationContainer>
    // <Header />
    <View style={styles.container}>
    <Header>MainPage</Header>
    </View>
  );
}