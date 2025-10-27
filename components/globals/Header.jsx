import { StyleSheet, Text, View, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

// The code is mostly correct, but there are two typos in the <Image> component props:
// 1. "contentFit" is not a valid prop for the standard React Native Image component. 
//    It is used in 'expo-image', not 'react-native'.
// 2. "transiton" is a typo and not a valid prop. If you meant "transition", it's also not a valid prop for 'react-native' Image.

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="menu" size={24} color="black" />
      <View>
        <Image
          style={styles.imageSt}
          source={{
            uri: "https://tse1.mm.bing.net/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
          }}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80
  },
  imageSt: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'red'
  }
})