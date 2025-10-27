import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { useFonts } from "expo-font";

import { ScrollView } from "react-native";
import { courseData } from "../../assets/dataset/coureseData";
import { iconData } from '../../assets/dataset/iconDataset';
import Card from "../../components/globals/Card";
import Header from '../../components/globals/Header';
import PageHeader from '../../components/globals/PageHeader';
import SearchBar from '../../components/globals/SearchBar';
import IconCard from '../../components/globals/iconCard';
import IconCard1 from '../../components/globals/iconCard1';
export default function HomeScreen() {
  return (
    <SafeAreaView style={indexStyles.mainContainer}>
      <View style={{ flex: 1 }}>
        {/* <Header /> */}
        <SearchBar />
        <ScrollView >
          


          <PageHeader heading="Phones" link="explore" />
          <View><Text 
          style={{color: "white",
          fontSize: 18,
          marginLeft: 12,
          marginBottom: 8
          }} 
          >Brands</Text></View>

          <FlatList
            data={iconData.slice(0, iconData.length)}
            showsHorizontalScrollIndicator={false}
            style={{ height: 120 }}
            horizontal
            renderItem={({ item, index }) => {
              const dummyNames = ['Apple', 'Huawei', 'Samsung', 'Nokia', 'Dell', 'HP', 'Sony', 'LG', 'Lenovo', 'Xiaomi', 'Oppo', 'Vivo', 'OnePlus', 'Asus', 'Motorola'];
              const label = dummyNames[index % dummyNames.length];
              return (
                <IconCard1 icon={item.icon} name={label} />
              )
            }}
            keyExtractor={(_, index) => `others-${index}`}
          />
          

          {/* <PageHeader heading="Trending Courses" link="explore" /> */}
          <FlatList
            data={courseData.slice(0,4)}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Card name={item.courseName} price={item.Price}>
                  {item.icon}
                </Card>
              )
            }}
          />

          <View><Text 
          style={{color: "white",
          fontSize: 18,
          marginLeft: 12,
          marginBottom: 8
          }} 
          >Others buy</Text></View>
          {/* add sqare brackets data in flatlist which scroll right */}
          <FlatList
            data={iconData}
            showsHorizontalScrollIndicator={false}
            style={{ height: 95 }}
            horizontal
            renderItem={({ item, index }) => {
              return (
                <IconCard >
                  {item.icon}
                </IconCard>
              )
            }}

          />


          <FlatList
            data={courseData.slice(0,4)}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Card name={item.courseName} price={item.Price}>
                  {item.icon}
                </Card>
              )
            }}
          />
          

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const indexStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#0b0b0bff"
  },
  headingText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    width: 200,
    height: 100,

    margin: "auto",
    backgroundColor: "#0553",
  },
});