import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Offers = ({navigation}) => {
  const [point, setPoint] = useState(0);
  const [offer, setOffer] = useState([
    {image: images.offer1, pointItem: 0, totalPoint: 500},
    {image: images.offer2, pointItem: 0, totalPoint: 200},
    {image: images.offer3, pointItem: 0, totalPoint: 700},
    {image: images.offer4, pointItem: 0, totalPoint: 950},
    {image: images.offer5, pointItem: 0, totalPoint: 500},
    {image: images.offer6, pointItem: 0, totalPoint: 200},
    {image: images.offer7, pointItem: 0, totalPoint: 700},
    {image: images.offer8, pointItem: 0, totalPoint: 950},
    {image: images.offer9, pointItem: 0, totalPoint: 950},
    {image: images.offer8, pointItem: 0, totalPoint: 950},
  ]);

  // useEffect(() => {
  //   getMyPoint();
  // }, [myPoint]);
  return (
    <View style={{backgroundColor: COLORS.backgrondHome, flex: 1}}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={true}
      />
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
              fontSize: 20,
              textAlign: 'center',
              width: '80%',
            }}>
            Offers
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              width: '95%',
              height: SIZES.height * 0.24,
              backgroundColor: COLORS.backgrondTap,
              alignSelf: 'center',
              borderRadius: 20,
              marginTop: SIZES.height * 0.02,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.first_color,
                    fontSize: 18,
                    marginTop: SIZES.height * 0.0,
                  }}>
                  Special Discount
                </Text>
                <Text
                  style={{
                    color: COLORS.first_color,
                    fontSize: 18,
                    alignSelf: 'flex-end',
                  }}>
                  Up to
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 50,
                  }}>
                  50%
                </Text>
                <TouchableOpacity
                  style={{
                    width: '80%',
                    height: '25%',
                    borderRadius: 10,
                    backgroundColor: COLORS.first_color,
                    justifyContent: 'center',
                    marginTop: SIZES.width * 0.03,
                  }}
                  activeOpacity={0.5}>
                  <Text
                    style={{
                      color: COLORS.white,
                      alignSelf: 'center',
                      fontSize: 17,
                    }}>
                    Get now
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginLeft: SIZES.width * 0.08,
                  marginTop: SIZES.height * 0.01,
                }}>
                <Image
                  source={images.girl}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.3,
                    height: '60%',
                  }}
                  borderRadius={20}
                />
                <Text
                  style={{
                    color: COLORS.first_color,
                    fontSize: 20,
                    textAlign: 'center',
                    marginTop: SIZES.height * 0.01,
                  }}>
                  {point}/1000
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginBottom: SIZES.height * 0.04,
              marginTop: SIZES.height * 0.01,
            }}>
            {offer.map((data, index) => (
              // <TouchableOpacity
              //   activeOpacity={0.5}
              //   style={{
              //     flexDirection: 'row',
              //     width: '47%',
              //     height: SIZES.height * 0.15,
              //     backgroundColor: COLORS.white,
              //     marginBottom: 20,
              //     flexWrap: 'wrap',
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     borderRadius: 10,
              //   }}>
              //   <Image
              //     source={data.image}
              //     style={{width: '100%', height: 75, borderRadius: 10}}
              //     resizeMode="contain"
              //   />
              //   <View style={{flexDirection: 'row'}}>
              //     <Text
              //       style={{
              //         fontSize: 18,
              //         marginTop: 5,
              //         color: COLORS.first_color,
              //       }}>
              //       Points
              //     </Text>
              //     <Text
              //       style={{
              //         fontSize: 18,
              //         marginTop: 5,
              //         color: COLORS.first_color,
              //         marginLeft: 7,
              //       }}>
              //       {data.pointItem}/{data.totalPoint}
              //     </Text>
              //   </View>
              // </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  flexDirection: 'row',
                  width: '47%',
                  height: 110,
                  backgroundColor: COLORS.first_color,
                  marginTop: 10,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginBottom: SIZES.height * 0.01,
                }}>
                <Image
                  source={data.image}
                  style={{width: '100%', height: 75, borderRadius: 10}}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, marginTop: 5, color: '#fff'}}>
                    Points
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      marginTop: 5,
                      color: '#fff',
                      marginLeft: 7,
                    }}>
                    {data.pointItem}/{data.totalPoint}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.backgrondTap,
  },
});
