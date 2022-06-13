import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, icons, images, SIZES} from '../constants/index';
import {Home, Notification, Offers, User, Cart} from '../screens/index';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOpacity: 0.6,
        elevation: 4,
        shadowOffset: {
          width: 10,
          height: 10,
        },
      }}
      activeColor={COLORS.darkBlue}
      inactiveColor={COLORS.inactive}
      initialRouteName="home-tap">
      <Tab.Screen
        name="home-tap"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" size={SIZES.sizeIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notification"
        component={Notification}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bell" size={SIZES.sizeIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            // <Icon name="user" size={SIZES.sizeIcon} color={color} />
            <Image
              source={images.cart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.darkBlue : COLORS.inactive,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={Offers}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="gift" size={SIZES.sizeIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={User}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user" size={SIZES.sizeIcon} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
