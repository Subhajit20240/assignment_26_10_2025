import { StyleSheet, View } from 'react-native'

const iconCard = ({ children }) => {
  return (
    <View style={styles.iconContainer}>
      {children}
    </View>
  )
}

export default iconCard

const styles = StyleSheet.create({
  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: 'white',
    margin: 8
  }
})