import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ForgetPass extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      email_error: 'no',
    };
  }

  check_sign = () => {
    if (this.isValidEmail(this.state.email)) {
      this.setState({
        email_error: 'no',
      });
      this.props.navigation.navigate('Verify');
    } else {
      this.setState({
        email_error: 'yes',
      });
    }
  };

  isValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.container1}></View>
              <Text style={styles.text}>Forget password</Text>
              <Image
                resizeMode="center"
                source={images.forget}
                style={{
                  width: SIZES.width * 0.8,
                  height: SIZES.height * 0.3,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <TextInput
              style={styles.textinput}
              label="Email"
              mode="outlined"
              placeholder="enter your email"
              placeholderTextColor={'#aaa'}
              outlineColor={COLORS.first_color}
              activeOutlineColor={COLORS.second_color}
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={value => {
                this.setState({email: value});
              }}
            />
            {this.state.email_error == 'yes' ? (
              <Text
                style={{
                  marginTop: 5,
                  color: COLORS.red,
                  marginLeft: SIZES.width * 0.07,
                  fontSize: 13,
                }}>
                Please enter valid Email
              </Text>
            ) : null}
            <TouchableOpacity
              activeOpacity={0.05}
              onPress={() => {
                this.check_sign();
              }}
              style={styles.button}>
              <Text style={{color: COLORS.white, fontSize: 18}}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: COLORS.backgrondHome,
    alignItems: 'center',
    marginTop: SIZES.height * -0.01,
  },
  container1: {
    width: SIZES.width,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.07,
    alignItems: 'center',
  },
  textheader: {
    color: COLORS.first_color,
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  button: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.52,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.09,
    borderRadius: SIZES.height * 0.02,
    alignSelf: 'center',
  },
  text: {
    marginTop: SIZES.height * 0.1,
    fontSize: 25,
    //fontWeight: 'bold',
    color: COLORS.black,

    textAlign: 'center',
  },
});
