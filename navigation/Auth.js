import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Selection,
  IntroSlider,
  Login,
  SignUp,
  Verify,
  ForgetPass,
  ResetPass,
} from '../screens/index';

const StackAuth = createNativeStackNavigator();
const StackIntro = createNativeStackNavigator();

const Intro = () => {
  return (
    <StackIntro.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Selection">
      <>
        <StackAuth.Screen name="Selection" component={Selection} />
        <StackAuth.Screen name="IntroSlider" component={IntroSlider} />
      </>
    </StackIntro.Navigator>
  );
};

const Auth = () => {
  const [showInto, setShowIntro] = useState('');
  const show = async () => {
    let x = await AsyncStorage.getItem('showIntro');
    if (x) {
      setShowIntro(x);
    }
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <StackAuth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Intro">
      <StackAuth.Screen name="Intro" component={Intro} />
      <StackAuth.Screen name="Login" component={Login} />
      <StackAuth.Screen name="SignUp" component={SignUp} />
      <StackAuth.Screen name="ForgetPass" component={ForgetPass} />
      <StackAuth.Screen name="Verify" component={Verify} />
      <StackAuth.Screen name="ResetPass" component={ResetPass} />
    </StackAuth.Navigator>
  );
};
export default Auth;
