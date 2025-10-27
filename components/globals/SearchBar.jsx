import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={
        styles.txtInput
      } placeholder='Search' />
      <TouchableOpacity style={{
        position: 'absolute',
        top: "40%",
        right: "10%"
      }} >

        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtInput: {
    borderRadius: 8,
    height: 55,
    width: "95%",
    marginTop: 10,
    padding: 20,
    margin: 'auto',
    backgroundColor: 'white',
  }
})