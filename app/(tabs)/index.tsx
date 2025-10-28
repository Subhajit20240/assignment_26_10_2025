import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import Card from "../../components/globals/Card";
import PageHeader from "../../components/globals/PageHeader";
import SearchBar from "../../components/globals/SearchBar";
import IconCard from "../../components/globals/iconCard";
import IconCard1 from "../../components/globals/iconCard1";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>

        <SearchBar />

        <ScrollView>

          <PageHeader heading="Phones" link="explore" />


          <View>
            <Text style={styles.subHeading}>Brands</Text>
          </View>


          <IconCard1 />


          <View>
            <Text style={styles.subHeading}>Featured Products</Text>
          </View>

  
          <FlatList
            data={[1, 2, 3, 4]} 
            numColumns={2}
            renderItem={() => <Card />}
            keyExtractor={(item, index) => `card-${index}`}
          />


          <View>
            <Text style={styles.subHeading}>Others Buy</Text>
          </View>


          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={() => <IconCard />}
            keyExtractor={(item, index) => `icon-${index}`}
            style={{ height: 95 }}
          />

          <FlatList
            data={[1, 2, 3, 4]}
            numColumns={2}
            renderItem={() => <Card />}
            keyExtractor={(item, index) => `card2-${index}`}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#0b0b0bff",
  },
  subHeading: {
    color: "white",
    fontSize: 18,
    marginLeft: 12,
    marginBottom: 8,
  },
});
