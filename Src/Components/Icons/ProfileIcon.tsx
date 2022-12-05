import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {StyleSheet} from 'react-native';

interface ProfileIconProps {
  iconColor: string;
  navigation: any;
}

export default function ProfileIcon({iconColor, navigation}: ProfileIconProps) {
  return (
    <Ionicons
      style={styles.iconStyle}
      onPress={() => navigation.navigate('Profile')}
      name="person-circle-outline"
      size={24}
      color={iconColor}
    />
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
