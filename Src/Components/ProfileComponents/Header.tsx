import {StyleSheet, View} from 'react-native';

import BannerImage from '../../../Assets/BannerImage.jpeg';
import FastImage from 'react-native-fast-image';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <FastImage style={styles.banner} source={BannerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  banner: {
    width: '100%',
    height: 400,
  },
});
