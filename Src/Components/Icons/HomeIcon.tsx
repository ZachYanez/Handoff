import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet} from 'react-native';

interface HomeIconProps {
  focused: boolean;
  iconColor: string;
  navigation: any;
}

export default function HomeIcon({
  focused,
  iconColor,
  navigation,
}: HomeIconProps) {
  if (focused === true) {
    return (
      <Ionicons
        style={styles.focusedStyles}
        name="home-outline"
        size={24}
        color={iconColor}
      />
    );
  }
  return (
    <Ionicons
      style={styles.blurredStyles}
      name="md-home"
      onPress={() => navigation.navigate('Home')}
      size={24}
      color={iconColor}
    />
  );
}

const styles = StyleSheet.create({
  focusedStyles: {
    paddingLeft: 8,
    borderRadius: 12,
  },
  blurredStyles: {
    paddingLeft: 8,
  },
});
