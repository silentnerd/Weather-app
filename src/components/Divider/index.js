import React, { Component } from 'react';
import { View } from 'react-native';
import { theme } from '../../constants';

export default class Divider extends Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: '#ddd',
          opacity: 0.8,
          borderBottomWidth: 0.5,
          width: '100%',
          paddingLeft: theme.sizes.base / 1,
          paddingRight: theme.sizes.base / 1,
          justifyContent: 'flex-start'
        }}
      />
    );
  }
}
