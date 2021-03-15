import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { mobile } from '../assets/icons';

const DiagnosticCard =
  ({ id, Title, TestCount, Price, DiscountPrice, DiscountPercent }) => {

    function checkKeyValue(value) {
      return value % 2 == 0 ? '#EAE0EF' : '#D3D4E4'
    }

    return (
      <TouchableOpacity key={id} style={styles.container}>
        <View style={[styles.TopView, { backgroundColor: checkKeyValue(id) }]}>
          <View style={styles.AdvancedTxtWrapper}>
            <Text style={styles.AdvancedTxt}>ADVANCED</Text>
          </View>
          <Text style={styles.TitleTxt}>{Title}</Text>
          <Text style={styles.TestCountTxt}>{TestCount} tests included</Text>
        </View>
        <View style={styles.BottomView}>
          <Text style={styles.PriceTxt}>₹{Price}</Text>
          <View style={styles.DiscountWrapper}>
            <Text style={styles.DisPriceTxt}>₹{DiscountPrice}</Text>
            <View style={styles.DisPerTxtWrapper}>
              <Text style={styles.DisPerTxt}>{DiscountPercent}% off</Text>
            </View>
          </View>
          <View style={styles.ZoyloLabsTxtWrapper} >
            <Text style={styles.ZoyloTxt}>ZOYLO</Text>
            <Text style={styles.LabsTxt}>LABS</Text>
          </View>
          <Text style={styles.BookNowTxt}>BOOK NOW</Text>
          <Image source={mobile} style={styles.BottomViewBGImg} />
        </View>
      </TouchableOpacity>
    );

  }
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
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
  TopView: {
    width: 160,
    height: 140,
    paddingLeft: 10,
    paddingRight: 5,
    justifyContent: 'space-around',
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,

  },
  AdvancedTxtWrapper: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 80,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AdvancedTxt: {
    fontSize: 10,
    fontWeight: '500'
  },
  TitleTxt: {
    fontSize: 16,
  },
  TestCountTxt: {
    fontSize: 12,
    color: '#505050'
  },
  BottomView: {
    width: 160,
    height: 140,
    paddingLeft: 10,
    paddingRight: 5,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  PriceTxt: {
    fontWeight: '300',
    textDecorationLine: 'line-through',
    textDecorationColor: '#505050'

  },
  DiscountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  DisPriceTxt: {
    color: 'green',
    fontSize: 18,
  },
  DisPerTxtWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderColor: 'green',
    borderStyle: 'dashed',
    borderRadius: 5,
    borderWidth: 1,
  },
  DisPerTxt: {
    color: 'green',
    fontSize: 12,
  },
  ZoyloLabsTxtWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'center',
  },
  ZoyloTxt: {
    fontSize: 18,
    color: 'rgba(142, 92, 166, 0.2)',
  },
  LabsTxt: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: '300',
    color: 'rgba(142, 92, 166, 0.1)',
  },
  BookNowTxt: {
    fontSize: 18,
    fontWeight: '500',
    color: 'orange'
  },
  BottomViewBGImg: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    opacity: 0.1,
  }
})

export default DiagnosticCard;
