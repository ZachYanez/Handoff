import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {StoreContext} from '../../Stores/store.context';

export default function TopAthletesSlider() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {color} = theme;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>Stats</Text>

      <ScrollView contentContainerStyle={styles.scrollview} horizontal>
        <Text style={[styles.statTitleStyle, {color: color}]}>Likes</Text>
        <Text style={[styles.statTitleStyle, {color: color}]}>Comments</Text>
        <Text style={[styles.statTitleStyle, {color: color}]}>Hollers</Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  scrollview: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 24,
  },
  statTitleStyle: {
    fontSize: 18,
  },
});
