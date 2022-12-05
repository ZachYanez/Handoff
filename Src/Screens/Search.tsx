import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {StoreContext} from '../Stores/store.context';

export default function Search() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {backgroundColor, color} = theme;

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={{color: color}}>Search</Text>
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
