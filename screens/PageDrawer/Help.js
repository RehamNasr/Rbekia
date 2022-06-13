import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Help = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View>
        <View
          style={{
            backgroundColor: COLORS.backgrondHome,
            paddingHorizontal: 15,
            height: '100%',
          }}>
          <ScrollView>
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
                  fontSize: 20,
                  textAlign: 'center',
                  width: '83%',
                }}>
                Help
              </Text>
            </View>
            <View
              style={{
                width: '95%',
                height: SIZES.height * 0.55,
                alignSelf: 'center',
                borderRadius: 15,
                marginTop: SIZES.height * 0.05,
                backgroundColor: COLORS.backgrondTap,
                elevation: 3,
                shadowColor: '#000',
                shadowOpacity: 1,
              }}>
              <TextInput
                style={{
                  color: '#000',
                  padding: 20,
                  lineHeight: 25,
                  fontSize: 15,
                }}
                multiline={true}
                placeholder="Write a Complaints"
                placeholderTextColor="gray"
                value={text}
                onChangeText={value => {
                  setText(value);
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                height: '10%',
                marginTop: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setText('');
                  navigation.goBack();
                }}
                style={{
                  width: SIZES.width * 0.4,
                  height: SIZES.height * 0.07,
                  backgroundColor: COLORS.first_color,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: SIZES.height * 0.02,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 17,
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default Help;
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
