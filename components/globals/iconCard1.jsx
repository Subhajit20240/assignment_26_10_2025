import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const IconCard1 = ({ icon, name }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {icon}
      </View>
      <Text style={styles.label} numberOfLines={1}>{name}</Text>
    </View>
  );
};

export default IconCard1;

const styles = StyleSheet.create({
  wrapper: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  container: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#f4f1f1ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  label: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 6,
  },
});
