import React from 'react';

import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';

const Splash = ({}) => {
  return (
    <>
      <StatusBar
        backgroundColor={'#15579d'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          backgroundColor: '#15579d',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icons.logo}
          style={{
            width: SIZES.width * 0.4,
            height: SIZES.height * 0.3,
            alignSelf: 'center',
            marginLeft: SIZES.width * 0.08,
          }}
          resizeMode="cover"
        />
      </View>
    </>
  );
};
export default Splash;
