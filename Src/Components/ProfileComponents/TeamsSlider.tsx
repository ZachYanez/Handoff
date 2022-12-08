import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {StoreContext} from '../../Stores/store.context';

export default function TeamsSlider() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {color} = theme;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>Teams </Text>

      <ScrollView contentContainerStyle={styles.scrollview} horizontal>
        <Text style={[styles.teamNameStyle, {color: color}]}>Teams Slider</Text>
        <Text style={[styles.teamNameStyle, {color: color}]}>Teams Slider</Text>
        <Text style={[styles.teamNameStyle, {color: color}]}>Teams Slider</Text>
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
  teamNameStyle: {
    fontSize: 18,
  },
});
