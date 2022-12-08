import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import FavoriteAthletesSlider from './FavoriteAthletesSlider';
import SponsorsSlider from './SponsorsSlider';
import StatsBar from './StatsBar';
import {StoreContext} from '../../Stores/store.context';
import TeamsSlider from './TeamsSlider';

export default function ProfileBody() {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {color} = theme;
  return (
    <View style={styles.container}>
      <Text style={[styles.userHandle, {color: color}]}>{'@'}ZachYanez</Text>
      {/* teams are picked by user*/}

      <TeamsSlider />
      {/* top 5 dono list*/}

      <FavoriteAthletesSlider />
      {/*sponsors are the active 'subscriptions' the user holds*/}

      <SponsorsSlider />
      {/* stats would include likes comments hollers*/}
      <StatsBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userHandle: {
    fontSize: 30,
  },
  teamStyle: {
    fontSize: 24,
  },
  favoriteAthlete: {
    fontSize: 24,
  },
});
