import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';

const Selection = ({navigation}) => {
  return (
    <>
      <View style={{}}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
          }}
          source={images.splash}>
          <View
            style={{
              width: '100%',
              height: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 30,
                color: '#000',
                fontWeight: '500',
              }}>
              Welcome To
            </Text>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 30,
                color: '#000',
                fontWeight: '500',
              }}>
              Rbekia
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '10%',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 25,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('IntroSlider');
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                  color: COLORS.first_color,
                }}>
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} onPress={() => {}}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                  color: COLORS.first_color,
                }}>
                Arabic
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
export default Selection;
