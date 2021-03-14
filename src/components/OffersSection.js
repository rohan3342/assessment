import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class OffersSection extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Offers Section </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightpink'
  }
});

export default OffersSection;