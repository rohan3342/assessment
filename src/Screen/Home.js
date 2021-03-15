import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import OffersSection from '../components/OffersSection';
import HomeHeader from '../components/HomeHeader';
import CategoryService from '../components/CategoryService';
import DiagnosticScreen from './DiagnosticScreen';
class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <HomeHeader />
          <OffersSection />
          <CategoryService />
          <DiagnosticScreen />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
