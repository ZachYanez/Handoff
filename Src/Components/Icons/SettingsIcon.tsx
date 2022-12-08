import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet} from 'react-native';

interface SettingsIconProps {
  iconColor: string;
  navigation: any;
}

export default function SettingsIcon({
  iconColor,
  navigation,
}: SettingsIconProps) {
  return (
    <Ionicons
      style={styles.padding}
      name="settings"
      onPress={() => navigation.navigate('Settings')}
      size={24}
      color={iconColor}
    />
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingRight: 8,
  },
});
