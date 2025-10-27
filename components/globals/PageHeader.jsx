import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';

const PageHeader = ({ heading, link }) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 12,
      backgroundColor: "black",
      height: 80
    }} >
      <Text style={{
        color: "white",
        fontSize: 12
      }}>
        <AntDesign name="arrow-left" size={24} color="white" />
      </Text>
      <Text style={{
        fontSize: 18,
        fontWeight: "600",
        color: "white"
      }}>
        {heading ? heading : "Heading here"}
      </Text>
      
      <Text style={{
        color: "black",
        fontSize: 12
      }}>
        hi
      </Text>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({})