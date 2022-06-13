import React from 'react';
import HomeStack from '../navigation/HomeStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../screens/Component/CustomDrawer';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {images, COLORS, SIZES, icons} from '../constants/index';

import {
  Help,
  Competition,
  Contact,
  ShareCode,
  TimeTable,
} from '../screens/index';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -10,
          fontSize: 14,
        },
      }}
      initialRouteName="Homepage">
      <Drawer.Screen
        name="Homepage"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="offers"
        component={Offers}
        options={{
          drawerLabel: 'Offers',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.offer}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.white : null,
              }}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="share"
        component={ShareCode}
        options={{
          drawerLabel: 'Share and Win',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.share}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="competition"
        component={Competition}
        options={{
          drawerLabel: 'Competition',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.cup}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="timeTable"
        component={TimeTable}
        options={{
          drawerLabel: 'Time Table',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.calender}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="contact"
        component={Contact}
        options={{
          drawerLabel: 'Contact',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.contact}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        component={Help}
        options={{
          drawerLabel: 'Help',
          drawerIcon: ({focused}) => (
            <Image
              source={icons.help}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: focused ? COLORS.white : COLORS.mainBlue,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default HomeDrawer;
