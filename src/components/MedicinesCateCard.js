import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MedicinesCateCard = ({ imgKey, imgTitle, imgSrc }) => {
  return (
    <TouchableOpacity key={imgKey} style={styles.imgContainer}>
      <Image source={imgSrc} style={styles.Img} />
      <Text style={styles.TopCompText} >{imgTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    margin: 5,
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  Img: {
    height: 35,
    width: 35,
    marginBottom: 10,
  },
  TopCompText: {
    fontSize: 15,
    textAlign: 'center'
  },
})

export default MedicinesCateCard;
