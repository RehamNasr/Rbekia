import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';

import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Hideo} from 'react-native-textinput-effects';
import Dialog from 'react-native-dialog';
import LottieView from 'lottie-react-native';
import {scale} from 'react-native-size-matters';
const ShareCode = ({navigation}) => {
  const message = 'Your code is 4768';
  const options = {
    message,
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState('');
  const [colortext, setColortext] = useState('#fff');
  const handleCancel = () => {
    setVisible(false);
  };
  const check = code => {
    if (code == '4768') {
      setVisible(true);
      setColortext(COLORS.white);
    } else {
      setColortext(COLORS.red);
      setVisible(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.backgrondHome}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
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
              textAlign: 'center',
              width: '80%',
            }}>
            Share
          </Text>
        </View>
        <View style={styles.viewimage}>
          <LottieView
            autoPlay={true}
            loop={true}
            source={images.promocode}
            style={{width: SIZES.width * 0.35, height: SIZES.height * 0.35}}
          />
        </View>
        <View style={{flex: 1, marginTop: scale(15)}}>
          <View style={styles.viewtextinput}>
            <Hideo
              iconClass={Icon}
              iconName={'share-alt'}
              iconSize={20}
              iconColor={COLORS.first_color}
              style={styles.styletextinpt}
              // this is used as backgroundColor of icon container view.
              iconBackgroundColor={'#f0f0f0'}
              inputStyle={{
                width: 150,
                height: 40,
                backgroundColor: COLORS.backgrondTap,
              }}
              onChangeText={value => {
                setCode(value);
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              padding: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.stylebuttonenter}
              onPress={() => {
                check(code);
              }}>
              <Dialog.Container
                visible={visible}
                contentStyle={styles.styledialogcon}>
                <Dialog.Title>
                  <View style={styles.viewdialog1}>
                    <Text
                      style={{
                        color: COLORS.first_color,
                        fontSize: scale(18),
                        alignSelf: 'center',
                      }}>
                      Congratulation!
                    </Text>
                  </View>
                </Dialog.Title>
                <Dialog.Description>
                  <View style={styles.viewdialog2}>
                    <Image
                      source={images.pass}
                      style={styles.styleimage}
                      resizeMode="contain"
                    />
                  </View>
                </Dialog.Description>
                <Dialog.Description>
                  <View style={styles.viewdialog3}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: COLORS.first_color,
                        fontSize: scale(14),
                      }}>
                      You have 15% discount
                    </Text>
                  </View>
                </Dialog.Description>
                <View style={styles.viewdialog4}>
                  <Dialog.Button
                    label="OK"
                    onPress={handleCancel}
                    style={styles.styledialogbutton}
                  />
                </View>
              </Dialog.Container>
              <Text style={{color: COLORS.white}}>Enter code</Text>
            </TouchableOpacity>
            <View
              style={{
                height: SIZES.height * 0.06,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: SIZES.height * 0.01,
              }}>
              <Text style={{color: COLORS.black, fontSize: scale(15)}}>
                Your code is
                <Text style={{fontWeight: 'bold', color: COLORS.first_color}}>
                  4768
                </Text>
              </Text>
              <Text style={{color: colortext, marginTop: scale(7)}}>
                this code not correct
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.04,
          }}>
          <TouchableOpacity style={styles.stylebuttonshare}>
            <Text
              style={{color: COLORS.white, fontSize: scale(15)}}
              onPress={async () => {
                await share();
              }}>
              Share Your Code
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: SIZES.height * 0.06,
              width: SIZES.width * 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: SIZES.height * 0.01,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'gray',
                fontSize: scale(14),
              }}>
              To get a 15% discount share your code with 4 of your family and
              friends
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShareCode;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.backgrondHome,
  },
  viewimage: {
    height: SIZES.height * 0.38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  styleimage: {
    height: 250,
    width: 200,
    marginLeft: 30,
  },
  viewentercodetext: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.height * 0.02,
  },
  viewtextinput: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.backgrondTap,
    width: '70%',
    marginLeft: 15,
  },
  styletextinpt: {
    width: SIZES.width * 0.85,
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.backgrondTap,
  },
  stylebuttonenter: {
    flex: 1,
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.5,
    backgroundColor: COLORS.first_color,
    marginLeft: SIZES.width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: scale(20),
  },
  styledialogcon: {
    backgroundColor: COLORS.backgrondTap,
    height: SIZES.height * 0.53,
    borderRadius: 40,
    paddingLeft: 27,
  },
  viewdialog1: {
    height: SIZES.height * 0.03,
    width: SIZES.width * 0.73,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewdialog2: {
    height: SIZES.height * 0.25,
    width: SIZES.width * 0.5,
  },
  viewdialog3: {
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewdialog4: {
    height: SIZES.height * 0.05,
    width: SIZES.width * 0.79,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledialogbutton: {
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.51,
    backgroundColor: COLORS.first_color,
    fontSize: 17,
    color: '#fff',
    borderRadius: 15,
    paddingBottom: SIZES.height * 0.025,
  },
  stylebuttonshare: {
    flex: 1,
    height: SIZES.height * 0.06,
    width: '50%',
    backgroundColor: COLORS.first_color,
    marginLeft: SIZES.width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  styleiconrow: {
    height: SIZES.height * 0.04,
    width: SIZES.width * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    shadowColor: '#black',
    shadowOpacity: 0.9,
    elevation: 6,
    shadowRadius: 5,
    shadowOffset: {width: 56, height: 13},
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
