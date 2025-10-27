import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
const Card = ({children, name, price}) => {
  return (
    <View style={styles.cardContainer}>
      <View>

        <View style={{
            paddingBottom:10,
            paddingTop:10,
            marginBottom:8
        }}>
            {children}
        </View>
        <Text style={{fontSize:18,fontWeight:900}}>{name}</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width: '100%'}}>
        <Text>{price}</Text>
        <Feather name="heart" size={24} color="black" />
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer:{
    padding:16,
    width:"45%",
    height:200,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    margin:8,
    backgroundColor:"red",
    borderRadius:22
  }
})