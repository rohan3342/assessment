import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screen/Home';
import {
  bellActive, bellInActive,
  call,
  homeActive, homeInActive,
  personActive, personInActive,
  searchActive, searchInActive,
} from '../assets/icons';

const Tabs = createBottomTabNavigator();

function Search() {
  Alert.alert('Search Screen!');
  return <SafeAreaView><Text> Search Screen </Text></SafeAreaView>;
}

function Call() {
  Alert.alert('Call Screen!');
  return <SafeAreaView><Text> Call Screen </Text></SafeAreaView>;
}

function Notification() {
  Alert.alert('Notification Screen!');
  return <SafeAreaView><Text> Notification Screen </Text></SafeAreaView>;
}

function Account() {
  Alert.alert('Account Screen!');
  return <SafeAreaView><Text> Account Screen </Text></SafeAreaView>;
}

const Routes = ({ }) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: { height: 110 },
          labelStyle: { fontSize: 14 },
          tabStyle: { marginBottom: 10 },
          activeTintColor: '#30198C',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={Home}>

        <Tabs.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              focused ?
                <Image style={styles.icon} source={homeActive} />
                :
                <Image style={styles.icon} source={homeInActive} />
            )
          }}
        />

        <Tabs.Screen name="Search" component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              focused ?
                <Image style={styles.icon} source={searchActive} />
                :
                <Image style={styles.icon} source={searchInActive} />
            )
          }} />

        <Tabs.Screen name="Call" component={Call}
          options={{
            tabBarIcon: () => (<Image style={styles.callIcon} source={call} />)
          }} />
        <Tabs.Screen name="Notification" component={Notification}
          options={{
            tabBarIcon: ({ focused }) => (
              focused ?
                <Image style={styles.icon} source={bellActive} />
                :
                <Image style={styles.icon} source={bellInActive} />
            )
          }} />
        <Tabs.Screen name="Account" component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              focused ?
                <Image style={styles.icon} source={personActive} />
                :
                <Image style={styles.icon} source={personInActive} />
            )
          }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  callIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: -15,
  },
})

export default Routes;