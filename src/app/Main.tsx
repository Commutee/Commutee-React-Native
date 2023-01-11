import {StyleSheet, Image, TouchableOpacity, BackHandler} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Map from './map';
import Emergency from './emergency';
import Account from './profile';
import {auth} from '../firebase/Firebase';
const Tab = createBottomTabNavigator();

const Main = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
        tabBarShowLabel: false,
        headerLeft: () => (
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              marginStart: 10,
              width: 120,
              height: 20,
              resizeMode: 'contain',
            }}
          />
        ),
        tabBarActiveTintColor: '#f3622e',
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              auth()
                .signOut()
                .then(() => {
                  BackHandler.exitApp();
                })
            }>
            <Image
              source={require('../assets/images/logout.png')}
              style={{width: 25, height: 25, marginRight: 10}}
            />
          </TouchableOpacity>
        ),
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: color,
              }}
              source={require('../assets/images/home.png')}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Map"
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: color,
              }}
              source={require('../assets/images/map.png')}
            />
          ),
        }}
        component={Map}
      />
      <Tab.Screen
        name="Emergency"
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: color,
              }}
              source={require('../assets/images/call.png')}
            />
          ),
        }}
        component={Emergency}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: color,
              }}
              source={require('../assets/images/account.png')}
            />
          ),
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
