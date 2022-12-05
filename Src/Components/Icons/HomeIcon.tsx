import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

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
        style={{paddingLeft: 8, borderRadius: 12}}
        name="home-outline"
        // hitSlop={{right: 8, bottom: 8, top: 4}}
        size={24}
        color={iconColor}
      />
    );
  }
  return (
    <Ionicons
      style={{paddingLeft: 8}}
      name="md-home"
      onPress={() => navigation.navigate('Home')}
      size={24}
      color={iconColor}
    />
  );
}
