import React from 'react';
import {Image} from 'react-native';

export default function Header() {
  return (
    <Image
      source={require('../../assets/logo.png')}
      style={{width: '100%', height: 200}}
      resizeMode="contain"
    />
  );
}
