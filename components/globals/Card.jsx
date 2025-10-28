import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Card = () => {

  const name = "Wireless Earbuds";
  const price = "$899";
  const imageUri =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJPCMSch2P3LrTErO_u32DSbUVg4YR8lwNg&s";

  return (
    <View style={styles.cardContainer}>
      <View>

        <View style={styles.imageBox}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>


        <Text style={styles.name}>{name}</Text>
      </View>


      <View style={styles.bottomRow}>
        <Text style={styles.price}>{price}</Text>
        <Feather name="heart" size={22} color="white" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    width: "45%",
    height: 220,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    backgroundColor: "#2b2f3a",
    borderRadius: 22,
  },
  imageBox: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 8,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#1e232f",
  },
  name: {
    fontSize: 18,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  price: {
    color: "#c8d1dc",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
