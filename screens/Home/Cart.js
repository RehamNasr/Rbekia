import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {scale} from 'react-native-size-matters';
const Cart = ({navigation}) => {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [isrefersh, setisrefersh] = useState(false);

  async function getDataRecycle() {
    let list = JSON.parse(await AsyncStorage.getItem('carts'));
    // alert(JSON.stringify(list));
    if (Array.isArray(list) && list.length > 0) {
      setData(list);
    } else {
      setData([]);
    }
  }

  // const clearDataRecycle = async () => {
  //   let data = JSON.parse(await AsyncStorage.getItem('carts'));
  //   data = null;
  //   await AsyncStorage.setItem('carts', JSON.stringify(data));

  //   // await AsyncStorage.setItem('carts', '');
  // };
  async function clearDataRecycle() {
    try {
      await AsyncStorage.removeItem('carts');
      return true;
    } catch (error) {
      return false;
    }
  }
  useEffect(() => {
    getDataRecycle();
  }, []);

  const totalPoint = async () => {
    try {
      let arr = JSON.parse(await AsyncStorage.getItem('points'));
      let x = sum;
      for (let i = 0; i < data.length; i++) {
        x += data[i].point;
      }
      setSum(sum => x);

      await AsyncStorage.setItem('points', JSON.stringify(x));
    } catch (error) {
      alert(error);
    }
  };

  const remove = async index => {
    data.splice(index, 1);
    await AsyncStorage.setItem('carts', JSON.stringify(data));
    setisrefersh(true);
    setTimeout(() => {
      setisrefersh(false);
    }, 1000);
  };

  useFocusEffect(
    React.useCallback(() => {
      getDataRecycle();
      return () => {
        getDataRecycle();
      };
    }, []),
  );

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={{backgroundColor: COLORS.backgrondHome, flex: 1}}>
        {/* start header */}
        <View
          style={{
            paddingHorizontal: 15,
            flex: 1,
            marginTop: SIZES.height * 0.05,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: SIZES.height * 0.03,
            }}>
            <TouchableOpacity
              style={styles.btnHeader}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name={icons.arrowLeft}
                color={COLORS.first_color}
                size={SIZES.sizeIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.first_color,
                fontSize: scale(20),
                width: '80%',
                textAlign: 'center',
              }}>
              Cart
            </Text>
          </View>

          {/* end header */}
          {/* start show data */}

          <View
            style={{
              marginBottom: SIZES.height * 0.02,
              height: SIZES.height * 0.65,
            }}>
            {data.length > 0 ? (
              <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                refreshing={isrefersh}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Update', {
                        data: item,
                        index: index,
                        getDataRecycle: getDataRecycle,
                      });
                    }}
                    style={styles.viewItem}>
                    <View
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row-reverse',
                        paddingHorizontal: 15,
                      }}>
                      <Image
                        source={item.img}
                        style={{width: 80, height: 80}}
                        resizeMode="cover"
                      />
                      <View
                        style={{
                          justifyContent: 'space-around',
                          height: '100%',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.text}>Name :</Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: COLORS.lightBlue1,
                                marginLeft: 10,
                              },
                            ]}>
                            {item.title}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.text}>Numb :</Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: COLORS.lightBlue1,
                                marginLeft: 10,
                              },
                            ]}>
                            {item.quantity}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.text}>Point :</Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: COLORS.lightBlue1,
                                marginLeft: 10,
                              },
                            ]}>
                            {item.point}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.text}>Price:</Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: COLORS.lightBlue1,
                                marginLeft: 10,
                              },
                            ]}>
                            {item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.black,
                        borderRadius: 20,
                        marginLeft: -SIZES.width * 0.07,
                      }}
                      onPress={() => {
                        remove(index);
                      }}>
                      <Icon
                        name={icons.times}
                        color={COLORS.white}
                        size={SIZES.sizeIcon * 0.7}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '15%',
                }}>
                <LottieView
                  autoPlay={true}
                  loop={true}
                  source={images.cartJson}
                  style={{width: SIZES.width * 0.5, height: SIZES.height * 0.5}}
                />
              </View>
            )}
          </View>
          {/* end show data */}
          {data.length > 0 ? (
            <TouchableOpacity
              style={styles.stylebutton}
              onPress={() => {
                totalPoint();
                clearDataRecycle();
                SheetManager.show('helloworld_sheet');
              }}>
              <Text style={{color: COLORS.white, fontSize: scale(17)}}>
                Done
              </Text>
            </TouchableOpacity>
          ) : null}

          <ActionSheet
            containerStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
            closeOnTouchBackdrop={false}
            id="helloworld_sheet">
            <View
              style={{
                height: SIZES.height * 0.5,
                width: SIZES.width,
              }}>
              <View
                style={{
                  height: SIZES.height * 0.2,
                  width: SIZES.width,
                  marginTop: SIZES.height * 0.02,
                }}>
                <Image
                  source={images.done}
                  style={{height: SIZES.height * 0.2, width: SIZES.width}}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  // height: SIZES.height * 0.07,
                  width: SIZES.width * 0.5,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: scale(12),
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: COLORS.black,
                    lineHeight: 30,
                  }}>
                  Thank you for using RBekia app
                </Text>
              </View>
              <View
                style={{
                  height: SIZES.height * 0.05,
                  width: SIZES.width * 0.5,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.texts}>We will Contact with you soon</Text>
              </View>
              <View
                style={{
                  height: SIZES.height * 0.12,
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.stylebutton2}
                  onPress={() => {
                    // totalPoint();
                    // clearDataRecycle();
                    SheetManager.hideAll();
                    navigation.navigate('home-tap');
                    // navigation.goBack();
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: scale(17),
                      fontWeight: '500',
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
        </View>
      </View>
    </>
  );
};

export default Cart;
const styles = StyleSheet.create({
  viewItem: {
    width: '100%',
    height: SIZES.height * 0.19,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    borderColor: COLORS.black,
    shadowOpacity: COLORS.black,
    elevation: 5,
    backgroundColor: COLORS.backgrondTap,
    marginBottom: SIZES.height * 0.03,
  },
  btn: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.07,
    backgroundColor: COLORS.lightBlue2,
    alignSelf: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: scale(SIZES.regular * 1.1),
    fontWeight: '500',
    color: COLORS.black,
  },
  btnPlusandMinus: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.26,
    height: SIZES.height * 0.04,
    backgroundColor: COLORS.first_color,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
    marginLeft: -3,
  },
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.backgrondTap,
  },
  stylebutton: {
    width: '50%',
    height: SIZES.height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.first_color,
    alignSelf: 'center',
  },
  stylebutton2: {
    height: SIZES.height * 0.06,
    width: '50%',
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.02,
  },
  texts: {
    fontSize: scale(SIZES.regular * 0.8),
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.black,
  },
});
