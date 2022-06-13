import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ActivityIndicator,
  Modal,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Switch} from 'react-native-switch';
import {PermissionsAndroid} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import DialogInput from 'react-native-dialog-input';

const User = ({navigation}) => {
  const [switchNotif, setSwitchNotif] = useState(false);
  const [switchDark, setSwitchDark] = useState(false);
  const [photo_data, setPhoto_Data] = useState('');
  const [photo_uri, setPhoto_Uri] = useState('');
  const [loading, setLoading] = useState(false);

  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [location, setLocation] = useState('');
  // const [email, setEmail] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [visable, setVisable] = useState(false);
  const [hint, setHint] = useState('');
  const [title, setTitle] = useState('');
  const [pass, setPass] = useState('');
  useEffect(() => {
    requestCameraPermission();
  });
  useEffect(() => {
    getPhoto();
  }, [photo_uri]);

  const getDataUser = async () => {
    let name = await AsyncStorage.getItem('name');
    let email = await AsyncStorage.getItem('email');
    let phone = await AsyncStorage.getItem('phone');
    let password = await AsyncStorage.getItem('password');
    let notif = await AsyncStorage.getItem('noti');
    let dark = await AsyncStorage.getItem('dark');
    let location = await AsyncStorage.getItem('location');
    if (name) {
      setEmail(email);
      setName(name);
      setPhone(phone);
      setPass(password);
      setLocation(location);
      setSwitchNotif(notif);
      setSwitchDark(dark);
    } else {
      setEmail('Email');
      setName('Name');
      setPhone('phone');
      setPass('Password');
      setLocation('Location');
    }
  };

  const setDataUser = async () => {
    await AsyncStorage.setItem('noti', JSON.stringify(switchNotif));
    await AsyncStorage.setItem('dark', JSON.stringify(switchDark));
    await AsyncStorage.setItem('location', location);
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('phone', phone);
    await AsyncStorage.setItem('password', pass);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const selectFromGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary({options, includeBase64: true}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setPhoto(res.assets[0].uri);
        setPhoto_Data(res.assets[0]);
        setPhoto_Uri(res.assets[0].uri);
      }
    });
  };
  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setPhoto(res.assets[0].uri);
        setPhoto_Uri(res.assets[0].uri);
        setPhoto_Data(res.assets[0]);
      }
    });
  };
  const setPhoto = async uri => {
    let data = await AsyncStorage.getItem('photo');
    data = uri;
    await AsyncStorage.setItem('photo', data);
  };

  const getPhoto = async () => {
    let photo = await AsyncStorage.getItem('photo');
    if (photo) {
      setPhoto_Uri(photo);
    }
  };
  const removePhoto = async () => {
    await AsyncStorage.setItem('photo', '');
    setPhoto_Uri('');
  };
  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      setDataUser();
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.backgrondHome}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={{backgroundColor: COLORS.backgrondHome, flex: 1}}>
        <ScrollView>
          <View style={{paddingHorizontal: 15, marginTop: SIZES.height * 0.05}}>
            {/* start header */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
                  width: '80%',
                }}>
                Profile
              </Text>
            </View>
            <View
              style={{alignItems: 'center', marginTop: SIZES.height * 0.03}}>
              <TouchableOpacity
                onPress={() => {
                  SheetManager.show('helloworld_sheet');
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}>
                <ImageBackground
                  source={icons.user}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="cover">
                  <Image
                    source={{uri: photo_uri}}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%'}}
                    borderRadius={50}
                  />
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: SIZES.height * 0.03,
              }}>
              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setVisable(true);
                  setTitle('name');
                  setHint('Name');
                }}>
                <Icon
                  name={icons.user_profile}
                  size={SIZES.sizeIcon}
                  color={COLORS.lightBlue1}
                />
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setVisable(true);
                  setTitle('E-mail');
                  setHint('Email');
                }}>
                <Icon
                  name={icons.email}
                  size={SIZES.sizeIcon}
                  color={COLORS.lightBlue1}
                />
                <Text style={styles.text}>{email}</Text>
              </TouchableOpacity>
              <DialogInput
                isDialogVisible={visable}
                title={title}
                hintInput={hint}
                initValueTextInput={
                  title == 'name'
                    ? name
                    : title == 'E-mail'
                    ? email
                    : title == 'location'
                    ? location
                    : title == 'phone'
                    ? phone
                    : pass
                }
                textInputProps={{
                  maxLength: title == 'phone' ? 11 : 50,
                  keyboardType: title == 'phone' ? 'phone-pad' : 'default',
                }}
                // style={{}}
                submitInput={inputText => {
                  if (title == 'name') {
                    setName(name => inputText);
                    // alert(inputText);
                  } else if (title == 'phone') {
                    setPhone(inputText);
                  } else if (title == 'E-mail') {
                    setEmail(inputText);
                  } else if (title == 'location') {
                    setLocation(inputText);
                  } else if (title == 'pass') {
                    setPass(inputText);
                  }
                  setVisable(false);
                }}
                submitText="Done"
                closeDialog={() => {
                  setVisable(false);
                }}
                cancelText="cancel"
                // textInputProps={{autoCorrect:true}}
              ></DialogInput>

              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setVisable(true);
                  setTitle('phone');
                  setHint('Phone');
                }}>
                <Icon
                  name={icons.phone}
                  size={SIZES.sizeIcon}
                  color={COLORS.lightBlue1}
                />

                <Text style={styles.text}>{phone}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setVisable(true);
                  setTitle('pass');
                  setHint('Password');
                }}>
                <Icon
                  name={'lock'}
                  size={SIZES.sizeIcon}
                  color={COLORS.lightBlue1}
                />
                <Text style={styles.text}>{pass}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.view}
                onPress={() => {
                  setVisable(true);
                  setTitle('location');
                  setHint('Location');
                }}>
                <Icon
                  name={icons.location}
                  size={SIZES.sizeIcon}
                  color={COLORS.lightBlue1}
                />
                <Text style={styles.text}>{location}</Text>
              </TouchableOpacity>
              <View
                style={[
                  styles.view,
                  {
                    justifyContent: 'space-between',
                  },
                ]}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Icon
                    name={icons.notification}
                    size={SIZES.sizeIcon}
                    color={COLORS.lightBlue1}
                  />
                  <Text style={styles.text}>Notification</Text>
                </TouchableOpacity>
                <Switch
                  value={switchNotif}
                  backgroundActive={COLORS.first_color}
                  activeText={''}
                  inActiveText={''}
                  backgroundInactive={COLORS.backgrondTap}
                  circleActiveColor={COLORS.backgrondTap}
                  circleInActiveColor={COLORS.first_color}
                  circleBorderWidth={0}
                  onValueChange={() => {
                    setSwitchNotif(!switchNotif);
                  }}
                  circleSize={22}
                />
              </View>
              <View
                style={[
                  styles.view,
                  {
                    justifyContent: 'space-between',
                  },
                ]}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Icon
                    name={icons.darkMode}
                    size={SIZES.sizeIcon}
                    color={COLORS.lightBlue1}
                  />
                  <Text style={styles.text}>Dark Mode</Text>
                </TouchableOpacity>
                <Switch
                  value={switchDark}
                  backgroundActive={COLORS.first_color}
                  activeText={''}
                  inActiveText={''}
                  backgroundInactive={COLORS.backgrondTap}
                  circleActiveColor={COLORS.backgrondTap}
                  circleInActiveColor={COLORS.first_color}
                  circleBorderWidth={0}
                  onValueChange={() => {
                    setSwitchDark(!switchDark);
                  }}
                  circleSize={22}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: SIZES.height * 0.02,
              }}>
              <TouchableOpacity
                onPress={() => {
                  loader();
                }}
                style={styles.btn}>
                <Text style={styles.textBtn}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ActionSheet
            containerStyle={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: SIZES.height * 0.2,
              padding: 20,
            }}
            id="helloworld_sheet">
            <View>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: SIZES.height * 0.04,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: COLORS.black,
                  }}>
                  Profile Photo
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    removePhoto();
                    SheetManager.hideAll();
                  }}>
                  <Icon
                    name={icons.trash}
                    color={COLORS.black}
                    size={SIZES.sizeIcon}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={styles.stylebutton2}
                  onPress={() => {
                    SheetManager.hideAll();
                    selectFromGallery();
                  }}>
                  <Text style={{color: COLORS.white, fontSize: SIZES.regular}}>
                    Galley
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.stylebutton2}
                  onPress={() => {
                    SheetManager.hideAll();
                    launchCamera();
                  }}>
                  <Text style={{color: COLORS.white, fontSize: SIZES.regular}}>
                    Camera
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ActionSheet>
          {loading ? (
            <Modal visible={loading} transparent={true}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <ActivityIndicator
                  size="large"
                  color={COLORS.first_color}
                  animating={true}
                />
              </View>
            </Modal>
          ) : null}
        </ScrollView>
      </View>
    </>
  );
};

export default User;
const styles = StyleSheet.create({
  view: {
    width: '95%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderBottomColor: '#aaa',
    paddingBottom: SIZES.height * 0.015,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.024,
    alignSelf: 'center',
  },
  btn: {
    width: '50%',
    height: SIZES.height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.first_color,
    alignSelf: 'center',
  },
  textBtn: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: SIZES.mainSize,
  },
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.backgrondTap,
  },
  text: {
    marginLeft: 15,
    fontSize: SIZES.regular * 1.1,
    color: COLORS.black,
  },
  stylebutton2: {
    height: SIZES.height * 0.06,
    width: '45%',
    backgroundColor: COLORS.first_color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
