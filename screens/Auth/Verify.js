import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import SMSVerifyCode from 'react-native-sms-verifycode';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ' Copy the verification code in your authy\n application to verify this account recovery',
      codeArr: [5, 8, 2, 1],
      code: '',
    };
  }
  onInputCompleted = text => {
    this.setState({code: text});
  };
  checkCode = () => {
    let arr = this.state.code.split('');
    let code = this.state.codeArr;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < code.length; j++) {
        if (arr[i] == code[j]) {
          count = 0;
        } else {
          count++;
        }
      }
    }
    if (count == 0) {
      this.props.navigation.navigate('ResetPass');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          translucent={true}
        />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{marginTop: SIZES.height * 0.06}}>
            <View style={styles.container1}></View>
            <Text style={styles.text}>Authy Verification</Text>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 13,
                textAlign: 'center',

                marginTop: SIZES.height * 0.01,
              }}>
              {this.state.word}
            </Text>
            <Image
              resizeMode="center"
              source={images.verify}
              style={{
                width: SIZES.width * 0.8,
                height: SIZES.height * 0.3,
                alignSelf: 'center',
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                width: SIZES.width,
                marginTop: -SIZES.height * 0.024,
                alignSelf: 'center',
              }}>
              <SMSVerifyCode
                ref={ref => (this.verifycode = ref)}
                onInputCompleted={this.onInputCompleted}
                containerPaddingHorizontal={50}
                verifyCodeLength={4}
                containerPaddingVertical={10}
                containerBackgroundColor={COLORS.white}
                codeViewBorderColor={COLORS.first_color}
                focusedCodeViewBorderColor={COLORS.first_color}
                codeFontSize={22}
                codeColor={COLORS.second_color}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              {this.state.codeArr.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      key={index}
                      style={{
                        color: COLORS.darkgray,
                        fontSize: SIZES.regular,
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              })}
            </View>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={() => {
                this.checkCode();
              }}>
              <Text style={{color: COLORS.white, fontSize: 17}}>
                Submit Verification
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container1: {
    width: SIZES.width,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.045,
    alignItems: 'center',
  },
  textheader: {
    color: COLORS.first_color,
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  container2: {
    height: SIZES.height * 0.06,
    width: SIZES.width,
    marginTop: SIZES.height * 0.1,
  },
  text: {
    marginTop: SIZES.height * 0.02,
    fontSize: 30,
    color: COLORS.black,
    alignSelf: 'center',
  },
  button: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.62,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.05,
    borderRadius: SIZES.height * 0.02,
    alignSelf: 'center',
  },
});
