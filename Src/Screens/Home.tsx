import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {StoreContext} from '../Stores/store.context';
import {useContext} from 'react';

export default function Home() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {backgroundColor, color} = theme;

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={{color: color}}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
