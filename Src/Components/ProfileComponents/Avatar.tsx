import FastImage from 'react-native-fast-image';
import ProfilePic from '../../../Assets/ProfilePic.jpeg';
import React from 'react';
import {StyleSheet} from 'react-native';

export default function Avatar() {
  return <FastImage style={styles.avatar} source={ProfilePic} />;
}

const styles = StyleSheet.create({
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 35,
    backgroundColor: 'pink',
  },
});
