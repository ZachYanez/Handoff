import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import {StoreContext} from '../../Stores/store.context';

export default function FavoriteAthletesSlider() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {color} = theme;
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>Favorite Athletes</Text>

      <ScrollView contentContainerStyle={styles.scrollview} horizontal>
        <Text style={[styles.athleteNameStyle, {color: color}]}>
          Athlete Name
        </Text>
        <Text style={[styles.athleteNameStyle, {color: color}]}>
          Athlete Name
        </Text>
        <Text style={[styles.athleteNameStyle, {color: color}]}>
          Athlete Name
        </Text>
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
  athleteNameStyle: {
    fontSize: 18,
  },
});
