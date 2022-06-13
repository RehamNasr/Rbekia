import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      show2: true,
      word: 'Enter your new password below and\n check the hint while setting it.',
      password: '',
      confirmPassword: '',
      password_error: 'no',
      confirmPassword_error: 'no',
      true_password: '',
    };
  }

  async updatePassword() {
    await AsyncStorage.setItem('password', this.state.password);
  }
  checkPassword(password) {
    if (password.length < 7) {
      return false;
    }
    return true;
  }
  checkConfirmPassword(password, confirmPassword) {
    if (password != confirmPassword) {
      return false;
    }
    return true;
  }
  submit() {
    let user_password = this.state.password;
    let user_confirmPass = this.state.confirmPassword;
    let count_error = 0;

    if (this.checkPassword(user_password) == false) {
      count_error++;
      this.setState({password_error: 'yes'});
    } else {
      this.setState({password_error: 'no'});
    }
    if (this.checkConfirmPassword(user_password, user_confirmPass) == false) {
      count_error++;
      this.setState({confirmPassword_error: 'yes'});
    } else {
      this.setState({confirmPassword_error: 'no'});
    }

    if (count_error == 0) {
      SheetManager.show('helloworld_sheet');
      this.updatePassword();
    }
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLORS.white}
            barStyle={'dark-content'}
            translucent={true}
          />

          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={{marginTop: SIZES.height * 0.08}}>
              <Text style={styles.text}>Set new password</Text>
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
                source={images.reset}
                style={{
                  width: SIZES.width * 0.8,
                  height: SIZES.height * 0.3,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
              <TextInput
                style={styles.textinput}
                label="password"
                mode="outlined"
                placeholder="Input password here"
                placeholderTextColor={'#aaa'}
                activeOutlineColor={COLORS.second_color}
                secureTextEntry={this.state.show}
                outlineColor={
                  this.state.password_error == 'no'
                    ? COLORS.first_color
                    : COLORS.red
                }
                value={this.state.password}
                onChangeText={value => {
                  this.setState({password: value});
                }}
              />
              <TouchableOpacity
                style={styles.iconeye}
                onPress={() => {
                  this.setState({show: !this.state.show});
                }}>
                <Icon
                  name={this.state.show ? 'eye-slash' : 'eye'}
                  size={18}
                  style={{color: COLORS.first_color}}
                />
              </TouchableOpacity>

              <TextInput
                style={styles.textinput}
                label="Confirm Password"
                mode="outlined"
                placeholder="Comfirm password"
                placeholderTextColor={'#aaa'}
                activeOutlineColor={COLORS.second_color}
                secureTextEntry={this.state.show2}
                outlineColor={
                  this.state.confirmPassword_error == 'no'
                    ? COLORS.first_color
                    : COLORS.red
                }
                value={this.state.confirmPassword}
                onChangeText={value => {
                  this.setState({confirmPassword: value});
                }}
              />
              <TouchableOpacity
                style={styles.iconeye}
                onPress={() => {
                  this.setState({show2: !this.state.show2});
                }}>
                <Icon
                  name={this.state.show2 ? 'eye-slash' : 'eye'}
                  size={18}
                  style={{color: COLORS.first_color}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.stylebutton}
                onPress={() => {
                  this.submit();
                }}>
                <Text style={{color: COLORS.white, fontSize: 17}}>
                  Submit password
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <ActionSheet id="helloworld_sheet">
            <View style={{height: SIZES.height * 0.5, width: SIZES.width}}>
              <View
                style={{
                  height: SIZES.height * 0.2,
                  width: SIZES.width,
                  marginTop: SIZES.height * 0.02,
                }}>
                <Image
                  source={images.pass}
                  style={{height: SIZES.height * 0.2, width: SIZES.width}}
                  resizeMode="center"
                />
              </View>
              <View
                style={{
                  height: SIZES.height * 0.07,
                  width: SIZES.width * 0.5,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: COLORS.black,
                  }}>
                  password Recovery Successful
                </Text>
              </View>
              <View
                style={{
                  height: SIZES.height * 0.05,
                  width: SIZES.width * 0.5,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                // style={styles.texts}
                >
                  Return to the login screen to enter the application
                </Text>
              </View>
              <View
                style={{
                  height: SIZES.height * 0.12,
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.stylebutton}
                  onPress={() => {
                    this.props.navigation.navigate('Login');
                  }}>
                  <Text style={{color: COLORS.white, fontSize: 17}}>
                    Submit password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    //marginHorizontal: width * 0.14,
  },

  container2: {
    // height: height * 0.06,
    width: SIZES.width,
    marginTop: SIZES.height * 0.8,
  },
  textpass: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
    marginLeft: SIZES.width * 0.07,
    marginTop: -SIZES.height * 0.05,
  },
  iconeye: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.width * 0.7,
    marginTop: -SIZES.height * 0.085,
    height: SIZES.height * 0.1,
  },
  textinput: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.85,
    backgroundColor: COLORS.white,
    borderColor: COLORS.first_color,
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.03,
  },
  viewhint: {
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.75,
    flexDirection: 'row',
  },
  stylebutton: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.47,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: COLORS.borderr,
    marginTop: SIZES.height * 0.03,
    //marginLeft: width * 0.07,
    borderRadius: SIZES.height * 0.02,
    alignSelf: 'center',
  },
  stylebutton2: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.47,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.width * 0.02,
  },
  text: {
    marginTop: SIZES.height * 0.02,
    fontSize: 30,
    color: COLORS.black,
    alignSelf: 'center',
  },
});
