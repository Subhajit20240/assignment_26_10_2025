import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ItemRow = ({ name = "Item name", price = 750, qty = 1 }) => {
  const QtyControls = (
    <View style={styles.qtyRow}>
      <View style={styles.qtyBtn}><Text style={styles.qtyBtnText}>-</Text></View>
      <View style={styles.qtyDisplay}><Text style={styles.qtyText}>{qty}</Text></View>
      <View style={styles.qtyBtn}><Text style={styles.qtyBtnText}>+</Text></View>
    </View>
  );

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
          {QtyControls}
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.thumb} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
          {QtyControls}
        </View>
      </View>
      
      <View style={[styles.row, {justifyContent: "space-between"}, {backgroundColor:"#2b2f3a"}]}> 
        <View>
            <Text style={{color:"white", marginLeft:20, fontSize:20}}>Total</Text>
        </View>
        <View>
            <Text style={{color:"white", fontSize:18, fontWeight:"700"}}>${price * qty}</Text>
        </View>
      </View>
      {/* pay now button */}
        <View style={{backgroundColor:"#1680faff",
        marginTop:80, 
             borderRadius:10, alignItems:"center", padding:15}}>
            <Text style={{color:"white", fontSize:18, fontWeight:"700"}}>Pay Now</Text>
        </View>
    </View>
    
  );
};

export default ItemRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: "auto",
    paddingVertical: 22,
    gap: 20,
    alignItems: "center",
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
});
