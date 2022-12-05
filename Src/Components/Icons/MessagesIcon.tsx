import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

interface MessageIconProps {
  focused: boolean;
  iconColor: string;
}

export default function MessagesIcon({focused, iconColor}: MessageIconProps) {
  if (focused === true) {
    return (
      <Ionicons name="chatbox-ellipses-outline" size={24} color={iconColor} />
    );
  }
  return <Ionicons name="chatbox-ellipses" size={24} color={iconColor} />;
}
