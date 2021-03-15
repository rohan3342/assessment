import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ayurveda, healthcare, homeopathy, surgical, } from '../assets/icons';
import MedicinesCateCard from '../components/MedicinesCateCard';

const MedicinesCateData = [
  {
    id: 1,
    title: 'Healthcare Products',
    image: healthcare
  },
  {
    id: 2,
    title: 'Ayurveda',
    image: ayurveda
  },
  {
    id: 3,
    title: 'Homeopathy',
    image: homeopathy
  },
  {
    id: 4,
    title: 'Surgical and Devices',
    image: surgical
  },
];

class MedicinesCategories extends Component {
  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal
        style={styles.container}>
        <View style={styles.MedicinesCateCardWrapper}>
          {
            MedicinesCateData.map((data, index) =>
              <MedicinesCateCard
                imgKey={index}
                imgTitle={data.title}
                imgSrc={data.image}
              />
            )
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  MedicinesCateCardWrapper: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
});

export default MedicinesCategories;