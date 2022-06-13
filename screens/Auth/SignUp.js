import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../Component/Context';
const SignUp = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  const [show, setShow] = useState(true);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');

  const setDataUser = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('phone', phone);
    await AsyncStorage.setItem('password', password);
  };

  const check_sign = () => {
    if (isValidname(name)) {
      if (isValidEmail(email)) {
        if (isValidpassword(password)) {
          if (isValidphone(phone)) {
            setDataUser();
            signIn();
          } else {
            alert(' phone must be  equal 11 number');
          }
        } else {
          alert(
            'Password must pass.length>8 and includes number , letter and symbols(# , % ,$...)',
          );
        }
      } else {
        alert('you have error in eamil');
      }
    } else {
      alert('please enter your name correct ');
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

  const isValidname = name => {
    const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{0,30}$/;
    //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return re.test(String(name).toLowerCase());
  };

  const isValidphone = phone => {
    var pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(phone);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={COLORS.backgrondHome}
          barStyle={'dark-content'}
          translucent={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container1}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                backgroundColor: COLORS.backgrondTap,
                alignItems: 'center',
                justifyContent: 'center',
                width: 30,
                height: 30,
                borderRadius: SIZES.width * 0.05,
                alignSelf: 'center',
                marginLeft: SIZES.width * 0.03,
              }}>
              <Icon
                name={icons.arrowLeft}
                size={SIZES.sizeIcon}
                color={COLORS.first_color}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              />
            </TouchableOpacity>

            <Text style={styles.textheader}>Rebikia app</Text>
          </View>
          <Image
            resizeMode="contain"
            source={images.SignUp}
            style={{
              width: SIZES.width * 0.6,
              height: SIZES.height * 0.25,
              alignSelf: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}
          />
          <View>
            <TextInput
              style={styles.textinput}
              label="Name"
              mode="outlined"
              placeholder="enter your name"
              placeholderTextColor={'#aaa'}
              activeOutlineColor={COLORS.second_color}
              outlineColor={COLORS.first_color}
              value={name}
              onChangeText={value => {
                setname(name => (name = value));
              }}
            />

            <TextInput
              style={styles.textinput}
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              placeholder="enter your email"
              placeholderTextColor={'#aaa'}
              activeOutlineColor={COLORS.second_color}
              outlineColor={COLORS.first_color}
              value={email}
              onChangeText={value => {
                setemail(email => (email = value));
              }}
            />
            <View>
              <TextInput
                style={styles.textinput}
                label="password"
                mode="outlined"
                placeholder="Input password here"
                placeholderTextColor={'#aaa'}
                activeOutlineColor={COLORS.second_color}
                secureTextEntry={show}
                outlineColor={COLORS.first_color}
                value={password}
                onChangeText={value => {
                  setpassword(pass => (pass = value));
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
            </View>

            <TextInput
              style={styles.textinput}
              label="Phone Number"
              mode="outlined"
              keyboardType="name-phone-pad"
              placeholder="enter your phone"
              placeholderTextColor={'#aaa'}
              activeOutlineColor={COLORS.second_color}
              outlineColor={COLORS.first_color}
              value={phone}
              onChangeText={value => {
                setphone(phone => (phone = value));
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              check_sign();
            }}>
            <Text style={{color: COLORS.white, fontSize: 17}}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.05}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={{textAlign: 'center', color: COLORS.first_color}}>
              Already have an account?
              <Text
                style={{
                  color: '#757575',
                }}>
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgrondHome,
  },
  container1: {
    width: SIZES.width,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.04,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.05,
  },
  textheader: {
    color: COLORS.first_color,
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
  },
  textinput: {
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.85,
    backgroundColor: COLORS.white,
    borderColor: COLORS.first_color,
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.height * 0.015,
  },
  iconeye: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.width * 0.7,
    marginTop: -SIZES.height * 0.095,
    height: SIZES.height * 0.1,
  },
  button: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.62,
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.02,
    borderRadius: SIZES.width * 0.02,
    alignSelf: 'center',
  },
});
