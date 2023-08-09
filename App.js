import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import MenuItems from './components/MenuItems'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default function App() {

  // const renderItem = ({item}) => <Item name={item.name} />

  return (
    <View style={styles.container}>
      <Header></Header>
      {/* <FlatList style={{background: 'black',}} data={menuData} renderItem={renderItem} /> */}
      <Text style={{color: 'blue', fontSize: 20, flex: 0.7,}}>Hello World!</Text>
      <MenuItems />
      <StatusBar style="auto" />
    </View>
  );
}