import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {scale, ScaledSheet} from 'react-native-size-matters';

const Home = ({navigation}) => {
  const [dataRecycle, setDataRecycle] = useState([
    {
      id: 2,
      title: 'Oils',
      img: images.oil,
      color: COLORS.yellow,
      details: {
        id: 2,
        title: 'Oil',
        text: 'Recycle more than a kilo of used oils and earn points to get your gift',
        img: images.oilbottle,
        price: 15,
        quantity: 1,
        point: 15,
        price_product: 15,
        point_product: 15,
      },
    },
    {
      id: 5,
      title: 'Papers',
      img: images.recylepaper,
      color: '#c4c4c4',
      details: {
        id: 5,
        title: 'Papers',
        text: 'Recycle more than a kilo of used papers and earn points to get your gift',
        img: images.papers,
        price: 3.5,
        quantity: 1,
        point: 5,
        price_product: 3.5,
        point_product: 5,
      },
    },
    {
      id: 1,
      title: 'Bottles',
      img: images.bottles,
      color: '#b67c68',
      details: {
        id: 1,
        title: 'Bottles',
        text: 'Recycle more than a kilo of used bottles and earn points to get your gift',
        img: images.maskgroup,
        price: 5,
        quantity: 1,
        point: 10,
        price_product: 5,
        point_product: 10,
      },
    },
    {
      id: 3,
      title: 'Car Tweaks',
      img: images.tire,
      color: '#34c8ba',
      details: {
        id: 3,
        title: 'Tires',
        text: 'Recycle more than a kilo of used tires and earn points to get your gift',

        img: images.car,
        price: 50,
        quantity: 1,
        point: 10,
        price_product: 50,
        point_product: 10,
      },
    },
    {
      id: 4,
      title: 'Woods',
      img: images.wood,
      color: '#8b8c8e',
      details: {
        id: 4,
        title: 'Woods',
        text: 'Recycle more than a kilo of used woods and earn points to get your gift',
        img: images.rectangle2,
        price: 20,
        quantity: 1,
        point: 10,
        price_product: 20,
        point_product: 10,
      },
    },
  ]);

  const [dataReward, setDataReward] = useState([
    {
      id: 1,
      title: 'Restaurant',
      img: images.restaurant,
      color: COLORS.darkBlue,
      nav: 'Restaurant',
    },
    {
      id: 1,
      title: 'Trips',
      img: images.plane,
      color: '#34c8b2',
      nav: 'Trip',
    },
  ]);
  const [myPoint, setMyPoint] = useState('0');
  const [loading, setLoading] = useState(true);

  async function getMyPoint() {
    let data = await AsyncStorage.getItem('points');
    // alert(JSON.stringify(data));
    if (data) {
      setMyPoint(data);
    } else {
      setMyPoint('0');
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      getMyPoint();

      return () => {
        getMyPoint();
      };
    }, []),
  );
  useEffect(() => {
    getMyPoint();
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          translucent={true}
        />
        {/* start header */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: SIZES.height * 0.4,
              }}>
              <ActivityIndicator
                size="large"
                color={COLORS.first_color}
                animating={true}
              />
            </View>
          ) : (
            <>
              <ImageBackground
                source={images.backgrondHome}
                style={styles.backgrond}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.openDrawer();
                    }}>
                    <Image
                      source={icons.burger}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.darkBlue,
                      }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    flex: 1,
                  }}>
                  <View>
                    <Text style={styles.secondryTextHeader}>You have</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.mainTextHeader}>
                        {myPoint} Points
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              {/* end header */}
              {/* start middle page */}
              <View
                style={{
                  backgroundColor: COLORS.backgrondHome,
                  flex: 1,
                  marginTop: -SIZES.height * 0.04,
                  borderTopRightRadius: 40,
                  borderTopLeftRadius: 40,
                  marginBottom: SIZES.height * 0.02,
                }}>
                <View
                  style={{
                    paddingHorizontal: 15,
                    marginTop: SIZES.height * 0.04,
                  }}>
                  <Text style={styles.titleItem}>Start Recycling</Text>
                  <FlatList
                    data={dataRecycle}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('detailRecyle', {
                                data: item.details,
                              });
                            }}
                            style={[
                              styles.viewItem,
                              {
                                backgroundColor: item.color,
                              },
                            ]}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text
                                style={[
                                  styles.textItem,
                                  {
                                    fontSize: item.id == 3 ? scale(12) : null,
                                  },
                                ]}>
                                {item.title}
                              </Text>
                              {index > 1 ? (
                                <Image
                                  source={icons.New}
                                  resizeMode="contain"
                                  style={{
                                    width: 40,
                                    height: 40,
                                  }}
                                />
                              ) : null}
                            </View>

                            <Image source={item.img} style={styles.imageItem} />
                          </TouchableOpacity>
                        </>
                      );
                    }}
                  />
                </View>

                {/* end middle page */}
                {/*  end  page */}
                <View
                  style={{
                    paddingHorizontal: 15,
                    marginTop: SIZES.height * 0.02,
                  }}>
                  <Text style={styles.titleItem}>Rewards</Text>
                  <FlatList
                    data={dataReward}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      return (
                        <>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate(item.nav);
                            }}
                            style={[
                              styles.viewItem,
                              {
                                backgroundColor: item.color,
                                width: SIZES.width * 0.6,
                                height: SIZES.height * 0.16,
                              },
                            ]}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={styles.textItem}>{item.title}</Text>
                              {/* {index > 0 ? ( */}
                              <Image
                                source={icons.New}
                                resizeMode="contain"
                                style={{
                                  width: 50,
                                  height: 50,
                                }}
                              />
                              {/* ) : null} */}
                            </View>
                            <Image
                              source={item.img}
                              resizeMode="contain"
                              style={[
                                styles.imageItem,
                                {
                                  width: '60%',
                                  height: '60%',
                                  marginTop: -SIZES.height * 0.01,
                                },
                              ]}
                            />
                          </TouchableOpacity>
                        </>
                      );
                    }}
                  />
                </View>
              </View>

              {/* end page */}
            </>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainTextHeader: {
    color: COLORS.white,
    fontSize: SIZES.mainSize,
    marginRight: 10,
    fontWeight: '500',
  },
  secondryTextHeader: {
    fontSize: SIZES.regular,
    marginBottom: 5,
    color: COLORS.white,
  },
  backgrond: {
    height: SIZES.height * 0.45,
    backgroundColor: COLORS.mainBlue,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: SIZES.height * 0.07,
    paddingHorizontal: 15,
    opacity: 0.8,
  },
  titleItem: {
    fontSize: SIZES.mainSize * 1.2,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  viewItem: {
    width: SIZES.width * 0.35,
    height: SIZES.height * 0.2,
    marginRight: 20,
    marginTop: SIZES.height * 0.02,
    borderRadius: 20,
    paddingLeft: scale(20),
  },
  textItem: {
    color: COLORS.white,
    fontSize: scale(15),
    fontWeight: '500',
    maxWidth: '90%',
    paddingTop: 10,
  },
  imageItem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.03,
    opacity: 0.7,
  },
});

// صورة وعربي وصفحة كود
// category
