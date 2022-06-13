import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';

const Contact = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgrondHome,
      }}>
      <LottieView
        autoPlay={true}
        loop={true}
        source={images.soon}
        style={{width: SIZES.width * 0.5, height: SIZES.height * 0.5}}
      />
    </View>
  );
};

export default Contact;
