import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
interface SearchIconProps {
  focused: boolean;
  iconColor: string;
}

export default function SearchIcon({focused, iconColor}: SearchIconProps) {
  if (focused === true) {
    return <Ionicons name="search-outline" size={24} color={iconColor} />;
  }

  return <Ionicons name="search-sharp" size={24} color={iconColor} />;
}
