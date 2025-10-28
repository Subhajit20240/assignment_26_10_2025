import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

const IconCard = () => {
  const images = [
    'https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/250607926202408060926.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJPCMSch2P3LrTErO_u32DSbUVg4YR8lwNg&s',
    'https://sonovision.in/wp-content/uploads/2024/03/ONEPLUSNORDCE3.jpg',
    'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Vivo-y29-5g-titanium-gold-128gb-8gb-ram-Front-Back-View.png',
    'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6-5g-oversea/listpage/Phone-list-product-list-Aurora-427-x-600.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWcXXWsl4dsG-qC6d4m_hxRl7eRXDrvibkQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7m6SkmBVv6et4AKEPROUH8m9xwLkSM_MIQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2UgHX1LAoUHTQQWdpDumE9MNtpWzfHb7wg&s',
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {images.map((uri, index) => (
        <View key={index} style={styles.iconContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

export default IconCard;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 8,
  },
  iconContainer: {
    width: 75,
    height: 75,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 8,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
