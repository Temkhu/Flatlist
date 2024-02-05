import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Rows from './components/Rows';
import Constants from 'expo-constants';
import Search from './components/Search';
import { useState, useEffect } from 'react';

export default function App() {

const [items, setItems] = useState([]);

useEffect(() => {
  setItems(DATA)
}, [])

  const renderItem = ({ item }) => (
    <Text key={item.id}>{item.lastname}</Text>
  );

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems(searchArray)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Rows person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
  },
});
