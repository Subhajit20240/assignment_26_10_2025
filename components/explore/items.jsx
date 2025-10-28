import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItemRow = () => {

  const name = "Wireless Headphones";
  const price = 750;
  const qty = 1;

  const imageUri1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJPCMSch2P3LrTErO_u32DSbUVg4YR8lwNg&s";


  const imageUri2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJPCMSch2P3LrTErO_u32DSbUVg4YR8lwNg&s";

  const QtyControls = (
    <View style={styles.qtyRow}>
      <View style={styles.qtyBtn}>
        <Text style={styles.qtyBtnText}>-</Text>
      </View>
      <View style={styles.qtyDisplay}>
        <Text style={styles.qtyText}>{qty}</Text>
      </View>
      <View style={styles.qtyBtn}>
        <Text style={styles.qtyBtnText}>+</Text>
      </View>
    </View>
  );

  return (
    <View>
      {/* Item 1 */}
      <View style={styles.row}>
        <Image source={{ uri: imageUri1 }} style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
          {QtyControls}
        </View>
      </View>

      {/* Item 2 */}
      <View style={styles.row}>
        <Image source={{ uri: imageUri2 }} style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
          {QtyControls}
        </View>
      </View>

      {/* Total Row */}
      <View
        style={[
          styles.row,
          { justifyContent: "space-between", backgroundColor: "#2b2f3a" },
        ]}
      >
        <Text style={{ color: "white", marginLeft: 20, fontSize: 20 }}>
          Total
        </Text>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
          ${price * qty}
        </Text>
      </View>

      {/* Pay Now Button */}
      <View style={styles.payBtn}>
        <Text style={styles.payBtnText}>Pay Now</Text>
      </View>
    </View>
  );
};

export default ItemRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 22,
    gap: 20,
    alignItems: "center",
    margin: 20,
  },
  thumb: {
    width: 200,
    height: 200,
    borderRadius: 12,
    backgroundColor: "#2b2f3a",
  },
  info: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    color: "#8e99a8",
    marginBottom: 8,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2b2f3a",
  },
  qtyBtnText: {
    color: "#c8d1dc",
    fontSize: 16,
  },
  qtyDisplay: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: "#1f2430",
  },
  qtyText: {
    color: "#fff",
    fontSize: 14,
  },
  payBtn: {
    backgroundColor: "#1680faff",
    marginTop: 80,
    borderRadius: 10,
    alignItems: "center",
    padding: 15,
  },
  payBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
