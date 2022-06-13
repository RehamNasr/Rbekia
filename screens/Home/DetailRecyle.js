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
const DetailRecyle = ({navigation, route}) => {
  const [data, setdata] = useState(route.params.data);

  const [count, setCount] = useState(data.quantity);

  const plus = () => {
    setCount(count => count + 1);
  };
  const minus = () => {
    if (count > 1) {
      setCount(count => count - 1);
    }
  };

  // const setDataRecycle = async () => {
  //   try {
  //     let arr = JSON.parse(await AsyncStorage.getItem('carts'));
  //     let list = data;
  //     arr.push(data);
  //     await AsyncStorage.setItem('carts', JSON.stringify(arr));
  //     list.quantity = 1;
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  useEffect(() => {
    all_data();
  }, []);

  async function all_data() {
    let pp = await AsyncStorage.getItem('carts');
  }

  async function setDataRecycle() {
    let list = await AsyncStorage.getItem('carts');
    list = JSON.parse(list);
    let arr_obj = [];

    if (list == null) {
      let opj = {
        id: data.id,
        title: data.title,
        quantity: count,
        point: data.point * count,
        price: data.price * count,
        text: data.text,
        img: data.img,
        price_product: data.price_product * 1,
        point_product: data.point_product * 1,
      };
      arr_obj.push(opj);
      await AsyncStorage.setItem('carts', JSON.stringify(arr_obj));
    } else {
      let obj = list;
      let opj = {
        id: data.id,
        title: data.title,
        quantity: count,
        point: data.point * count,
        price: data.price * count,
        text: data.text,
        img: data.img,
        price_product: data.price_product * 1,
        point_product: data.point_product * 1,
      };
      obj.push(opj);
      await AsyncStorage.setItem('carts', JSON.stringify(obj));
      navigation.navigate('cart');
    }
  }
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
                  fontSize: scale(23),
                  textAlign: 'center',
                  width: '80%',
                }}>
                category
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
                <Text style={styles.price}>EGP {data.price * count}</Text>
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
                fontSize: scale(15),
                fontWeight: '500',
              }}>
              you have {data.point * count} points
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
                setDataRecycle();
              }}
              style={styles.btn}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: scale(20),
                  fontWeight: 'bold',
                }}>
                Recycle
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default DetailRecyle;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(SIZES.width * 0.5),
    height: scale(SIZES.height * 0.061),
    backgroundColor: COLORS.first_color,
    alignSelf: 'center',
    borderRadius: scale(10),
    marginVertical: scale(25),
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
    fontSize: scale(SIZES.mainSize * 1.4),
    marginTop: SIZES.height * 0.03,
    fontWeight: 'bold',
    paddingHorizontal: scale(5),
  },
  btnPlusandMinus: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(SIZES.width * 0.25),
    height: scale(SIZES.height * 0.05),
    backgroundColor: COLORS.first_color,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  price: {
    color: COLORS.black,
    fontSize: scale(24),
    fontWeight: '500',
  },
  backgrondText: {
    marginTop: SIZES.height * 0.04,
    paddingVertical: scale(25),
    paddingHorizontal: scale(10),
    borderTopColor: COLORS.white,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 10,
    borderTopWidth: 10,
  },
  text: {
    color: COLORS.black,
    fontSize: scale(17),
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: scale(24),
  },
});
