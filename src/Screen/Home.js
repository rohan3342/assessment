import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import OffersSection from '../components/OffersSection';
import HomeHeader from '../components/HomeHeader';

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <HomeHeader />
        <OffersSection />
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
