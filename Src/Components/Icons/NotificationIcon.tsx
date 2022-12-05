import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

interface NoticationIconProps {
  focused: boolean;
  iconColor: string;
}

export default function NotificationIcon({
  focused,
  iconColor,
}: NoticationIconProps) {
  if (focused === true) {
    return (
      <MaterialCommunityIcons
        name="diamond-outline"
        size={24}
        color={iconColor}
      />
    );
  }

  return <MaterialCommunityIcons name="diamond" size={24} color={iconColor} />;
}
