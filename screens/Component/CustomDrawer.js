import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
const CustomDrawer = props => {
  const {signOut} = useContext(AuthContext);
  const [photo_uri, setPhoto_Uri] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');

  const getPhoto = async () => {
    let photo = await AsyncStorage.getItem('photo');

    if (photo) {
      setPhoto_Uri(photo);
    } else {
      setPhoto_Uri('');
    }
  };
  const getDate = async () => {
    let month = await AsyncStorage.getItem('dateMonth');
    let year = await AsyncStorage.getItem('dateYear');
    let day = await AsyncStorage.getItem('dateDay');
    if (year) {
      setMonth(month);
      setYear(year);
      setDay(day);
    }
  };
  useEffect(() => {
    getDate();
  }, [month, year, day]);

  useEffect(() => {
    getPhoto();
  });

  useFocusEffect(
    React.useCallback(() => {
      getPhoto();
      return () => {};
    }, []),
  );

  const getDataName = async () => {
    let name = await AsyncStorage.getItem('name');
    setName(name);
  };
  useEffect(() => {
    getDataName();
  });
  const removeDataUser = async () => {
    await AsyncStorage.setItem('carts', '');
    await AsyncStorage.setItem('photo', '');
    await AsyncStorage.setItem('points', '');
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgrondHome}}>
      <View
        style={{
          height: SIZES.height * 0.26,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.darkBlue,
          borderBottomLeftRadius: scale(30),
          borderBottomRightRadius: scale(30),
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.white,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: photo_uri}}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
            borderRadius={50}
          />
        </View>
        <View style={{marginLeft: 15, width: '100%'}}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: scale(13),
              color: COLORS.white,
              lineHeight: 30,
              maxWidth: '100%',
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: scale(10),
              color: COLORS.white,
            }}>
            Last login {day}th in {month} {year}
          </Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          marginTop: SIZES.height * 0.03,
        }}>
        <View
          style={{
            flex: 1,
            marginTop: -40,
          }}>
          <DrawerItemList {...props} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: SIZES.height * 0.015,
            }}
            onPress={() => {
              removeDataUser();
              signOut();
            }}>
            <Image
              source={icons.logout}
              style={{width: 28, height: 28}}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: 14,
                color: COLORS.black,
                marginLeft: 15,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
