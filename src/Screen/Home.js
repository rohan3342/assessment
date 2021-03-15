import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import OffersSection from '../components/OffersSection';
import HomeHeader from '../components/HomeHeader';
import CategoryService from '../components/CategoryService';
class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <HomeHeader />
        <OffersSection />
        <CategoryService />
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
