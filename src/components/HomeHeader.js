import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity>
            <Image style={styles.img} source={mapMarker} />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity>
            <View style={styles.cartContainer}>
              <View style={styles.cartCountView}>
                <Text style={styles.cartCount}>0</Text>
              </View>
              <Image style={styles.cartIcon} source={cart} />
            </View>

          </TouchableOpacity>
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
    marginVertical: 2,
    width: '100%',
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
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  }

});

export default HomeHeader;