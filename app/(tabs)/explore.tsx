import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import PageHeader from '../../components/globals/PageHeader';

import Items from '../../components/explore/items';



export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
         <PageHeader heading="My cart" link="explore" />
         <Items />
         
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#0b0b0bff"
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
