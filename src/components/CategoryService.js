import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
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
    image: zoy
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
        <View style={styles.BottomCompWrapper}>
          {
            BottomCompData.map((data, index) => <BottomComp imgTitle={data.title}
              imgSrc={data.image}
              key={index} />
            )
          }
        </View>
      </View>
    );
  }
}

const TopComp = ({ imgSrc, imgTitle, imgKey }) => {
  return (
    <TouchableOpacity key={imgKey} style={styles.TopCompContainer}>
      <Image source={imgSrc} style={styles.TopCompImage} />
      <Text style={styles.TopCompText} >{imgTitle}</Text>
    </TouchableOpacity>
  )
}

const BottomComp = ({ imgSrc, imgTitle, imgKey }) => {
  return (
    <TouchableOpacity key={imgKey} style={styles.BottomCompContainer}>
      <View style={styles.BottomCompImageWrapper}>
        <Image source={imgSrc} style={styles.BottomCompImage} />
      </View>
      <View style={styles.BottomCompTextWrapper}>
        <Text style={styles.BottomCompText} >{imgTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TopCompWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '2%',
    marginVertical: '3%',
  },
  TopCompContainer: {
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
  TopCompImage: {
    height: 35,
    width: 35,
    marginBottom: 10,
  },
  TopCompText: {
    fontSize: 15,
    textAlign: 'center'
  },
  BottomCompWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  BottomCompContainer: {
    width: 100,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomCompImageWrapper: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ddd',
    padding: 8,
    position: 'absolute',
    top: 20,
  },
  BottomCompImage: {
    width: 30,
    height: 30,
  },
  BottomCompTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  BottomCompText: {
    width: 80,
    fontSize: 12,
    textAlign: 'center',
    color: 'grey'
  }
})

