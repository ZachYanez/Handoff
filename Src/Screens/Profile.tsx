import {StyleSheet, Text, View} from 'react-native';

import {Button} from 'react-native';
import React from 'react';
import {StoreContext} from '../Stores/store.context';
import {useContext} from 'react';

interface ProfileProps {
  navigation: any;
}

export default function Profile({navigation}: ProfileProps) {
  const {uiStore, authStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {backgroundColor, color} = theme;

  const logOut = () => {
    authStore.logOut();
    navigation.navigate('Login');
  };

  const deleteUser = () => {
    authStore.deleteAll();
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={{color: color}}>Profile</Text>
      <Button color={color} title={'Log out'} onPress={() => logOut()} />
      <Button
        color={color}
        title={'Delete User'}
        onPress={() => deleteUser()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
