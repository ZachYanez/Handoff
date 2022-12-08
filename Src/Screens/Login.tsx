/* eslint-disable no-alert */

import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from 'react-native';
import {Input} from '@rneui/themed';
import {StoreContext} from '../Stores/store.context';

interface LoginProps {
  navigation: any;
}

export default function Login({navigation}: LoginProps) {
  const {uiStore, userStore, authStore} = useContext(StoreContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const theme = uiStore.getTheme();

  const {backgroundColor, color} = theme;

  const LogUserIn = async () => {
    if (authStore.validateEmail(email) && password !== '') {
      if ((await authStore.userExists(email)) === true) {
        navigation.navigate('HomeTabs');
        authStore.setLoginStatus(true);
        resetInputField();
      } else {
        resetInputField();
        alert('There was a problem with your login');
      }
    } else if (authStore.validateEmail(email) === false && password === '') {
      alert('There was a problem with your login');
    }
  };

  const SignUpUser = async () => {
    try {
      if ((await authStore.userExists(email)) || email === '') {
        alert('This email is unavailable');
        resetInputField();
      } else if ((await authStore.userExists(email)) === false) {
        userStore.setUserData({email});
        authStore.savePassword('password', password);
        authStore.saveEmail('email', email);
        console.log('User Signed Up');
        resetInputField();
        navigation.navigate('HomeTabs');
      } else {
        alert('There was a problem with your login');
      }
    } catch (e) {
      console.log('sign up error', e);
    }
  };

  const resetInputField = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.topSpacer} />
      <Input
        value={email}
        autoCapitalize={'none'}
        onChangeText={value => setEmail(value)}
        inputStyle={{color: color}}
        placeholder="Email"
      />
      <Input
        value={password}
        autoCapitalize={'none'}
        onChangeText={value => setPassword(value)}
        inputStyle={{color: color}}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title={'Login'} color={color} onPress={() => LogUserIn()} />

      <Button title={'SignUp'} color={color} onPress={() => SignUpUser()} />
      <View style={styles.spacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSpacer: {
    marginBottom: '20%',
    width: '100%',
    backgroundColor: 'pink',
  },
  spacer: {
    marginBottom: '20%',
    width: '100%',
  },
});
