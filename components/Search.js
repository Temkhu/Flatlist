import { StyleSheet, View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Search({executeSearch}) {
    const [search, setSearch] = useState('');

  return (
    <View style={styles.searchBox}>
        <TextInput
        style={styles.input_field}
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder='Search...'
        returnKeyType='search'
        onSubmitEditing={() => executeSearch(search)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBox:{
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
    },
    input_field:{
      fontSize: 16,
      height: 40,
      width: 140,
      textAlign: 'center',
      
    },
});