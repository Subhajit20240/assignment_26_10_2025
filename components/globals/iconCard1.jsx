import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";

const IconCard1 = () => {
  // 🧩 Hardcoded brand data
  const brands = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJPCMSch2P3LrTErO_u32DSbUVg4YR8lwNg&s",
    },
    {
      id: 2,
      name: "Samsung",
      image:
        "https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/250607926202408060926.jpg",
    },
    {
      id: 3,
      name: "OnePlus",
      image:
        "https://sonovision.in/wp-content/uploads/2024/03/ONEPLUSNORDCE3.jpg",
    },
    {
      id: 4,
      name: "Vivo",
      image:
        "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Vivo-y29-5g-titanium-gold-128gb-8gb-ram-Front-Back-View.png",
    },
    {
      id: 5,
      name: "Oppo",
      image:
        "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-5g-oversea/listpage/Phone-list-product-list-Aurora-427-x-600.png",
    },
    {
      id: 6,
      name: "Xiaomi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWcXXWsl4dsG-qC6d4m_hxRl7eRXDrvibkQ&s",
    },
    {
      id: 7,
      name: "Huawei",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7m6SkmBVv6et4AKEPROUH8m9xwLkSM_MIQ&s",
    },
    {
      id: 8,
      name: "Realme",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2UgHX1LAoUHTQQWdpDumE9MNtpWzfHb7wg&s",
    },
  ];

  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={brands}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <Text style={styles.label} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default IconCard1;

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical: 10,
    marginLeft: 8,
  },
  wrapper: {
    width: 70,
    alignItems: "center",
    marginHorizontal: 8,
    marginLeft: 8,
  },
  container: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "#f4f1f1ff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  label: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 6,
  },
});
