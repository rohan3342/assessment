import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform } from 'react-native';

class LongCard extends Component {
  render() {
    return (
      <View style={styles.mainWrapper}>
        <View style={styles.CardCantainer}>
          <View style={styles.LeftSide}>
            <Text style={styles.MainTxt}>Order Medicine using prescription</Text>
            <Text style={styles.Txt}>& Get Medicines Delivered at Home</Text>
          </View>
          <View style={styles.RightSide}>
            <TouchableOpacity style={styles.uploadBtn}>
              <Text style={styles.uploadBtnTxt}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardCantainer}>
          <View style={styles.LeftSide}>
            <Text style={styles.MainTxt}>Online Doctor Consultation</Text>
            <Text style={styles.Txt}>Consult with the top medical practitioners in your
            city. Recover from the comfort of your home.
            </Text>
          </View>
          <View style={styles.RightSide}>
            <TouchableOpacity style={styles.consultBtn}>
              <Text style={styles.consultBtnTxt}>Consult Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardCantainer}>
          <View style={styles.LeftSide}>
            <Text style={styles.MainTxt}>Take Free</Text>
            <Text style={styles.SubMainTxt}>Online Health Assessment</Text>
            <Text style={styles.Txt}>Know Your Health Status now!</Text>
          </View>
          <View style={styles.RightSide}>
            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startBtnTxt}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CardFour}>
          <Text style={styles.MainTxt}>Corporate health plans</Text>
          <Text style={styles.MainTxt}>Just for your workplace</Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>Login To Your Corporate Account To Avail Multiple Benefits</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.CardCantainer}>
          <Text style={styles.CardFiveMainTxt}>Blogs</Text>
          <Text style={styles.CardFiveTxt}>"A good laugh and a long sleep are the best cures in the doctor's book</Text>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainWrapper: {
    marginVertical: 5,
  },
  CardCantainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginVertical: 10,
    marginHorizontal: 10,
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
  LeftSide: {

  },
  MainTxt: {
    fontSize: 18,
    maxWidth: 240,
    color: '#0f0f0f',
    letterSpacing: 1.1,
  },
  SubMainTxt: {
    fontSize: 16,
  },
  Txt: {
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
    marginBottom: 20,
  },
  RightSide: {

  },
  uploadBtn: {
    width: 140,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  uploadBtnTxt: {
    textTransform: 'uppercase',
    color: 'orange',
    fontSize: 13,
    fontWeight: '500',
  },
  consultBtn: {
    width: 140,
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
  },
  consultBtnTxt: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  startBtn: {
    width: 140,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  startBtnTxt: {
    textTransform: 'uppercase',
    color: 'orange',
    fontSize: 13,
    fontWeight: '500',
  },
  CardFour: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginVertical: 10,
    marginHorizontal: 10,
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
  loginBtnTxt: {
    marginTop: 20,
    fontSize: 12,
    color: 'orange',
  },
  CardFiveMainTxt: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 16,
  },
  CardFiveTxt: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 13,
    color: 'grey',
  }
});

export default LongCard;
