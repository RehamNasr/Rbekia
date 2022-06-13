import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {scale} from 'react-native-size-matters';

const Update = ({navigation, route}) => {
  const [data, setdata] = useState(route.params.data);
  const [index, setIndex] = useState(route.params.index);
  const [count, setCount] = useState(data.quantity * 1);
  const [arr, setarr] = useState([]);

  const plus = () => {
    setCount(count => count + 1);
    data.price = data.price_product * 1 * (count * 1 + 1);
    data.point = data.point_product * 1 * (count * 1 + 1);
  };
  const minus = () => {
    if (count > 1) {
      setCount(count => count - 1);
      data.point = data.point_product * (count - 1);
    }
    if (count == 1) {
      arr.splice(newindex, 1);
      set_update(arr);
      navigation.goBack();
    }
  };

  const Update = () => {
    let list = arr;
    let new_index = index;
    let update_data = {
      id: data.id,
      title: data.title,
      quantity: count,
      point: data.point,
      price: data.price,
      text: data.text,
      img: data.img,
      price_product: data.price_product,
      point_product: data.point_product,
    };
    list[new_index] = update_data;

    set_update(list);
    navigation.goBack();
  };

  async function frist_get() {
    let list = JSON.parse(await AsyncStorage.getItem('carts'));
    setarr(list);
  }

  async function set_update(arr) {
    await AsyncStorage.setItem('carts', JSON.stringify(arr));
  }

  useEffect(() => {
    frist_get();
    // alert(typeof data.price_product);
    return () => {
      let getDataRecycle = route.params.getDataRecycle;
      getDataRecycle();
    };
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.backgrondHome}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={{backgroundColor: COLORS.backgrondHome, flex: 1}}>
        <ScrollView>
          <View style={{paddingHorizontal: 15, marginTop: SIZES.height * 0.05}}>
            {/* start header */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.btnHeader}
                onPress={() => {
                  //  go home
                  navigation.goBack();
                }}>
                <Icon
                  name={icons.arrowLeft}
                  color={COLORS.black}
                  size={SIZES.sizeIcon}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.first_color,
                  fontSize: scale(22),
                  textAlign: 'center',
                  width: '80%',
                }}>
                Update
              </Text>
            </View>
            {/* end header */}

            {/* start middle page */}
            <View style={{marginTop: 30}}>
              <Image
                source={data.img}
                borderRadius={5}
                style={{width: '100%', height: SIZES.height * 0.25}}
                resizeMode="cover"
              />
              <Text style={styles.title}>{data.title}</Text>
              <View
                style={{
                  marginTop: SIZES.height * 0.02,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.price}> EGP {data.price * 1}</Text>
                <View style={styles.btnPlusandMinus}>
                  <TouchableOpacity
                    onPress={() => {
                      minus();
                    }}>
                    <Icon name="minus" color={COLORS.white} size={scale(15)} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: COLORS.count,
                      fontSize: scale(20),
                      // fontWeight: 'bold',
                    }}>
                    {count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      plus();
                    }}>
                    <Icon name="plus" color={COLORS.white} size={scale(15)} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* end middle page */}
          <View style={styles.backgrondText}>
            <Text style={styles.text}>{data.text}</Text>
            <Text
              style={{
                marginTop: SIZES.height * 0.01,
                textAlign: 'center',
                color: COLORS.count,
                fontSize: scale(18),
              }}>
              you have {data.point} points
            </Text>
          </View>

          {/* end page */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                // go to cart
                Update();
              }}
              style={styles.btn}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: scale(20),
                  fontWeight: 'bold',
                }}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
          {/* end page*/}
        </ScrollView>
      </View>
    </>
  );
};
export default Update;
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.07,
    backgroundColor: COLORS.first_color,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: scale(23),
    marginHorizontal: scale(12),
  },
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.black,
    fontSize: scale(SIZES.mainSize * 1.6),
    marginTop: SIZES.height * 0.03,
    fontWeight: 'bold',
  },
  btnPlusandMinus: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.25,
    height: SIZES.height * 0.05,
    backgroundColor: COLORS.first_color,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  price: {
    color: COLORS.black,
    fontSize: scale(22),
    fontWeight: 'bold',
  },
  backgrondText: {
    marginTop: SIZES.height * 0.04,
    paddingVertical: SIZES.height * 0.05,
    paddingHorizontal: 10,
    borderTopColor: COLORS.white,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 10,
    borderTopWidth: 10,
  },
  text: {
    color: COLORS.black,
    fontSize: scale(18),
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: scale(25),
  },
});
