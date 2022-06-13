import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {scale} from 'react-native-size-matters';
export const COLORS = {
  darkBlue: '#22577E',
  lightBlue1: '#01579B',
  yellow: '#f7c86c',
  lightGreen: '#90bb6a',
  lightBlue2: '#19a3bf',
  purple: '#776abb',
  brown: '#b67c68',
  green: '#90bb6b',
  red: '#f00',
  count: '#e76c29',
  backgrondTap: '#f0f0f0',
  backgrondHome: '#fff',
  first_color: '#2b5095',
  black: '#000',
  white: '#FFF',
  green: '#91ba6f',
  inactive: '#8eb9d9',
  second_color: '#fb9847',
  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  mainSize: 20,
  regular: 15,

  // app dimensions
  width,
  height,
  sizeIcon: scale(20),
};

const appTheme = {COLORS, SIZES};

export default appTheme;
