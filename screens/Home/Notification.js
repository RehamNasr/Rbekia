import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Notification = ({navigation}) => {
  const [items, setItems] = useState([
    {
      icon_name: icons.info,
      color: '#29b6f6',
      text1: 'Did you know ?',
      text2: 'here is something that you might like to know',
    },
    {
      icon_name: icons.info,
      color: '#fbc02d',
      text1: 'Uh oh, something went wrong',
      text2: 'Sorry! There was a problem',
    },
    {
      icon_name: icons.check,
      color: '#1967d2',
      text1: 'Yay! Everything Worked !',
      text2: 'Congratulation',
    },
  ]);

  // const setData = async () => {
  //   await AsyncStorage.setItem('items', JSON.stringify(items));
  // };
  // const getData = async () => {
  //   let data = JSON.parse(await AsyncStorage.getItem('item'));
  //   if (data) {
  //     setItems(data);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, [items]);

  const [isrefersh, setisrefersh] = useState(false);

  const removeItems = index => {
    items.splice(index, 1);
    setisrefersh(true);
    setTimeout(() => {
      setisrefersh(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.container1}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnHeader}>
          <Icon
            name={icons.arrowLeft}
            size={20}
            color={COLORS.first_color}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.textheader}>Notification</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        refreshing={isrefersh}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              width: SIZES.width * 0.9,
              height: SIZES.height * 0.11,
              padding: SIZES.width * 0.02,
              marginTop: SIZES.height * 0.03,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: COLORS.backgrondTap,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: SIZES.width * 0.008,
                height: SIZES.height * 0.08,
                borderRadius: SIZES.width * 0.01,
                backgroundColor: item.color,
                alignItems: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
              }}></View>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 12.5,
                marginHorizontal: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: item.color,
              }}>
              <Icon name={item.icon_name} size={15} color="#FFF" />
            </View>
            <View style={{width: '83%', paddingHorizontal: 7}}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '700',
                  color: COLORS.black,
                }}>
                {item.text1}
              </Text>
              <Text style={{fontSize: 13, color: '#757575'}}>{item.text2}</Text>
            </View>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: COLORS.black,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: -SIZES.width * 0.02,
                marginTop: -SIZES.width * 0.17,
              }}
              onPress={() => {
                removeItems(index);
                // setisrefersh(true);
                // console.log(isrefersh);
              }}>
              <Icon name={icons.times} size={15} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgrondHome,
  },
  container1: {
    marginTop: SIZES.height * 0.05,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textheader: {
    color: COLORS.first_color,
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.backgrondTap,
  },
});
