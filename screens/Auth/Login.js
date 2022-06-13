import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Component/Context';
import {scale} from 'react-native-size-matters';

const LogIn = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [errorPass, setErrorPass] = useState('#fff');
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [true_email, setTrueEmail] = useState(true);
  const [true_pass, setTruePass] = useState(true);

  const setDate = async () => {
    let month = new Date().toLocaleDateString('en-us', {month: 'long'});
    let year = new Date().getFullYear();
    let day = new Date().getDate();
    await AsyncStorage.setItem('dateMonth', JSON.stringify(month));
    await AsyncStorage.setItem('dateYear', JSON.stringify(year));
    await AsyncStorage.setItem('dateDay', JSON.stringify(day));
  };

  const check_sign = () => {
    if (isValidEmail(email)) {
      if (isValidpassword(password)) {
        setDate();
        signIn();
      } else {
        setErrorPass('#f00');
        setTruePass(false);
      }
    } else {
      setTrueEmail(false);
    }
  };

  const isValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidpassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          translucent={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container1}></View>

          <Text style={styles.text}>Welcome Back!</Text>

          <Image
            resizeMode="center"
            source={images.Singin}
            style={{
              width: SIZES.width * 0.8,
              height: SIZES.height * 0.3,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />

          <View>
            <TextInput
              style={styles.textinput}
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              placeholder="enter your email"
              placeholderTextColor={'#aaa'}
              outlineColor={COLORS.darkBlue}
              activeOutlineColor={COLORS.second_color}
              value={email}
              onChangeText={value => {
                setEmail(value);
              }}
            />
          </View>

          <TextInput
            style={styles.textinput}
            label="password"
            mode="outlined"
            placeholder="Input password here"
            placeholderTextColor={'#aaa'}
            outlineColor={COLORS.darkBlue}
            activeOutlineColor={COLORS.second_color}
            secureTextEntry={show}
            value={password}
            onChangeText={value => {
              setPassword(value);
              setTruePass(true);
            }}
          />
          <TouchableOpacity
            style={styles.iconeye}
            onPress={() => {
              setShow(!show);
            }}>
            <Icon
              name={show ? 'eye-slash' : 'eye'}
              size={18}
              style={{color: COLORS.first_color}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              alignItems: 'center',
            }}>
            {/* {true_email == false ? ( */}
            <Text
              style={{
                color:
                  true_email == false || true_pass == false
                    ? COLORS.red
                    : COLORS.white,
                fontSize: scale(10),
              }}>
              Please enter valid email and password
            </Text>
            {/* ) : null} */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate('ForgetPass');
              }}>
              <Text
                style={{
                  color: '#757575',
                }}>
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.05}
            onPress={() => {
              check_sign();
            }}>
            <Text style={{color: COLORS.white, fontSize: 18}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.05}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{marginTop: SIZES.height * 0.015}}>
            <Text style={{textAlign: 'center', color: COLORS.first_color}}>
              Don't have an account?
              <Text style={{color: '#757575'}}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};
export default LogIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  container2: {
    // height:Sizes.height * 0.06,
    width: SIZES.width,
    marginTop: SIZES.height * 0.06,
    marginLeft: -SIZES.width * 0.05,
  },
  text: {
    marginTop: SIZES.height * 0.02,
    fontSize: 25,
    color: COLORS.black,
    alignSelf: 'center',
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
  iconeye: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.width * 0.7,
    marginTop: -SIZES.height * 0.085,
    height: SIZES.height * 0.1,
  },
  button: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.62,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 20,
    marginTop: SIZES.height * 0.03,
    //marginLeft:SIZES.width * 0.07,
    borderRadius: SIZES.height * 0.02,
    alignSelf: 'center',
  },
});
