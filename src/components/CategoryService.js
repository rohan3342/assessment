import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  care, consultation, medicine, microscope, packageIcon,
  stethoscope, wellness, zoy
} from '../assets/icons';

const TopCompData = [
  {
    title: 'Medicines',
    image: medicine
  },
  {
    title: 'Tests & Packages',
    image: microscope
  },
  {
    title: 'Online Consultation',
    image: consultation
  },
];

const BottomCompData = [
  {
    title: 'Doctor Appointment',
    image: stethoscope
  },
  {
    title: 'Wellness',
    image: wellness
  },
  {
    title: 'Ask Zoy',
    image: consultation
  },
  {
    title: 'Home Healthcare',
    image: care
  },
  {
    title: 'Hospital Package',
    image: packageIcon
  },
];

export default class CategoryService extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TopCompWrapper}>
          {
            TopCompData.map((data, index) => <TopComp imgTitle={data.title}
              imgSrc={data.image}
              key={index} />
            )
          }
        </View>
        <BottomComp />
      </View>
    );
  }
}

const TopComp = ({ imgSrc, imgTitle, imgKey }) => {
  return (
    <View key={imgKey} style={styles.TopCompContainer}>
      <Image source={imgSrc} style={styles.TopCompImage} />
      <Text style={styles.TopCompText} >{imgTitle}</Text>
    </View>
  )
}

const BottomComp = ({ imgSrc, imgTitle, imgKey }) => {
  return (
    <View key={imgKey} style={styles.BottomCompContainer}>
      <Image source={imgSrc} />
      <Text>{imgTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  TopCompWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TopCompContainer: {
    width: 120,
    height: 130,
    backgroundColor: 'white',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopCompImage: {
    height: 35,
    width: 35,
    marginBottom: 10,
  },
  TopCompText: {
    fontSize: 15,
    textAlign: 'center'
  },
  BottomCompContainer: {

  }
})

