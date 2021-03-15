import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import DiagnosticCard from '../components/DiagnosticCard';

const DiagnosticCardData = [
  {
    id: 1,
    Title: 'Zoylo Young Female Health Checkup',
    TestCount: 93,
    Price: 5500,
    DiscountPrice: 2699,
    DiscountPercent: 51,
  },
  {
    id: 2,
    Title: 'Zoylo Health Checkup with Iron Studies',
    TestCount: 83,
    Price: 3250,
    DiscountPrice: 1299,
    DiscountPercent: 60,
  },
  {
    id: 3,
    Title: 'Zoylo Elderly Male Health Checkup',
    TestCount: 110,
    Price: 8500,
    DiscountPrice: 4250,
    DiscountPercent: 50,
  },
  {
    id: 4,
    Title: 'Zoylo Advance Health Checkup',
    TestCount: 84,
    Price: 3950,
    DiscountPrice: 1399,
    DiscountPercent: 70,
  },
  {
    id: 5,
    Title: 'Zoylo Young Male Health Checkup',
    TestCount: 94,
    Price: 5500,
    DiscountPrice: 3299,
    DiscountPercent: 50,
  },
  {
    id: 6,
    Title: 'Zoylo Full Body Health Checkup',
    TestCount: 81,
    Price: 3450,
    DiscountPrice: 999,
    DiscountPercent: 71,
  },
  {
    id: 7,
    Title: 'Zoylo Kids Exclusive Health Checkup',
    TestCount: 58,
    Price: 3850,
    DiscountPrice: 2499,
    DiscountPercent: 35,
  },
  {
    id: 8,
    Title: 'Zoylo Comprehensive Health Checkup',
    TestCount: 85,
    Price: 4950,
    DiscountPrice: 1799,
    DiscountPercent: 64,
  },
]

class DiagnosticScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Diagnostic Packages by Zoylo Labs</Text>
          <TouchableOpacity style={styles.ViewAllBtn}>
            <Text style={styles.ViewAllTxt}> View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {
            DiagnosticCardData.map((data) => (
              <DiagnosticCard
                key={data.id}
                id={data.id}
                Title={data.Title}
                TestCount={data.TestCount}
                Price={data.Price}
                DiscountPrice={data.DiscountPrice}
                DiscountPercent={data.DiscountPercent}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: '300',
  },
  ViewAllTxt: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '300',
  }
})

export default DiagnosticScreen;
