import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, COLORS, SIZES, icons} from '../../constants/index';
const slides = [
  {
    key: 1,
    text: 'We have to get rid of Ruppecia\nin order to preserve\n our environment',
    image: images.group1,
    margimage: 10,
    margetext: 20,
    height: SIZES.height,
    width: SIZES.width,
  },
  {
    key: 2,
    image: images.group2,
    text: 'You should take advanture of what is\nnot important so\n Follow us',
    margimage: 10,
    margetext: 20,
    height: '100%',
    width: '100%',
  },
  {
    key: 3,
    image: images.group3,
    text: 'Save more, Earn more Get your gift\nwith Rbekia',
    margimage: 0,
    margetext: 30,
    height: '102%',
    width: '100%',
  },
];
const IntroSlider = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);
  _renderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.backgrondHome,
          }}>
          <View
            style={{
              width: SIZES.width,
              height: SIZES.height * 0.5,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: SIZES.height * 0.4,
                width: SIZES.width * 0.8,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: '#fff',
                marginLeft: SIZES.width * 0.1,
                marginTop: SIZES.height * 0.05,
              }}
              source={item.image}></Image>
          </View>

          <View
            style={{
              width: SIZES.width,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 35,
            }}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: COLORS.black,
                fontWeight: 'bold',
              }}>
              {item.text}
            </Text>
          </View>
        </View>
      </>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.button}>
        <Icon
          name={icons.arrowRight}
          color={COLORS.white}
          size={SIZES.sizeIcon}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          // Login();
          navigation.navigate('Login');
        }}
        style={styles.button}>
        <Icon name="check" color={COLORS.white} size={SIZES.sizeIcon} />
      </TouchableOpacity>
    );
  };
  _onDone = () => {
    setShowRealApp(true);
  };
  return (
    <>
      {showRealApp ? (
        this.props.navigation.navigate('loginOrSignup')
      ) : (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          contentContainerStyle={{
            justifyContent: 'center',
          }}
          dotStyle={{
            backgroundColor: '#eef1f6',
            height: 8,
            width: SIZES.width * 0.02,
          }}
          activeDotStyle={{
            backgroundColor: COLORS.first_color,
            height: 8,
            width: SIZES.width * 0.06,
          }}
        />
      )}
    </>
  );
};
export default IntroSlider;
const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.first_color,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
