import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Logo } from '../assets/images';
import { mapMarker, cart } from '../assets/icons';
class HomeHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.LogoImgView}>
          <Image source={Logo} style={styles.LogoImg} />
        </View>
        <View style={styles.rightSide}>
          <Image style={styles.img} source={mapMarker} />
          <View style={styles.line} />
          <View style={styles.cartContainer}>
            <View style={styles.cartCountView}>
              <Text style={styles.cartCount}>0</Text>
            </View>
            <Image style={styles.cartIcon} source={cart} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%',
    marginVertical: '1%',
    width: '100%',
    backgroundColor: 'white',
    shadowColor: "#aaa",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  LogoImgView: {
    marginLeft: 5,
  },
  LogoImg: {},
  rightSide: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 25,
    width: 25,
  },
  cartContainer: {
    flexDirection: 'row',
  },
  cartIcon: {
    height: 25,
    width: 25,
  },
  cartCount: {
    fontSize: 12,
  },
  line: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginHorizontal: 10,
    height: 15,
  },
  cartCountView: {
    width: 15,
    height: 15,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: 'white',
    top: 3,
    right: -4,
    shadowColor: "#aaa",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }

});

export default HomeHeader;